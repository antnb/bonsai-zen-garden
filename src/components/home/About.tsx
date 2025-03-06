
import { Check, Award, Globe } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const About = () => {
  return (
    <section id="about" className="section-padding bg-bonsai-beige relative overflow-hidden">
      {/* Background Design Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[35%] h-[35%] bg-bonsai-olive opacity-[0.03] rounded-full"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[40%] h-[40%] bg-bonsai-dark-green opacity-[0.03] rounded-full"></div>
      </div>
      
      <div className="container-custom mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Image */}
          <div className="opacity-0 animate-fade-in-left relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1598605272254-16f0c0ecdfa5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Bonsai Master at work" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-2/3 h-32 bg-bonsai-wheat rounded-lg -z-10 transform -rotate-6"></div>
            <div className="absolute -top-6 -right-6 w-2/3 h-32 bg-bonsai-olive/20 rounded-lg -z-10 transform rotate-6"></div>
          </div>
          
          {/* Right Side - Content */}
          <div className="opacity-0 animate-fade-in-right">
            <SectionTitle 
              subtitle="OUR STORY" 
              title="Passionate About Bonsai Excellence" 
              alignment="left"
              className="mb-8 md:mb-10"
            />
            
            <p className="text-gray-700 mb-6">
              For over a decade, Indo Cipanas Bonsai has been cultivating extraordinary bonsai specimens and ornamental plants from our nurseries in the highlands of West Java, Indonesia. Our team of master growers combines traditional techniques with innovative approaches to create living works of art that grace collections worldwide.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-bonsai-olive/20 flex items-center justify-center mr-3">
                  <Check size={14} className="text-bonsai-olive" />
                </div>
                <div>
                  <h4 className="font-bold text-bonsai-dark-green mb-1">Ethical Sourcing</h4>
                  <p className="text-sm text-gray-600">All our plants are nursery-grown or legally harvested with proper documentation.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-bonsai-olive/20 flex items-center justify-center mr-3">
                  <Check size={14} className="text-bonsai-olive" />
                </div>
                <div>
                  <h4 className="font-bold text-bonsai-dark-green mb-1">Expert Craftsmanship</h4>
                  <p className="text-sm text-gray-600">Our bonsai masters have decades of combined experience in the art of bonsai.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-bonsai-olive/20 flex items-center justify-center mr-3">
                  <Check size={14} className="text-bonsai-olive" />
                </div>
                <div>
                  <h4 className="font-bold text-bonsai-dark-green mb-1">Global Reach</h4>
                  <p className="text-sm text-gray-600">We export to collectors and businesses in over 30 countries with proper documentation.</p>
                </div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 glass-card">
                <Award className="w-8 h-8 mx-auto mb-2 text-bonsai-olive" />
                <div className="font-playfair font-bold text-2xl text-bonsai-dark-green">10+</div>
                <div className="text-xs text-gray-600">Years Experience</div>
              </div>
              
              <div className="text-center p-4 glass-card">
                <Globe className="w-8 h-8 mx-auto mb-2 text-bonsai-olive" />
                <div className="font-playfair font-bold text-2xl text-bonsai-dark-green">30+</div>
                <div className="text-xs text-gray-600">Countries Served</div>
              </div>
              
              <div className="text-center p-4 glass-card">
                <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/628/628324.png" alt="Bonsai Icon" className="w-6 h-6" />
                </div>
                <div className="font-playfair font-bold text-2xl text-bonsai-dark-green">5000+</div>
                <div className="text-xs text-gray-600">Bonsai Created</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
