
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { fetchBlogPosts, type BlogPost } from '../utils/blog';
import BlogPostHeader from '../components/blog/BlogPostHeader';
import BlogPostMeta from '../components/blog/BlogPostMeta';
import MarkdownContent from '../components/blog/MarkdownContent';
import SocialShareButtons from '../components/blog/SocialShareButtons';
import RelatedPosts from '../components/blog/RelatedPosts';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  
  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true);
        const posts = await fetchBlogPosts();
        
        const currentPost = posts.find(p => p.slug === slug);
        if (!currentPost) {
          navigate('/404');
          return;
        }
        
        setPost(currentPost);
        
        // Find related posts with the same category
        const related = posts
          .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
          .slice(0, 3);
        setRelatedPosts(related);
        
        setLoading(false);
      } catch (error) {
        console.error('Error loading blog post:', error);
        setLoading(false);
      }
    };
    
    loadPost();
  }, [slug, navigate]);
  
  if (loading) {
    return (
      <div className="pt-24">
        <Navbar />
        <div className="container-custom mx-auto py-12 min-h-screen">
          <LoadingSpinner />
        </div>
        <Footer />
      </div>
    );
  }
  
  if (!post) return null;

  return (
    <div className="pt-24">
      <Navbar />
      <main>
        <BlogPostHeader post={post} />
        
        <div className="container-custom mx-auto -mt-20 relative z-10">
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-10 mb-16">
            <BlogPostMeta post={post} />
            
            {/* Article content */}
            <div className="max-w-4xl mx-auto">
              {post.content && (
                <MarkdownContent content={post.content} />
              )}
              
              <SocialShareButtons />
            </div>
          </div>
          
          <RelatedPosts posts={relatedPosts} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
