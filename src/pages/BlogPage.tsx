
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionTitle from '../components/ui/SectionTitle';
import { ChevronRight, CalendarDays, User, Clock, ArrowRight } from 'lucide-react';
import { useBlogPosts, type BlogPost } from '../utils/blog';

const BlogPage = () => {
  const { posts, loading, error } = useBlogPosts();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Filter posts berdasarkan kategori
  const filteredPosts = activeCategory 
    ? posts.filter(post => post.category === activeCategory)
    : posts;
  
  const featuredPost = posts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured || activeCategory);
  
  // Ambil kategori unik dari semua post
  const categories = [...new Set(posts.map(post => post.category))];
  
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
  
  if (error) {
    return (
      <div className="pt-24">
        <Navbar />
        <div className="container-custom mx-auto py-12 min-h-screen">
          <div className="bg-red-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-red-700">Terjadi kesalahan</h2>
            <p className="text-red-600">Tidak dapat memuat artikel blog. Silakan coba lagi nanti.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="pt-24">
      <Navbar />
      <main className="min-h-screen">
        {/* Breadcrumbs */}
        <div className="bg-bonsai-beige/50 py-3">
          <div className="container-custom mx-auto">
            <div className="flex items-center text-sm text-gray-600">
              <Link to="/" className="hover:text-bonsai-dark-green transition-colors">Home</Link>
              <ChevronRight size={14} className="mx-2" />
              <span className="text-bonsai-dark-green font-medium">Blog</span>
            </div>
          </div>
        </div>

        <div className="container-custom mx-auto py-12">
          <SectionTitle 
            subtitle="KNOWLEDGE & INSIGHTS" 
            title="Blog & Resources"
            description="Expert guides, industry insights, and success stories from the world of bonsai and tropical plants."
          />
          
          {/* Featured Post */}
          {!activeCategory && featuredPost && (
            <div className="mt-12">
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                  <span className="bg-bonsai-olive text-white text-xs uppercase font-bold px-3 py-1 rounded-full mb-4 inline-block">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white">{featuredPost.title}</h2>
                  <p className="text-white/90 mt-2 max-w-2xl">{featuredPost.excerpt}</p>
                  
                  <div className="flex items-center mt-4 text-white/80">
                    <span className="flex items-center">
                      <User size={14} className="mr-1" />
                      {featuredPost.author}
                    </span>
                    <span className="mx-3">•</span>
                    <span className="flex items-center">
                      <CalendarDays size={14} className="mr-1" />
                      {featuredPost.date}
                    </span>
                    <span className="mx-3">•</span>
                    <span className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  
                  <Link to={`/blog/${featuredPost.slug}`} className="mt-6 inline-flex items-center bg-white text-bonsai-dark-green px-4 py-2 rounded-md font-medium hover:bg-bonsai-olive hover:text-white transition-colors">
                    Read Full Article
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          )}
          
          {/* Category Filters */}
          <div className="mt-12 flex flex-wrap gap-2">
            <button 
              className={`px-4 py-2 ${!activeCategory ? 'bg-bonsai-dark-green text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} rounded-md transition-colors`}
              onClick={() => setActiveCategory(null)}
            >
              All Posts
            </button>
            {categories.map((category, index) => (
              <button 
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 ${activeCategory === category ? 'bg-bonsai-dark-green text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} rounded-md transition-colors`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {regularPosts.length > 0 ? (
              regularPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <span className="bg-bonsai-beige text-bonsai-dark-green text-xs uppercase font-bold px-2 py-1 rounded-full mb-2 inline-block">
                      {post.category}
                    </span>
                    <h3 className="font-playfair font-bold text-xl text-bonsai-dark-green">{post.title}</h3>
                    <p className="text-gray-600 mt-2 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center mt-4 text-gray-500 text-sm">
                      <span className="flex items-center">
                        <User size={12} className="mr-1" />
                        {post.author}
                      </span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <Clock size={12} className="mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <Link 
                      to={`/blog/${post.slug}`} 
                      className="mt-4 inline-flex items-center text-bonsai-olive hover:text-bonsai-dark-green font-medium"
                    >
                      Read More
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-16">
                <p className="text-gray-500">No articles found. Try selecting a different category.</p>
              </div>
            )}
          </div>
          
          {/* Newsletter Signup */}
          <div className="mt-16 bg-bonsai-beige/30 rounded-lg p-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green text-center mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-700 text-center mb-6">
                Get our latest articles, care guides, and expert advice delivered directly to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bonsai-olive/50"
                />
                <button className="bg-bonsai-dark-green text-white px-6 py-3 rounded-md hover:bg-bonsai-olive transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
