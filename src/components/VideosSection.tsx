import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Calendar, Eye, ThumbsUp } from "lucide-react";

interface VideosSectionProps {
  language: string;
}

export const VideosSection = ({ language }: VideosSectionProps) => {
  const content = {
    en: {
      title: "Video Content & Tutorials",
      subtitle: "Learn programming and development through my video tutorials",
      watchNow: "Watch Now",
      viewChannel: "View Channel",
      duration: "Duration",
      views: "views",
      likes: "likes",
      videos: [
        {
          title: "Laravel E-commerce App",
          description: "Complete Laravel E-commerce tutorial.",
          thumbnail: "/images/profile.jpg",
          youtubeUrl: "https://www.youtube.com/watch?v=G3LGVZ17Z3M",
          duration: "45:30",
          views: "12.5K",
          likes: "340",
          publishDate: "2024-01-15",
          category: "Laravel",
          featured: true
        },
        {
          title: "React Portfolio Website",
          description: "Build a React portfolio website from scratch.",
          thumbnail: "https://img.youtube.com/vi/dGcsHMXbSOA/hqdefault.jpg",
          youtubeUrl: "https://www.youtube.com/watch?v=dGcsHMXbSOA",
          duration: "38:15",
          views: "22.1K",
          likes: "580",
          publishDate: "2024-02-10",
          category: "React",
          featured: false
        },
        {
          title: "Database Design Best Practices",
          description: "Learn how to design efficient and scalable databases for your applications",
          thumbnail: "/api/placeholder/400/225",
          duration: "32:40",
          views: "5.8K",
          likes: "178",
          publishDate: "2024-01-05",
          category: "Database",
          featured: false
        },
        {
          title: "Tailwind CSS Master Class",
          description: "Master Tailwind CSS with this comprehensive tutorial covering all aspects",
          thumbnail: "/api/placeholder/400/225",
          duration: "52:20",
          views: "15.3K",
          likes: "420",
          publishDate: "2023-12-28",
          category: "CSS",
          featured: false
        },
        {
          title: "API Development with Node.js",
          description: "Build robust REST APIs using Node.js, Express, and MongoDB",
          thumbnail: "/api/placeholder/400/225",
          duration: "38:45",
          views: "9.7K",
          likes: "287",
          publishDate: "2023-12-20",
          category: "Node.js",
          featured: false
        },
        {
          title: "Git & GitHub for Beginners",
          description: "Complete guide to version control with Git and collaboration on GitHub",
          thumbnail: "/api/placeholder/400/225",
          duration: "41:10",
          views: "18.9K",
          likes: "512",
          publishDate: "2023-12-15",
          category: "Git",
          featured: false
        }
      ]
    },
    km: {
      title: "មាតិកាវីដេអូ និងការបង្រៀន",
      subtitle: "រៀនការសរសេរកម្មវិធី និងការអភិវឌ្ឍន៍តាមរយៈវីដេអូបង្រៀនរបស់ខ្ញុំ",
      watchNow: "មើលឥឡូវនេះ",
      viewChannel: "មើលប៉ុស្តិ៍",
      duration: "រយៈពេល",
      views: "ការមើល",
      likes: "ចូលចិត្ត",
      videos: [
        {
          title: "បង្កើតកម្មវិធីពាណិជ្ជកម្មជាមួយ Laravel",
          description: "ការបង្រៀនពេញលេញអំពីការបង្កើតវេទិកាពាណិជ្ជកម្មដោយប្រើ Laravel និង Vue.js",
          thumbnail: "/images/profile.jpg",
          youtubeUrl: "https://www.youtube.com/watch?v=G3LGVZ17Z3M",
          duration: "៤៥:៣០",
          views: "១២.៥K",
          likes: "៣៤០",
          publishDate: "2024-01-15",
          category: "Laravel",
          featured: true
        },
        {
          title: "React Hooks ពន្យល់ជាភាសាខ្មែរ",
          description: "យល់ដឹងអំពី React Hooks ជាមួយនឹងឧទាហរណ៍ជាក់ស្តែងដែលពន្យល់ជាភាសាខ្មែរ",
          thumbnail: "/api/placeholder/400/225",
          duration: "២៨:១៥",
          views: "៨.២K",
          likes: "២៥៦",
          publishDate: "2024-01-10",
          category: "React",
          featured: true
        },
        {
          title: "ការអនុវត្តល្អបំផុតក្នុងការរចនាមូលដ្ឋានទិន្នន័យ",
          description: "រៀនពីរបៀបរចនាមូលដ្ឋានទិន្នន័យដែលមានប្រសិទ្ធភាព និងអាចពង្រីកបាន",
          thumbnail: "/api/placeholder/400/225",
          duration: "៣២:៤០",
          views: "៥.៨K",
          likes: "១៧៨",
          publishDate: "2024-01-05",
          category: "Database",
          featured: false
        },
        {
          title: "Tailwind CSS ថ្នាក់ត្រួសត្រាយ",
          description: "ជំនាញ Tailwind CSS ជាមួយនឹងការបង្រៀនពេញលេញនេះ",
          thumbnail: "/api/placeholder/400/225",
          duration: "៥២:២០",
          views: "១៥.៣K",
          likes: "៤២០",
          publishDate: "2023-12-28",
          category: "CSS",
          featured: false
        },
        {
          title: "ការអភិវឌ្ឍន៍ API ជាមួយ Node.js",
          description: "បង្កើត REST APIs រឹងមាំដោយប្រើ Node.js, Express និង MongoDB",
          thumbnail: "/api/placeholder/400/225",
          duration: "៣៨:៤៥",
          views: "៩.៧K",
          likes: "២៨៧",
          publishDate: "2023-12-20",
          category: "Node.js",
          featured: false
        },
        {
          title: "Git & GitHub សម្រាប់អ្នកចាប់ផ្តើម",
          description: "ការណែនាំពេញលេញអំពីការគ្រប់គ្រងកំណែជាមួយ Git និងការសហការនៅលើ GitHub",
          thumbnail: "/api/placeholder/400/225",
          duration: "៤១:១០",
          views: "១៨.៩K",
          likes: "៥១២",
          publishDate: "2023-12-15",
          category: "Git",
          featured: false
        }
      ]
    }
  };

  const text = content[language as keyof typeof content] || content.km;

  const openVideo = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="videos" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{text.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {text.subtitle}
          </p>
        </div>

        {/* Featured Videos */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {text.videos
            .filter((video) => video.featured)
            .map((video, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <div 
                    className="aspect-video relative overflow-hidden cursor-pointer group"
                    onClick={() => openVideo(video.youtubeUrl ?? "#")}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                    <Badge className="absolute top-2 left-2 bg-primary">{video.category}</Badge>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold line-clamp-2 flex-1">
                      {video.title}
                    </h3>
                    <Badge variant="secondary" className="ml-2">
                      Featured
                    </Badge>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                    {video.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>
                          {video.views} {text.views}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="w-4 h-4" />
                        <span>
                          {video.likes} {text.likes}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(video.publishDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <Button
                    className="w-full"
                    onClick={() => openVideo(video.youtubeUrl ?? "#")}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    {text.watchNow}
                  </Button>
                </div>
              </Card>
            ))}
        </div>

        {/* Other Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {text.videos
            .filter((video) => !video.featured)
            .map((video, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-lg transition-all duration-300"
              >
                <div className="relative">
                  <div
                    className="aspect-video bg-gradient-to-br from-secondary/20 to-primary/10 flex items-center justify-center relative group cursor-pointer"
                    onClick={() => openVideo(video.youtubeUrl ?? "#")}
                  >
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="w-4 h-4 text-primary/70 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 py-0.5 rounded">
                      {video.duration}
                    </div>
                    <Badge className="absolute top-1 left-1 text-xs bg-primary">{video.category}</Badge>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold mb-2 text-sm line-clamp-2">
                    {video.title}
                  </h3>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <div className="flex items-center space-x-2">
                      <span>{video.views}</span>
                      <span>•</span>
                      <span>{video.likes}</span>
                    </div>
                  </div>

                  <Button
                    size="sm"
                    className="w-full text-xs"
                    onClick={() => openVideo(video.youtubeUrl ?? "#")}
                  >
                    <Play className="w-3 h-3 mr-1" />
                    {text.watchNow}
                  </Button>
                </div>
              </Card>
            ))}
        </div>

        {/* YouTube Channel CTA */}
        <div className="text-center mt-12">
          <Card className="inline-block p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <Play className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold">
                  {language === "km"
                    ? "តាមដានប៉ុស្តិ៍ YouTube"
                    : "Subscribe to YouTube Channel"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === "km"
                    ? "ទទួលបានការបង្រៀនថ្មីៗ"
                    : "Get the latest tutorials and updates"}
                </p>
              </div>
              <Button
                variant="outline"
                onClick={() =>
                  window.open("https://www.youtube.com/", "_blank") // Change to your channel URL
                }
              >
                {text.viewChannel}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};