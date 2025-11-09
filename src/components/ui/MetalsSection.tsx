import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import metalsImage from "@/assets/metals.svg";

const MetalsSection = () => {
  const metalCategories = [
    {
      category: "Base Metals",
      items: [
        { name: "Copper Cathodes", grade: "Grade A" },
        { name: "Copper Wire Rod", grade: "8mm" },
        { name: "Zinc Ingots", grade: "99.99%" },
        { name: "Iron Ore", grade: "Fe 62-65%" },
      ],
    },
    {
      category: "Precious Metals",
      items: [
        { name: "Gold Bars", grade: "999.9" },
        { name: "Silver Ingots", grade: "999" },
        { name: "Platinum", grade: "999.5" },
        { name: "Palladium", grade: "999" },
      ],
    },
    {
      category: "Scrap Metals",
      items: [
        { name: "HMS 1", grade: "Heavy Melting Scrap" },
        { name: "HMS 2", grade: "Mixed Scrap" },
        { name: "Used Rails", grade: "R50-R65" },
        { name: "Copper Scrap", grade: "Millberry" },
      ],
    },
  ];

  return (
    <section id="metals" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Metals & <span className="text-gold">Minerals</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Marketing metals and minerals involves showcasing their quality, availability, and competitive pricing. We connect producers with buyers, ensuring transparent transactions and reliable supply chains across global markets.
          </p>
        </div>

        {/* Image Banner */}
        <div className="mb-16 relative rounded-lg overflow-hidden shadow-elegant">
          <img
            src={metalsImage}
            alt="Metals and Minerals"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/70 to-transparent flex items-center">
            <div className="px-8">
              <h3 className="text-3xl font-bold text-primary-foreground mb-4">
                Premium Quality Metals
              </h3>
              <p className="text-lg text-primary-foreground/90 max-w-xl">
                From base metals to precious metals, we facilitate trading of the highest quality materials with certified specifications.
              </p>
            </div>
          </div>
        </div>

        {/* Metal Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metalCategories.map((category, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-gold transition-smooth border-gold/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-navy flex items-center justify-between">
                  {category.category}
                  <Badge className="bg-gold text-navy">{category.items.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="border-l-4 border-gold pl-4 py-2">
                      <div className="font-semibold text-navy">{item.name}</div>
                      <div className="text-sm text-foreground/70">{item.grade}</div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <Card className="mt-12 bg-navy text-primary-foreground shadow-elegant">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gold">Quality Assurance</h3>
                <p className="text-primary-foreground/90 leading-relaxed">
                  All metals and minerals are sourced from certified suppliers and undergo rigorous quality checks. We ensure compliance with international standards and provide complete documentation for every transaction.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gold">Global Logistics</h3>
                <p className="text-primary-foreground/90 leading-relaxed">
                  Our extensive network enables efficient delivery worldwide. We handle all aspects of logistics, from sourcing to final delivery, ensuring your commodities reach their destination safely and on time.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MetalsSection;
