import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

interface ContactSectionProps {
  language: string;
}

export const ContactSection = ({ language }: ContactSectionProps) => {
  const content = {
    en: {
      title: "Let's Work Together",
      subtitle: "Ready to start your next project? Let's discuss how I can help you achieve your goals.",
      name: "Full Name",
      email: "Email Address",
      subject: "Subject",
      message: "Your Message",
      send: "Send Message",
      contact: "Contact Information",
      freelance: "Available for Freelance",
      response: "24-hour response time"
    },
    km: {
      title: "តោះធ្វើការជាមួយគ្នា",
      subtitle: "រួចរាល់ចាប់ផ្តើមគម្រោងបន្ទាប់របស់អ្នក? តោះពិភាក្សាអំពីរបៀបដែលខ្ញុំអាចជួយអ្នកសម្រេចបាននូវគោលដៅ។",
      name: "ឈ្មោះពេញ",
      email: "អាសយដ្ឋានអ៊ីមែល",
      subject: "ប្រធានបទ",
      message: "សាររបស់អ្នក",
      send: "ផ្ញើសារ",
      contact: "ព័ត៌មានទំនាក់ទំនង",
      freelance: "អាចរកការងារឯករាជ្យបាន",
      response: "ពេលវេលាឆ្លើយតប ២៤ ម៉ោង"
    }
  };

  const text = content[language as keyof typeof content] || content.km;

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{text.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{text.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder={text.name} />
                <Input placeholder={text.email} type="email" />
              </div>
              <Input placeholder={text.subject} />
              <Textarea placeholder={text.message} rows={6} />
              <Button className="w-full" size="lg">
                <Send className="w-4 h-4 mr-2" />
                {text.send}
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">{text.contact}</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>contact@khmerdeveloper.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+855 12 345 678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Phnom Penh, Cambodia</span>
                </div>
              </div>
            </Card>
            
            <div className="flex space-x-4">
              <Button variant="outline" className="flex-1">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" className="flex-1">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};