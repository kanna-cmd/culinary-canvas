import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Download, FileText, Eye } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";
import dishPasta from "@/assets/dish-pasta.jpg";
import dishSteak from "@/assets/dish-steak.jpg";
import dishSeafood from "@/assets/dish-seafood.jpg";

const menuKits = [
  {
    title: "Full Menu",
    description: "Complete dining menu with all courses, descriptions, and pricing",
    pages: "12 pages",
    image: dishPasta,
  },
  {
    title: "Wine List",
    description: "Curated selection of wines from around the world",
    pages: "8 pages",
    image: dishSteak,
  },
  {
    title: "Catering Menu",
    description: "Special packages and pricing for off-site catering",
    pages: "6 pages",
    image: dishSeafood,
  },
];

const MenuKit = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Restaurant menu"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-primary-foreground">
          <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
            Download & Explore
          </p>
          <h1 className="heading-display">Menu Kit</h1>
        </div>
      </section>

      {/* Downloads */}
      <section className="section-padding bg-background">
        <div className="container-elegant">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
              Take Us With You
            </p>
            <h2 className="heading-section text-foreground mb-6">
              Downloadable Menus
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8" />
            <p className="text-muted-foreground text-lg">
              Browse our menus at your convenience. Download high-quality PDFs 
              to share with friends, plan your dining experience, or explore 
              our catering options.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {menuKits.map((kit) => (
              <div key={kit.title} className="card-elegant overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={kit.image}
                    alt={kit.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-heading text-xl font-semibold text-primary-foreground">
                      {kit.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-muted-foreground text-sm">{kit.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FileText className="w-4 h-4" />
                    <span>{kit.pages}</span>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button variant="elegant" size="sm" className="flex-1">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All-in-One Download */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-elegant text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="heading-subsection mb-6">Complete Menu Kit</h2>
            <p className="text-primary-foreground/80 mb-8">
              Download all our menus in one convenient package. Perfect for 
              planning events or sharing with family and friends.
            </p>
            <Button variant="heroOutline" size="xl">
              <Download className="w-5 h-5 mr-2" />
              Download Complete Kit (PDF)
            </Button>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-cream-dark">
        <div className="container-elegant text-center">
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Menu items and prices are subject to change based on seasonal availability. 
            For the most current information, please contact the restaurant directly 
            or visit us in person.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default MenuKit;
