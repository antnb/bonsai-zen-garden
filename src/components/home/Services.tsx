import { TreePine, Warehouse, Flower2, Trophy, Container, Search } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import ServiceCard from '../ui/ServiceCard';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <TreePine size={36} />,
      title: "Semi-Mature Bonsai for Sale",
      description: "Order semi-mature bonsai (70-80% developed), ideal for export, nurseries, and further cultivation. Our bonsai are carefully trained for years to ensure strong roots, artistic shaping, and high survival rates."
    },
    {
      id: 2,
      icon: <Warehouse size={36} />,
      title: "Wholesale Landscaping & Bulk Plants",
      description: "Buy premium landscaping plants in bulk for urban beautification, resorts, and commercial spaces. Our plants are grown using sustainable methods and are carefully selected for resilience in various climates."
    },
    {
      id: 3,
      icon: <Flower2 size={36} />,
      title: "Rare Tropical Plants Supplier",
      description: "Discover and order rare tropical plants, including exotic variegated species, sourced from Asia's rich biodiversity. Perfect for collectors, nurseries, and specialty plant stores."
    },
    {
      id: 4,
      icon: <Trophy size={36} />,
      title: "Competition-Ready Bonsai",
      description: "Fully matured, exhibition-grade bonsai, crafted with precision for competitions and high-end collections. Each tree is shaped using traditional techniques and nurtured for years to achieve aesthetic perfection."
    },
    {
      id: 5,
      icon: <Container size={36} />,
      title: "Decorative Plant Pots Supplier",
      description: "Enhance your plant displays with stylish, durable pots designed for bonsai and ornamental plants. We offer a variety of premium materials, including ceramic, clay, and custom designs."
    },
    {
      id: 6,
      icon: <Search size={36} />,
      title: "Custom Plant Sourcing & Orders",
      description: "Looking for specific plants? We provide tailored procurement services, connecting buyers with trusted growers and exporters. Whether you need a rare species or a large bulk order, we ensure quality delivery."
    }
  ];

  return (
    <section id="services" className="section-padding bg-white relative">
      <div className="container-custom mx-auto relative z-10">
        <SectionTitle 
          subtitle="OUR EXPERTISE" 
          title="Professional Services" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
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
