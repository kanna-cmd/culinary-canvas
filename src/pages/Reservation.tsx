import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Calendar, Clock, Users, Phone } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";

const timeSlots = [
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
  "2:00 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM",
  "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM",
];

const Reservation = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    requests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Reservation Request Submitted!",
      description: "We'll confirm your booking via email within 2 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      occasion: "",
      requests: "",
    });
  };

  // Get tomorrow's date as minimum
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Restaurant ambiance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-primary-foreground">
          <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
            Book Your Experience
          </p>
          <h1 className="heading-display">Reservations</h1>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding bg-background">
        <div className="container-elegant">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Info */}
            <div className="space-y-8">
              <div>
                <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
                  Reserve Your Table
                </p>
                <h2 className="heading-section text-foreground mb-6">
                  Make a Reservation
                </h2>
                <div className="w-20 h-1 bg-accent" />
              </div>

              <p className="text-muted-foreground text-lg">
                Join us for an unforgettable dining experience. Reserve your table 
                online or call us directly for immediate assistance.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-4 bg-cream-dark rounded-lg">
                  <Calendar className="w-8 h-8 text-accent" />
                  <div>
                    <p className="font-heading font-semibold text-foreground">Book Ahead</p>
                    <p className="text-sm text-muted-foreground">Up to 30 days in advance</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-cream-dark rounded-lg">
                  <Clock className="w-8 h-8 text-accent" />
                  <div>
                    <p className="font-heading font-semibold text-foreground">Confirmation</p>
                    <p className="text-sm text-muted-foreground">Within 2 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-cream-dark rounded-lg">
                  <Users className="w-8 h-8 text-accent" />
                  <div>
                    <p className="font-heading font-semibold text-foreground">Party Size</p>
                    <p className="text-sm text-muted-foreground">Up to 12 guests</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-cream-dark rounded-lg">
                  <Phone className="w-8 h-8 text-accent" />
                  <div>
                    <p className="font-heading font-semibold text-foreground">Call Us</p>
                    <p className="text-sm text-muted-foreground">(123) 456-7890</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  Large Parties & Private Events
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  For parties larger than 12 guests or private event inquiries, 
                  please contact our events team directly.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="tel:+1234567890">Contact Events Team</a>
                </Button>
              </div>
            </div>

            {/* Form */}
            <div className="card-elegant p-8">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                Reservation Details
              </h3>

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

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date *</Label>
                    <Input
                      id="date"
                      type="date"
                      required
                      min={minDate}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Time *</Label>
                    <Select
                      value={formData.time}
                      onValueChange={(value) => setFormData({ ...formData, time: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="guests">Number of Guests *</Label>
                    <Select
                      value={formData.guests}
                      onValueChange={(value) => setFormData({ ...formData, guests: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select guests" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "Guest" : "Guests"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="occasion">Occasion</Label>
                    <Select
                      value={formData.occasion}
                      onValueChange={(value) => setFormData({ ...formData, occasion: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select occasion" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No special occasion</SelectItem>
                        <SelectItem value="birthday">Birthday</SelectItem>
                        <SelectItem value="anniversary">Anniversary</SelectItem>
                        <SelectItem value="date">Date Night</SelectItem>
                        <SelectItem value="business">Business Dinner</SelectItem>
                        <SelectItem value="celebration">Celebration</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requests">Special Requests</Label>
                  <Textarea
                    id="requests"
                    rows={3}
                    placeholder="Dietary restrictions, seating preferences, special arrangements..."
                    value={formData.requests}
                    onChange={(e) => setFormData({ ...formData, requests: e.target.value })}
                  />
                </div>

                <Button type="submit" variant="elegant" size="lg" className="w-full">
                  Request Reservation
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  By submitting, you agree to our cancellation policy. 
                  Please cancel at least 24 hours in advance.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reservation;
