
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501686637-b7aa9c48a882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')" }}>
        <div className="absolute inset-0 bg-bonsai-dark-green/40 backdrop-filter backdrop-blur-[2px]"></div>
      </div>
      
      {/* Overlay Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1585202900225-6d3ac20a6962?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')] bg-repeat"></div>
      
      {/* Content */}
      <div className="container-custom relative z-10 mx-auto text-center px-4 pt-20">
        {/* Subtitle */}
        <div className="opacity-0 animate-fade-in">
          <p className="inline-block bg-bonsai-dark-green/20 text-white px-4 py-1 rounded-full text-sm font-medium tracking-wide mb-6">
            PREMIUM BONSAI ARTISTRY & EXPORTS
          </p>
        </div>
        
        {/* Main Title */}
        <h1 className="opacity-0 animate-fade-in-delay-1 font-playfair font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
          Crafting Nature's<br />
          <span className="text-bonsai-wheat">Masterpieces</span>
        </h1>
        
        {/* Description */}
        <p className="opacity-0 animate-fade-in-delay-2 max-w-2xl mx-auto text-lg text-gray-100 mb-10">
          From contest-ready specimens to rare ornamental plants, we blend artistry 
          with ethical sourcing to create living works of art for collectors worldwide.
        </p>
        
        {/* Buttons */}
        <div className="opacity-0 animate-fade-in-delay-3 flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          <button onClick={scrollToServices} className="btn-primary min-w-[200px]">
            Explore Premium Bonsai
          </button>
          <button className="btn-outline min-w-[200px] border-white text-white hover:bg-white hover:text-bonsai-dark-green">
            Our Craftsmanship
          </button>
        </div>
        
        {/* Trust Badges */}
        <div className="opacity-0 animate-fade-in-delay-4 flex flex-wrap justify-center gap-6 md:gap-10">
          <div className="flex items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-white/30 backdrop-blur-sm rounded-full shadow-sm">
              <img src="https://cdn-icons-png.flaticon.com/512/3321/3321414.png" alt="Certified" className="w-6 h-6" />
            </div>
            <span className="ml-3 text-sm font-medium text-white">CITES Certified</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-white/30 backdrop-blur-sm rounded-full shadow-sm">
              <img src="https://cdn-icons-png.flaticon.com/512/2910/2910756.png" alt="Experience" className="w-6 h-6" />
            </div>
            <span className="ml-3 text-sm font-medium text-white">10+ Years Experience</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-white/30 backdrop-blur-sm rounded-full shadow-sm">
              <img src="https://cdn-icons-png.flaticon.com/512/3500/3500833.png" alt="Global Shipping" className="w-6 h-6" />
            </div>
            <span className="ml-3 text-sm font-medium text-white">Global Shipping</span>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <button 
          onClick={scrollToServices}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm shadow-md"
          aria-label="Scroll down"
        >
          <ChevronDown className="text-white" size={20} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
