import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, MessageCircle, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  language: string;
}

export const HeroSection = ({ language }: HeroSectionProps) => {
  const content = {
    en: {
      greeting: "Hello, I'm",
      name: "Khmer Developer",
      title: "Full-Stack Developer & Software Creator",
      description: "Building innovative web applications and software solutions with modern technologies. Specialized in React, Laravel, and creating digital experiences that matter.",
      cta1: "Explore My Work",
      cta2: "Hire Me",
      cta3: "Download CV",
      stats: [
        { value: "50+", label: "Projects Completed" },
        { value: "3+", label: "Years Experience" },
        { value: "25+", label: "Happy Clients" },
      ]
    },
    km: {
      greeting: "ជំរាបសួរ ខ្ញុំគឺជា",
      name: "អ្នកបង្កើតកម្មវិធី",
      title: "អ្នកបង្កើតកម្មវិធី និងអ្នកបង្កើតសូហ្វវែរ",
      description: "បង្កើតកម្មវិធីវេបសាយទំនើប និងដំណោះស្រាយសូហ្វវែរជាមួយនឹងបច្ចេកវិទ្យាទំនើប។ ជំនាញលើ React, Laravel និងបង្កើតបទពិសោធន៍ឌីជីថលដែលមានន័យ។",
      cta1: "មើលការងារ",
      cta2: "ជួល",
      cta3: "ទាញយក CV",
      stats: [
        { value: "50+", label: "គម្រោងបានបញ្ចប់" },
        { value: "3+", label: "ឆ្នាំបទពិសោធន៍" },
        { value: "25+", label: "អតិថិជនពេញចិត្ត" },
      ]
    }
  };

  const text = content[language as keyof typeof content] || content.km;

  return (
    <section id="home" className="min-h-screen pt-20 pb-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 angkor-pattern opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg">{text.greeting}</p>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
                {text.name}
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                {text.title}
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              {text.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {text.cta1}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <MessageCircle className="mr-2 w-4 h-4" />
                {text.cta2}
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="text-muted-foreground hover:text-foreground"
              >
                <Download className="mr-2 w-4 h-4" />
                {text.cta3}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {text.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image/Card */}
          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-card to-secondary/20 shadow-elegant border-0 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-accent p-1">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary">KD</span>
                  </div>
                </div>
                
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-semibold">Full-Stack Developer</h3>
                  <p className="text-muted-foreground">React • Laravel • Node.js</p>
                </div>

                <div className="flex justify-center space-x-4">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse delay-100"></div>
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse delay-200"></div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};