import { MapPin, Clock, Phone, Mail } from "lucide-react";

export const LocationHours = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-elegant">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-elegant h-[400px] lg:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076794379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5eae0fb!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635959755123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant Location"
            />
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
                Visit Us
              </p>
              <h2 className="heading-section text-foreground mb-6">
                Location & Hours
              </h2>
              <div className="w-20 h-1 bg-accent" />
            </div>

            {/* Address */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                  Address
                </h3>
                <p className="text-muted-foreground">
                  123 Gourmet Street<br />
                  New York, NY 10001
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Opening Hours
                </h3>
                <div className="space-y-1 text-muted-foreground">
                  <div className="flex justify-between gap-8">
                    <span>Monday - Thursday</span>
                    <span>11:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span>Friday - Saturday</span>
                    <span>11:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span>Sunday</span>
                    <span>12:00 PM - 9:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                  Contact
                </h3>
                <p className="text-muted-foreground">
                  <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                    (123) 456-7890
                  </a>
                </p>
                <p className="text-muted-foreground">
                  <a href="mailto:info@latavola.com" className="hover:text-accent transition-colors">
                    info@latavola.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
