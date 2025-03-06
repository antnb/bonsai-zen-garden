
import { Star, MessageSquare } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { useState } from 'react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "David Chen",
      role: "Landscape Architect, Singapore",
      comment: "Indo Cipanas Bonsai has been our trusted supplier for three years. Their plants consistently exceed expectations in quality and health. The export process is seamless, making them our preferred partner for all landscaping projects.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      name: "Emma Tanaka",
      role: "Bonsai Collector, Japan",
      comment: "The competition-ready bonsai I purchased was simply magnificent. The artistry and health of the tree exceeded my expectations. Their packaging ensured it arrived in perfect condition despite the international shipping.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      name: "Michael Wong",
      role: "Resort Manager, Thailand",
      comment: "We ordered 200+ plants for our resort renovation, and Indo Cipanas delivered exceptional quality on time. Their team provided expert advice on plant selection for our tropical climate, and the results have delighted our guests.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 4,
      name: "Sarah Johnson",
      role: "Plant Collector, Australia",
      comment: "The rare tropical species I ordered arrived in perfect condition. Their expertise in export compliance made the process simple, and the plants have thrived in my collection. I highly recommend their sourcing service.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
  ];

  const [activeReview, setActiveReview] = useState(0);

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-bonsai-wheat/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-bonsai-olive/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container-custom mx-auto relative z-10">
        <SectionTitle 
          subtitle="CUSTOMER TESTIMONIALS" 
          title="What Our Clients Say"
        />
        
        <div className="max-w-4xl mx-auto">
          {/* Active Review */}
          <div className="opacity-0 animate-fade-in glass-card p-8 mb-8 relative">
            <div className="absolute -top-5 right-8 text-5xl font-serif text-bonsai-olive/20">"</div>
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={reviews[activeReview].image} 
                  alt={reviews[activeReview].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-playfair font-bold text-xl">{reviews[activeReview].name}</h3>
                <p className="text-gray-600 text-sm">{reviews[activeReview].role}</p>
                <div className="flex mt-1">
                  {[...Array(reviews[activeReview].rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-bonsai-wheat text-bonsai-wheat" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700 italic">"{reviews[activeReview].comment}"</p>
            <MessageSquare className="absolute bottom-6 right-8 text-bonsai-olive/10" size={48} />
          </div>
          
          {/* Review Navigation */}
          <div className="flex justify-center space-x-2">
            {reviews.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeReview ? 'bg-bonsai-olive w-8' : 'bg-bonsai-olive/30'}`}
                aria-label={`View review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
