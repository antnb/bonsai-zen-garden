
import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { useBlogPosts } from '../utils/blog';
import Services from '../components/home/Services';

// Simulates Hugo's list.html template functionality
interface ListPageProps {
  section: string;
}

const ListPage: React.FC<ListPageProps> = ({ section }) => {
  const { posts, loading, error } = useBlogPosts();
  const sectionPosts = posts.filter(post => post.section === section);
  
  // Config for different sections
  const sectionConfig: Record<string, { title: string, subtitle: string, description: string }> = {
    services: {
      title: "Our Services",
      subtitle: "SERVICE CATALOG",
      description: "From premium semi-mature bonsai to rare tropical plants, we offer expert solutions for collectors, nurseries, and landscape professionals around the world."
    },
    blog: {
      title: "Blog & Resources",
      subtitle: "KNOWLEDGE & INSIGHTS",
      description: "Expert guides, industry insights, and success stories from the world of bonsai and tropical plants."
    }
  };
  
  const config = sectionConfig[section] || {
    title: section.charAt(0).toUpperCase() + section.slice(1),
    subtitle: "EXPLORE OUR CONTENT",
    description: "Browse our collection of resources and information."
  };

  if (loading) {
    return (
      <div className="container-custom mx-auto py-12 min-h-screen">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-bonsai-dark-green"></div>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="container-custom mx-auto py-12 min-h-screen">
        <div className="bg-red-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-red-700">An error occurred</h2>
          <p className="text-red-600">Unable to load content. Please try again later.</p>
        </div>
      </div>
    );
  }

  // Render different content based on section
  const renderSectionContent = () => {
    switch (section) {
      case 'services':
        return <Services />;
      case 'blog':
        // We'll reuse the blog components but in a Hugo-like structure
        return (
          <div className="container-custom mx-auto">
            {/* Blog listing would go here */}
            {sectionPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {sectionPosts.map(post => (
                  <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md">
                    <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
                    <div className="p-6">
                      <h3 className="font-bold text-xl">{post.title}</h3>
                      <p className="mt-2">{post.excerpt}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center py-8">No posts found in this section.</p>
            )}
          </div>
        );
      default:
        return (
          <div className="container-custom mx-auto py-8">
            <p>Content for {section} section</p>
          </div>
        );
    }
  };

  return (
    <div className="container-custom mx-auto py-12">
      <SectionTitle 
        subtitle={config.subtitle}
        title={config.title}
        description={config.description}
      />
      {renderSectionContent()}
    </div>
  );
};

export default ListPage;
