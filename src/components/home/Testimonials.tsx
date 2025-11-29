import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Food Critic",
    content: "La Tavola offers an unparalleled dining experience. The attention to detail in every dish is remarkable. A true gem in the city's culinary scene.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Regular Guest",
    content: "We've celebrated every anniversary here for the past decade. The ambiance, service, and food consistently exceed our expectations.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Event Planner",
    content: "Their banquet facilities are stunning, and the team's professionalism made our corporate event absolutely seamless.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-elegant">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
            Guest Experiences
          </p>
          <h2 className="heading-section mb-6">
            What Our Guests Say
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/30" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-primary-foreground/90 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div>
                <p className="font-heading font-semibold">{testimonial.name}</p>
                <p className="text-sm text-primary-foreground/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
