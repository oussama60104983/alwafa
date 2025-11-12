import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Building2, Target, Users, Award } from "lucide-react";
import partnerImage from "@/assets/partner.jpg";
const AboutSection = () => {
  const coreValues = [{
    icon: Building2,
    title: "Established Presence",
    description: "Based in Al Wakrah, Qatar, serving global markets"
  }, {
    icon: Target,
    title: "Focused Expertise",
    description: "Specialized in metals, minerals, and petroleum products"
  }, {
    icon: Users,
    title: "Client-Centric",
    description: "Dedicated to connecting buyers with sellers efficiently"
  }, {
    icon: Award,
    title: "Quality Assurance",
    description: "Committed to excellence in every transaction"
  }];
  return <section id="about" className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Text Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
              About <span className="text-gold">AL WAFA</span>
            </h2>
            <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
              AL WAFA Brokerage Trading W.L.L. is a leading commodities trading company based in Al Wakrah, Qatar. We specialize in connecting real buyers to real sellers in the global commodities market, focusing on metals, minerals, and petroleum products.
            </p>
            <p className="text-sm text-foreground/80 mb-6 leading-relaxed">
              Our commitment to excellence, market expertise, and customer satisfaction has made us a trusted partner in the international commodities trading industry. We understand the complexities of supply chains, market dynamics, and the critical importance of timing in commodities trading.
            </p>

            {/* Core Values Grid */}
            <div className="grid grid-cols-2 gap-3">
              {coreValues.map((value, index) => <div key={index} className="flex items-start space-x-2">
                  <value.icon className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-navy mb-0.5 text-sm">{value.title}</h4>
                    <p className="text-xs text-foreground/70">{value.description}</p>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <img src={partnerImage} alt="Business Partnership" className="rounded-lg shadow-elegant w-full h-[400px] object-cover" />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-navy/60 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;