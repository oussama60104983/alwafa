import { Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Metals", href: "#metals" },
    { label: "Petroleum", href: "#petroleum" },
    { label: "Contact", href: "#contact" },
  ];
  const services = [
    "Metals Trading",
    "Minerals Trading",
    "Petroleum Products",
    "Commodity Brokerage",
    "Market Consultation",
  ];

  return (
    <footer className="relative bg-gradient-to-b from-navy to-navy-light text-primary-foreground pt-12 pb-6">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Company Info Card */}
          <Card className="bg-card/5 border-gold/20 backdrop-blur-sm">
            <CardContent className="pt-4 pb-4">
              <h3 className="text-lg font-bold text-gold mb-3">AL WAFA</h3>
              <p className="text-primary-foreground/70 mb-4 leading-relaxed text-xs">
                Leading commodities broker connecting real buyers to real sellers in metals, minerals, and petroleum products globally.
              </p>
              <div className="flex space-x-2">
                <a
                  href="#"
                  className="p-2 bg-gold/10 hover:bg-gold/20 rounded-lg transition-smooth border border-gold/30"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-gold" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gold/10 hover:bg-gold/20 rounded-lg transition-smooth border border-gold/30"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 text-gold" />
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Quick Links Card */}
          <Card className="bg-card/5 border-gold/20 backdrop-blur-sm">
            <CardContent className="pt-4 pb-4">
              <h3 className="text-base font-semibold mb-3 text-gold flex items-center">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/70 hover:text-gold transition-smooth flex items-center group text-xs"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-gold transition-all duration-300 mr-0 group-hover:mr-2" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Services Card */}
          <Card className="bg-card/5 border-gold/20 backdrop-blur-sm">
            <CardContent className="pt-4 pb-4">
              <h3 className="text-base font-semibold mb-3 text-gold">Our Services</h3>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index} className="text-primary-foreground/70 flex items-start text-xs">
                    <span className="text-gold mr-2 mt-0.5">→</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Contact Info Card */}
          <Card className="bg-card/5 border-gold/20 backdrop-blur-sm">
            <CardContent className="pt-4 pb-4">
              <h3 className="text-base font-semibold mb-3 text-gold">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/70 text-xs leading-relaxed">
                    Zone 90, Street 720<br />
                    Building 54, Floor 2, Office 10<br />
                    Al Wakrah - Qatar State
                  </span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Phone className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col space-y-1">
                    <span className="text-primary-foreground/70 text-xs">
                      +974-55566335
                    </span>
                    <span className="text-primary-foreground/70 text-xs">
                      +974-33340730
                    </span>
                  </div>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Mail className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/70 text-xs">
                    info@alwafatrading.qa
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-primary-foreground/50 text-xs text-center md:text-left">
              © {currentYear} AL WAFA Brokerage Trading L.L.C. All rights reserved.
            </p>
            <div className="flex space-x-5 text-xs">
              <a
                href="#"
                className="text-primary-foreground/50 hover:text-gold transition-smooth"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-primary-foreground/50 hover:text-gold transition-smooth"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;