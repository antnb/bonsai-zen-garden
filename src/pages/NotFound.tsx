
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Home, Search, HelpCircle } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // Suggested pages that might help the user
  const suggestedPages = [
    { title: "Home Page", path: "/", icon: <Home size={18} /> },
    { title: "Services", path: "/services", icon: <Search size={18} /> },
    { title: "FAQ", path: "/faq", icon: <HelpCircle size={18} /> },
    { title: "Contact Us", path: "/contact", icon: <HelpCircle size={18} /> },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center bg-white rounded-lg p-8 shadow-sm">
            <h1 className="text-6xl font-playfair font-bold text-bonsai-dark-green mb-4">404</h1>
            <h2 className="text-2xl font-playfair text-gray-700 mb-6">Page Not Found</h2>
            
            <div className="h-0.5 w-24 bg-bonsai-olive mx-auto mb-6"></div>
            
            <p className="text-gray-600 mb-8">
              The page you're looking for doesn't exist or may have been moved.
            </p>
            
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-bonsai-olive text-white rounded-md hover:bg-bonsai-dark-green transition-colors"
            >
              <Home size={18} className="mr-2" />
              Return to Home
            </Link>
            
            {/* Suggested pages */}
            <div className="mt-12">
              <h3 className="text-lg font-medium text-gray-700 mb-4">
                You might be looking for:
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {suggestedPages.map((page, index) => (
                  <Link 
                    key={index}
                    to={page.path}
                    className="flex items-center p-3 border border-gray-200 rounded-md hover:border-bonsai-olive hover:bg-bonsai-beige/20 transition-colors"
                  >
                    <span className="mr-2 text-bonsai-olive">{page.icon}</span>
                    <span>{page.title}</span>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Sitemap link */}
            <div className="mt-8 text-gray-600">
              Looking for something specific? Check our <Link to="/sitemap" className="text-bonsai-olive hover:underline">sitemap</Link>.
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
