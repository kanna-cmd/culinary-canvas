import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { FeaturedDishes } from "@/components/home/FeaturedDishes";
import { Testimonials } from "@/components/home/Testimonials";
import { ReservationCTA } from "@/components/home/ReservationCTA";
import { LocationHours } from "@/components/home/LocationHours";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutPreview />
      <FeaturedDishes />
      <ReservationCTA />
      <Testimonials />
      <LocationHours />
    </Layout>
  );
};

export default Index;
