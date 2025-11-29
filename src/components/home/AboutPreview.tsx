import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import chefImage from "@/assets/chef-portrait.jpg";

export const AboutPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-elegant">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={chefImage}
                alt="Executive Chef"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-accent rounded-lg -z-10" />
            {/* Experience Badge */}
            <div className="absolute -top-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-elegant">
              <p className="text-4xl font-heading font-bold">25+</p>
              <p className="text-sm uppercase tracking-wider">Years of Excellence</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-accent font-body text-sm tracking-[0.3em] uppercase">
              Our Story
            </p>
            <h2 className="heading-section text-foreground">
              A Legacy of Culinary Excellence
            </h2>
            <div className="w-20 h-1 bg-accent" />
            <p className="text-muted-foreground text-lg leading-relaxed">
              Since 1998, La Tavola has been a beacon of fine dining in the heart of New York. 
              Our journey began with a simple vision: to create unforgettable dining experiences 
              that celebrate the rich heritage of culinary artistry.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Under the guidance of our Executive Chef, every dish is crafted with passion, 
              using only the finest locally-sourced ingredients. We believe that great food 
              is not just about taste—it's about creating moments that bring people together.
            </p>
            <div className="pt-4">
              <Button variant="elegant" size="lg" asChild>
                <Link to="/about">Discover Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
