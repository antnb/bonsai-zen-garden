import { Workflow, Truck, Trees, Handshake } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const Process = () => {
  const steps = [
    {
      id: 1,
      icon: <Handshake size={32} className="text-white" />,
      title: "Local Partnerships",
      description: "We establish deep relationships with local farmers across Indonesia, ensuring fair partnerships while securing premium plant sources."
    },
    {
      id: 2,
      icon: <Trees size={32} className="text-white" />,
      title: "Cultivation & Selection",
      description: "Our experts carefully select and cultivate each plant, ensuring only the healthiest specimens with the best characteristics proceed to the next stage."
    },
    {
      id: 3,
      icon: <Workflow size={32} className="text-white" />,
      title: "Expert Processing",
      description: "Plants undergo professional preparation: cleaning, inspection, skilled pruning, appropriate potting, and final quality assessment before shipment."
    },
    {
      id: 4,
      icon: <Truck size={32} className="text-white" />,
      title: "Secure Delivery",
      description: "We use specialized packaging techniques and trusted logistics partners to ensure your plants arrive in perfect condition, no matter the destination."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-r from-bonsai-dark-green to-bonsai-olive relative text-white">
      <div className="container-custom mx-auto relative z-10">
        <SectionTitle 
          subtitle="OUR METHODOLOGY" 
          title="From Farm to Customer" 
          className="text-white"
        />
        
        <div className="relative">
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className="opacity-0 animate-fade-in flex flex-col items-center text-center"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-bonsai-wheat/20 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-playfair font-bold mb-3">{step.title}</h3>
                <p className="text-white/80">{step.description}</p>
                
                {/* Step Number */}
                <div className="w-12 h-12 rounded-full border-2 border-bonsai-wheat flex items-center justify-center mt-4 font-playfair text-xl font-bold text-bonsai-wheat">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
          
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-bonsai-wheat/30 -translate-y-1/2 hidden lg:block"></div>
        </div>
        
        {/* Bottom Message */}
        <div className="opacity-0 animate-fade-in-delay-3 mt-16 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-playfair font-bold mb-4">Sustainable Supply Chain</h3>
          <p className="text-white/80">
            Our direct relationship with local farmers eliminates middlemen, ensuring better compensation for growers 
            and higher quality products for you. We're committed to ethical practices that support both communities and the environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
