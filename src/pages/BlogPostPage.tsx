
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { ChevronRight, CalendarDays, User, Clock, ArrowLeft, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import { fetchBlogPosts, type BlogPost } from '../utils/blog';
import { cn } from '../lib/utils';

// Component untuk render Markdown ke HTML
const MarkdownContent = ({ content }: { content: string }) => {
  // Sederhana: hanya mengganti # dengan h1, ## dengan h2, dll.
  // Untuk implementasi lengkap, pertimbangkan library markdown seperti marked atau markdown-to-jsx
  
  const formatMarkdown = (markdown: string) => {
    let html = markdown;
    
    // Format judul
    html = html.replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>');
    html = html.replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-7 mb-3">$1</h2>');
    html = html.replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-6 mb-3">$1</h3>');
    
    // Format list
    html = html.replace(/^\d+\. (.*$)/gm, '<li class="ml-6 list-decimal mb-2">$1</li>');
    html = html.replace(/^- (.*$)/gm, '<li class="ml-6 list-disc mb-2">$1</li>');
    
    // Format paragraph
    html = html.replace(/^(?!(#|<h|<li))(.*$)/gm, (match) => {
      if (match.trim() === '') return '<br>';
      return `<p class="mb-4">${match}</p>`;
    });
    
    // Format strong
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Format emphasis
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Wrap lists
    html = html.replace(/<li class="ml-6 list-disc mb-2">([\s\S]*?)(?=<(?!li)|$)/g, '<ul class="mb-6">$&</ul>');
    html = html.replace(/<li class="ml-6 list-decimal mb-2">([\s\S]*?)(?=<(?!li)|$)/g, '<ol class="mb-6">$&</ol>');
    
    // Format tables
    if (html.includes('|')) {
      const lines = html.split('\n');
      let tableContent = '';
      let isInTable = false;
      let tableHTML = '<div class="overflow-x-auto mb-8"><table class="min-w-full border-collapse border border-gray-300">';
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.startsWith('|') && line.endsWith('|')) {
          if (!isInTable) {
            isInTable = true;
            tableHTML += '<thead><tr>';
            
            // Header row
            const headerCells = line.split('|').filter(cell => cell.trim() !== '');
            headerCells.forEach(cell => {
              tableHTML += `<th class="border border-gray-300 px-4 py-2 bg-gray-100">${cell.trim()}</th>`;
            });
            
            tableHTML += '</tr></thead><tbody>';
            i++; // Skip separator row
          } else {
            tableHTML += '<tr>';
            const cells = line.split('|').filter(cell => cell.trim() !== '');
            cells.forEach(cell => {
              tableHTML += `<td class="border border-gray-300 px-4 py-2">${cell.trim()}</td>`;
            });
            tableHTML += '</tr>';
          }
        } else if (isInTable) {
          isInTable = false;
          tableHTML += '</tbody></table></div>';
          tableContent += tableHTML;
          tableHTML = '<div class="overflow-x-auto mb-8"><table class="min-w-full border-collapse border border-gray-300">';
        } else {
          tableContent += lines[i] + '\n';
        }
      }
      
      if (isInTable) {
        tableHTML += '</tbody></table></div>';
        tableContent += tableHTML;
      }
      
      if (tableContent) {
        html = tableContent;
      }
    }
    
    return html;
  };
  
  return (
    <div 
      className="prose prose-lg prose-green max-w-none"
      dangerouslySetInnerHTML={{ __html: formatMarkdown(content) }} 
    />
  );
};

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
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-bonsai-dark-green"></div>
          </div>
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
        
        <div className="container-custom mx-auto -mt-20 relative z-10">
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-10 mb-16">
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
            
            {/* Article content */}
            <div className="max-w-4xl mx-auto">
              {post.content && (
                <MarkdownContent content={post.content} />
              )}
              
              {/* Social sharing */}
              <div className="mt-12 pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="font-medium text-gray-700">Share this article:</span>
                  <div className="flex items-center gap-3">
                    <button aria-label="Share on Facebook" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-colors">
                      <Facebook size={18} />
                    </button>
                    <button aria-label="Share on Twitter" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-sky-500 hover:text-white transition-colors">
                      <Twitter size={18} />
                    </button>
                    <button aria-label="Share on LinkedIn" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-blue-700 hover:text-white transition-colors">
                      <Linkedin size={18} />
                    </button>
                    <button aria-label="Share via Email" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-green-600 hover:text-white transition-colors">
                      <Mail size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map(relatedPost => (
                  <div key={relatedPost.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="p-6">
                      <span className="bg-bonsai-beige text-bonsai-dark-green text-xs uppercase font-bold px-2 py-1 rounded-full mb-2 inline-block">
                        {relatedPost.category}
                      </span>
                      <h3 className="font-playfair font-bold text-xl text-bonsai-dark-green">{relatedPost.title}</h3>
                      
                      <div className="flex items-center mt-4 text-gray-500 text-sm">
                        <span className="flex items-center">
                          <User size={12} className="mr-1" />
                          {relatedPost.author}
                        </span>
                        <span className="mx-2">•</span>
                        <span className="flex items-center">
                          <Clock size={12} className="mr-1" />
                          {relatedPost.readTime}
                        </span>
                      </div>
                      
                      <Link 
                        to={`/blog/${relatedPost.slug}`} 
                        className="mt-4 inline-flex items-center text-bonsai-olive hover:text-bonsai-dark-green font-medium"
                      >
                        Read More
                        <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Komponen ArrowRight yang hilang
const ArrowRight = ({ size, className }: { size: number; className?: string }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
  );
};

export default BlogPostPage;
