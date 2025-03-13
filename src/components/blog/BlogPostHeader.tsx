
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, CalendarDays, User, Clock } from 'lucide-react';
import { type BlogPost } from '../../utils/blog';
import { cn } from '../../lib/utils';

interface BlogPostHeaderProps {
  post: BlogPost;
}

const BlogPostHeader: React.FC<BlogPostHeaderProps> = ({ post }) => {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bonsai-beige/50 py-3">
        <div className="container-custom mx-auto">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-bonsai-dark-green transition-colors">Home</Link>
            <ChevronRight size={14} className="mx-2" />
            <Link to="/blog" className="hover:text-bonsai-dark-green transition-colors">Blog</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-bonsai-dark-green font-medium line-clamp-1">{post.title}</span>
          </div>
        </div>
      </div>
      
      {/* Article Header */}
      <div className="w-full h-[400px] relative">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
    </>
  );
};

export default BlogPostHeader;
