
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionTitle from '../components/ui/SectionTitle';
import { ChevronRight, CalendarDays, User, Clock, ArrowRight } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Bonsai Care Guide for European Climates",
      excerpt: "Maintaining tropical bonsai in continental European climates presents unique challenges. This comprehensive guide covers seasonal adjustments, indoor housing solutions for winter months, and species-specific tips.",
      category: "Care Guides",
      author: "Wijaya Kusuma",
      authorRole: "Master Bonsai Cultivator",
      date: "May 15, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      featured: true
    },
    {
      id: 2,
      title: "Understanding CITES Regulations for Rare Plant Export",
      excerpt: "Navigating international regulations for plant trade can be complex. This article explains CITES appendices, documentation requirements, and how we ensure full compliance for every shipment.",
      category: "Legal & Compliance",
      author: "Dian Pratiwi",
      authorRole: "Export Compliance Officer",
      date: "April 23, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 3,
      title: "5 Global Bonsai Trends in 2025",
      excerpt: "The art of bonsai continues to evolve globally. We explore emerging trends including forest-style arrangements, incorporation of native European species into traditional Japanese techniques, and technological innovations in bonsai care.",
      category: "Industry Trends",
      author: "Agus Santoso",
      authorRole: "International Sales Director",
      date: "March 10, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1633788481528-acd09db03d23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 4,
      title: "From Indonesia to Italy: A Bonsai's Journey",
      excerpt: "Follow the fascinating journey of a 75-year-old ficus bonsai from our nursery in West Java to its new home in a Milanese botanical garden, including preparation, documentation, and acclimatization.",
      category: "Success Stories",
      author: "Budi Setiawan",
      authorRole: "Shipping Specialist",
      date: "February 28, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1599598177991-ec67b5c37318?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 5,
      title: "Tropical Plants: Beyond Aesthetic Value",
      excerpt: "Explore the multiple benefits of incorporating tropical plants in commercial and residential spaces, including air purification, stress reduction, and acoustic improvements.",
      category: "Plant Benefits",
      author: "Sinta Dewi",
      authorRole: "Tropical Plant Specialist",
      date: "January 15, 2025",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 6,
      title: "The Science of Acclimatization: Helping Your New Bonsai Thrive",
      excerpt: "Understanding the physiological processes involved in plant adaptation is key to successful transitions. This article explains the science behind acclimatization and provides a detailed protocol for new imports.",
      category: "Care Guides",
      author: "Dr. Rina Apriani",
      authorRole: "Plant Physiologist",
      date: "December 12, 2024",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);
  const categories = [...new Set(blogPosts.map(post => post.category))];

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
          {featuredPost && (
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
                  
                  <Link to={`/blog/post/${featuredPost.id}`} className="mt-6 inline-flex items-center bg-white text-bonsai-dark-green px-4 py-2 rounded-md font-medium hover:bg-bonsai-olive hover:text-white transition-colors">
                    Read Full Article
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          )}
          
          {/* Category Filters */}
          <div className="mt-12 flex flex-wrap gap-2">
            <button className="px-4 py-2 bg-bonsai-dark-green text-white rounded-md">
              All Posts
            </button>
            {categories.map((category, index) => (
              <button 
                key={index} 
                className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-md transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {regularPosts.map((post) => (
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
                    to={`/blog/post/${post.id}`} 
                    className="mt-4 inline-flex items-center text-bonsai-olive hover:text-bonsai-dark-green font-medium"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-4 py-2 bg-bonsai-dark-green text-white rounded-md">1</button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">2</button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">3</button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
                Next
              </button>
            </div>
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
