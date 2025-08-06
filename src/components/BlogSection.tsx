import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp } from "lucide-react";

interface BlogSectionProps {
  language: string;
}

export const BlogSection = ({ language }: BlogSectionProps) => {
  const content = {
    en: {
      title: "Latest Blog Posts",
      subtitle: "Insights, tutorials, and thoughts on web development and technology",
      readMore: "Read More",
      viewAllPosts: "View All Posts",
      minRead: "min read",
      categories: {
        tutorial: "Tutorial",
        webdev: "Web Development",
        career: "Career",
        technology: "Technology",
        tips: "Tips & Tricks"
      },
      posts: [
        {
          title: "Building Scalable Web Applications with Laravel and Vue.js",
          excerpt: "Learn how to create robust and scalable web applications using the powerful combination of Laravel backend and Vue.js frontend. This comprehensive guide covers best practices and real-world examples.",
          content: "Complete tutorial with code examples and deployment strategies...",
          category: "tutorial",
          readTime: 8,
          publishDate: "2024-01-20",
          image: "/api/placeholder/400/250",
          featured: true,
          tags: ["Laravel", "Vue.js", "Scalability"]
        },
        {
          title: "10 Essential Tips for Junior Developers in Cambodia",
          excerpt: "Starting your programming career in Cambodia? Here are 10 essential tips that will help you navigate the tech industry and accelerate your professional growth.",
          content: "Practical advice for career development in the Cambodian tech scene...",
          category: "career",
          readTime: 6,
          publishDate: "2024-01-18",
          image: "/api/placeholder/400/250",
          featured: true,
          tags: ["Career", "Cambodia", "Development"]
        },
        {
          title: "Modern CSS Techniques Every Developer Should Know",
          excerpt: "Explore the latest CSS features and techniques that can significantly improve your web development workflow and create better user experiences.",
          content: "Deep dive into modern CSS features including Grid, Flexbox, and custom properties...",
          category: "webdev",
          readTime: 12,
          publishDate: "2024-01-15",
          image: "/api/placeholder/400/250",
          featured: false,
          tags: ["CSS", "Frontend", "Design"]
        },
        {
          title: "Database Optimization Strategies for Better Performance",
          excerpt: "Learn proven strategies to optimize your database queries and improve application performance. Covers indexing, query optimization, and caching techniques.",
          content: "Comprehensive guide to database optimization with MySQL and PostgreSQL examples...",
          category: "tutorial",
          readTime: 15,
          publishDate: "2024-01-12",
          image: "/api/placeholder/400/250",
          featured: false,
          tags: ["Database", "Performance", "MySQL"]
        },
        {
          title: "The Future of Web Development: Trends to Watch in 2024",
          excerpt: "Discover the emerging trends and technologies that will shape web development in 2024. From AI integration to new frameworks and tools.",
          content: "Analysis of upcoming trends and their potential impact on the industry...",
          category: "technology",
          readTime: 10,
          publishDate: "2024-01-10",
          image: "/api/placeholder/400/250",
          featured: false,
          tags: ["Trends", "Future", "Technology"]
        },
        {
          title: "Building APIs with Node.js: A Complete Guide",
          excerpt: "Master the art of building robust REST APIs with Node.js and Express. This guide covers everything from basic setup to advanced authentication and testing.",
          content: "Step-by-step tutorial for creating production-ready APIs...",
          category: "tutorial",
          readTime: 20,
          publishDate: "2024-01-08",
          image: "/api/placeholder/400/250",
          featured: false,
          tags: ["Node.js", "API", "Backend"]
        }
      ]
    },
    km: {
      title: "ការបង្ហោះថ្មីៗ",
      subtitle: "ការយល់ដឹង ការបង្រៀន និងគំនិតអំពីការអភិវឌ្ឍន៍វេបសាយ និងបច្ចេកវិទ្យា",
      readMore: "អានបន្ថែម",
      viewAllPosts: "មើលការបង្ហោះទាំងអស់",
      minRead: "នាទីអាន",
      categories: {
        tutorial: "ការបង្រៀន",
        webdev: "អភិវឌ្ឍន៍វេបសាយ",
        career: "អាជីព",
        technology: "បច្ចេកវិទ្យា",
        tips: "ដំបូន្មាន"
      },
      posts: [
        {
          title: "បង្កើតកម្មវិធីវេបសាយដែលអាចពង្រីកបានជាមួយ Laravel និង Vue.js",
          excerpt: "រៀនពីរបៀបបង្កើតកម្មវិធីវេបសាយរឹងមាំ និងអាចពង្រីកបានដោយប្រើការរួមបញ្ចូលដ៏មានអានុភាពនៃ Laravel backend និង Vue.js frontend។",
          content: "ការបង្រៀនពេញលេញជាមួយនឹងឧទាហរណ៍កូដ និងយុទ្ធសាស្ត្រដាក់ឱ្យដំណើរការ...",
          category: "tutorial",
          readTime: 8,
          publishDate: "2024-01-20",
          image: "/api/placeholder/400/250",
          featured: true,
          tags: ["Laravel", "Vue.js", "ការពង្រីក"]
        },
        {
          title: "ដំបូន្មាន ១០ យ៉ាងសំខាន់សម្រាប់អ្នកអភិវឌ្ឍន៍កម្រិតដំបូងនៅកម្ពុជា",
          excerpt: "ចាប់ផ្តើមអាជីពសរសេរកម្មវិធីរបស់អ្នកនៅកម្ពុជា? នេះគឺជាដំបូន្មាន ១០ យ៉ាងសំខាន់ដែលនឹងជួយអ្នកក្នុងការរុករកឧស្សាហកម្មបច្ចេកវិទ្យា។",
          content: "ដំបូន្មានជាក់ស្តែងសម្រាប់ការអភិវឌ្ឍន៍អាជីពក្នុងឈុតបច្ចេកវិទ្យាកម្ពុជា...",
          category: "career",
          readTime: 6,
          publishDate: "2024-01-18",
          image: "/api/placeholder/400/250",
          featured: true,
          tags: ["អាជីព", "កម្ពុជា", "អភិវឌ្ឍន៍"]
        },
        {
          title: "បច្ចេកទេស CSS ទំនើបដែលអ្នកអភិវឌ្ឍន៍គួរតែដឹង",
          excerpt: "ស្វែងយល់អំពីលក្ខណៈពិសេស និងបច្ចេកទេស CSS ថ្មីៗដែលអាចកែលម្អដំណើរការអភិវឌ្ឍន៍វេបសាយរបស់អ្នក។",
          content: "ការស្វែងយល់យ៉ាងស៊ីជម្រៅអំពីលក្ខណៈពិសេស CSS ទំនើប...",
          category: "webdev",
          readTime: 12,
          publishDate: "2024-01-15",
          image: "/api/placeholder/400/250",
          featured: false,
          tags: ["CSS", "Frontend", "រចនា"]
        },
        {
          title: "យុទ្ធសាស្ត្រអុបទីម័រមូលដ្ឋានទិន្នន័យសម្រាប់ការអនុវត្តល្អប្រសើរ",
          excerpt: "រៀនយុទ្ធសាស្ត្រដែលបានបង្ហាញក្នុងការអុបទីម័រសំណួរមូលដ្ឋានទិន្នន័យ និងកែលម្អការអនុវត្តកម្មវិធី។",
          content: "ការណែនាំពេញលេញអំពីការអុបទីម័រមូលដ្ឋានទិន្នន័យជាមួយនឹងឧទាហរណ៍ MySQL និង PostgreSQL...",
          category: "tutorial",
          readTime: 15,
          publishDate: "2024-01-12",
          image: "/api/placeholder/400/250",
          featured: false,
          tags: ["មូលដ្ឋានទិន្នន័យ", "ការអនុវត្ត", "MySQL"]
        },
        {
          title: "អនាគតនៃការអភិវឌ្ឍន៍វេបសាយ៖ និន្នាការត្រូវតាមដាននៅឆ្នាំ ២០២៤",
          excerpt: "ស្វែងរកនិន្នាការ និងបច្ចេកវិទ្យាកំពុងរីកចម្រើនដែលនឹងរូបរាងការអភិវឌ្ឍន៍វេបសាយនៅឆ្នាំ ២០២៤។",
          content: "ការវិភាគនិន្នាការកំពុងមកដល់ និងឥទ្ធិពលសក្តានុពលរបស់ពួកគេលើឧស្សាហកម្ម...",
          category: "technology",
          readTime: 10,
          publishDate: "2024-01-10",
          image: "/api/placeholder/400/250",
          featured: false,
          tags: ["និន្នាការ", "អនាគត", "បច្ចេកវិទ្យា"]
        },
        {
          title: "បង្កើត APIs ជាមួយ Node.js៖ ការណែនាំពេញលេញ",
          excerpt: "ស្ទាត់ជំនាញក្នុងការបង្កើត REST APIs រឹងមាំជាមួយ Node.js និង Express។ ការណែនាំនេះគ្របដណ្តប់ពីការកំណត់មូលដ្ឋានដល់ការផ្ទៀងផ្ទាត់កម្រិតខ្ពស់។",
          content: "ការបង្រៀនជំហាន​ម្តងៗសម្រាប់ការបង្កើត APIs ដែលរួចរាល់សម្រាប់ផលិតកម្ម...",
          category: "tutorial",
          readTime: 20,
          publishDate: "2024-01-08",
          image: "/api/placeholder/400/250",
          featured: false,
          tags: ["Node.js", "API", "Backend"]
        }
      ]
    }
  };

  const text = content[language as keyof typeof content] || content.km;

  const getCategoryText = (category: string) => {
    return text.categories[category as keyof typeof text.categories] || category;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      tutorial: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      webdev: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      career: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      technology: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      tips: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{text.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {text.subtitle}
          </p>
        </div>

        {/* Featured Posts */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {text.posts.filter(post => post.featured).map((post, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-0">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-primary/30" />
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(post.category)}>
                    {getCategoryText(post.category)}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">Featured</Badge>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime} {text.minRead}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button className="w-full group">
                  {text.readMore}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {text.posts.filter(post => !post.featured).map((post, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-secondary/20 to-primary/10 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-primary/30" />
                </div>
                <div className="absolute top-2 left-2">
                  <Badge className={getCategoryColor(post.category)} variant="secondary">
                    {getCategoryText(post.category)}
                  </Badge>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold mb-2 text-sm line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime} {text.minRead}</span>
                  </div>
                </div>
                
                <Button size="sm" className="w-full text-xs">
                  {text.readMore}
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="text-center">
          <Card className="inline-block p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg">
                  {language === 'km' ? 'តាមដានការបង្ហោះថ្មីៗ' : 'Stay Updated'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'km' 
                    ? 'ទទួលបានការបង្ហោះ និងការបង្រៀនថ្មីៗ'
                    : 'Get the latest posts and tutorials in your inbox'
                  }
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline">
                {text.viewAllPosts}
              </Button>
              <Button>
                {language === 'km' ? 'ចុះឈ្មោះទទួលព័ត៌មាន' : 'Subscribe to Newsletter'}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
