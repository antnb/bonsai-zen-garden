
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchBlogPosts, type BlogPost } from '../utils/blog';
import SectionTitle from '../components/ui/SectionTitle';
import { CalendarDays, User, Clock } from 'lucide-react';
import { formatMarkdown } from '../utils/markdownUtils';
import MarkdownContent from '../components/blog/MarkdownContent';

// This mimics Hugo's single.html template functionality
interface SinglePageProps {
  slug?: string;
  section?: string;
}

const SinglePage: React.FC<SinglePageProps> = ({ slug: propSlug, section: propSection }) => {
  const params = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Use either the prop slug or the URL parameter
  const slug = propSlug || params.slug;
  
  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true);
        const posts = await fetchBlogPosts();
        
        let currentPost;
        
        if (slug) {
          currentPost = posts.find(p => p.slug === slug);
        } else if (propSection) {
          // If no slug but section is provided, find first post in that section
          currentPost = posts.find(p => p.section === propSection);
        }
        
        if (!currentPost) {
          navigate('/404');
          return;
        }
        
        setPost(currentPost);
        setLoading(false);
      } catch (error) {
        console.error('Error loading content:', error);
        setLoading(false);
      }
    };
    
    loadPost();
  }, [slug, propSection, navigate]);
  
  // For specific sections, render custom components instead of markdown content
  const renderSectionSpecificContent = () => {
    if (!post) return null;
    
    const section = post.section || propSection;
    
    switch (section) {
      // Add cases for specific sections with special rendering needs
      default:
        return (
          <div className="max-w-4xl mx-auto mt-8">
            {post.content && (
              <MarkdownContent content={post.content} />
            )}
          </div>
        );
    }
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
  
  if (!post) return null;

  return (
    <div className="container-custom mx-auto py-8">
      {/* Header */}
      <div className="mb-12">
        <SectionTitle
          subtitle={post.category}
          title={post.title}
          description={post.excerpt}
        />
        
        {/* Meta information */}
        {post.section === 'blog' && (
          <div className="flex justify-center items-center gap-6 text-gray-600 mt-4">
            <div className="flex items-center">
              <User size={16} className="mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <CalendarDays size={16} className="mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>
        )}
      </div>
      
      {/* Featured Image */}
      {post.image && (
        <div className="w-full h-[400px] relative mb-12">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      )}
      
      {/* Content */}
      <div className="bg-white rounded-xl shadow-md p-8">
        {renderSectionSpecificContent()}
      </div>
    </div>
  );
};

export default SinglePage;
