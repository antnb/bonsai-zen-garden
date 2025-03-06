
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import ProductCard from '../ui/ProductCard';

// Sample product data
const products = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1610173827043-9db1df438cb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    title: "Japanese Maple Bonsai",
    scientificName: "Acer palmatum",
    price: "$1,200",
    description: "A striking 15-year-old Japanese Maple with vibrant red autumn foliage, styled in the informal upright form."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1611387729672-25583e070328?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    title: "Chinese Juniper",
    scientificName: "Juniperus chinensis",
    price: "$850",
    description: "Contest-ready 20-year-old specimen with excellent deadwood features and compact foliage pads."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1594898781456-abaab5b4f636?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    title: "Trident Maple",
    scientificName: "Acer buergerianum",
    price: "$1,500",
    description: "Premium 30-year-old specimen with exceptional nebari development and fine ramification."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    title: "Chinese Elm",
    scientificName: "Ulmus parvifolia",
    price: "$750",
    description: "Elegant 12-year-old Chinese Elm with small leaves and interesting trunk movement."
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1602173284196-77c6857c3e77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    title: "Azalea Bonsai",
    scientificName: "Rhododendron indicum",
    price: "$950",
    description: "Stunning flowering specimen with a twisted trunk and vibrant spring blooms."
  }
];

const ProductShowcase = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxPosition = Math.max(0, products.length - visibleItems);

  const goToPrev = () => {
    setCurrentPosition((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentPosition((prev) => Math.min(maxPosition, prev + 1));
  };

  return (
    <section id="products" className="section-padding bg-white">
      <div className="container-custom mx-auto">
        <SectionTitle 
          subtitle="PREMIUM COLLECTION" 
          title="Featured Bonsai" 
        />
        
        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={goToPrev}
            disabled={currentPosition === 0}
            className={`absolute top-1/2 left-0 z-10 -translate-y-1/2 -translate-x-4 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-100 transform transition-all duration-300 ${currentPosition === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'}`}
            aria-label="Previous products"
          >
            <ChevronLeft size={20} className="text-bonsai-dark-green" />
          </button>
          
          <button 
            onClick={goToNext}
            disabled={currentPosition >= maxPosition}
            className={`absolute top-1/2 right-0 z-10 -translate-y-1/2 translate-x-4 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-100 transform transition-all duration-300 ${currentPosition >= maxPosition ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'}`}
            aria-label="Next products"
          >
            <ChevronRight size={20} className="text-bonsai-dark-green" />
          </button>
          
          {/* Products Container */}
          <div 
            ref={containerRef}
            className="overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentPosition * (100 / visibleItems)}%)` }}
            >
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className={`px-3 flex-shrink-0 opacity-0 animate-fade-in-delay-2`}
                  style={{ width: `${100 / visibleItems}%` }}
                >
                  <ProductCard
                    image={product.image}
                    title={product.title}
                    scientificName={product.scientificName}
                    price={product.price}
                    description={product.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* View All Button */}
        <div className="mt-12 text-center opacity-0 animate-fade-in-delay-3">
          <button className="btn-outline">
            View All Bonsai
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
