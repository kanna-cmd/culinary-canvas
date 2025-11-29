import { useState, useEffect, useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import heroImage from "@/assets/hero-restaurant.jpg";
import banquetImage from "@/assets/banquet-hall.jpg";
import chefImage from "@/assets/chef-portrait.jpg";
import dishPasta from "@/assets/dish-pasta.jpg";
import dishSteak from "@/assets/dish-steak.jpg";
import dishSeafood from "@/assets/dish-seafood.jpg";

gsap.registerPlugin(ScrollTrigger);

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

const featuredImages = [
  { src: heroImage, title: "Elegant Dining Room", description: "Experience fine dining in our beautifully designed main hall" },
  { src: dishSteak, title: "Prime Cuts", description: "Only the finest dry-aged steaks make it to our kitchen" },
  { src: banquetImage, title: "Private Events", description: "Host your special occasions in our stunning banquet hall" },
  { src: dishSeafood, title: "Ocean Fresh", description: "Daily catch prepared with Mediterranean flair" },
  { src: chefImage, title: "Master Chef", description: "Led by our award-winning Executive Chef" },
];

const categories = ["All", "Interior", "Food", "Events", "Team"];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  const filteredImages = filter === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === filter);

  // GSAP Hero animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animation
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
      );
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out", delay: 0.4 }
      );

      // Parallax effect on hero image
      gsap.to(heroRef.current?.querySelector("img"), {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  // GSAP Carousel section animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        carouselRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: carouselRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  // GSAP Filter buttons animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        filterRef.current?.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: filterRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  // GSAP Grid animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gridRef.current?.querySelectorAll(".gallery-item");
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, [filter]);

  // Lightbox navigation
  const navigateLightbox = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    const newIndex = direction === "prev"
      ? (selectedImage - 1 + filteredImages.length) % filteredImages.length
      : (selectedImage + 1) % filteredImages.length;
    setSelectedImage(newIndex);
  };

  return (
    <Layout>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Restaurant interior"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
        <div className="relative z-10 text-center text-primary-foreground">
          <p ref={subtitleRef} className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4 opacity-0">
            Visual Journey
          </p>
          <h1 ref={titleRef} className="heading-display opacity-0">Gallery</h1>
        </div>
      </section>

      {/* Featured Slider */}
      <section className="section-padding bg-primary">
        <div ref={carouselRef} className="container-elegant">
          <div className="text-center mb-12">
            <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
              Featured
            </p>
            <h2 className="heading-section text-primary-foreground">
              Highlights
            </h2>
          </div>

          <Carousel
            opts={{ align: "center", loop: true }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {featuredImages.map((image, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-2/3">
                  <div className="relative group overflow-hidden rounded-xl aspect-[16/10]">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="font-heading text-2xl text-primary-foreground mb-2">{image.title}</h3>
                      <p className="text-primary-foreground/80 font-body">{image.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-accent text-accent-foreground border-none hover:bg-accent/80" />
            <CarouselNext className="right-4 bg-accent text-accent-foreground border-none hover:bg-accent/80" />
          </Carousel>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-background">
        <div className="container-elegant">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
              Explore
            </p>
            <h2 className="heading-section text-foreground">
              Our Collection
            </h2>
          </div>

          {/* Filters */}
          <div ref={filterRef} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-body text-sm tracking-wider transition-all duration-300 transform hover:scale-105 ${
                  filter === category
                    ? "bg-primary text-primary-foreground shadow-elegant"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={`${filter}-${index}`}
                className="gallery-item aspect-square overflow-hidden rounded-lg cursor-pointer group relative"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-primary-foreground font-heading text-lg px-4 py-2 border border-primary-foreground/50 rounded">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors z-50"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation */}
          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-primary-foreground hover:text-accent transition-colors p-2 bg-primary/50 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("prev");
            }}
            aria-label="Previous"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-primary-foreground hover:text-accent transition-colors p-2 bg-primary/50 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("next");
            }}
            aria-label="Next"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="text-center">
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="mt-4 text-primary-foreground font-body text-lg">
              {filteredImages[selectedImage].alt}
            </p>
            <p className="text-accent text-sm mt-1">
              {selectedImage + 1} / {filteredImages.length}
            </p>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
