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
  return <section id="home" className="relative min-h-screen flex items-center justify-center pt-20" style={{
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
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Connecting Real Buyers to{" "}
            <span className="text-gold">Real Sellers</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            In the Global Commodities Market
          </p>
          <p className="text-lg text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            Marketing for metals, minerals, and petroleum encompasses strategies to promote and sell these commodities globally. Effective marketing considers supply and demand, price volatility, market trends, customer needs, and hedging strategies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button onClick={scrollToContact} size="lg" className="bg-gold hover:bg-gold-dark text-navy font-semibold text-lg px-8 py-6 shadow-gold">
              Get Started <ArrowRight className="ml-2" />
            </Button>
            <Button onClick={() => document.getElementById("about")?.scrollIntoView({
            behavior: "smooth"
          })} size="lg" variant="outline" className="border-2 border-gold text-primary-foreground font-semibold text-lg px-8 py-6 bg-[#353c4c]">
              Learn More
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => <Card key={index} className="bg-card/10 backdrop-blur-md border-gold/20 shadow-elegant py-[10px]">
                <CardContent className="pt-6 py-0">
                  <feature.icon className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-primary-foreground/70">{feature.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;