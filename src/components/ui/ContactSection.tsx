import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a backend
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const contactInfo = [{
    icon: MapPin,
    title: "Location",
    details: ["Zone 90, Street 720, Building 54", "Floor 2, Office 10", "Al Wakrah - Qatar State"]
  }, {
    icon: Phone,
    title: "Phone",
    details: ["+974 XXXX XXXX"]
  }, {
    icon: Mail,
    title: "Email",
    details: ["info@alwafatrading.com"]
  }, {
    icon: Clock,
    title: "Business Hours",
    details: ["Sun - Thu: 8:00 AM - 5:00 PM", "Closed: Fri - Sat"]
  }];
  return <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Get in <span className="text-gold">Touch</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Ready to discuss your commodities trading needs? Contact us today and let's explore how we can support your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant border-gold/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-navy">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-navy font-medium">
                        Full Name *
                      </Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className="border-gold/30 focus:border-gold" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-navy font-medium">
                        Email Address *
                      </Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" className="border-gold/30 focus:border-gold" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-navy font-medium">
                      Subject *
                    </Label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Inquiry about petroleum products" className="border-gold/30 focus:border-gold" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-navy font-medium">
                      Message *
                    </Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Tell us about your requirements..." rows={6} className="border-gold/30 focus:border-gold resize-none" />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-gold hover:bg-gold-dark text-navy font-semibold">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => <Card key={index} className="shadow-elegant border-gold/20 hover:shadow-gold transition-smooth">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gold/10 rounded-lg">
                      <info.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => <p key={detailIndex} className="text-foreground/80 text-sm">
                          {detail}
                        </p>)}
                    </div>
                  </div>
                </CardContent>
              </Card>)}

            {/* Map Placeholder */}
            <Card className="shadow-elegant border-gold/20">
              
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;