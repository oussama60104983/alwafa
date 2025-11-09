import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Fuel, Plane, Droplet, Flame, Zap, Factory } from "lucide-react";
import petroleumImage from "@/assets/petroleum.svg";

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
    <section id="petroleum" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Petroleum <span className="text-gold">Products</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            We facilitate the trading of a comprehensive range of petroleum and energy products, ensuring reliable supply chains and competitive pricing for our global clientele.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16 relative rounded-lg overflow-hidden shadow-elegant">
          <img
            src={petroleumImage}
            alt="Petroleum Products"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent flex items-end">
            <div className="p-8 w-full">
              <h3 className="text-3xl font-bold text-primary-foreground mb-3">
                Reliable Energy. Trusted Partnerships.
              </h3>
              <p className="text-lg text-primary-foreground/90">
                Connecting energy markets with certified petroleum products worldwide
              </p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product, index) => (
            <Card
              key={index}
              className="shadow-elegant hover:shadow-gold transition-smooth border-gold/20 group"
            >
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-3 bg-gold/10 rounded-lg group-hover:bg-gold/20 transition-smooth">
                    <product.icon className="w-6 h-6 text-gold" />
                  </div>
                  <CardTitle className="text-xl font-bold text-navy">
                    {product.category}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start text-foreground/80"
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
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-navy">
              Energy Products Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gold">
                    <th className="text-left py-4 px-4 font-semibold text-navy">Product Type</th>
                    <th className="text-left py-4 px-4 font-semibold text-navy">Examples</th>
                    <th className="text-left py-4 px-4 font-semibold text-navy">Applications</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-muted/30 transition-smooth">
                    <td className="py-4 px-4 font-medium text-navy">Diesel</td>
                    <td className="py-4 px-4 text-foreground/80">EN590, D2, D6</td>
                    <td className="py-4 px-4 text-foreground/80">Transportation, Industrial</td>
                  </tr>
                  <tr className="hover:bg-muted/30 transition-smooth">
                    <td className="py-4 px-4 font-medium text-navy">Aviation Fuel</td>
                    <td className="py-4 px-4 text-foreground/80">JP54, Jet A-1</td>
                    <td className="py-4 px-4 text-foreground/80">Commercial & Military Aviation</td>
                  </tr>
                  <tr className="hover:bg-muted/30 transition-smooth">
                    <td className="py-4 px-4 font-medium text-navy">Crude Oils</td>
                    <td className="py-4 px-4 text-foreground/80">SLCO, Basra Light</td>
                    <td className="py-4 px-4 text-foreground/80">Refining, Petrochemicals</td>
                  </tr>
                  <tr className="hover:bg-muted/30 transition-smooth">
                    <td className="py-4 px-4 font-medium text-navy">LPG/LNG</td>
                    <td className="py-4 px-4 text-foreground/80">Propane, Butane, Natural Gas</td>
                    <td className="py-4 px-4 text-foreground/80">Heating, Cooking, Industrial</td>
                  </tr>
                  <tr className="hover:bg-muted/30 transition-smooth">
                    <td className="py-4 px-4 font-medium text-navy">Fuel Oils</td>
                    <td className="py-4 px-4 text-foreground/80">M100, CST 180/380</td>
                    <td className="py-4 px-4 text-foreground/80">Marine, Power Generation</td>
                  </tr>
                  <tr className="hover:bg-muted/30 transition-smooth">
                    <td className="py-4 px-4 font-medium text-navy">Bitumen</td>
                    <td className="py-4 px-4 text-foreground/80">40/50, 60/70</td>
                    <td className="py-4 px-4 text-foreground/80">Road Construction, Waterproofing</td>
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
