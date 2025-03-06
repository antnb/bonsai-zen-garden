
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <section id="contact" className="section-padding bg-bonsai-beige relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-bonsai-wheat opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-bonsai-olive opacity-10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="container-custom mx-auto relative z-10">
        <SectionTitle subtitle="GET IN TOUCH" title="Contact Us" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Contact Information */}
          <div className="lg:col-span-2 opacity-0 animate-fade-in-left">
            <div className="glass-card p-8">
              <h3 className="text-xl font-playfair font-bold text-bonsai-dark-green mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-bonsai-olive/20 flex items-center justify-center mr-4">
                    <MapPin size={18} className="text-bonsai-olive" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-bonsai-dark-green mb-1">Our Location</h4>
                    <p className="text-gray-600">Jl. Raya Cipanas No. 123, Bogor, West Java, Indonesia</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-bonsai-olive/20 flex items-center justify-center mr-4">
                    <Mail size={18} className="text-bonsai-olive" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-bonsai-dark-green mb-1">Email Us</h4>
                    <p className="text-gray-600">info@indocipanasbonsai.com</p>
                    <p className="text-gray-600">sales@indocipanasbonsai.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-bonsai-olive/20 flex items-center justify-center mr-4">
                    <Phone size={18} className="text-bonsai-olive" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-bonsai-dark-green mb-1">Call Us</h4>
                    <p className="text-gray-600">+62 812 3456 7890</p>
                    <p className="text-gray-600">+62 812 9876 5432</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-bonsai-dark-green mb-3">Business Hours</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-gray-600">Monday - Friday:</p>
                    <p className="font-medium text-bonsai-dark-green">8:00 AM - 5:00 PM</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Saturday:</p>
                    <p className="font-medium text-bonsai-dark-green">9:00 AM - 2:00 PM</p>
                  </div>
                  <div className="col-span-2 mt-2">
                    <p className="text-gray-600">Sunday:</p>
                    <p className="font-medium text-bonsai-dark-green">Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3 opacity-0 animate-fade-in-right">
            <div className="glass-card p-8">
              <h3 className="text-xl font-playfair font-bold text-bonsai-dark-green mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bonsai-olive/50 focus:border-bonsai-olive/50"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bonsai-olive/50 focus:border-bonsai-olive/50"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bonsai-olive/50 focus:border-bonsai-olive/50"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bonsai-olive/50 focus:border-bonsai-olive/50"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="group relative overflow-hidden bg-bonsai-dark-green text-white rounded-md px-6 py-3 font-medium transition-all duration-300 hover:bg-bonsai-dark-green/90 hover:shadow-md"
                  >
                    <span className="relative z-10 flex items-center">
                      <span>Send Message</span>
                      <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <span className="absolute bottom-0 left-0 w-0 h-full bg-bonsai-olive group-hover:w-full transition-all duration-300 z-0"></span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
