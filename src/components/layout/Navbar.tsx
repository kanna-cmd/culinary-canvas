import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Menu", path: "/menu" },
  { name: "Banquet", path: "/banquet" },
  { name: "Gallery", path: "/gallery" },
  { name: "Catering", path: "/catering" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container-elegant">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span
              className={cn(
                "font-heading text-2xl md:text-3xl font-semibold transition-colors duration-300",
                isScrolled ? "text-primary" : "text-primary-foreground"
              )}
            >
              La Tavola
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "font-body text-sm uppercase tracking-wider transition-colors duration-300 hover:text-accent",
                  location.pathname === link.path
                    ? "text-accent font-semibold"
                    : isScrolled
                    ? "text-foreground"
                    : "text-primary-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+1234567890"
              className={cn(
                "flex items-center gap-2 text-sm transition-colors duration-300",
                isScrolled ? "text-foreground" : "text-primary-foreground"
              )}
            >
              <Phone className="w-4 h-4" />
              <span>(123) 456-7890</span>
            </a>
            <Button variant={isScrolled ? "elegant" : "heroOutline"} size="sm" asChild>
              <Link to="/reservation">Book a Table</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 transition-colors",
              isScrolled ? "text-foreground" : "text-primary-foreground"
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-500",
            isOpen ? "max-h-screen opacity-100 mt-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="bg-background/95 backdrop-blur-md rounded-lg p-6 shadow-elegant">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "font-body text-base py-2 border-b border-border transition-colors",
                    location.pathname === link.path
                      ? "text-accent font-semibold"
                      : "text-foreground hover:text-accent"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="elegant" className="mt-4" asChild>
                <Link to="/reservation">Book a Table</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
