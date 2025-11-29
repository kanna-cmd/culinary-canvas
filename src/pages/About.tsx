import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import chefImage from "@/assets/chef-portrait.jpg";
import heroImage from "@/assets/hero-restaurant.jpg";
import banquetImage from "@/assets/banquet-hall.jpg";
import { Award, Heart, Leaf, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "Every dish is crafted with love and dedication to the art of cooking.",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "We source only the finest, locally-grown seasonal ingredients.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering exceptional dining experiences every time.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building lasting relationships with our guests and local partners.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-primary-foreground">
          <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
            Discover
          </p>
          <h1 className="heading-display">Our Story</h1>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-elegant">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <p className="text-accent font-body text-sm tracking-[0.3em] uppercase">
                Since 1998
              </p>
              <h2 className="heading-section text-foreground">
                A Journey of Culinary Excellence
              </h2>
              <div className="w-20 h-1 bg-accent" />
              <p className="text-muted-foreground text-lg leading-relaxed">
                La Tavola was born from a dream to create a dining destination that would 
                celebrate the art of fine cuisine while honoring time-tested traditions. 
                What started as a small family restaurant has grown into one of the city's 
                most beloved culinary establishments.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our founder's vision was simple yet profound: to create a place where every 
                guest feels like family, where every meal is a celebration, and where the 
                passion for great food is evident in every bite.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we continue this legacy, blending classic techniques with modern 
                innovation to create dishes that surprise and delight. Our commitment to 
                excellence has earned us recognition from food critics and loyal patrons alike.
              </p>
            </div>
            <div className="relative">
              <img
                src={banquetImage}
                alt="Restaurant dining area"
                className="rounded-lg shadow-elegant w-full"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 border-4 border-accent rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-cream-dark">
        <div className="container-elegant">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
              What We Believe
            </p>
            <h2 className="heading-section text-foreground mb-6">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6 card-elegant">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef */}
      <section className="section-padding bg-background">
        <div className="container-elegant">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src={chefImage}
                alt="Executive Chef"
                className="rounded-lg shadow-elegant w-full max-w-md mx-auto"
              />
              <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-accent rounded-lg -z-10" />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <p className="text-accent font-body text-sm tracking-[0.3em] uppercase">
                Meet Our Chef
              </p>
              <h2 className="heading-section text-foreground">
                Executive Chef Marco Rossi
              </h2>
              <div className="w-20 h-1 bg-accent" />
              <p className="text-muted-foreground text-lg leading-relaxed">
                With over 25 years of culinary experience, Chef Marco brings his passion 
                and expertise to every dish at La Tavola. Trained in the finest kitchens 
                of Italy and France, he has developed a unique style that honors 
                traditional techniques while embracing modern innovation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Chef Marco's philosophy is rooted in respect for ingredients and a 
                commitment to creating dishes that tell a story. His menus change 
                seasonally to showcase the best local produce, ensuring every visit 
                offers something new and exciting.
              </p>
              <blockquote className="border-l-4 border-accent pl-6 italic text-muted-foreground">
                "Cooking is about love. When you cook with love, people can taste it."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container-elegant">
          <h2 className="heading-subsection mb-6">Experience La Tavola</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Join us for an unforgettable dining experience and discover why guests 
            keep coming back.
          </p>
          <Button variant="heroOutline" size="xl" asChild>
            <Link to="/reservation">Reserve Your Table</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
