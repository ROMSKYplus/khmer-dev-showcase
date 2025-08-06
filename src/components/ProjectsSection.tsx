import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play } from "lucide-react";

interface ProjectsSectionProps {
  language: string;
}

export const ProjectsSection = ({ language }: ProjectsSectionProps) => {
  const content = {
    en: {
      title: "Featured Projects",
      subtitle: "A showcase of my recent work and software applications",
      viewLive: "View Live",
      viewCode: "View Code",
      viewDemo: "Demo",
      projects: [
        {
          title: "E-Commerce Platform",
          description: "Full-stack e-commerce solution with admin dashboard, payment integration, and inventory management. Built for local Cambodian businesses.",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center",
          tags: ["Laravel", "React", "MySQL", "Stripe"],
          liveUrl: "https://ecommerce-demo.vercel.app",
          codeUrl: "https://github.com/yourusername/ecommerce-platform",
          featured: true
        },
        {
          title: "Task Management App",
          description: "Collaborative task management application with real-time updates, team collaboration features, and Khmer language support.",
          image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center",
          tags: ["Vue.js", "Node.js", "Socket.io", "MongoDB"],
          liveUrl: "https://taskmanager-demo.netlify.app",
          codeUrl: "https://github.com/yourusername/task-management",
          featured: true
        },
        {
          title: "Restaurant POS System",
          description: "Point of sale system designed for Cambodian restaurants with multilingual support and local payment methods integration.",
          image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&crop=center",
          tags: ["React", "Express", "PostgreSQL", "PWA"],
          liveUrl: "https://restaurant-pos-demo.herokuapp.com",
          codeUrl: "https://github.com/yourusername/restaurant-pos",
          featured: false
        },
        {
          title: "Learning Management System",
          description: "Educational platform for online courses with video streaming, quiz system, and progress tracking.",
          image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop&crop=center",
          tags: ["Next.js", "Prisma", "AWS", "Tailwind"],
          liveUrl: "https://lms-platform-demo.vercel.app",
          codeUrl: "https://github.com/yourusername/lms-platform",
          featured: false
        },
        {
          title: "Weather App Cambodia",
          description: "Weather application specifically designed for Cambodia with local weather stations data and Khmer language support.",
          image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop&crop=center",
          tags: ["React Native", "API Integration", "Charts"],
          liveUrl: "https://cambodia-weather.netlify.app",
          codeUrl: "https://github.com/yourusername/cambodia-weather",
          featured: false
        },
        {
          title: "Inventory Management",
          description: "Smart inventory management system for small businesses with barcode scanning and automated reporting.",
          image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop&crop=center",
          tags: ["Laravel", "Vue.js", "Barcode", "Reports"],
          liveUrl: "https://inventory-system-demo.vercel.app",
          codeUrl: "https://github.com/yourusername/inventory-management",
          featured: false
        }
      ]
    },
    km: {
      title: "គម្រោងសំខាន់ៗ",
      subtitle: "ការបង្ហាញនៃការងារថ្មីៗ និងកម្មវិធីសូហ្វវែររបស់ខ្ញុំ",
      viewLive: "មើលផ្ទាល់",
      viewCode: "មើលកូដ",
      viewDemo: "ការបង្ហាញ",
      projects: [
        {
          title: "វេទិកាពាណិជ្ជកម្មអេឡិចត្រូនិក",
          description: "ដំណោះស្រាយពាណិជ្ជកម្មអេឡិចត្រូនិកពេញលេញជាមួយនឹងផ្ទាំងគ្រប់គ្រង និងការគ្រប់គ្រងស្តុក។ បង្កើតសម្រាប់អាជីវកម្មកម្ពុជា។",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center",
          tags: ["Laravel", "React", "MySQL", "Stripe"],
          liveUrl: "https://ecommerce-demo.vercel.app",
          codeUrl: "https://github.com/yourusername/ecommerce-platform",
          featured: true
        },
        {
          title: "កម្មវិធីគ្រប់គ្រងកិច្ចការ",
          description: "កម្មវិធីគ្រប់គ្រងកិច្ចការសហការជាមួយនឹងការធ្វើបច្ចុប្បន្នភាពតាមពេលវេលា និងគាំទ្រភាសាខ្មែរ។",
          image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center",
          tags: ["Vue.js", "Node.js", "Socket.io", "MongoDB"],
          liveUrl: "https://taskmanager-demo.netlify.app",
          codeUrl: "https://github.com/yourusername/task-management",
          featured: true
        },
        {
          title: "ប្រព័ន្ធ POS ភោជនីយដ្ឋាន",
          description: "ប្រព័ន្ធចុចលក់ដែលរចនាសម្រាប់ភោជនីយដ្ឋានកម្ពុជាជាមួយនឹងការគាំទ្រពហុភាសា។",
          image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&crop=center",
          tags: ["React", "Express", "PostgreSQL", "PWA"],
          liveUrl: "https://restaurant-pos-demo.herokuapp.com",
          codeUrl: "https://github.com/yourusername/restaurant-pos",
          featured: false
        },
        {
          title: "ប្រព័ន្ធគ្រប់គ្រងការរៀន",
          description: "វេទិកាអប់រំសម្រាប់វគ្គសិក្សាអនឡាញជាមួយនឹងការចាក់វីដេអូ និងប្រព័ន្ធកម្រងសំណួរ។",
          image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop&crop=center",
          tags: ["Next.js", "Prisma", "AWS", "Tailwind"],
          liveUrl: "https://lms-platform-demo.vercel.app",
          codeUrl: "https://github.com/yourusername/lms-platform",
          featured: false
        },
        {
          title: "កម្មវិធីអាកាសធាតុកម្ពុជា",
          description: "កម្មវិធីអាកាសធាតុដែលរចនាជាពិសេសសម្រាប់កម្ពុជាជាមួយនឹងការគាំទ្រភាសាខ្មែរ។",
          image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop&crop=center",
          tags: ["React Native", "API Integration", "Charts"],
          liveUrl: "https://cambodia-weather.netlify.app",
          codeUrl: "https://github.com/yourusername/cambodia-weather",
          featured: false
        },
        {
          title: "គ្រប់គ្រងស្តុកទំនិញ",
          description: "ប្រព័ន្ធគ្រប់គ្រងស្តុកទំនិញឆ្លាតសម្រាប់អាជីវកម្មតូចជាមួយនឹងការស្កេនបាកូដ។",
          image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop&crop=center",
          tags: ["Laravel", "Vue.js", "Barcode", "Reports"],
          liveUrl: "https://inventory-system-demo.vercel.app",
          codeUrl: "https://github.com/yourusername/inventory-management",
          featured: false
        }
      ]
    }
  };

  const text = content[language as keyof typeof content] || content.km;

  // Function to handle image errors and show fallback
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, projectTitle: string) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
    // Show fallback div
    const fallbackDiv = target.nextElementSibling as HTMLDivElement;
    if (fallbackDiv) {
      fallbackDiv.style.display = 'flex';
    }
  };

  // Enhanced link opening function with error handling and analytics tracking
  const openLink = (url: string, linkType: 'demo' | 'code' = 'demo', projectTitle?: string) => {
    if (!url || url === "#") {
      console.warn(`Invalid URL for ${projectTitle || 'project'}: ${url}`);
      return;
    }
    
    // Optional: Track link clicks for analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        event_category: 'Project Link',
        event_label: `${projectTitle} - ${linkType}`,
        value: 1
      });
    }
    
    try {
      window.open(url, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error(`Failed to open link: ${url}`, error);
      // Fallback: try to navigate directly
      window.location.href = url;
    }
  };

  // Function to handle card click (opens live demo)
  const handleCardClick = (project: any, e: React.MouseEvent) => {
    // Don't trigger if clicking on buttons
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }
    openLink(project.liveUrl, 'demo', project.title);
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{text.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {text.subtitle}
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {text.projects.filter(project => project.featured).map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 bg-card cursor-pointer"
              onClick={(e) => handleCardClick(project, e)}
            >
              <div className="relative overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => handleImageError(e, project.title)}
                  />
                  {/* Fallback div - hidden by default */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center hidden"
                    style={{ display: 'none' }}
                  >
                    <div className="text-4xl font-bold text-primary/50">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button 
                    size="sm" 
                    variant="secondary"
                    onClick={(e) => {
                      e.stopPropagation();
                      openLink(project.liveUrl, 'demo', project.title);
                    }}
                    disabled={!project.liveUrl || project.liveUrl === "#"}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {text.viewLive}
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={(e) => {
                      e.stopPropagation();
                      openLink(project.codeUrl, 'code', project.title);
                    }}
                    disabled={!project.codeUrl || project.codeUrl === "#"}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    {text.viewCode}
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <Badge variant="secondary">Featured</Badge>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button 
                    size="sm" 
                    className="flex-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      openLink(project.liveUrl, 'demo', project.title);
                    }}
                    disabled={!project.liveUrl || project.liveUrl === "#"}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    {text.viewDemo}
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={(e) => {
                      e.stopPropagation();
                      openLink(project.codeUrl, 'code', project.title);
                    }}
                    disabled={!project.codeUrl || project.codeUrl === "#"}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {text.projects.filter(project => !project.featured).map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={(e) => handleCardClick(project, e)}
            >
              <div className="relative aspect-square">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => handleImageError(e, project.title)}
                />
                {/* Fallback div - hidden by default */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/10 flex items-center justify-center hidden"
                  style={{ display: 'none' }}
                >
                  <div className="text-2xl font-bold text-primary/50">
                    {project.title.charAt(0)}
                  </div>
                </div>
                
                {/* Hover overlay for smaller cards */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    size="sm" 
                    variant="secondary"
                    onClick={(e) => {
                      e.stopPropagation();
                      openLink(project.liveUrl, 'demo', project.title);
                    }}
                    disabled={!project.liveUrl || project.liveUrl === "#"}
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    {text.viewLive}
                  </Button>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold mb-2 text-sm">{project.title}</h3>
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.slice(0, 2).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tags.length - 2}
                    </Badge>
                  )}
                </div>
                
                <div className="flex space-x-2">
                  <Button 
                    size="sm" 
                    className="flex-1 text-xs"
                    onClick={(e) => {
                      e.stopPropagation();
                      openLink(project.liveUrl, 'demo', project.title);
                    }}
                    disabled={!project.liveUrl || project.liveUrl === "#"}
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    {text.viewLive}
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={(e) => {
                      e.stopPropagation();
                      openLink(project.codeUrl, 'code', project.title);
                    }}
                    disabled={!project.codeUrl || project.codeUrl === "#"}
                  >
                    <Github className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => openLink("https://github.com/yourusername", 'code', 'All Projects')}
          >
            {language === 'km' ? 'មើលគម្រោងទាំងអស់' : 'View All Projects'}
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};