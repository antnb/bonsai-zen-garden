
import { Leaf, Instagram, Linkedin, Mail, Phone, Globe, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-bonsai-dark-green text-white pt-16 pb-8">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Leaf className="h-6 w-6 text-bonsai-wheat mr-2" />
              <h3 className="text-xl font-playfair font-bold">Indo Cipanas Bonsai</h3>
            </div>
            <p className="text-sm text-gray-300 max-w-xs">
              Premium bonsai cultivators specializing in ethically sourced, high-quality 
              specimens and ornamental plants for collectors and landscapers worldwide.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-300 hover:text-bonsai-wheat transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-bonsai-wheat transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:info@indocipanasbonsai.com" className="text-gray-300 hover:text-bonsai-wheat transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-playfair font-bold mb-4 text-bonsai-wheat">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/reviews" className="text-gray-300 hover:text-white transition-colors">Reviews</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-playfair font-bold mb-4 text-bonsai-wheat">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pre-Bonsai</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contest Bonsai</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Rare Plants</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Landscaping Kits</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Bonsai Tools</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-playfair font-bold mb-4 text-bonsai-wheat">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-bonsai-wheat" />
                <span className="text-gray-300">Jl. Raya Cipanas No. 123, Bogor, West Java, Indonesia</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-bonsai-wheat" />
                <span className="text-gray-300">+62 812 3456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-bonsai-wheat" />
                <span className="text-gray-300">info@indocipanasbonsai.com</span>
              </li>
              <li className="flex items-center">
                <Globe size={18} className="mr-2 flex-shrink-0 text-bonsai-wheat" />
                <span className="text-gray-300">www.indocipanasbonsai.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Indo Cipanas Bonsai. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 px-3 py-1 rounded text-xs text-gray-300">CITES Certified</div>
              <div className="bg-white/10 px-3 py-1 rounded text-xs text-gray-300">Indonesian Export License</div>
              <div className="bg-white/10 px-3 py-1 rounded text-xs text-gray-300">Sustainable Trade</div>
              <div className="bg-white/10 px-3 py-1 rounded text-xs text-gray-300">Legal Compliance</div>
            </div>
          </div>
        </div>
        
        {/* Legal Links */}
        <div className="mt-6 text-center">
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <span>|</span>
            <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
            <span>|</span>
            <Link to="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
