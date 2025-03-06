
import { Award, ThumbsUp, Heart, Leaf, Handshake } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: <Award size={32} className="text-bonsai-olive" />,
      title: "Expert Craftsmanship",
      description: "Our bonsai masters have decades of combined experience, creating living art pieces with meticulous attention to detail."
    },
    {
      id: 2,
      icon: <ThumbsUp size={32} className="text-bonsai-olive" />,
      title: "Premium Quality",
      description: "We select only the finest specimens, ensuring exceptional health, strong structure, and aesthetic appeal."
    },
    {
      id: 3,
      icon: <Leaf size={32} className="text-bonsai-olive" />,
      title: "Sustainable Practices",
      description: "Our plants are ethically sourced and grown using environmentally friendly methods that respect nature's rhythm."
    },
    {
      id: 4,
      icon: <Handshake size={32} className="text-bonsai-olive" />,
      title: "Local Partnerships",
      description: "We collaborate with trusted local farmers to ensure consistent supply of quality plants while supporting communities."
    },
    {
      id: 5,
      icon: <Heart size={32} className="text-bonsai-olive" />,
      title: "Customer Satisfaction",
      description: "We're committed to exceeding expectations, with personalized service and expert guidance for every client."
    }
  ];

  return (
    <section className="section-padding bg-bonsai-beige/50 relative">
      <div className="container-custom mx-auto">
        <SectionTitle 
          subtitle="WHY CHOOSE US" 
          title="The Indo Cipanas Difference" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={reason.id} 
              className="opacity-0 animate-fade-in bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-bonsai-wheat/30 flex items-center justify-center mb-5">
                {reason.icon}
              </div>
              <h3 className="text-xl font-playfair font-bold text-bonsai-dark-green mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
