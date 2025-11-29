import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-restaurant.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Elegant restaurant interior with warm lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-elegant text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-accent font-body text-lg tracking-[0.3em] uppercase animate-fade-in">
            Welcome to
          </p>
          <h1 className="heading-display text-white drop-shadow-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
            La Tavola
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Experience the art of fine dining where traditional recipes meet contemporary elegance. 
            Every dish tells a story of passion, quality, and culinary excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in-delay-3">
            <Button variant="hero" size="xl" asChild>
              <Link to="/reservation">Reserve a Table</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/menu">View Our Menu</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
