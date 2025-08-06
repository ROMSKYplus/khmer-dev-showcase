import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, ExternalLink, Search, Filter } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: number;
  publishDate: string;
  image: string;
  featured: boolean;
  tags: string[];
  slug: string;
  url?: string;
}

interface BlogSectionProps {
  language: string;
  onPostClick?: (post: BlogPost) => void;
  baseUrl?: string;
}

export const BlogSection = ({ language = 'en', onPostClick, baseUrl = '/blog' }: BlogSectionProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const content = {
    en: {
      title: "Latest Blog Posts",
      subtitle: "Insights, tutorials, and thoughts on web development and technology",
      readMore: "Read More",
      viewAllPosts: "View All Posts",
      minRead: "min read",
      searchPlaceholder: "Search posts...",
      filterAll: "All Categories",
      noResults: "No posts found matching your criteria.",
      categories: {
        tutorial: "Tutorial",
        webdev: "Web Development", 
        career: "Career",
        technology: "Technology",
        tips: "Tips & Tricks"
      },
      posts: [
        {
          id: "1",
          title: "Building Scalable Web Applications with Laravel and Vue.js",
          excerpt: "Learn how to create robust and scalable web applications using the powerful combination of Laravel backend and Vue.js frontend. This comprehensive guide covers best practices and real-world examples.",
          content: "Complete tutorial with code examples and deployment strategies...",
          category: "tutorial",
          readTime: 8,
          publishDate: "2024-01-20",
          image: "/api/placeholder/400/250",
          featured: true,
          tags: ["Laravel", "Vue.js", "Scalability"],
          slug: "building-scalable-web-applications-laravel-vuejs",
          url: "https://example.com/blog/building-scalable-web-applications-laravel-vuejs"
        },
        {
          id: "2",
          title: "10 Essential Tips for Junior Developers in Cambodia",
          excerpt: "Starting your programming career in Cambodia? Here are 10 essential tips that will help you navigate the tech industry and accelerate your professional growth.",
          content: "Practical advice for career development in the Cambodian tech scene...",
          category: "career",
          readTime: 6,
          publishDate: "2024-01-18",
          image: "/api/placeholder/400/250",
          featured: true,
          tags: ["Career", "Cambodia", "Development"],
          slug: "essential-tips-junior-developers-cambodia",
          url: "https://example.com/blog/essential-tips-junior-developers-cambodia"
        },
        {
          id: "3",
          title: "Modern CSS Techniques Every Developer Should Know",
          excerpt: "Explore the latest CSS features and techniques that can significantly improve your web development workflow and create better user experiences.",
          content: "Deep dive into modern CSS features including Grid, Flexbox, and custom properties...",
          category: "webdev",
          readTime: 12,
          publishDate: "2024-01-15",
          image: "/api/placeholder/400/250",
          featured: false,
          tags: ["CSS", "Frontend", "Design"],
          slug: "modern-css-techniques-every-developer-should-know",
          url: "https://example.com/blog/modern-css-techniques-every-developer-should-know"
        },
        {
          id: "4",
          title: "Database Optimization Strategies for Better Performance",
          excerpt: "Learn proven strategies to optimize your database queries and improve application performance. Covers indexing, query optimization, and caching techniques.",
          content: "Comprehensive guide to database optimization with MySQL and PostgreSQL examples...",
          category: "tutorial",
          readTime: 15,
          publishDate: "2024-01-12",
          image: "/api/placeholder/400/250",
          featured: false,
          tags: ["Database", "Performance", "MySQL"],
          slug: "database-optimization-strategies-better-performance",
          url: "https://example.com/blog/database-optimization-strategies-better-performance"
        },
        {
          id: "5",
          title: "The Future of Web Development: Trends to Watch in 2024",
          excerpt: "Discover the emerging trends and technologies that will shape web development in 2024. From AI integration to new frameworks and tools.",
          content: "Analysis of upcoming trends and their potential impact on the industry...",
          category: "technology",
          readTime: 10,
          publishDate: "2024-01-10",
          image: "/api/placeholder/400/250",
          featured: false,
          tags: ["Trends", "Future", "Technology"],
          slug: "future-web-development-trends-2024",
          url: "https://example.com/blog/future-web-development-trends-2024"
        },
        {
          id: "6",
          title: "Building APIs with Node.js: A Complete Guide",
          excerpt: "Master the art of building robust REST APIs with Node.js and Express. This guide covers everything from basic setup to advanced authentication and testing.",
          content: "Step-by-step tutorial for creating production-ready APIs...",
          category: "tutorial",
          readTime: 20,
          publishDate: "2024-01-08",
          image: "/api/placeholder/400/250",
          featured: false,
          tags: ["Node.js", "API", "Backend"],
          slug: "building-apis-nodejs-complete-guide",
          url: "https://example.com/blog/building-apis-nodejs-complete-guide"
        }
      ]
    },
    km: {
      title: "ការបង្ហោះថ្មីៗ",
      subtitle: "ការយល់ដឹង ការបង្រៀន និងគំនិតអំពីការអភិវឌ្ឍន៍វេបសាយ និងបច្ចេកវិទ្យា",
      readMore: "អានបន្ថែម",
      viewAllPosts: "មើលការបង្ហោះទាំងអស់",
      minRead: "នាទីអាន",
      searchPlaceholder: "ស្វែងរកការបង្ហោះ...",
      filterAll: "ប្រភេទទាំងអស់",
      noResults: "រកមិនឃើញការបង្ហោះដែលត្រូវនឹងលក្ខខណ្ឌរបស់អ្នក។",
      categories: {
        tutorial: "ការបង្រៀន",
        webdev: "អភិវឌ្ឍន៍វេបសាយ",
        career: "អាជីព",
        technology: "បច្ចេកវិទ្យា",
        tips: "ដំបូន្មាន"
      },
      posts: [
        {
          id: "1",
          title: "បង្កើតកម្មវិធីវេបសាយដែលអាចពង្រីកបានជាមួយ Laravel និង Vue.js",
          excerpt: "រៀនពីរបៀបបង្កើតកម្មវិធីវេបសាយរឹងមាំ និងអាចពង្រីកបានដោយប្រើការរួមបញ្ចូលដ៏មានអានុភាពនៃ Laravel backend និង Vue.js frontend។",
          content: "ការបង្រៀនពេញលេញជាមួយនឹងឧទាហរណ៍កូដ និងយុទ្ធសាស្ត្រដាក់ឱ្យដំណើរការ...",
          category: "tutorial",
          readTime: 8,
          publishDate: "2024-01-20",
          image: "/api/placeholder/400/250",
          featured: true,
          tags: ["Laravel", "Vue.js", "ការពង្រីក"],
          slug: "building-scalable-web-applications-laravel-vuejs",
          url: "https://example.com/blog/building-scalable-web-applications-laravel-vuejs"
        },
        {
          id: "2",
          title: "ដំបូន្មាន ១០ យ៉ាងសំខាន់សម្រាប់អ្នកអភិវឌ្ឍន៍កម្រិតដំបូងនៅកម្ពុជា",
          excerpt: "ចាប់ផ្តើមអាជីពសរសេរកម្មវិធីរបស់អ្នកនៅកម្ពុជា? នេះគឺជាដំបូន្មាន ១០ យ៉ាងសំខាន់ដែលនឹងជួយអ្នកក្នុងការរុករកឧស្សាហកម្មបច្ចេកវិទ្យា។",
          content: "ដំបូន្មានជាក់ស្តែងសម្រាប់ការអភិវឌ្ឍន៍អាជីពក្នុងឈុតបច្ចេកវិទ្យាកម្ពុជា...",
          category: "career",
          readTime: 6,
          publishDate: "2024-01-18",
          image: "/api/placeholder/400/250",
          featured: true,
          tags: ["អាជីព", "កម្ពុជា", "អភិវឌ្ឍន៍"],
          slug: "essential-tips-junior-developers-cambodia",
          url: "https://example.com/blog/essential-tips-junior-developers-cambodia"
        },
        {
          id: "3",
          title: "បច្ចេកទេស CSS ទំនើបដែលអ្នកអភិវឌ្ឍន៍គួរតែដឹង",
          excerpt: "ស្វែងយល់អំពីលក្ខណៈពិសេស និងបច្ចេកទេស CSS ថ្មីៗដែលអាចកែលម្អដំណើរការអភិវឌ្ឍន៍វេបសាយរបស់អ្នក។",
          content: "ការស្វែងយល់យ៉ាងស៊ីជម្រៅអំពីលក្ខណៈពិសេស CSS ទំនើប...",
          category: "webdev",
          readTime: 12,
          publishDate: "2024-01-15",
          image: "/api/placeholder/400/250",
          featured: false,
          tags: ["CSS", "Frontend", "រចនា"],
          slug: "modern-css-techniques-every-developer-should-know",
          url: "https://example.com/blog/modern-css-techniques-every-developer-should-know"
        },
        {
          id: "4",
          title: "យុទ្ធសាស្ត្រអុបទីម័រមូលដ្ឋានទិន្នន័យសម្រាប់ការអនុវត្តល្អប្រសើរ",
          excerpt: "រៀនយុទ្ធសាស្ត្រដែលបានបង្ហាញក្នុងការអុបទីម័រសំណួរមូលដ្ឋានទិន្នន័យ និងកែលម្អការអនុវត្តកម្មវិធី។",
          content: "ការណែនាំពេញលេញអំពីការអុបទីម័រមូលដ្ឋានទិន្នន័យជាមួយនឹងឧទាហរណ៍ MySQL និង PostgreSQL...",
          category: "tutorial",
          readTime: 15,
          publishDate: "2024-01-12",
          image: "/api/placeholder/400/250",
          featured: false,
          tags: ["មូលដ្ឋានទិន្នន័យ", "ការអនុវត្ត", "MySQL"],
          slug: "database-optimization-strategies-better-performance",
          url: "https://example.com/blog/database-optimization-strategies-better-performance"
        },
        {
          id: "5",
          title: "អនាគតនៃការអភិវឌ្ឍន៍វេបសាយ៖ និន្នាការត្រូវតាមដាននៅឆ្នាំ ២០២៤",
          excerpt: "ស្វែងរកនិន្នាការ និងបច្ចេកវិទ្យាកំពុងរីកចម្រើនដែលនឹងរូបរាងការអភិវឌ្ឍន៍វេបសាយនៅឆ្នាំ ២០២៤។",
          content: "ការវិភាគនិន្នាការកំពុងមកដល់ និងឥទ្ធិពលសក្តានុពលរបស់ពួកគេលើឧស្សាហកម្ម...",
          category: "technology",
          readTime: 10,
          publishDate: "2024-01-10",
          image: "/api/placeholder/400/250",
          featured: false,
          tags: ["និន្នាការ", "អនាគត", "បច្ចេកវិទ្យា"],
          slug: "future-web-development-trends-2024",
          url: "https://example.com/blog/future-web-development-trends-2024"
        },
        {
          id: "6",
          title: "បង្កើត APIs ជាមួយ Node.js៖ ការណែនាំពេញលេញ",
          excerpt: "ស្ទាត់ជំនាញក្នុងការបង្កើត REST APIs រឹងមាំជាមួយ Node.js និង Express។ ការណែនាំនេះគ្របដណ្តប់ពីការកំណត់មូលដ្ឋានដល់ការផ្ទៀងផ្ទាត់កម្រិតខ្ពស់។",
          content: "ការបង្រៀនជំហាន​ម្តងៗសម្រាប់ការបង្កើត APIs ដែលរួចរាល់សម្រាប់ផលិតកម្ម...",
          category: "tutorial",
          readTime: 20,
          publishDate: "2024-01-08",
          image: "/api/placeholder/400/250",
          featured: false,
          tags: ["Node.js", "API", "Backend"],
          slug: "building-apis-nodejs-complete-guide",
          url: "https://example.com/blog/building-apis-nodejs-complete-guide"
        }
      ]
    }
  };

  const text = content[language as keyof typeof content] || content.en;

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

  const handlePostClick = (post: BlogPost) => {
    if (onPostClick) {
      onPostClick(post);
    } else if (post.url) {
      window.open(post.url, '_blank', 'noopener,noreferrer');
    } else {
      // Fallback to constructed URL
      const url = `${baseUrl}/${post.slug}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  // Filter posts based on search and category
  const filteredPosts = text.posts.filter(post => {
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const PostCard = ({ post, featured = false }: { post: BlogPost; featured?: boolean }) => (
    <Card 
      className={`overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 ${
        featured ? 'hover:scale-[1.02]' : 'hover:shadow-lg'
      }`}
      onClick={() => handlePostClick(post)}
    >
      <div className="relative">
        <div className={`${featured ? 'aspect-video' : 'aspect-video'} bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center`}>
          <BookOpen className={`${featured ? 'w-16 h-16' : 'w-8 h-8'} text-primary/30`} />
        </div>
        <div className={`absolute ${featured ? 'top-4 left-4' : 'top-2 left-2'}`}>
          <Badge className={getCategoryColor(post.category)}>
            {getCategoryText(post.category)}
          </Badge>
        </div>
        {featured && (
          <div className="absolute top-4 right-4">
            <Badge variant="secondary">Featured</Badge>
          </div>
        )}
        <div className={`absolute ${featured ? 'top-4 right-4' : 'top-2 right-2'} ${featured ? 'mt-8' : ''}`}>
          <div className="bg-white/90 dark:bg-black/90 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <ExternalLink className="w-4 h-4 text-primary" />
          </div>
        </div>
      </div>
      
      <div className={featured ? 'p-6' : 'p-4'}>
        <h3 className={`${featured ? 'text-xl' : 'text-sm'} font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors`}>
          {post.title}
        </h3>
        
        <p className={`text-muted-foreground ${featured ? 'mb-4' : 'mb-3'} leading-relaxed ${featured ? 'line-clamp-3' : 'line-clamp-2'} ${featured ? 'text-sm' : 'text-xs'}`}>
          {post.excerpt}
        </p>
        
        <div className={`flex items-center justify-between ${featured ? 'text-sm' : 'text-xs'} text-muted-foreground ${featured ? 'mb-4' : 'mb-3'}`}>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Calendar className={`${featured ? 'w-4 h-4' : 'w-3 h-3'}`} />
              <span>{new Date(post.publishDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className={`${featured ? 'w-4 h-4' : 'w-3 h-3'}`} />
              <span>{post.readTime} {text.minRead}</span>
            </div>
          </div>
        </div>
        
        <div className={`flex flex-wrap gap-2 ${featured ? 'mb-4' : 'mb-3'}`}>
          {post.tags.slice(0, 3).map((tag, tagIndex) => (
            <Badge key={tagIndex} variant="outline" className={featured ? 'text-xs' : 'text-xs'}>
              {tag}
            </Badge>
          ))}
        </div>
        
        <Button className={`w-full group ${featured ? '' : 'text-xs'}`} size={featured ? 'default' : 'sm'}>
          {text.readMore}
          <ArrowRight className={`${featured ? 'w-4 h-4' : 'w-3 h-3'} ml-2 group-hover:translate-x-1 transition-transform`} />
        </Button>
      </div>
    </Card>
  );

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

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder={text.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-8 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none cursor-pointer min-w-48"
            >
              <option value="all">{text.filterAll}</option>
              {Object.entries(text.categories).map(([key, value]) => (
                <option key={key} value={key}>{value}</option>
              ))}
            </select>
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg text-muted-foreground">{text.noResults}</p>
          </div>
        ) : (
          <>
            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {featuredPosts.map((post) => (
                  <PostCard key={post.id} post={post} featured={true} />
                ))}
              </div>
            )}

            {/* Other Posts Grid */}
            {regularPosts.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {regularPosts.map((post) => (
                  <PostCard key={post.id} post={post} featured={false} />
                ))}
              </div>
            )}
          </>
        )}

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

export default BlogSection;