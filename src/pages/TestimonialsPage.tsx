
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionTitle from '../components/ui/SectionTitle';
import { ChevronRight, Star, Quote, User } from 'lucide-react';

const TestimonialsPage = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jean-Pierre Dubois",
      title: "Bonsai Collector",
      location: "Paris, France",
      testimonial: "My experience with Indo Cipanas Bonsai has been exceptional. The juniper bonsai I received was in perfect condition despite the long journey to France. Their packaging techniques are impeccable, and the phytosanitary documentation was flawless, making customs clearance smooth.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 2,
      name: "Sophia Schmidt",
      title: "Botanical Garden Curator",
      location: "Munich, Germany",
      testimonial: "We've been sourcing rare tropical specimens from Indo Cipanas for our conservatory for three years now. Their attention to detail in plant selection and export documentation is unmatched. Even the most delicate specimens arrive in vigorous condition.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 3,
      name: "Marco Rossi",
      title: "Landscape Designer",
      location: "Milan, Italy",
      testimonial: "For our high-end hotel project in Milan, we needed mature bonsai specimens that would make an immediate impact. Indo Cipanas provided exactly what we needed, with detailed care instructions tailored to our Mediterranean climate.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 4,
      name: "Elizabeth Chen",
      title: "Botanical Art Gallery Owner",
      location: "Singapore",
      testimonial: "The bonsai specimens we sourced from Indo Cipanas have become the centerpiece of our gallery's permanent collection. Their artistic quality and health are testament to the passion and expertise of their growers.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 5,
      name: "Hans Müller",
      title: "Botanical Photographer",
      location: "Vienna, Austria",
      testimonial: "As someone who documents rare plants professionally, I was impressed by the unique specimens Indo Cipanas was able to source for my tropical plant photography project. Their team understood exactly what I was looking for.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 6,
      name: "Olivia Bennett",
      title: "Horticultural Therapist",
      location: "Melbourne, Australia",
      testimonial: "For our healing garden project, we needed specific plants that would thrive in our climate while providing therapeutic benefits. The consultation provided by Indo Cipanas was invaluable, and the plants have adapted beautifully.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    },
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Luxury Hotel Chain Integration",
      client: "The Imperial Hotel Group",
      location: "Multiple European Locations",
      challenge: "Sourcing 35 mature bonsai specimens for six luxury hotels across Europe, each with different climate conditions.",
      solution: "Customized selection and preparation of climate-appropriate species, with tailored care manuals and staff training.",
      result: "All specimens thriving after 3 years, becoming signature elements of each property's identity.",
    },
    {
      id: 2,
      title: "Botanical Garden Rare Species Collection",
      client: "Royal Botanical Institute",
      location: "Amsterdam, Netherlands",
      challenge: "Acquiring 12 rare Indonesian tropical species with proper documentation for research and conservation.",
      solution: "Collaborated with Indonesian conservation authorities to legally source specimens with complete scientific documentation.",
      result: "Successful establishment of a research program studying adaptation strategies of tropical plants to climate change.",
    },
    {
      id: 3,
      title: "Private Collector Expansion",
      client: "Private Collection",
      location: "Geneva, Switzerland",
      challenge: "Expanding a premier private collection with competition-grade bonsai specimens.",
      solution: "Multi-year acquisition strategy, focusing on authenticated ancient specimens with documented provenance.",
      result: "Collection awarded 'Best International Collection' at the European Bonsai Association exhibition.",
    },
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} 
      />
    ));
  };

  return (
    <div className="pt-24">
      <Navbar />
      <main className="min-h-screen">
        {/* Breadcrumbs */}
        <div className="bg-bonsai-beige/50 py-3">
          <div className="container-custom mx-auto">
            <div className="flex items-center text-sm text-gray-600">
              <Link to="/" className="hover:text-bonsai-dark-green transition-colors">Home</Link>
              <ChevronRight size={14} className="mx-2" />
              <span className="text-bonsai-dark-green font-medium">Testimonials</span>
            </div>
          </div>
        </div>

        <div className="container-custom mx-auto py-12">
          <SectionTitle 
            subtitle="CLIENT EXPERIENCES" 
            title="Testimonials from Around the World"
            description="Discover what clients from across the globe say about their experience working with Indo Cipanas Bonsai."
          />
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="glass-card p-6 flex flex-col h-full">
                <div className="flex items-start mb-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-bonsai-olive">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-playfair font-bold text-lg text-bonsai-dark-green">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                    <div className="flex mt-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                
                <div className="relative pl-6 flex-grow">
                  <Quote className="absolute left-0 top-0 text-bonsai-olive opacity-30" size={20} />
                  <p className="text-gray-700 italic">{testimonial.testimonial}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Case Studies Section */}
          <div className="mt-20">
            <SectionTitle 
              subtitle="SUCCESS STORIES" 
              title="Client Case Studies"
              description="Explore how we've helped clients around the world accomplish their specific goals."
            />
            
            <div className="mt-12 space-y-8">
              {caseStudies.map((caseStudy) => (
                <div key={caseStudy.id} className="glass-card p-8">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="md:w-1/4">
                      <h3 className="font-playfair font-bold text-xl text-bonsai-dark-green mb-2">{caseStudy.title}</h3>
                      <p className="text-bonsai-olive font-medium">{caseStudy.client}</p>
                      <p className="text-sm text-gray-600 flex items-center gap-1">
                        <ChevronRight size={14} className="text-bonsai-olive" />
                        {caseStudy.location}
                      </p>
                    </div>
                    
                    <div className="md:w-3/4 mt-4 md:mt-0 md:pl-8 md:border-l border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-bold text-gray-700 mb-2">Challenge</h4>
                          <p className="text-gray-600 text-sm">{caseStudy.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-gray-700 mb-2">Solution</h4>
                          <p className="text-gray-600 text-sm">{caseStudy.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-gray-700 mb-2">Result</h4>
                          <p className="text-gray-600 text-sm">{caseStudy.result}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gallery Section Placeholder */}
          <div className="mt-20 text-center">
            <SectionTitle 
              subtitle="VISUAL SHOWCASE" 
              title="Gallery"
              description="A visual journey through our finest specimens and successful projects."
            />
            
            <div className="p-12 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 mt-12">
              <div className="flex flex-col items-center justify-center">
                <User className="h-16 w-16 text-gray-400 mb-4" />
                <h3 className="text-xl font-playfair font-bold text-gray-600">Gallery Coming Soon</h3>
                <p className="text-gray-500 mt-2 max-w-md">
                  We're currently curating a beautiful collection of images showcasing our best work. 
                  Check back soon to see our portfolio of bonsai, tropical plants, and export projects.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-16 bg-bonsai-beige/30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green mb-4">Ready to Work With Us?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Join our growing list of satisfied clients from around the world. Contact us today to discuss your project needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn-primary">Contact Us</Link>
              <Link to="/service-catalog" className="btn-outline">View Our Collections</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
