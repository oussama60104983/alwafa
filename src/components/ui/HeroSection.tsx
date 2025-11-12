import { ArrowRight, Globe, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroBg from "@/assets/hero-bg.svg";
import logo from "@/assets/logo.svg";
const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const features = [{
    icon: Globe,
    title: "Global Reach",
    description: "Connecting markets worldwide"
  }, {
    icon: TrendingUp,
    title: "Market Expertise",
    description: "Deep industry knowledge"
  }, {
    icon: Shield,
    title: "Trusted Partner",
    description: "Reliable and secure trading"
  }];
  return <section id="home" className="relative min-h-screen flex items-center justify-center pt-16" style={{
    backgroundImage: `url(${heroBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed"
  }}>
      {/* Overlay with logo watermark */}
      <div className="absolute inset-0 gradient-hero" />
      <div 
        className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: `url(${logo})`,
          backgroundSize: "400px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4 leading-tight">
            Connecting <span className="text-gold">Real Buyers</span> to{" "}
            <span className="text-gold">Real Sellers</span>
          </h1>
          <p className="text-base md:text-lg text-primary-foreground/90 mb-5 leading-relaxed">
            In the Global Commodities Market
          </p>
          <p className="text-sm md:text-base text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Marketing for metals, minerals, and petroleum encompasses strategies to promote and sell these commodities globally. Effective marketing considers supply and demand, price volatility, market trends, customer needs, and hedging strategies.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Button onClick={scrollToContact} className="bg-gold hover:bg-gold-dark text-navy font-semibold text-sm px-6 py-2.5 shadow-gold h-auto">
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button onClick={() => document.getElementById("about")?.scrollIntoView({
            behavior: "smooth"
          })} variant="outline" className="border-2 border-gold text-primary-foreground font-semibold text-sm px-6 py-2.5 bg-[#353c4c] h-auto">
              Learn More
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((feature, index) => <Card key={index} className="bg-card/10 backdrop-blur-md border-gold/20 shadow-elegant">
                <CardContent className="pt-5 pb-4 px-4">
                  <feature.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                  <h3 className="text-base font-semibold text-primary-foreground mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-primary-foreground/70">{feature.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;