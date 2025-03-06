
import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
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
          <button onClick={() => scrollToSection('home')} className="nav-link active">Home</button>
          <button onClick={() => scrollToSection('products')} className="nav-link">Products</button>
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          <button className="btn-primary">Request Quote</button>
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
          <button onClick={() => scrollToSection('home')} className="nav-link active">Home</button>
          <button onClick={() => scrollToSection('products')} className="nav-link">Products</button>
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          <button className="btn-primary w-3/4">Request Quote</button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
