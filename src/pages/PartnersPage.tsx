
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionTitle from '../components/ui/SectionTitle';
import { ChevronRight, Handshake, Globe, Gift, Users, ExternalLink } from 'lucide-react';

const PartnersPage = () => {
  const partnerTypes = [
    {
      id: 1,
      title: "Distributors",
      description: "Exclusive territorial rights to distribute our products within defined regions.",
      benefits: [
        "Exclusive territorial distribution rights",
        "Preferential pricing structure",
        "Dedicated support team",
        "Custom catalog tailored to your market",
        "Marketing materials and brand assets",
      ],
      requirements: [
        "Established presence in target market",
        "Proven track record in plant trade",
        "Adequate facilities for plant care",
        "Import permits and necessary licensing",
        "Commitment to minimum annual purchase volume",
      ],
      icon: <Globe className="w-12 h-12 text-bonsai-olive" />
    },
    {
      id: 2,
      title: "Resellers",
      description: "Garden centers, boutique plant shops, and online retailers who stock our products.",
      benefits: [
        "Competitive wholesale pricing",
        "Flexible ordering quantities",
        "Dropshipping options available",
        "Professional product photography",
        "Plant care guides for customers",
      ],
      requirements: [
        "Retail presence (physical or online)",
        "Professional plant handling capabilities",
        "Alignment with our brand values",
        "Import capabilities or partnership with importers",
        "Commitment to proper plant presentation",
      ],
      icon: <Users className="w-12 h-12 text-bonsai-olive" />
    },
    {
      id: 3,
      title: "Affiliates",
      description: "Content creators, bloggers, and influencers who promote our products to their audience.",
      benefits: [
        "Competitive commission structure",
        "Exclusive promotional codes",
        "Early access to new collections",
        "Personalized affiliate dashboard",
        "Regular promotional campaigns",
      ],
      requirements: [
        "Established audience in relevant niche",
        "Authentic engagement with followers",
        "Quality content creation",
        "Regular posting schedule",
        "Professional communication style",
      ],
      icon: <Gift className="w-12 h-12 text-bonsai-olive" />
    }
  ];

  const testimonials = [
    {
      id: 1,
      quote: "Partnering with Indo Cipanas has transformed our botanical offerings. Their consistent quality and professional export process has allowed us to confidently expand our rare plant section.",
      name: "Marcel Dupont",
      title: "Founder, Green Treasures",
      company: "European Plant Import Company",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
      type: "Distributor"
    },
    {
      id: 2,
      quote: "The affiliate program from Indo Cipanas has been a perfect match for my bonsai-focused content. The unique specimens they provide generate consistent interest from my audience.",
      name: "Akira Tanaka",
      title: "Creator",
      company: "Bonsai Mastery Blog",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
      type: "Affiliate"
    }
  ];

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
              <span className="text-bonsai-dark-green font-medium">Partners & Affiliates</span>
            </div>
          </div>
        </div>

        <div className="container-custom mx-auto py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-bonsai-beige/30 rounded-full mb-6">
              <Handshake size={48} className="text-bonsai-olive" />
            </div>
            <SectionTitle 
              subtitle="GROW WITH US" 
              title="Partnership Opportunities"
              description="Join our global network of partners and grow your business with our premium bonsai and tropical plant collections."
            />
            <div className="max-w-3xl mx-auto mt-8">
              <p className="text-gray-600">
                As a leader in the export of high-quality bonsai and tropical plants from Indonesia, we offer multiple ways to collaborate with businesses and individuals around the world. Whether you're a distributor, retailer, or content creator, we have partnership options designed to help you succeed.
              </p>
            </div>
          </div>
          
          {/* Partnership Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {partnerTypes.map((type) => (
              <div key={type.id} className="glass-card p-8 flex flex-col h-full">
                <div className="mb-6">
                  {type.icon}
                </div>
                <h2 className="font-playfair text-2xl font-bold text-bonsai-dark-green mb-3">{type.title}</h2>
                <p className="text-gray-600 mb-6">{type.description}</p>
                
                <h3 className="font-medium text-bonsai-olive mb-3">Benefits</h3>
                <ul className="space-y-2 mb-6">
                  {type.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-bonsai-olive mr-2">•</span>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <h3 className="font-medium text-bonsai-olive mb-3">Requirements</h3>
                <ul className="space-y-2 mb-6">
                  {type.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-bonsai-olive mr-2">•</span>
                      <span className="text-gray-600">{requirement}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto pt-6">
                  <Link to="/contact" className="btn-primary w-full text-center">
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Partner Testimonials */}
          <div className="mt-20">
            <SectionTitle 
              subtitle="SUCCESS STORIES" 
              title="From Our Partners"
              description="Hear from businesses and individuals who have grown with us."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                  <div className="flex items-start mb-6">
                    <div className="h-14 w-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-bonsai-olive">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="h-full w-full object-cover" 
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-playfair font-bold text-lg text-bonsai-dark-green">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                      <p className="text-xs text-gray-500">{testimonial.company}</p>
                      <span className="inline-block mt-1 text-xs px-2 py-1 bg-bonsai-beige/50 text-bonsai-dark-green rounded-full">
                        {testimonial.type}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Partner Showcase */}
          <div className="mt-20">
            <SectionTitle subtitle="OUR NETWORK" title="Featured Partners" />
            
            <div className="flex flex-wrap justify-center items-center gap-12 mt-12 bg-white p-12 rounded-lg shadow-sm">
              <div className="text-center opacity-70 hover:opacity-100 transition-opacity">
                <img src="https://via.placeholder.com/150x80?text=Partner+Logo" alt="Partner 1" className="h-16" />
              </div>
              <div className="text-center opacity-70 hover:opacity-100 transition-opacity">
                <img src="https://via.placeholder.com/150x80?text=Partner+Logo" alt="Partner 2" className="h-16" />
              </div>
              <div className="text-center opacity-70 hover:opacity-100 transition-opacity">
                <img src="https://via.placeholder.com/150x80?text=Partner+Logo" alt="Partner 3" className="h-16" />
              </div>
              <div className="text-center opacity-70 hover:opacity-100 transition-opacity">
                <img src="https://via.placeholder.com/150x80?text=Partner+Logo" alt="Partner 4" className="h-16" />
              </div>
              <div className="text-center opacity-70 hover:opacity-100 transition-opacity">
                <img src="https://via.placeholder.com/150x80?text=Partner+Logo" alt="Partner 5" className="h-16" />
              </div>
            </div>
          </div>
          
          {/* Resources Section */}
          <div className="mt-20">
            <h2 className="font-playfair text-2xl font-bold text-bonsai-dark-green mb-10 text-center">Partner Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-8">
                <h3 className="font-playfair text-xl text-bonsai-dark-green mb-4">Marketing Materials</h3>
                <p className="text-gray-600 mb-6">
                  Access high-quality product images, brochures, and marketing copy to help promote our products to your audience.
                </p>
                <a href="#" className="inline-flex items-center text-bonsai-olive hover:text-bonsai-dark-green font-medium">
                  Download Resources
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
              
              <div className="glass-card p-8">
                <h3 className="font-playfair text-xl text-bonsai-dark-green mb-4">Partner Portal</h3>
                <p className="text-gray-600 mb-6">
                  Current partners can log in to access exclusive content, track orders, and manage your partnership details.
                </p>
                <a href="#" className="inline-flex items-center text-bonsai-olive hover:text-bonsai-dark-green font-medium">
                  Partner Login
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="font-playfair text-2xl font-bold text-bonsai-dark-green mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-4 max-w-3xl mx-auto">
              <div className="glass-card p-6">
                <h3 className="font-medium text-lg text-bonsai-dark-green mb-2">How do I apply to become a partner?</h3>
                <p className="text-gray-600">
                  To apply for any of our partnership programs, fill out the application form on our Contact page and select the partnership type you're interested in. Our team will review your application and get back to you within 5 business days.
                </p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="font-medium text-lg text-bonsai-dark-green mb-2">What are the minimum order quantities for distributors?</h3>
                <p className="text-gray-600">
                  Minimum order quantities vary by region and product type. Typically, we require an initial order of at least 20 plants for distributors, with flexible arrangements for subsequent orders based on market performance.
                </p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="font-medium text-lg text-bonsai-dark-green mb-2">How does the affiliate program work?</h3>
                <p className="text-gray-600">
                  Our affiliate program provides you with unique tracking links to share with your audience. You earn a commission (typically 10-15%) on every sale made through your links. Commissions are paid monthly, and you'll have access to a dashboard to track your performance.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/faq" className="text-bonsai-olive hover:text-bonsai-dark-green font-medium">
                View All Partnership FAQs →
              </Link>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-16 bg-bonsai-beige/30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green mb-4">Ready to Partner With Us?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Take the first step towards a rewarding partnership with Indo Cipanas Bonsai. Contact our partnership team today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn-primary">Apply Now</Link>
              <a href="mailto:partnerships@indocipanasbonsai.com" className="btn-outline">Email Us</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PartnersPage;
