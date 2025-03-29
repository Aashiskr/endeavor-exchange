
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "The Project Marketplace has been a game-changer for me. I've completed three projects that significantly improved my portfolio, and I've received job offers as a direct result.",
    name: "Sarah Johnson",
    role: "Computer Science Student",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5
  },
  {
    id: 2,
    quote: "As a hiring manager, I've found incredible talent through this platform. The students and freelancers here have fresh perspectives and are eager to prove themselves.",
    name: "Michael Chen",
    role: "Tech Lead at InnovateCorp",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5
  },
  {
    id: 3,
    quote: "I started freelancing through Project Marketplace while in college. The mentorship I received was invaluable, and I was able to build a client base before graduation.",
    name: "Alex Rivera",
    role: "Freelance Developer",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 4
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from students, freelancers, and companies who have found success on our platform.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 w-full">
            <button 
              onClick={prevTestimonial}
              className="bg-white rounded-full p-2 shadow-md text-gray-600 hover:text-marketplace-purple transition-colors z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="bg-white rounded-full p-2 shadow-md text-gray-600 hover:text-marketplace-purple transition-colors z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-marketplace-lavender/30 rounded-xl p-8 md:p-10 text-center">
                    <div className="flex justify-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <blockquote className="text-xl md:text-2xl italic mb-8">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex flex-col items-center">
                      <div className="h-16 w-16 rounded-full overflow-hidden mb-4">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-lg">{testimonial.name}</p>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full transition-colors ${index === activeIndex ? 'bg-marketplace-purple' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
