import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import dishPasta from "@/assets/dish-pasta.jpg";
import dishSteak from "@/assets/dish-steak.jpg";
import dishSeafood from "@/assets/dish-seafood.jpg";

const dishes = [
  {
    name: "Spaghetti Pomodoro",
    description: "Fresh pasta with San Marzano tomatoes, basil, and aged parmesan",
    price: "$28",
    image: dishPasta,
    category: "Pasta",
  },
  {
    name: "Prime Ribeye",
    description: "Dry-aged ribeye with herb butter, roasted vegetables, and red wine jus",
    price: "$56",
    image: dishSteak,
    category: "Entrée",
  },
  {
    name: "Atlantic Salmon",
    description: "Pan-seared salmon with lemon butter sauce and seasonal vegetables",
    price: "$42",
    image: dishSeafood,
    category: "Seafood",
  },
];

export const FeaturedDishes = () => {
  return (
    <section className="section-padding bg-cream-dark">
      <div className="container-elegant">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
            Culinary Delights
          </p>
          <h2 className="heading-section text-foreground mb-6">
            Signature Dishes
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-muted-foreground text-lg">
            Discover our chef's masterful creations, where tradition meets innovation 
            in every carefully crafted plate.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div
              key={dish.name}
              className="card-elegant group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-body">
                  {dish.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {dish.name}
                  </h3>
                  <span className="text-accent font-heading text-xl font-bold">
                    {dish.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="elegant" size="lg" asChild>
            <Link to="/menu">View Full Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
