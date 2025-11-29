import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";

const menuCategories = {
  appetizers: [
    { name: "Bruschetta Trio", description: "Toasted ciabatta with tomato basil, mushroom truffle, and prosciutto fig", price: "$16" },
    { name: "Carpaccio di Manzo", description: "Thinly sliced beef tenderloin, arugula, capers, parmesan shavings", price: "$22" },
    { name: "Calamari Fritti", description: "Crispy fried calamari with marinara and lemon aioli", price: "$18" },
    { name: "Burrata Caprese", description: "Creamy burrata, heirloom tomatoes, fresh basil, aged balsamic", price: "$20" },
    { name: "Soup of the Day", description: "Chef's daily creation with artisan bread", price: "$12" },
  ],
  pasta: [
    { name: "Spaghetti Pomodoro", description: "San Marzano tomatoes, fresh basil, extra virgin olive oil, parmesan", price: "$28" },
    { name: "Fettuccine Alfredo", description: "House-made fettuccine, cream sauce, parmesan, cracked pepper", price: "$26" },
    { name: "Lobster Ravioli", description: "Butter-poached lobster, saffron cream, chives", price: "$42" },
    { name: "Pappardelle Bolognese", description: "Slow-cooked beef and pork ragù, pecorino romano", price: "$32" },
    { name: "Risotto ai Funghi", description: "Arborio rice, wild mushrooms, truffle oil, parmesan", price: "$34" },
  ],
  entrees: [
    { name: "Prime Ribeye", description: "16oz dry-aged ribeye, herb butter, roasted vegetables, red wine jus", price: "$56" },
    { name: "Filet Mignon", description: "8oz center cut, truffle mashed potatoes, asparagus, béarnaise", price: "$52" },
    { name: "Atlantic Salmon", description: "Pan-seared salmon, lemon butter, seasonal vegetables", price: "$42" },
    { name: "Chicken Marsala", description: "Pan-roasted chicken, mushroom marsala sauce, herb potatoes", price: "$36" },
    { name: "Branzino", description: "Whole roasted Mediterranean sea bass, capers, olives, cherry tomatoes", price: "$48" },
    { name: "Veal Piccata", description: "Tender veal cutlets, lemon caper sauce, pasta primavera", price: "$44" },
  ],
  desserts: [
    { name: "Tiramisu", description: "Classic Italian dessert with mascarpone, espresso, cocoa", price: "$14" },
    { name: "Panna Cotta", description: "Vanilla bean cream, berry compote, mint", price: "$12" },
    { name: "Chocolate Fondant", description: "Warm molten chocolate cake, vanilla gelato", price: "$16" },
    { name: "Cannoli", description: "Crispy shells, sweet ricotta, chocolate chips, pistachios", price: "$12" },
    { name: "Affogato", description: "Vanilla gelato drowned in hot espresso", price: "$10" },
  ],
  beverages: [
    { name: "Espresso", description: "Single or double shot", price: "$4 / $6" },
    { name: "Cappuccino", description: "Espresso with steamed milk foam", price: "$6" },
    { name: "Fresh Lemonade", description: "House-made with mint", price: "$5" },
    { name: "Italian Sodas", description: "Various flavors available", price: "$5" },
    { name: "Wine by the Glass", description: "See sommelier for selections", price: "from $12" },
  ],
};

const Menu = () => {
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
            Culinary Excellence
          </p>
          <h1 className="heading-display">Our Menu</h1>
        </div>
      </section>

      {/* Menu */}
      <section className="section-padding bg-background">
        <div className="container-elegant">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-muted-foreground text-lg">
              Our menu features seasonal dishes crafted with the finest ingredients. 
              Prices are subject to change based on market availability.
            </p>
            <Button variant="outline" size="lg" className="mt-6">
              <Download className="w-4 h-4 mr-2" />
              Download Menu PDF
            </Button>
          </div>

          <Tabs defaultValue="appetizers" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto p-0 mb-12">
              {Object.keys(menuCategories).map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="px-6 py-3 rounded-full capitalize font-body text-sm tracking-wider data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-border hover:bg-muted transition-colors"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(menuCategories).map(([category, items]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="max-w-3xl mx-auto">
                  <h2 className="heading-subsection text-center text-foreground mb-12 capitalize">
                    {category}
                  </h2>
                  <div className="space-y-8">
                    {items.map((item) => (
                      <div
                        key={item.name}
                        className="flex justify-between items-start gap-4 pb-6 border-b border-border"
                      >
                        <div className="flex-1">
                          <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                            {item.name}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {item.description}
                          </p>
                        </div>
                        <span className="text-accent font-heading font-bold text-lg whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-cream-dark">
        <div className="container-elegant text-center">
          <p className="text-muted-foreground text-sm">
            Please inform your server of any allergies or dietary restrictions. 
            A 20% gratuity will be added for parties of 6 or more.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
