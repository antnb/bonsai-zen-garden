
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionTitle from '../components/ui/SectionTitle';
import { ChevronRight, ExternalLink } from 'lucide-react';

const SitemapPage = () => {
  const sitemapSections = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Why Choose Us", path: "/why-choose-us" },
        { name: "Our Process", path: "/our-process" },
        { name: "Reviews", path: "/reviews" },
        { name: "Service Catalog", path: "/service-catalog" },
        { name: "Contact", path: "/contact" },
      ]
    },
    {
      title: "Legal & Compliance",
      links: [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms-of-service" },
        { name: "Cookie Policy", path: "/cookie-policy" },
        { name: "Accessibility", path: "/accessibility" },
        { name: "Return Policy", path: "/return-policy" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Export Process", path: "/export-process" },
        { name: "Sustainability", path: "/sustainability" },
        { name: "FAQ", path: "/faq" },
        { name: "Blog", path: "/blog" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "Testimonials", path: "/testimonials" },
        { name: "Partners", path: "/partners" },
        { name: "Press", path: "/press" },
      ]
    },
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
              <span className="text-bonsai-dark-green font-medium">Sitemap</span>
            </div>
          </div>
        </div>

        <div className="container-custom mx-auto py-12">
          <SectionTitle 
            subtitle="NAVIGATION GUIDE" 
            title="Site Map"
            description="A complete overview of all pages available on our website."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {sitemapSections.map((section, index) => (
              <div key={index}>
                <h2 className="font-playfair text-xl font-bold text-bonsai-dark-green mb-4 pb-2 border-b border-bonsai-beige">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        to={link.path} 
                        className="flex items-center text-gray-700 hover:text-bonsai-olive transition-colors"
                      >
                        <ChevronRight size={14} className="text-bonsai-olive mr-2" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Additional Links - External */}
          <div className="mt-16">
            <h2 className="font-playfair text-xl font-bold text-bonsai-dark-green mb-4 pb-2 border-b border-bonsai-beige">
              External Resources
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <a 
                href="https://cites.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card p-4 flex items-center text-gray-700 hover:text-bonsai-olive transition-colors"
              >
                <span>CITES Official Website</span>
                <ExternalLink size={14} className="ml-2" />
              </a>
              
              <a 
                href="https://www.ippc.int/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card p-4 flex items-center text-gray-700 hover:text-bonsai-olive transition-colors"
              >
                <span>International Plant Protection Convention</span>
                <ExternalLink size={14} className="ml-2" />
              </a>
              
              <a 
                href="https://www.agriculture.gov.au/biosecurity-trade/import/plants-grains-horticulture" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card p-4 flex items-center text-gray-700 hover:text-bonsai-olive transition-colors"
              >
                <span>Australian Plant Import Guidelines</span>
                <ExternalLink size={14} className="ml-2" />
              </a>
            </div>
          </div>
          
          {/* XML Sitemap Link */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">
              Looking for our XML sitemap for search engines?
            </p>
            <a 
              href="/sitemap.xml" 
              target="_blank"
              className="inline-flex items-center px-4 py-2 border border-bonsai-olive text-bonsai-olive rounded hover:bg-bonsai-olive hover:text-white transition-colors"
            >
              View XML Sitemap
              <ExternalLink size={14} className="ml-2" />
            </a>
          </div>
          
          {/* SEO Information */}
          <div className="mt-16 bg-bonsai-beige/30 p-6 rounded-lg">
            <h2 className="font-playfair text-xl font-bold text-bonsai-dark-green mb-4">
              About Our Site
            </h2>
            <p className="text-gray-700">
              Indo Cipanas Bonsai is a leading exporter of premium bonsai and tropical plants from Indonesia to the global market. Our website provides comprehensive information about our products, services, and export processes. We're committed to making our content accessible to all users and providing a clear navigation structure.
            </p>
            <p className="text-gray-700 mt-4">
              If you cannot find what you're looking for or have suggestions for improving our site navigation, please <Link to="/contact" className="text-bonsai-olive hover:underline">contact us</Link>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SitemapPage;
