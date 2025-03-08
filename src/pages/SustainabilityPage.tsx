
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionTitle from '../components/ui/SectionTitle';
import { ChevronRight, Leaf, Users, Recycle, CheckCircle, Shield } from 'lucide-react';

const SustainabilityPage = () => {
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
              <span className="text-bonsai-dark-green font-medium">Sustainability & Ethics</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative py-16 bg-bonsai-beige/30">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-bonsai-wheat/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-bonsai-olive/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          </div>
          
          <div className="container-custom mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-bonsai-dark-green mb-6">
                Our Commitment to Sustainability
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                At Indo Cipanas Bonsai, we believe that responsible cultivation and ethical business practices are essential to preserving our natural heritage while supporting local communities.
              </p>
              <div className="flex justify-center">
                <div className="w-20 h-1 bg-bonsai-olive"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-custom mx-auto py-16">
          {/* Ethical Sourcing */}
          <div className="mb-20">
            <div className="flex items-center mb-6">
              <Leaf className="w-10 h-10 p-2 rounded-full bg-bonsai-olive/20 text-bonsai-olive mr-4" />
              <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green">Ethical Sourcing</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-700 mb-4">
                  We are committed to sustainable sourcing practices that protect Indonesia's rich botanical diversity. All our plants are either nursery-grown or legally harvested with proper permits and documentation.
                </p>
                
                <p className="text-gray-700 mb-6">
                  Our nurseries implement regenerative growing methods that minimize environmental impact while producing healthy, vibrant plants. For each mature tree harvested, we plant multiple seedlings to ensure the continued health of forest ecosystems.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-bonsai-olive mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-bonsai-dark-green">Nursery-Grown Focus</h4>
                      <p className="text-sm text-gray-600">95% of our plants are cultivated in controlled nursery environments.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-bonsai-olive mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-bonsai-dark-green">Legal Compliance</h4>
                      <p className="text-sm text-gray-600">We strictly adhere to CITES regulations and Indonesian forestry laws.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-bonsai-olive mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-bonsai-dark-green">Documented Provenance</h4>
                      <p className="text-sm text-gray-600">Every plant's origin is tracked and documented to ensure ethical sourcing.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-bonsai-olive mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-bonsai-dark-green">Reforestation Program</h4>
                      <p className="text-sm text-gray-600">5% of our profits support local reforestation initiatives in West Java.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1582071002107-f47a0e4ff363?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Sustainable plant nursery" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-2/3 h-1/3 bg-bonsai-olive/20 rounded-lg -z-10 transform rotate-3"></div>
              </div>
            </div>
          </div>
          
          {/* Community Impact */}
          <div className="mb-20">
            <div className="flex items-center mb-6">
              <Users className="w-10 h-10 p-2 rounded-full bg-bonsai-olive/20 text-bonsai-olive mr-4" />
              <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green">Community Impact</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative">
                <img 
                  src="https://images.unsplash.com/photo-1593791211660-9123e50ce89a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Local farmers in Indonesia" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
                <div className="absolute -top-6 -left-6 w-2/3 h-1/3 bg-bonsai-wheat/30 rounded-lg -z-10 transform -rotate-3"></div>
              </div>
              
              <div className="order-1 md:order-2">
                <p className="text-gray-700 mb-4">
                  We believe in building lasting partnerships with local communities. Our business model directly supports Indonesian farmers and artisans, providing fair wages and sustainable livelihoods while preserving traditional horticultural knowledge.
                </p>
                
                <p className="text-gray-700 mb-6">
                  Rather than operating as middlemen, we integrate local growers into our supply chain, providing training, resources, and market access. This approach ensures higher income for farmers while maintaining exceptional quality standards.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="glass-card p-4 text-center">
                    <div className="text-2xl font-bold text-bonsai-olive">50+</div>
                    <div className="text-sm text-gray-600">Local families supported</div>
                  </div>
                  
                  <div className="glass-card p-4 text-center">
                    <div className="text-2xl font-bold text-bonsai-olive">35%</div>
                    <div className="text-sm text-gray-600">Higher than average wages</div>
                  </div>
                  
                  <div className="glass-card p-4 text-center">
                    <div className="text-2xl font-bold text-bonsai-olive">12</div>
                    <div className="text-sm text-gray-600">Villages in partnership</div>
                  </div>
                  
                  <div className="glass-card p-4 text-center">
                    <div className="text-2xl font-bold text-bonsai-olive">200+</div>
                    <div className="text-sm text-gray-600">Hours of training annually</div>
                  </div>
                </div>
                
                <div className="bg-bonsai-beige/30 p-4 rounded-lg">
                  <h4 className="font-bold text-bonsai-dark-green mb-2">Farmer Partnership Program</h4>
                  <p className="text-sm text-gray-700">
                    Our Farmer Partnership Program provides technical training, quality seedlings, and guaranteed purchase agreements to local growers. This program has increased average household incomes by 35% in participating communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Environmental Practices */}
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <Recycle className="w-10 h-10 p-2 rounded-full bg-bonsai-olive/20 text-bonsai-olive mr-4" />
              <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green">Environmental Practices</h2>
            </div>
            
            <p className="text-gray-700 mb-8 max-w-3xl">
              Our commitment to the environment extends throughout our operations. We continuously work to reduce our ecological footprint while promoting biodiversity and resource conservation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6">
                <h3 className="text-xl font-playfair font-bold text-bonsai-dark-green mb-4">Sustainable Cultivation</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-bonsai-olive mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Organic growing methods with minimal chemical inputs</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-bonsai-olive mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Integrated pest management to reduce pesticide use</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-bonsai-olive mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Water-efficient irrigation systems to minimize waste</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-bonsai-olive mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Native species preservation and propagation</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-playfair font-bold text-bonsai-dark-green mb-4">Resource Conservation</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-bonsai-olive mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Rainwater harvesting systems across our facilities</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-bonsai-olive mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Solar power for 60% of our energy needs</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-bonsai-olive mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Composting program for organic waste recycling</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-bonsai-olive mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Biodegradable packaging materials</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-playfair font-bold text-bonsai-dark-green mb-4">Education & Advocacy</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-bonsai-olive mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Public workshops on sustainable horticulture</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-bonsai-olive mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">School programs promoting plant conservation</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-bonsai-olive mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Collaboration with conservation organizations</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-bonsai-olive mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Support for policy development in plant protection</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Certifications */}
          <div className="bg-bonsai-beige/30 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green mb-6 text-center">Our Certifications & Memberships</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-4 rounded-lg flex flex-col items-center text-center">
                <img src="https://cdn-icons-png.flaticon.com/512/1188/1188575.png" alt="Certification" className="w-16 h-16 mb-4" />
                <h3 className="font-bold text-bonsai-dark-green">Sustainable Agriculture Certified</h3>
              </div>
              
              <div className="bg-white p-4 rounded-lg flex flex-col items-center text-center">
                <img src="https://cdn-icons-png.flaticon.com/512/1868/1868998.png" alt="Certification" className="w-16 h-16 mb-4" />
                <h3 className="font-bold text-bonsai-dark-green">Indonesian Bonsai Association</h3>
              </div>
              
              <div className="bg-white p-4 rounded-lg flex flex-col items-center text-center">
                <img src="https://cdn-icons-png.flaticon.com/512/5609/5609509.png" alt="Certification" className="w-16 h-16 mb-4" />
                <h3 className="font-bold text-bonsai-dark-green">Fair Trade Certified</h3>
              </div>
              
              <div className="bg-white p-4 rounded-lg flex flex-col items-center text-center">
                <img src="https://cdn-icons-png.flaticon.com/512/4924/4924484.png" alt="Certification" className="w-16 h-16 mb-4" />
                <h3 className="font-bold text-bonsai-dark-green">Botanical Gardens Conservation International</h3>
              </div>
            </div>
          </div>
          
          {/* Quote */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="text-6xl font-serif text-bonsai-olive/20 mb-4">"</div>
            <blockquote className="text-xl md:text-2xl font-playfair italic text-gray-700 mb-6">
              Our mission extends beyond growing beautiful plants. We strive to cultivate a sustainable future where traditional horticultural practices thrive alongside modern conservation principles.
            </blockquote>
            <div className="font-bold text-bonsai-dark-green">Budi Santoso</div>
            <div className="text-sm text-gray-600">Founder & Master Grower, Indo Cipanas Bonsai</div>
          </div>
          
          {/* CTA */}
          <div className="bg-gradient-to-r from-bonsai-dark-green to-bonsai-olive text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-playfair font-bold mb-4">Partner with a Sustainable Business</h2>
            <p className="max-w-2xl mx-auto mb-6">
              Choose Indo Cipanas Bonsai for ethically sourced, environmentally conscious plants and contribute to a more sustainable horticultural industry.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn-secondary">Contact Us</Link>
              <Link to="/our-process" className="btn-white">Learn Our Process</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SustainabilityPage;
