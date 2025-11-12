import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Fuel, Plane, Droplet, Flame, Zap, Factory } from "lucide-react";
import oilImage from "@/assets/oil.jpg";

const PetroleumSection = () => {
  const products = [
    {
      icon: Fuel,
      category: "Diesel Fuels",
      items: ["EN590 10PPM", "D2 Gas Oil", "D6 Virgin Fuel Oil"],
    },
    {
      icon: Plane,
      category: "Aviation Fuel",
      items: ["JP54 (Jet Fuel)", "Jet A-1", "Colonial Grade JP54"],
    },
    {
      icon: Droplet,
      category: "Crude Oils",
      items: ["SLCO (Saudi Light)", "Basra Light Crude", "Bonny Light Crude"],
    },
    {
      icon: Flame,
      category: "LPG & LNG",
      items: ["Liquefied Petroleum Gas", "Liquefied Natural Gas", "Propane/Butane Mix"],
    },
    {
      icon: Zap,
      category: "Fuel Oils",
      items: ["M100 (GOST 10585-75)", "CST 180", "CST 380"],
    },
    {
      icon: Factory,
      category: "Other Products",
      items: ["Bitumen (40/50, 60/70)", "Base Oil", "Petroleum Coke"],
    },
  ];

  return (
    <section id="petroleum" className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Petroleum <span className="text-gold">Products</span>
          </h2>
          <p className="text-sm text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            We facilitate the trading of a comprehensive range of petroleum and energy products, ensuring reliable supply chains and competitive pricing for our global clientele.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-10 relative rounded-lg overflow-hidden shadow-elegant">
          <img
            src={oilImage}
            alt="Petroleum Products"
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent flex items-end pointer-events-none">
            <div className="p-6 w-full">
              <h3 className="text-xl font-bold text-primary-foreground mb-2">
                Reliable Energy. Trusted Partnerships.
              </h3>
              <p className="text-sm text-primary-foreground/90">
                Connecting energy markets with certified petroleum products worldwide
              </p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="shadow-elegant hover:shadow-gold transition-smooth border-gold/20 group"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2.5 mb-1">
                  <div className="p-2 bg-gold/10 rounded-lg group-hover:bg-gold/20 transition-smooth">
                    <product.icon className="w-5 h-5 text-gold" />
                  </div>
                  <CardTitle className="text-base font-bold text-navy">
                    {product.category}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1.5">
                  {product.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start text-foreground/80 text-sm"
                    >
                      <span className="text-gold mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Product Table */}
        <Card className="shadow-elegant border-gold/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-bold text-navy">
              Energy Products Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gold">
                    <th className="text-left py-3 px-4 font-semibold text-navy text-sm">Product Type</th>
                    <th className="text-left py-3 px-4 font-semibold text-navy text-sm">Examples</th>
                    <th className="text-left py-3 px-4 font-semibold text-navy text-sm">Applications</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-muted/30 transition-smooth">
                    <td className="py-3 px-4 font-medium text-navy text-sm">Diesel</td>
                    <td className="py-3 px-4 text-foreground/80 text-sm">EN590, D2, D6</td>
                    <td className="py-3 px-4 text-foreground/80 text-sm">Transportation, Industrial</td>
                  </tr>
                  <tr className="hover:bg-muted/30 transition-smooth">
                    <td className="py-3 px-4 font-medium text-navy text-sm">Aviation Fuel</td>
                    <td className="py-3 px-4 text-foreground/80 text-sm">JP54, Jet A-1</td>
                    <td className="py-3 px-4 text-foreground/80 text-sm">Commercial & Military Aviation</td>
                  </tr>
                  <tr className="hover:bg-muted/30 transition-smooth">
                    <td className="py-3 px-4 font-medium text-navy text-sm">Crude Oils</td>
                    <td className="py-3 px-4 text-foreground/80 text-sm">SLCO, Basra Light</td>
                    <td className="py-3 px-4 text-foreground/80 text-sm">Refining, Petrochemicals</td>
                  </tr>
                  <tr className="hover:bg-muted/30 transition-smooth">
                    <td className="py-3 px-4 font-medium text-navy text-sm">LPG/LNG</td>
                    <td className="py-3 px-4 text-foreground/80 text-sm">Propane, Butane, Natural Gas</td>
                    <td className="py-3 px-4 text-foreground/80 text-sm">Heating, Cooking, Industrial</td>
                  </tr>
                  <tr className="hover:bg-muted/30 transition-smooth">
                    <td className="py-3 px-4 font-medium text-navy text-sm">Fuel Oils</td>
                    <td className="py-3 px-4 text-foreground/80 text-sm">M100, CST 180/380</td>
                    <td className="py-3 px-4 text-foreground/80 text-sm">Marine, Power Generation</td>
                  </tr>
                  <tr className="hover:bg-muted/30 transition-smooth">
                    <td className="py-3 px-4 font-medium text-navy text-sm">Bitumen</td>
                    <td className="py-3 px-4 text-foreground/80 text-sm">40/50, 60/70</td>
                    <td className="py-3 px-4 text-foreground/80 text-sm">Road Construction, Waterproofing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PetroleumSection;
