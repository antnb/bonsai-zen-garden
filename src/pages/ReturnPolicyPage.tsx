
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionTitle from '../components/ui/SectionTitle';
import { ChevronRight, Shield, Leaf, AlertCircle, Check } from 'lucide-react';

const ReturnPolicyPage = () => {
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
              <span className="text-bonsai-dark-green font-medium">Return Policy & Guarantees</span>
            </div>
          </div>
        </div>

        <div className="container-custom mx-auto py-12">
          <SectionTitle 
            subtitle="OUR COMMITMENT" 
            title="Return Policy & Plant Guarantees" 
            description="We stand behind the quality of our plants with fair and transparent policies."
          />
          
          {/* Return Policy Section */}
          <div className="mt-12 prose prose-lg max-w-none">
            <h2 className="font-playfair text-2xl text-bonsai-dark-green">Return Policy</h2>
            
            <p>
              At Indo Cipanas Bonsai, we understand that international plant shipping involves unique considerations. Our return policy is designed to be fair while recognizing the complexities of live plant exports. We encourage all customers to carefully review these policies before placing an order.
            </p>
            
            <h3 className="font-playfair text-xl text-bonsai-dark-green mt-8">Inspection Period</h3>
            <p>
              Upon receiving your shipment, you should inspect the plants within <strong>48 hours</strong> and document their condition with photographs. Any concerns about the plants' condition must be reported to us within this timeframe to be eligible for our guarantee programs.
            </p>
            
            <h3 className="font-playfair text-xl text-bonsai-dark-green mt-6">Eligibility for Returns</h3>
            <p>
              Due to the nature of live plants and international shipping regulations, we do not accept returns in the traditional sense. Instead, we offer the following solutions for plants that arrive in unsatisfactory condition:
            </p>
            
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <Check size={20} className="text-green-500 flex-shrink-0 mr-2 mt-1" />
                <span><strong>Replacement:</strong> If a plant arrives in poor condition due to shipping damage or mishandling, we will provide a replacement on your next order.</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-green-500 flex-shrink-0 mr-2 mt-1" />
                <span><strong>Credit:</strong> For plants that cannot be replaced immediately, we offer store credit for the value of the affected plants.</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-green-500 flex-shrink-0 mr-2 mt-1" />
                <span><strong>Partial Refund:</strong> In certain cases, we may issue a partial refund to compensate for plants that arrived in suboptimal condition but are still viable.</span>
              </li>
            </ul>
            
            <h3 className="font-playfair text-xl text-bonsai-dark-green mt-6">Non-Eligible Situations</h3>
            <p>
              Our guarantee does not cover:
            </p>
            
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <AlertCircle size={20} className="text-amber-500 flex-shrink-0 mr-2 mt-1" />
                <span>Plants that die due to improper care after delivery</span>
              </li>
              <li className="flex items-start">
                <AlertCircle size={20} className="text-amber-500 flex-shrink-0 mr-2 mt-1" />
                <span>Damage that occurs during customs inspections or quarantine procedures</span>
              </li>
              <li className="flex items-start">
                <AlertCircle size={20} className="text-amber-500 flex-shrink-0 mr-2 mt-1" />
                <span>Delays in shipping that are beyond our control (weather events, airline strikes, etc.)</span>
              </li>
              <li className="flex items-start">
                <AlertCircle size={20} className="text-amber-500 flex-shrink-0 mr-2 mt-1" />
                <span>Normal seasonal changes in plant appearance (deciduous trees losing leaves in fall, etc.)</span>
              </li>
            </ul>
          </div>
          
          {/* Survival Guarantee Section */}
          <div className="mt-16 bg-bonsai-beige/20 p-8 rounded-lg border border-bonsai-beige">
            <div className="flex items-center mb-6">
              <Shield size={32} className="text-bonsai-olive mr-4" />
              <h2 className="font-playfair text-2xl text-bonsai-dark-green">30-Day Survival Guarantee</h2>
            </div>
            
            <p className="text-gray-700">
              We offer a 30-day survival guarantee on most plants, subject to the following conditions:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-playfair text-lg text-bonsai-dark-green mb-4">What's Covered</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 flex-shrink-0 mr-2 mt-1" />
                    <span>Plants that fail to thrive despite following our care instructions</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 flex-shrink-0 mr-2 mt-1" />
                    <span>Plants with hidden health issues not apparent at delivery</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 flex-shrink-0 mr-2 mt-1" />
                    <span>Specimens that don't match the description or photos provided</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-playfair text-lg text-bonsai-dark-green mb-4">Requirements</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 flex-shrink-0 mr-2 mt-1" />
                    <span>Photographic documentation of the plant upon arrival</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 flex-shrink-0 mr-2 mt-1" />
                    <span>Evidence that care instructions were followed</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 flex-shrink-0 mr-2 mt-1" />
                    <span>Notification within the 30-day period</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 text-sm text-gray-600">
              <p><em>Note: Certain rare or extremely delicate specimens may have modified guarantee terms, which will be clearly stated on the product page.</em></p>
            </div>
          </div>
          
          {/* Care Commitment Section */}
          <div className="mt-16">
            <div className="flex items-center mb-6">
              <Leaf size={32} className="text-bonsai-olive mr-4" />
              <h2 className="font-playfair text-2xl text-bonsai-dark-green">Our Care Commitment</h2>
            </div>
            
            <p className="text-gray-700">
              Beyond our formal guarantees, we are committed to the long-term success of every plant we ship. Our support includes:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="glass-card p-6">
                <h3 className="font-playfair text-lg text-bonsai-dark-green mb-3">Detailed Care Instructions</h3>
                <p className="text-gray-600">
                  Every plant is shipped with comprehensive care guidelines tailored to the specific species and your climate zone.
                </p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="font-playfair text-lg text-bonsai-dark-green mb-3">Expert Consultation</h3>
                <p className="text-gray-600">
                  Our team of bonsai and tropical plant specialists is available for consultation to help address any concerns.
                </p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="font-playfair text-lg text-bonsai-dark-green mb-3">Ongoing Support</h3>
                <p className="text-gray-600">
                  Seasonal care reminders and access to our knowledge base for continued guidance as your plants mature.
                </p>
              </div>
            </div>
          </div>
          
          {/* How to Submit a Claim */}
          <div className="mt-16">
            <h2 className="font-playfair text-2xl text-bonsai-dark-green mb-6">How to Submit a Claim</h2>
            
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <ol className="space-y-6">
                <li className="flex">
                  <span className="bg-bonsai-dark-green text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4">1</span>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Document the Condition</h3>
                    <p className="text-gray-600">
                      Take clear photographs of the plant and any issues, including the packaging if relevant.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <span className="bg-bonsai-dark-green text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4">2</span>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Contact Our Team</h3>
                    <p className="text-gray-600">
                      Email <a href="mailto:claims@indocipanasbonsai.com" className="text-bonsai-olive hover:underline">claims@indocipanasbonsai.com</a> with your order number, photos, and a description of the issue.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <span className="bg-bonsai-dark-green text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4">3</span>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Await Assessment</h3>
                    <p className="text-gray-600">
                      Our specialists will review your claim within 2 business days and may request additional information.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <span className="bg-bonsai-dark-green text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4">4</span>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Resolution</h3>
                    <p className="text-gray-600">
                      We'll work with you to determine the best solution based on our policies and your specific situation.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
          
          {/* Contact CTA */}
          <div className="mt-16 bg-bonsai-beige/30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green mb-4">Questions About Our Policies?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Our customer service team is here to help with any questions about our return policy or guarantees.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn-primary">Contact Us</Link>
              <Link to="/faq" className="btn-outline">View FAQ</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReturnPolicyPage;
