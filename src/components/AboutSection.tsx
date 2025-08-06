import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, Code, Globe, Users } from "lucide-react";

interface AboutSectionProps {
  language: string;
}

export const AboutSection = ({ language }: AboutSectionProps) => {
  const content = {
    en: {
      title: "About Me",
      subtitle: "Passionate developer with a strong foundation in computer science",
      description: "I'm a dedicated full-stack developer with a Computer Science degree from the Royal University of Fine Arts and Phnom Penh (RUPP). I specialize in creating modern web applications and software solutions that solve real-world problems. My journey in programming started with a curiosity about how technology can improve people's lives, especially in Cambodia.",
      education: {
        title: "Education",
        degree: "Bachelor of Computer Science",
        university: "Royal University of Fine Arts and Phnom Penh (RUPP)",
        year: "2020 - 2024",
        description: "Specialized in software engineering and web development"
      },
      experience: {
        title: "Experience",
        items: [
          "3+ years of full-stack development",
          "20+ completed projects",
          "Freelance web developer",
          "Open source contributor"
        ]
      },
      skills: {
        title: "Technical Skills",
        items: [
          { name: "React/Vue.js", level: 90 },
          { name: "Laravel/PHP", level: 85 },
          { name: "Node.js", level: 80 },
          { name: "MySQL/PostgreSQL", level: 85 },
          { name: "Tailwind CSS", level: 95 },
          { name: "Python", level: 75 }
        ]
      },
      highlights: [
        { icon: Code, title: "Clean Code", description: "Writing maintainable and scalable code" },
        { icon: Globe, title: "Global Reach", description: "Building applications for international markets" },
        { icon: Users, title: "Team Player", description: "Collaborative development and mentoring" },
        { icon: GraduationCap, title: "Continuous Learning", description: "Always staying updated with latest technologies" }
      ]
    },
    km: {
      title: "អំពីខ្ញុំ",
      subtitle: "អ្នកបង្កើតកម្មវិធីដែលមានចំណង់ចំណូលចិត្ត និងមានមូលដ្ឋានរឹងមាំក្នុងវិទ្យាសាស្ត្រកុំព្យូទ័រ",
      description: "ខ្ញុំជាអ្នកបង្កើតកម្មវិធីពេញលេញដែលមានកម្រិតបរិញ្ញាបត្រវិទ្យាសាស្ត្រកុំព្យូទ័រពីសាកលវិទ្យាល័យភូមិន្ទវិចិត្រសិល្បៈ។ ខ្ញុំមានជំនាញក្នុងការបង្កើតកម្មវិធីវេបសាយទំនើប និងដំណោះស្រាយសូហ្វវែរដែលដោះស្រាយបញ្ហាពិតប្រាកដ។ ដំណើរការរបស់ខ្ញុំក្នុងការសរសេរកម្មវិធីបានចាប់ផ្តើមដោយការចង់ដឹងចង់ឃើញអំពីរបៀបដែលបច្ចេកវិទ្យាអាចកែលម្អជីវិតមនុស្ស ជាពិសេសនៅកម្ពុជា។",
      education: {
        title: "ការអប់រំ",
        degree: "បរិញ្ញាបត្រវិទ្យាសាស្ត្រកុំព្យូទ័រ",
        university: "សាកលវិទ្យាល័យភូមិន្ទវិចិត្រសិល្បៈ",
        year: "២០២០ - ២០២៤",
        description: "ជំនាញក្នុងវិស្វកម្មសូហ្វវែរ និងការអភិវឌ្ឍន៍វេបសាយ"
      },
      experience: {
        title: "បទពិសោធន៍",
        items: [
          "៣+ ឆ្នាំនៃការអភិវឌ្ឍន៍ពេញលេញ",
          "២០+ គម្រោងបានបញ្ចប់",
          "អ្នកអភិវឌ្ឍន៍វេបសាយឯករាជ្យ",
          "អ្នកចូលរួមចំណែកប្រភពបើកចំហ"
        ]
      },
      skills: {
        title: "ជំនាញបច្ចេកទេស",
        items: [
          { name: "React/Vue.js", level: 90 },
          { name: "Laravel/PHP", level: 85 },
          { name: "Node.js", level: 80 },
          { name: "MySQL/PostgreSQL", level: 85 },
          { name: "Tailwind CSS", level: 95 },
          { name: "Python", level: 75 }
        ]
      },
      highlights: [
        { icon: Code, title: "កូដស្អាត", description: "សរសេរកូដដែលអាចថែរក្សា និងពង្រីកបាន" },
        { icon: Globe, title: "ជាសកល", description: "បង្កើតកម្មវិធីសម្រាប់ទីផ្សារអន្តរជាតិ" },
        { icon: Users, title: "ការងារជាក្រុម", description: "ការអភិវឌ្ឍន៍សហការ និងការណែនាំ" },
        { icon: GraduationCap, title: "ការរៀនសូត្របន្ត", description: "តែងតែធ្វើបច្ចុប្បន្នភាពជាមួយបច្ចេកវិទ្យាថ្មីៗ" }
      ]
    }
  };

  const text = content[language as keyof typeof content] || content.km;

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{text.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {text.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {text.description}
            </p>

            {/* Education */}
            <Card className="p-6 border-l-4 border-l-primary">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{text.education.title}</h3>
                  <h4 className="font-medium text-primary mb-1">{text.education.degree}</h4>
                  <p className="text-muted-foreground mb-1">{text.education.university}</p>
                  <p className="text-sm text-muted-foreground mb-2">{text.education.year}</p>
                  <p className="text-sm">{text.education.description}</p>
                </div>
              </div>
            </Card>

            {/* Experience */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">{text.experience.title}</h3>
              <ul className="space-y-2">
                {text.experience.items.map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {text.highlights.map((highlight, index) => (
                <Card key={index} className="p-4 text-center hover:shadow-lg transition-shadow">
                  <highlight.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </Card>
              ))}
            </div>

            {/* Skills */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">{text.skills.title}</h3>
              <div className="space-y-4">
                {text.skills.items.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>

            {/* Available for Work Badge */}
            <div className="flex justify-center">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                {language === 'km' ? 'អាចរកការងារបាន' : 'Available for Work'}
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};