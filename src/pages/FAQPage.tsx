import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionTitle from '../components/ui/SectionTitle';
import { ChevronRight, ChevronDown, ChevronUp, Search, Package, Leaf, Globe } from 'lucide-react';

type FAQCategory = 'all' | 'general' | 'shipping' | 'plant-care';

type FAQ = {
  id: number;
  question: string;
  answer: string;
  category: Exclude<FAQCategory, 'all'>;
};

const FAQPage = () => {
  const [activeTab, setActiveTab] = useState<FAQCategory>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const faqs: FAQ[] = [
    // General Questions
    {
      id: 1,
      question: "What is CITES certification?",
      answer: "CITES (Convention on International Trade in Endangered Species of Wild Fauna and Flora) is an international agreement that regulates the trade of endangered plants and animals. Certain bonsai species, especially those made from protected tree species, require CITES certification to prove they were legally sourced and cultivated. We handle all CITES documentation for applicable species, ensuring legal compliance for international shipping.",
      category: "general"
    },
    {
      id: 2,
      question: "Are your plants legally sourced?",
      answer: "Yes, all our plants are either nursery-grown or legally harvested with proper permits. We maintain detailed records of plant origins and obtain all necessary documentation for both domestic and international trade. Our commitment to legal and ethical sourcing is a cornerstone of our business.",
      category: "general"
    },
    {
      id: 3,
      question: "Do you offer design consultation services?",
      answer: "Yes, we provide expert design consultation for clients planning landscape projects, bonsai collections, or tropical plant displays. Our team can advise on species selection, arrangement, and long-term maintenance plans tailored to your specific climate and conditions.",
      category: "general"
    },
    {
      id: 4,
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including bank transfers, PayPal, credit cards (Visa, Mastercard, American Express), and cryptocurrency (Bitcoin, Ethereum). For large orders, we can arrange flexible payment schedules.",
      category: "general"
    },
    {
      id: 5,
      question: "Can I visit your nurseries in Indonesia?",
      answer: "Absolutely! We welcome visitors to our main nursery in Cipanas, West Java. Tours must be scheduled in advance by contacting our team. During your visit, you can see our cultivation facilities, select plants in person, and meet our expert growers.",
      category: "general"
    },
    
    // Order & Shipping Questions
    {
      id: 6,
      question: "How long does shipping take to Europe?",
      answer: "Shipping times to Europe typically range from 5-10 business days for air freight and 30-45 days for sea freight. This includes processing time for phytosanitary certificates and export documentation. Customs clearance in the destination country may add additional time, which varies by location.",
      category: "shipping"
    },
    {
      id: 7,
      question: "What documentation is needed for importing plants?",
      answer: "Required documentation typically includes a phytosanitary certificate, commercial invoice, packing list, and for protected species, CITES permits. Some countries may require additional import permits or have specific quarantine requirements. We guide our customers through all documentation requirements specific to their location.",
      category: "shipping"
    },
    {
      id: 8,
      question: "How do you package plants for international shipping?",
      answer: "We use specialized packaging techniques developed over years of international shipping experience. Depending on the plant type and shipping method, we may use bare-rooting, secure potting, moisture-retaining materials, and custom-built crates. Each plant is individually wrapped and secured to prevent movement during transit.",
      category: "shipping"
    },
    {
      id: 9,
      question: "Will I have to pay import duties or taxes?",
      answer: "Import duties, taxes, and fees vary by country and are the responsibility of the buyer. These charges are not included in our prices and will be collected by customs in your country. We provide accurate documentation to help minimize any issues during import clearance.",
      category: "shipping"
    },
    {
      id: 10,
      question: "What if my plants are damaged during shipping?",
      answer: "All our shipments include basic insurance. If plants arrive damaged, please document the condition with photos upon receipt and contact us within 48 hours. Depending on the situation, we'll arrange replacement plants or provide compensation according to our guarantee policy.",
      category: "shipping"
    },
    
    // Plant Care Questions
    {
      id: 11,
      question: "How do I care for a bonsai after receiving it?",
      answer: "Upon arrival, place your bonsai in a sheltered location with filtered light for 1-2 weeks to acclimate. Gradually introduce it to its permanent location. We provide detailed care instructions specific to your bonsai species and your local climate with every purchase. These include watering frequency, light requirements, fertilization schedule, and seasonal care needs.",
      category: "plant-care"
    },
    {
      id: 12,
      question: "Can tropical plants survive in colder climates?",
      answer: "Tropical plants can thrive in colder climates when kept indoors or in greenhouses during cold seasons. Many of our clients successfully maintain tropical collections in Europe and North America by providing appropriate winter protection. We can recommend species with greater cold tolerance and provide specific advice for your climate zone.",
      category: "plant-care"
    },
    {
      id: 13,
      question: "How often should I water my bonsai?",
      answer: "Watering frequency depends on multiple factors: the species, pot size, soil composition, climate, and season. As a general rule, most bonsai should be watered when the soil surface begins to dry. We provide species-specific watering guidelines with every purchase, and our team is available for ongoing care advice.",
      category: "plant-care"
    },
    {
      id: 14,
      question: "What type of soil should I use for repotting?",
      answer: "The ideal soil mix varies by species. For most bonsai, we recommend a well-draining mix containing akadama, pumice, and lava rock in varying proportions depending on the species. For tropical plants, a mix containing high-quality potting soil, perlite, and orchid bark often works well. We sell pre-mixed soils appropriate for different plant types.",
      category: "plant-care"
    },
    {
      id: 15,
      question: "When is the best time to repot my bonsai?",
      answer: "For most deciduous bonsai, early spring just before new growth begins is ideal for repotting. For tropical species, repotting can often be done during the growing season when the plant is actively growing. Conifers are typically repotted in early spring or fall. We provide species-specific repotting guidelines and can advise on the best schedule for your particular trees.",
      category: "plant-care"
    }
  ];

  const toggleQuestion = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredFAQs = faqs.filter(faq => {
    // Filter by category
    if (activeTab !== 'all' && faq.category !== activeTab) return false;
    
    // Filter by search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      return (
        faq.question.toLowerCase().includes(searchLower) ||
        faq.answer.toLowerCase().includes(searchLower)
      );
    }
    
    return true;
  });

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
              <span className="text-bonsai-dark-green font-medium">FAQ</span>
            </div>
          </div>
        </div>

        <div className="container-custom mx-auto py-12">
          <SectionTitle subtitle="COMMON QUESTIONS" title="Frequently Asked Questions" />
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 px-4 pr-12 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bonsai-olive/50 focus:border-bonsai-olive/50"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === 'all' 
                  ? 'bg-bonsai-dark-green text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Questions
            </button>
            
            <button
              onClick={() => setActiveTab('general')}
              className={`px-4 py-2 rounded-md transition-colors flex items-center gap-2 ${
                activeTab === 'general' 
                  ? 'bg-bonsai-dark-green text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Globe size={16} />
              <span>General</span>
            </button>
            
            <button
              onClick={() => setActiveTab('shipping')}
              className={`px-4 py-2 rounded-md transition-colors flex items-center gap-2 ${
                activeTab === 'shipping' 
                  ? 'bg-bonsai-dark-green text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Package size={16} />
              <span>Order & Shipping</span>
            </button>
            
            <button
              onClick={() => setActiveTab('plant-care')}
              className={`px-4 py-2 rounded-md transition-colors flex items-center gap-2 ${
                activeTab === 'plant-care' 
                  ? 'bg-bonsai-dark-green text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Leaf size={16} />
              <span>Plant Care</span>
            </button>
          </div>
          
          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto">
            {filteredFAQs.length > 0 ? (
              <div className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <div key={faq.id} className="glass-card overflow-hidden">
                    <button
                      onClick={() => toggleQuestion(faq.id)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                    >
                      <span className="font-playfair font-bold text-lg text-bonsai-dark-green">{faq.question}</span>
                      {expandedId === faq.id ? (
                        <ChevronUp className="text-bonsai-olive flex-shrink-0" size={20} />
                      ) : (
                        <ChevronDown className="text-bonsai-olive flex-shrink-0" size={20} />
                      )}
                    </button>
                    
                    <div className={`px-6 pb-4 ${expandedId === faq.id ? 'block' : 'hidden'}`}>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-playfair font-bold text-bonsai-dark-green mb-2">No results found</h3>
                <p className="text-gray-600">
                  We couldn't find any answers matching your search. Please try different keywords or 
                  <Link to="/contact" className="text-bonsai-olive font-medium"> contact us</Link> for assistance.
                </p>
              </div>
            )}
          </div>
          
          {/* Didn't Find Your Answer Section */}
          <div className="mt-16 bg-bonsai-beige/30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green mb-4">Didn't Find Your Answer?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Our team is ready to help with any questions about our plants, export process, or care instructions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn-primary">Contact Us</Link>
              <a href="mailto:info@indocipanasbonsai.com" className="btn-outline">Email Us</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
