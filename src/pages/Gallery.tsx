import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { X } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";
import banquetImage from "@/assets/banquet-hall.jpg";
import chefImage from "@/assets/chef-portrait.jpg";
import dishPasta from "@/assets/dish-pasta.jpg";
import dishSteak from "@/assets/dish-steak.jpg";
import dishSeafood from "@/assets/dish-seafood.jpg";

const galleryImages = [
  { src: heroImage, category: "Interior", alt: "Restaurant dining room" },
  { src: dishPasta, category: "Food", alt: "Signature pasta dish" },
  { src: banquetImage, category: "Interior", alt: "Banquet hall" },
  { src: dishSteak, category: "Food", alt: "Prime ribeye steak" },
  { src: chefImage, category: "Team", alt: "Executive chef" },
  { src: dishSeafood, category: "Food", alt: "Fresh seafood" },
  { src: heroImage, category: "Interior", alt: "Bar area" },
  { src: dishPasta, category: "Food", alt: "Appetizer platter" },
  { src: banquetImage, category: "Events", alt: "Private event setup" },
  { src: dishSteak, category: "Food", alt: "Dessert selection" },
  { src: heroImage, category: "Interior", alt: "Private dining room" },
  { src: dishSeafood, category: "Food", alt: "Wine pairing" },
];

const categories = ["All", "Interior", "Food", "Events", "Team"];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = filter === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === filter);

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
            Visual Journey
          </p>
          <h1 className="heading-display">Gallery</h1>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-background">
        <div className="container-elegant">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-body text-sm tracking-wider transition-colors ${
                  filter === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
