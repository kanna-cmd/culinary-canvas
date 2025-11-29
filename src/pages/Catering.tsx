import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Check, Utensils, Users, Truck } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";

const packages = [
  {
    name: "Essential",
    price: "From $35/person",
    description: "Perfect for casual gatherings and office events",
    features: [
      "Choice of 2 appetizers",
      "1 main course option",
      "2 side dishes",
      "Basic tableware included",
      "Delivery within 10 miles",
    ],
  },
  {
    name: "Premium",
    price: "From $55/person",
    description: "Ideal for special celebrations and corporate dinners",
    features: [
      "Choice of 4 appetizers",
      "2 main course options",
      "3 side dishes",
      "Dessert selection",
      "Premium tableware & linens",
      "Delivery within 20 miles",
      "Setup service included",
    ],
    popular: true,
  },
  {
    name: "Luxury",
    price: "From $85/person",
    description: "The ultimate catering experience for prestigious events",
    features: [
      "Full appetizer station",
      "Choice of 3 main courses",
      "4 side dishes",
      "Dessert bar",
      "Premium tableware & décor",
      "Extended delivery range",
      "Full setup & breakdown",
      "On-site chef available",
      "Service staff included",
    ],
  },
];

const Catering = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    guestCount: "",
    eventType: "",
    package: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Submitted!",
      description: "Our catering team will contact you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      guestCount: "",
      eventType: "",
      package: "",
      message: "",
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Catering setup"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-primary-foreground">
          <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
            Off-Site Dining
          </p>
          <h1 className="heading-display">Catering Services</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-background">
        <div className="container-elegant">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
              Bring La Tavola To You
            </p>
            <h2 className="heading-section text-foreground mb-6">
              Exceptional Catering for Every Occasion
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8" />
            <p className="text-muted-foreground text-lg">
              From intimate gatherings to grand celebrations, our catering team brings 
              the same passion and quality you experience at our restaurant directly 
              to your event venue.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                Custom Menus
              </h3>
              <p className="text-muted-foreground text-sm">
                Work with our chef to create a menu tailored to your event
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                Professional Staff
              </h3>
              <p className="text-muted-foreground text-sm">
                Experienced servers and bartenders available for your event
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                Full Service
              </h3>
              <p className="text-muted-foreground text-sm">
                Delivery, setup, and cleanup so you can focus on your guests
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-cream-dark">
        <div className="container-elegant">
          <div className="text-center mb-16">
            <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
              Our Offerings
            </p>
            <h2 className="heading-section text-foreground mb-6">
              Catering Packages
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`card-elegant p-8 relative ${
                  pkg.popular ? "border-2 border-accent" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="text-accent font-heading font-bold text-xl mb-4">
                  {pkg.price}
                </p>
                <p className="text-muted-foreground text-sm mb-6">
                  {pkg.description}
                </p>
                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section-padding bg-background">
        <div className="container-elegant">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
                Get Started
              </p>
              <h2 className="heading-section text-foreground mb-6">
                Request a Quote
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="eventDate">Event Date *</Label>
                  <Input
                    id="eventDate"
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="guestCount">Number of Guests *</Label>
                  <Input
                    id="guestCount"
                    type="number"
                    min="10"
                    required
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="package">Preferred Package</Label>
                  <Select
                    value={formData.package}
                    onValueChange={(value) => setFormData({ ...formData, package: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a package" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="essential">Essential</SelectItem>
                      <SelectItem value="premium">Premium</SelectItem>
                      <SelectItem value="luxury">Luxury</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Tell Us About Your Event</Label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Describe your event, dietary requirements, or any special requests..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button type="submit" variant="elegant" size="lg" className="w-full">
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Catering;
