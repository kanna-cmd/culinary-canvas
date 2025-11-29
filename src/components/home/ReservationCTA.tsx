import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users } from "lucide-react";
import banquetImage from "@/assets/banquet-hall.jpg";

export const ReservationCTA = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={banquetImage}
          alt="Elegant banquet hall"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-elegant">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
            Reserve Your Experience
          </p>
          <h2 className="heading-section mb-6">
            Book Your Table Today
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg text-primary-foreground/80 mb-12">
            Whether it's an intimate dinner for two or a grand celebration, 
            our team is ready to create an unforgettable experience for you.
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full border-2 border-accent flex items-center justify-center">
                <Calendar className="w-7 h-7 text-accent" />
              </div>
              <p className="font-heading font-semibold">Easy Booking</p>
              <p className="text-sm text-primary-foreground/60">Online reservations available</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full border-2 border-accent flex items-center justify-center">
                <Users className="w-7 h-7 text-accent" />
              </div>
              <p className="font-heading font-semibold">Private Events</p>
              <p className="text-sm text-primary-foreground/60">Customized celebrations</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full border-2 border-accent flex items-center justify-center">
                <Clock className="w-7 h-7 text-accent" />
              </div>
              <p className="font-heading font-semibold">Flexible Hours</p>
              <p className="text-sm text-primary-foreground/60">Open 7 days a week</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/reservation">Make a Reservation</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/banquet">Private Events</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
