
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CalendarDays, Clock } from 'lucide-react';
import { type BlogPost } from '../../utils/blog';
import { cn } from '../../lib/utils';

interface BlogPostMetaProps {
  post: BlogPost;
}

const BlogPostMeta: React.FC<BlogPostMetaProps> = ({ post }) => {
  return (
    <>
      {/* Back button */}
      <Link to="/blog" className="inline-flex items-center text-bonsai-olive hover:text-bonsai-dark-green mb-6">
        <ArrowLeft size={18} className="mr-2" />
        Back to all articles
      </Link>
      
      {/* Category badge */}
      <span className={cn(
        "px-3 py-1 text-xs font-bold uppercase rounded-full mb-4 inline-block",
        "bg-bonsai-beige text-bonsai-dark-green"
      )}>
        {post.category}
      </span>
      
      {/* Post title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-bonsai-dark-green mb-4">
        {post.title}
      </h1>
      
      {/* Author and details */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8 pt-3 pb-6 border-b border-gray-200">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-bonsai-olive/20 flex items-center justify-center text-bonsai-dark-green font-bold">
            {post.author.charAt(0)}
          </div>
          <div className="ml-3">
            <div className="font-medium">{post.author}</div>
            <div className="text-sm text-gray-500">{post.authorRole}</div>
          </div>
        </div>
        
        <div className="sm:ml-auto flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center">
            <CalendarDays size={14} className="mr-1" />
            {post.date}
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            {post.readTime}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostMeta;
