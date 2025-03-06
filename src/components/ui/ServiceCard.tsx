
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard = ({
  icon,
  title,
  description,
  className,
}: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`p-6 md:p-8 glass-card group ${className} hover:shadow-xl transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-5 text-bonsai-dark-green group-hover:text-bonsai-olive transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-playfair font-bold text-bonsai-dark-green mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <button className="flex items-center text-bonsai-dark-green font-medium group-hover:text-bonsai-olive transition-colors duration-300">
        <span>Learn More</span>
        <ArrowRight size={16} className={`ml-2 transition-all duration-300 ${isHovered ? 'transform translate-x-1' : ''}`} />
      </button>
    </div>
  );
};

export default ServiceCard;
