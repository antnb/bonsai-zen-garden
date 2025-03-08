
import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Progress } from "@/components/ui/progress";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll event to change navbar appearance and track reading progress
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar appearance
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Calculate scroll progress for the reading indicator
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      
      if (documentHeight > 0) {
        const percentage = (scrolled / documentHeight) * 100;
        setScrollProgress(percentage);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Leaf className="h-8 w-8 text-bonsai-dark-green mr-2" />
          <div>
            <h1 className="text-xl md:text-2xl font-playfair font-bold text-bonsai-dark-green">
              Indo Cipanas <span className="text-bonsai-olive">Bonsai</span>
            </h1>
            <p className="text-[10px] md:text-xs text-bonsai-brown tracking-wider">PREMIUM BONSAI CULTIVATION</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/export-process" className="nav-link">Export Process</Link>
          <Link to="/sustainability" className="nav-link">Sustainability</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-bonsai-dark-green p-2"
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 ease-in-out bg-white/95 backdrop-blur-md`}>
        <nav className="flex flex-col items-center py-4 space-y-4">
          <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
          <Link to="/services" className="nav-link" onClick={closeMenu}>Services</Link>
          <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
          <Link to="/export-process" className="nav-link" onClick={closeMenu}>Export Process</Link>
          <Link to="/sustainability" className="nav-link" onClick={closeMenu}>Sustainability</Link>
          <Link to="/blog" className="nav-link" onClick={closeMenu}>Blog</Link>
          <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
          <Link to="/faq" className="nav-link" onClick={closeMenu}>FAQ</Link>
        </nav>
      </div>

      {/* Reading Progress Indicator */}
      <div className="w-full h-1 bg-bonsai-wheat/30">
        <Progress value={scrollProgress} className="h-1 rounded-none bg-bonsai-wheat/30" />
      </div>
    </header>
  );
};

export default Navbar;
