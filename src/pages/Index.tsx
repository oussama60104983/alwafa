import Navigation from "@/components/ui/Navigation";
import HeroSection from "@/components/ui/HeroSection";
import AboutSection from "@/components/ui/AboutSection";
import MetalsSection from "@/components/ui/MetalsSection";
import PetroleumSection from "@/components/ui/PetroleumSection";
import ContactSection from "@/components/ui/ContactSection";
import Footer from "@/components/ui/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <MetalsSection />
        <PetroleumSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
