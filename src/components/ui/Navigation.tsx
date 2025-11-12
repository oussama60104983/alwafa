import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/LOGO.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Metals", id: "metals" },
    { label: "Petroleum", id: "petroleum" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy/95 backdrop-blur-md shadow-elegant" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center h-24 relative">
          {/* Spacer for 22% positioning */}
          <div className="w-[22%]"></div>
          
          {/* Logo - positioned at 22% from left */}
          <div className="absolute left-[22%] transform -translate-x-1/2 flex items-center py-1">
            <img 
              src={logo} 
              alt="AL WAFA Brokerage Trading W.L.L" 
              className="h-[77px] w-auto min-w-[208px] object-contain scale-x-[1.3]" 
            />
          </div>

          {/* Desktop Navigation - stays on the right */}
          <div className="hidden md:flex items-center gap-6 ml-auto">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-primary-foreground hover:text-gold transition-smooth text-[11px] font-medium py-2"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gold hover:bg-gold-dark text-navy font-semibold text-[11px] px-4 py-1.5 h-auto"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground p-2 ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gold/20">
            <div className="flex flex-col py-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-primary-foreground hover:text-gold transition-smooth text-left px-6 py-2.5 text-[11px] font-medium"
                >
                  {link.label}
                </button>
              ))}
              <div className="px-6 pt-2">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-gold hover:bg-gold-dark text-navy font-semibold text-[11px] w-full py-2 h-auto"
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
