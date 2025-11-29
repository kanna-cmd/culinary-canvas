import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Utensils, Music, Camera } from "lucide-react";
import banquetImage from "@/assets/banquet-hall.jpg";
import heroImage from "@/assets/hero-restaurant.jpg";

const features = [
  {
    icon: Users,
    title: "Capacity",
    description: "Accommodates up to 150 guests for seated dinners or 200 for cocktail receptions",
  },
  {
    icon: Utensils,
    title: "Custom Menus",
    description: "Work with our chef to create a personalized menu for your special occasion",
  },
  {
    icon: Music,
    title: "Entertainment",
    description: "State-of-the-art audio/visual equipment and space for live entertainment",
  },
  {
    icon: Camera,
    title: "Memorable Setting",
    description: "Elegant décor providing the perfect backdrop for photos and memories",
  },
];

const eventTypes = [
  "Wedding Receptions",
  "Corporate Events",
  "Birthday Celebrations",
  "Anniversary Parties",
  "Graduation Dinners",
  "Holiday Gatherings",
  "Retirement Parties",
  "Engagement Parties",
];

const Banquet = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={banquetImage}
            alt="Elegant banquet hall"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-primary-foreground">
          <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
            Private Events
          </p>
          <h1 className="heading-display">Banquet Facility</h1>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-background">
        <div className="container-elegant">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <p className="text-accent font-body text-sm tracking-[0.3em] uppercase">
                Exclusive Venue
              </p>
              <h2 className="heading-section text-foreground">
                The Grand Ballroom
              </h2>
              <div className="w-20 h-1 bg-accent" />
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our stunning Grand Ballroom offers the perfect setting for your most 
                important celebrations. With soaring ceilings, crystal chandeliers, 
                and elegant décor, every event becomes an unforgettable occasion.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From intimate gatherings to grand celebrations, our experienced 
                events team will work closely with you to ensure every detail is 
                perfect. Let us help you create memories that last a lifetime.
              </p>
              <Button variant="elegant" size="lg" asChild>
                <Link to="/contact">Inquire About Booking</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Banquet setup"
                className="rounded-lg shadow-elegant w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-accent rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-cream-dark">
        <div className="container-elegant">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
              What We Offer
            </p>
            <h2 className="heading-section text-foreground mb-6">
              Venue Features
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center p-6 card-elegant">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-elegant">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
              Perfect For
            </p>
            <h2 className="heading-section mb-6">Events We Host</h2>
            <div className="w-20 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {eventTypes.map((event) => (
              <div
                key={event}
                className="bg-primary-foreground/10 rounded-lg p-4 text-center hover:bg-primary-foreground/20 transition-colors"
              >
                <p className="font-heading font-medium">{event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-background">
        <div className="container-elegant">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-section text-foreground mb-6">
              Venue Gallery
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[banquetImage, heroImage, banquetImage, heroImage, banquetImage, heroImage].map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={img}
                  alt={`Banquet venue ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream-dark">
        <div className="container-elegant text-center">
          <h2 className="heading-subsection text-foreground mb-6">
            Ready to Plan Your Event?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contact our events team to discuss your vision and receive a 
            customized proposal for your special occasion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="elegant" size="lg" asChild>
              <Link to="/contact">Request Information</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+1234567890">Call (123) 456-7890</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Banquet;
