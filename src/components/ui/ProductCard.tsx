
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface ProductCardProps {
  image: string;
  title: string;
  scientificName: string;
  price: string;
  description: string;
  className?: string;
}

const ProductCard = ({
  image,
  title,
  scientificName,
  price,
  description,
  className,
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`glass-card group cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-56 md:h-64">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out transform group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        
        <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm py-1 px-3 rounded-full text-xs font-medium text-bonsai-dark-green">
          {price}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-playfair font-bold text-bonsai-dark-green mb-1">{title}</h3>
        <p className="text-sm italic text-bonsai-olive mb-3">{scientificName}</p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center text-bonsai-dark-green font-medium text-sm group-hover:text-bonsai-brown transition-colors duration-300">
          <span>View Details</span>
          <ChevronRight size={16} className={`ml-1 transition-transform duration-300 ${isHovered ? 'transform translate-x-1' : ''}`} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
