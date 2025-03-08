
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionTitle from '../components/ui/SectionTitle';
import { ChevronRight, Users, Clock, Award, FileCheck, Medal, Globe } from 'lucide-react';

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
          
          {/* Our Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
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
          <div className="mb-20">
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

          {/* Meet the Team Section */}
          <div className="mb-20">
            <SectionTitle subtitle="OUR EXPERTS" title="Meet the Team" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="relative mb-4 mx-auto w-48 h-48 overflow-hidden rounded-full border-4 border-bonsai-olive/20">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Sarah Johnson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-playfair font-bold text-xl text-bonsai-dark-green">Sarah Johnson</h3>
                <p className="text-bonsai-olive mb-2">Master Bonsai Artist</p>
                <p className="text-gray-600 text-sm px-4">
                  With over 20 years of experience in tropical bonsai cultivation, Sarah leads our design team.
                </p>
              </div>
              
              {/* Team Member 2 */}
              <div className="text-center">
                <div className="relative mb-4 mx-auto w-48 h-48 overflow-hidden rounded-full border-4 border-bonsai-olive/20">
                  <img 
                    src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="David Chen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-playfair font-bold text-xl text-bonsai-dark-green">David Chen</h3>
                <p className="text-bonsai-olive mb-2">Export Specialist</p>
                <p className="text-gray-600 text-sm px-4">
                  David ensures all international shipments comply with regulations and arrive in perfect condition.
                </p>
              </div>
              
              {/* Team Member 3 */}
              <div className="text-center">
                <div className="relative mb-4 mx-auto w-48 h-48 overflow-hidden rounded-full border-4 border-bonsai-olive/20">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Michael Wong" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-playfair font-bold text-xl text-bonsai-dark-green">Michael Wong</h3>
                <p className="text-bonsai-olive mb-2">Horticultural Director</p>
                <p className="text-gray-600 text-sm px-4">
                  Michael oversees our nurseries and ensures optimal growing conditions for all our plants.
                </p>
              </div>
              
              {/* Team Member 4 */}
              <div className="text-center">
                <div className="relative mb-4 mx-auto w-48 h-48 overflow-hidden rounded-full border-4 border-bonsai-olive/20">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Amanda Patel" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-playfair font-bold text-xl text-bonsai-dark-green">Amanda Patel</h3>
                <p className="text-bonsai-olive mb-2">Customer Relations</p>
                <p className="text-gray-600 text-sm px-4">
                  Amanda ensures all clients receive personalized service and expert guidance.
                </p>
              </div>
            </div>
          </div>
          
          {/* Certifications & Licenses Section */}
          <div className="mb-12">
            <SectionTitle subtitle="OUR CREDENTIALS" title="Certifications & Licenses" />
            
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="glass-card p-8">
                <div className="flex items-start mb-6">
                  <div className="bg-bonsai-olive/10 p-3 rounded-lg mr-4">
                    <FileCheck className="text-bonsai-olive h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-bold text-xl text-bonsai-dark-green mb-2">CITES Certification</h3>
                    <p className="text-gray-600 mb-4">
                      We hold valid CITES (Convention on International Trade in Endangered Species) permits for all applicable plant species, ensuring legal and sustainable trade.
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-bonsai-beige rounded-full flex items-center justify-center mr-3">
                        <Globe size={20} className="text-bonsai-dark-green" />
                      </div>
                      <div className="text-sm">
                        <p className="font-semibold text-bonsai-dark-green">Permit Number</p>
                        <p className="text-gray-600">ID-CITES-EXP-2023/054</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-8">
                <div className="flex items-start mb-6">
                  <div className="bg-bonsai-olive/10 p-3 rounded-lg mr-4">
                    <Medal className="text-bonsai-olive h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-bold text-xl text-bonsai-dark-green mb-2">Business License</h3>
                    <p className="text-gray-600 mb-4">
                      Indo Cipanas Bonsai is a legally registered company in Indonesia, officially recognized under the Indonesian business registry with NIB 212240016669.
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-bonsai-beige rounded-full flex items-center justify-center mr-3">
                        <Award size={20} className="text-bonsai-dark-green" />
                      </div>
                      <div className="text-sm">
                        <p className="font-semibold text-bonsai-dark-green">Legal Status</p>
                        <p className="text-gray-600">Fully Compliant</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-8">
                <div className="flex items-start mb-6">
                  <div className="bg-bonsai-olive/10 p-3 rounded-lg mr-4">
                    <FileCheck className="text-bonsai-olive h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-bold text-xl text-bonsai-dark-green mb-2">Phytosanitary Certification</h3>
                    <p className="text-gray-600 mb-4">
                      We obtain proper phytosanitary certificates for all plant exports, ensuring our plants are free from pests and diseases and compliant with international regulations.
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-bonsai-beige rounded-full flex items-center justify-center mr-3">
                        <Globe size={20} className="text-bonsai-dark-green" />
                      </div>
                      <div className="text-sm">
                        <p className="font-semibold text-bonsai-dark-green">Issuing Authority</p>
                        <p className="text-gray-600">Indonesian Plant Quarantine Agency</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-8">
                <div className="flex items-start mb-6">
                  <div className="bg-bonsai-olive/10 p-3 rounded-lg mr-4">
                    <Medal className="text-bonsai-olive h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-bold text-xl text-bonsai-dark-green mb-2">Export License</h3>
                    <p className="text-gray-600 mb-4">
                      We hold a valid export license from the Indonesian Ministry of Trade, allowing us to legally export bonsai and ornamental plants worldwide.
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-bonsai-beige rounded-full flex items-center justify-center mr-3">
                        <Award size={20} className="text-bonsai-dark-green" />
                      </div>
                      <div className="text-sm">
                        <p className="font-semibold text-bonsai-dark-green">License Number</p>
                        <p className="text-gray-600">ID-EXP-3456/TRADE/2023</p>
                      </div>
                    </div>
                  </div>
                </div>
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
