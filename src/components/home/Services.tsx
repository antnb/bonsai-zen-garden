
import { Truck, FileText, Scissors, Users, Leaf, Trees, PlaneTakeoff, Briefcase } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import ServiceCard from '../ui/ServiceCard';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Truck size={36} />,
      title: "Global Export Solutions",
      description: "We handle all aspects of international shipping, from permits to packaging, ensuring your bonsai arrives safely."
    },
    {
      id: 2,
      icon: <FileText size={36} />,
      title: "Export Documentation",
      description: "Our team manages all CITES certificates and export papers, ensuring legal compliance for international trade."
    },
    {
      id: 3,
      icon: <Scissors size={36} />,
      title: "Custom Bonsai Design",
      description: "Commission a unique bonsai masterpiece tailored to your preferences, styled by our master craftsmen."
    },
    {
      id: 4,
      icon: <Users size={36} />,
      title: "Landscaping Consultation",
      description: "Expert guidance for incorporating bonsai and ornamental plants into landscaping and urban greening projects."
    },
    {
      id: 5,
      icon: <Leaf size={36} />,
      title: "Plant Maintenance",
      description: "Professional care services to ensure your bonsai and ornamental plants remain healthy and vibrant year-round."
    },
    {
      id: 6,
      icon: <Trees size={36} />,
      title: "Bonsai Training",
      description: "Learn the art of bonsai from our master craftsmen through personalized training sessions and workshops."
    },
    {
      id: 7,
      icon: <PlaneTakeoff size={36} />,
      title: "International Exhibitions",
      description: "Showcase your bonsai at prestigious international exhibitions and competitions with our facilitation services."
    },
    {
      id: 8,
      icon: <Briefcase size={36} />,
      title: "Corporate Green Solutions",
      description: "Custom greenery solutions for corporate environments, from office plants to large-scale installations."
    }
  ];

  return (
    <section id="services" className="section-padding bg-white relative">
      <div className="container-custom mx-auto relative z-10">
        <SectionTitle 
          subtitle="OUR EXPERTISE" 
          title="Professional Services" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 8).map((service, index) => (
            <div key={service.id} className={`opacity-0 animate-fade-in`} style={{ animationDelay: `${0.2 * index}s` }}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
        
        {/* CTA Box */}
        <div className="mt-16 opacity-0 animate-fade-in-delay-4 bg-gradient-to-r from-bonsai-dark-green to-bonsai-olive rounded-lg overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-3 p-8 lg:p-12">
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-white mb-4">Ready to Start Your Bonsai Journey?</h3>
              <p className="text-white/80 mb-6">
                Whether you're looking for expert bonsai services or need help with a landscaping project, 
                our team of professionals is ready to assist you at every step.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-bonsai-dark-green hover:bg-white/90 rounded-md px-6 py-3 font-medium transition-all duration-300 ease-in-out transform hover:translate-y-[-2px] hover:shadow-md">
                  Request a Quote
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-md px-6 py-3 font-medium transition-all duration-300 ease-in-out transform hover:translate-y-[-2px] hover:shadow-md">
                  Schedule Consultation
                </button>
              </div>
            </div>
            <div className="lg:col-span-2 hidden lg:block relative">
              <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1567748157439-651aca2ff064?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-r from-bonsai-dark-green/80 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
