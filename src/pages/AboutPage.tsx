
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionTitle from '../components/ui/SectionTitle';
import { ChevronRight, Users, Clock, Award } from 'lucide-react';

const AboutPage = () => {
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
              <span className="text-bonsai-dark-green font-medium">About Us</span>
            </div>
          </div>
        </div>

        <div className="container-custom mx-auto py-12">
          <SectionTitle subtitle="COMPANY PROFILE" title="About Us" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-gray-700 mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1598605272254-16f0c0ecdfa5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Our Bonsai Nursery" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-bonsai-olive/20 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-bonsai-wheat/30 rounded-full -z-10"></div>
            </div>
          </div>

          {/* Company Values */}
          <div className="mb-16">
            <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green mb-8 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-6 text-center">
                <div className="w-16 h-16 bg-bonsai-olive/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-bonsai-olive" size={28} />
                </div>
                <h3 className="font-bold text-bonsai-dark-green text-lg mb-3">Customer First</h3>
                <p className="text-gray-600">
                  We prioritize our customers' needs and satisfaction above all else, ensuring a seamless experience.
                </p>
              </div>
              
              <div className="glass-card p-6 text-center">
                <div className="w-16 h-16 bg-bonsai-olive/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-bonsai-olive" size={28} />
                </div>
                <h3 className="font-bold text-bonsai-dark-green text-lg mb-3">Excellence in Craft</h3>
                <p className="text-gray-600">
                  We pursue excellence in every bonsai we create, applying generations of knowledge and skill.
                </p>
              </div>
              
              <div className="glass-card p-6 text-center">
                <div className="w-16 h-16 bg-bonsai-olive/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-bonsai-olive" size={28} />
                </div>
                <h3 className="font-bold text-bonsai-dark-green text-lg mb-3">Sustainable Practices</h3>
                <p className="text-gray-600">
                  We are committed to environmentally sustainable practices in all aspects of our business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
