import { useState, useRef } from "react";
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
    message: "",
    honeypot: "" // Spam protection field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const lastSubmissionTime = useRef<number>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Spam protection: Check honeypot field
    if (formData.honeypot) {
      toast.error("Spam detected. Please try again.");
      return;
    }

    // Spam protection: Rate limiting (max 1 submission per 10 seconds)
    const now = Date.now();
    if (now - lastSubmissionTime.current < 10000) {
      toast.error("Please wait a moment before sending another message.");
      return;
    }

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Using Formspree - simple form submission service
      const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/xqawkoda";
      
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
          _to: "info@alwafatrading.qa",
        }),
      });

      if (response.ok) {
        lastSubmissionTime.current = now;
        toast.success("Message sent successfully! We'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          honeypot: ""
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      toast.error("Failed to send message. Please try again later or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
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
    details: ["+974-55566335", "+974-33340730"]
  }, {
    icon: Mail,
    title: "Email",
    details: ["info@alwafatrading.qa"]
  }, {
    icon: Clock,
    title: "Business Hours",
    details: ["Sun - Thu: 8:00 AM - 5:00 PM", "Closed: Fri - Sat"]
  }];
  return <section id="contact" className="py-12 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Get in <span className="text-gold">Touch</span>
          </h2>
          <p className="text-sm text-foreground/80 max-w-3xl mx-auto">
            Ready to discuss your commodities trading needs? Contact us today and let's explore how we can support your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant border-gold/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-navy">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot field - hidden from users, visible to bots */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="name" className="text-navy font-medium text-sm">
                        Full Name *
                      </Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="border-2 border-gold/30 focus:border-gold bg-gray-50 text-sm h-9" disabled={isSubmitting} />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-navy font-medium text-sm">
                        Email Address *
                      </Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="border-2 border-gold/30 focus:border-gold bg-gray-50 text-sm h-9" disabled={isSubmitting} />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="subject" className="text-navy font-medium text-sm">
                      Subject *
                    </Label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="border-2 border-gold/30 focus:border-gold bg-gray-50 text-sm h-9" disabled={isSubmitting} />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="text-navy font-medium text-sm">
                      Message *
                    </Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="border-2 border-gold/30 focus:border-gold bg-gray-50 resize-none text-sm" disabled={isSubmitting} />
                  </div>

                  <Button type="submit" className="w-full bg-gold hover:bg-gold-dark text-navy font-semibold text-sm py-2 h-auto" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => <Card key={index} className="shadow-elegant border-gold/20 hover:shadow-gold transition-smooth">
                <CardContent className="pt-4 pb-4 px-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-gold/10 rounded-lg">
                      <info.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-1.5 text-sm">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => <p key={detailIndex} className="text-foreground/80 text-xs">
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
