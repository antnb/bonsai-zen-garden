
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionTitle from '../components/ui/SectionTitle';
import { ChevronRight, FileText, Truck, Globe, ClipboardCheck } from 'lucide-react';

const ExportProcessPage = () => {
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
              <span className="text-bonsai-dark-green font-medium">Export Process</span>
            </div>
          </div>
        </div>

        <div className="container-custom mx-auto py-12">
          <SectionTitle subtitle="SHIPPING WORLDWIDE" title="Our Export Process" />
          
          {/* Step-by-Step Export Guide */}
          <div className="mb-20">
            <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green mb-8">Step-by-Step Export Guide</h2>
            
            <div className="relative">
              <div className="absolute left-6 top-0 h-full w-0.5 bg-bonsai-wheat/50"></div>
              
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-bonsai-olive flex items-center justify-center z-10">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="glass-card p-6 flex-1">
                    <h3 className="text-xl font-playfair font-bold text-bonsai-dark-green mb-3">Plant Selection & Order Placement</h3>
                    <p className="text-gray-700 mb-4">
                      Begin by browsing our extensive catalog of bonsai and tropical plants. Once you've made your selection, place an order through our website or contact our sales team directly. We'll confirm availability and provide a detailed quotation including shipping costs.
                    </p>
                    <div className="bg-bonsai-beige/50 p-4 rounded-md">
                      <p className="text-sm text-gray-700 italic">
                        "The ordering process was seamless. The sales team was responsive and helped me select plants that would thrive in my climate." — David Chen, Singapore
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="relative flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-bonsai-olive flex items-center justify-center z-10">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="glass-card p-6 flex-1">
                    <h3 className="text-xl font-playfair font-bold text-bonsai-dark-green mb-3">Documentation & Permits</h3>
                    <p className="text-gray-700 mb-4">
                      After confirming your order, our team begins preparing the necessary export documentation. This includes phytosanitary certificates, CITES permits (for protected species), and commercial invoices. We'll guide you through any documentation required from your side.
                    </p>
                    <div className="bg-bonsai-beige/50 p-4 rounded-md">
                      <p className="text-sm text-gray-700 italic">
                        "Their expertise in handling CITES documentation made importing protected species incredibly straightforward." — Emma Tanaka, Japan
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-bonsai-olive flex items-center justify-center z-10">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="glass-card p-6 flex-1">
                    <h3 className="text-xl font-playfair font-bold text-bonsai-dark-green mb-3">Plant Preparation & Packaging</h3>
                    <p className="text-gray-700 mb-4">
                      We carefully prepare each plant for international shipping. This includes appropriate pruning, secure potting or bare-rooting (depending on destination requirements), and treatments to ensure plants are pest-free. Our specialized packaging techniques ensure plants remain stable and properly hydrated during transit.
                    </p>
                    <div className="bg-bonsai-beige/50 p-4 rounded-md">
                      <p className="text-sm text-gray-700 italic">
                        "The packaging was exceptional. All 50 plants arrived in perfect condition despite the long journey to Australia." — Sarah Johnson, Australia
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="relative flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-bonsai-olive flex items-center justify-center z-10">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="glass-card p-6 flex-1">
                    <h3 className="text-xl font-playfair font-bold text-bonsai-dark-green mb-3">Inspection & Clearance</h3>
                    <p className="text-gray-700 mb-4">
                      Before shipping, plants undergo inspection by Indonesia's Quarantine Authority to ensure they meet all export requirements. Once approved, a phytosanitary certificate is issued, confirming the plants are healthy and pest-free. We handle all local clearance procedures.
                    </p>
                    <div className="bg-bonsai-beige/50 p-4 rounded-md">
                      <p className="text-sm text-gray-700 italic">
                        "Their thoroughness with inspection and documentation meant there were no delays at customs on our end." — Michael Wong, Thailand
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="relative flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-bonsai-olive flex items-center justify-center z-10">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div className="glass-card p-6 flex-1">
                    <h3 className="text-xl font-playfair font-bold text-bonsai-dark-green mb-3">Shipping & Tracking</h3>
                    <p className="text-gray-700 mb-4">
                      We ship your plants via the most appropriate method based on destination, plant type, and urgency. Whether by air freight or sea cargo, you'll receive tracking information to monitor your shipment's progress. Our team coordinates with carriers to ensure timely delivery and proper handling.
                    </p>
                    <div className="bg-bonsai-beige/50 p-4 rounded-md">
                      <p className="text-sm text-gray-700 italic">
                        "Indo Cipanas provided detailed tracking throughout the shipping process and even helped coordinate with my local customs broker." — James Wilson, United Kingdom
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Step 6 */}
                <div className="relative flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-bonsai-olive flex items-center justify-center z-10">
                    <span className="text-white font-bold">6</span>
                  </div>
                  <div className="glass-card p-6 flex-1">
                    <h3 className="text-xl font-playfair font-bold text-bonsai-dark-green mb-3">Arrival & Import Clearance</h3>
                    <p className="text-gray-700 mb-4">
                      Upon arrival in your country, the plants will undergo import inspection. We provide guidance on import requirements and can recommend customs brokers in major destinations. All our documentation is prepared to facilitate smooth import clearance.
                    </p>
                    <div className="bg-bonsai-beige/50 p-4 rounded-md">
                      <p className="text-sm text-gray-700 italic">
                        "The import clearance was seamless thanks to Indo Cipanas' thorough preparation of all required documentation." — Carlos Rodriguez, Spain
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Step 7 */}
                <div className="relative flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-bonsai-olive flex items-center justify-center z-10">
                    <span className="text-white font-bold">7</span>
                  </div>
                  <div className="glass-card p-6 flex-1">
                    <h3 className="text-xl font-playfair font-bold text-bonsai-dark-green mb-3">After-Sales Support</h3>
                    <p className="text-gray-700 mb-4">
                      After delivery, our team provides plant care instructions specific to your climate and the species purchased. We offer ongoing support to ensure your plants thrive in their new environment. All plants come with our survival guarantee.
                    </p>
                    <div className="bg-bonsai-beige/50 p-4 rounded-md">
                      <p className="text-sm text-gray-700 italic">
                        "Even months after purchase, their team was quick to answer questions about seasonal care for my bonsai." — Lisa Chen, Canada
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Documentation Requirements */}
          <div className="mb-20">
            <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green mb-8">Documentation Requirements</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-6">
                <div className="flex items-start mb-4">
                  <FileText className="text-bonsai-olive mr-4 flex-shrink-0" size={32} />
                  <h3 className="text-xl font-playfair font-bold text-bonsai-dark-green">Phytosanitary Certificate</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Issued by Indonesia's Agricultural Quarantine Agency, this certificate confirms plants are free from pests and diseases. Required for entry into most countries.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-bonsai-olive mr-2">•</span>
                    <span>Valid for 14 days from issuance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bonsai-olive mr-2">•</span>
                    <span>Documents plant species, quantity, and health status</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bonsai-olive mr-2">•</span>
                    <span>We arrange inspection and certification</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass-card p-6">
                <div className="flex items-start mb-4">
                  <ClipboardCheck className="text-bonsai-olive mr-4 flex-shrink-0" size={32} />
                  <h3 className="text-xl font-playfair font-bold text-bonsai-dark-green">CITES Permit</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Required for protected species listed in the Convention on International Trade in Endangered Species. We have extensive experience obtaining CITES permits for legally cultivated specimens.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-bonsai-olive mr-2">•</span>
                    <span>Valid for 6 months from issuance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bonsai-olive mr-2">•</span>
                    <span>Proves legal acquisition and sustainable cultivation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bonsai-olive mr-2">•</span>
                    <span>We handle all application procedures</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass-card p-6">
                <div className="flex items-start mb-4">
                  <Globe className="text-bonsai-olive mr-4 flex-shrink-0" size={32} />
                  <h3 className="text-xl font-playfair font-bold text-bonsai-dark-green">Commercial Documentation</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Standard export documents required for international shipments. We prepare all necessary paperwork to ensure customs compliance.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-bonsai-olive mr-2">•</span>
                    <span>Commercial Invoice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bonsai-olive mr-2">•</span>
                    <span>Packing List</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bonsai-olive mr-2">•</span>
                    <span>Bill of Lading/Airway Bill</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bonsai-olive mr-2">•</span>
                    <span>Certificate of Origin (when required)</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass-card p-6">
                <div className="flex items-start mb-4">
                  <Truck className="text-bonsai-olive mr-4 flex-shrink-0" size={32} />
                  <h3 className="text-xl font-playfair font-bold text-bonsai-dark-green">Import Requirements</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Each destination country has specific import requirements. We provide guidance on necessary permits and procedures for your location.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-bonsai-olive mr-2">•</span>
                    <span>Import permits (when required)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bonsai-olive mr-2">•</span>
                    <span>Quarantine requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bonsai-olive mr-2">•</span>
                    <span>Additional declarations for specific countries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bonsai-olive mr-2">•</span>
                    <span>Advice on customs brokers in your region</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Shipping Methods */}
          <div className="mb-12">
            <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green mb-8">Shipping Methods</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-6">
                <h3 className="text-xl font-playfair font-bold text-bonsai-dark-green mb-4">Air Freight</h3>
                <p className="text-gray-700 mb-4">
                  Our preferred method for most plants, especially valuable bonsai and sensitive species. Ensures minimal transit time, reducing stress on plants.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Transit Time:</span>
                    <span className="font-medium text-bonsai-dark-green">2-5 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Cost:</span>
                    <span className="font-medium text-bonsai-dark-green">Higher</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Recommended for:</span>
                    <span className="font-medium text-bonsai-dark-green">Premium bonsai, sensitive species</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Tracking:</span>
                    <span className="font-medium text-bonsai-dark-green">Real-time</span>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-playfair font-bold text-bonsai-dark-green mb-4">Sea Freight</h3>
                <p className="text-gray-700 mb-4">
                  Suitable for larger orders, hardy species, and clients with flexible timelines. More economical for bulk shipments.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Transit Time:</span>
                    <span className="font-medium text-bonsai-dark-green">15-45 days (destination dependent)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Cost:</span>
                    <span className="font-medium text-bonsai-dark-green">Lower</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Recommended for:</span>
                    <span className="font-medium text-bonsai-dark-green">Bulk orders, hardy species</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Tracking:</span>
                    <span className="font-medium text-bonsai-dark-green">Regular updates</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-bonsai-beige/30 p-6 rounded-lg">
              <h3 className="text-lg font-playfair font-bold text-bonsai-dark-green mb-3">Shipping Considerations</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-bonsai-olive mr-2 font-bold">•</span>
                  <span><strong>Seasonal Timing:</strong> We recommend optimal shipping times based on season and destination climate to ensure plant safety.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bonsai-olive mr-2 font-bold">•</span>
                  <span><strong>Insurance:</strong> All shipments include basic insurance. Additional coverage available for high-value specimens.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bonsai-olive mr-2 font-bold">•</span>
                  <span><strong>Custom Packaging:</strong> We develop specialized packaging for each order based on plant type, size, and shipping method.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bonsai-olive mr-2 font-bold">•</span>
                  <span><strong>Destination Requirements:</strong> Some countries require specific treatments or packaging. We ensure compliance with all requirements.</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* CTA */}
          <div className="bg-gradient-to-r from-bonsai-dark-green to-bonsai-olive text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-playfair font-bold mb-4">Ready to Import Plants from Indonesia?</h2>
            <p className="max-w-2xl mx-auto mb-6">
              Our expert team will guide you through every step of the export process, ensuring a smooth experience from selection to delivery.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn-secondary">Contact Us</Link>
              <Link to="/service-catalog" className="btn-white">Browse Catalog</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExportProcessPage;
