import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Download, ExternalLink, Zap, Shield, Headphones, Mail } from "lucide-react";

interface StoreSectionProps {
  language: string;
}

export const StoreSection = ({ language }: StoreSectionProps) => {
  const content = {
    en: {
      title: "Software Store",
      subtitle: "Premium software and web applications ready for purchase",
      buyNow: "Buy Now",
      viewDemo: "View Demo",
      download: "Download",
      features: "Features",
      reviews: "reviews",
      bestseller: "Bestseller",
      newRelease: "New Release",
      onSale: "On Sale",
      products: [
        {
          title: "Restaurant Management System",
          description: "Complete POS system for restaurants with inventory management, staff scheduling, and analytics dashboard.",
          price: "$299",
          originalPrice: "$399",
          rating: 4.8,
          reviewCount: 156,
          image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&crop=center",
          tags: ["Laravel", "Vue.js", "MySQL"],
          features: ["POS System", "Inventory", "Analytics", "Multi-language"],
          badge: "bestseller",
          onSale: true,
          demoUrl: "https://restaurant-pos-demo.vercel.app",
          purchaseUrl: "https://gumroad.com/l/restaurant-management",
          downloadUrl: "https://github.com/yourusername/restaurant-pos/releases"
        },
        {
          title: "E-learning Platform",
          description: "Modern learning management system with video streaming, quiz system, and progress tracking.",
          price: "$199",
          originalPrice: null,
          rating: 4.9,
          reviewCount: 89,
          image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop&crop=center",
          tags: ["React", "Node.js", "MongoDB"],
          features: ["Video Streaming", "Quizzes", "Certificates", "Mobile App"],
          badge: "new",
          onSale: false,
          demoUrl: "https://elearning-demo.netlify.app",
          purchaseUrl: "https://gumroad.com/l/elearning-platform",
          downloadUrl: "https://github.com/yourusername/elearning-platform/releases"
        },
        {
          title: "Inventory Management Pro",
          description: "Advanced inventory management with barcode scanning, automated ordering, and detailed reporting.",
          price: "$149",
          originalPrice: null,
          rating: 4.7,
          reviewCount: 203,
          image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop&crop=center",
          tags: ["Laravel", "React", "PostgreSQL"],
          features: ["Barcode Scanner", "Auto-ordering", "Reports", "Multi-store"],
          badge: null,
          onSale: false,
          demoUrl: "https://inventory-pro-demo.herokuapp.com",
          purchaseUrl: "https://gumroad.com/l/inventory-management-pro",
          downloadUrl: "https://github.com/yourusername/inventory-management/releases"
        },
        {
          title: "Project Management Suite",
          description: "Comprehensive project management tool with team collaboration, time tracking, and client portal.",
          price: "$179",
          originalPrice: "$249",
          rating: 4.6,
          reviewCount: 134,
          image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center",
          tags: ["Vue.js", "Express", "MySQL"],
          features: ["Team Collaboration", "Time Tracking", "Client Portal", "Mobile App"],
          badge: null,
          onSale: true,
          demoUrl: "https://project-suite-demo.vercel.app",
          purchaseUrl: "https://gumroad.com/l/project-management-suite",
          downloadUrl: "https://github.com/yourusername/project-management/releases"
        }
      ],
      guarantees: [
        {
          icon: Shield,
          title: "30-Day Money Back",
          description: "Full refund if not satisfied"
        },
        {
          icon: Headphones,
          title: "24/7 Support",
          description: "Lifetime technical support"
        },
        {
          icon: Zap,
          title: "Instant Download",
          description: "Download immediately after purchase"
        }
      ]
    },
    km: {
      title: "ហាងសូហ្វវែរ",
      subtitle: "សូហ្វវែរពិសេស និងកម្មវិធីវេបសាយដែលរួចរាល់សម្រាប់ទិញ",
      buyNow: "ទិញឥឡូវនេះ",
      viewDemo: "មើលការបង្ហាញ",
      download: "ទាញយក",
      features: "លក្ខណៈពិសេស",
      reviews: "ការវាយតម្លៃ",
      bestseller: "លក់ដាច់បំផុត",
      newRelease: "ថ្មីចេញ",
      onSale: "កំពុងបញ្ចុះតម្លៃ",
      products: [
        {
          title: "ប្រព័ន្ធគ្រប់គ្រងភោជនីយដ្ឋាន",
          description: "ប្រព័ន្ធ POS ពេញលេញសម្រាប់ភោជនីយដ្ឋានជាមួយនឹងការគ្រប់គ្រងស្តុក និងផ្ទាំងតាមដាន។",
          price: "$២៩៩",
          originalPrice: "$៣៩៩",
          rating: 4.8,
          reviewCount: 156,
          image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&crop=center",
          tags: ["Laravel", "Vue.js", "MySQL"],
          features: ["ប្រព័ន្ធ POS", "គ្រប់គ្រងស្តុក", "ការវិភាគ", "ពហុភាសា"],
          badge: "bestseller",
          onSale: true,
          demoUrl: "https://restaurant-pos-demo.vercel.app",
          purchaseUrl: "https://gumroad.com/l/restaurant-management",
          downloadUrl: "https://github.com/yourusername/restaurant-pos/releases"
        },
        {
          title: "វេទិកាអេឡិចត្រូនិក",
          description: "ប្រព័ន្ធគ្រប់គ្រងការរៀនទំនើបជាមួយនឹងការចាក់វីដេអូ និងប្រព័ន្ធកម្រងសំណួរ។",
          price: "$១៩៩",
          originalPrice: null,
          rating: 4.9,
          reviewCount: 89,
          image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop&crop=center",
          tags: ["React", "Node.js", "MongoDB"],
          features: ["ចាក់វីដេអូ", "កម្រងសំណួរ", "វិញ្ញាបនបត្រ", "កម្មវិធីទូរស័ព្ទ"],
          badge: "new",
          onSale: false,
          demoUrl: "https://elearning-demo.netlify.app",
          purchaseUrl: "https://gumroad.com/l/elearning-platform",
          downloadUrl: "https://github.com/yourusername/elearning-platform/releases"
        },
        {
          title: "គ្រប់គ្រងស្តុកទំនិញអាជីព",
          description: "ការគ្រប់គ្រងស្តុកទំនិញកម្រិតខ្ពស់ជាមួយនឹងការស្កេនបាកូដ និងរបាយការណ៍លម្អិត។",
          price: "$១៤៩",
          originalPrice: null,
          rating: 4.7,
          reviewCount: 203,
          image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop&crop=center",
          tags: ["Laravel", "React", "PostgreSQL"],
          features: ["ស្កេនបាកូដ", "បញ្ជាទិញស្វ័យប្រវត្តិ", "របាយការណ៍", "ហាងច្រើន"],
          badge: null,
          onSale: false,
          demoUrl: "https://inventory-pro-demo.herokuapp.com",
          purchaseUrl: "https://gumroad.com/l/inventory-management-pro",
          downloadUrl: "https://github.com/yourusername/inventory-management/releases"
        },
        {
          title: "ឈុតគ្រប់គ្រងគម្រោង",
          description: "ឧបករណ៍គ្រប់គ្រងគម្រោងពេញលេញជាមួយនឹងការសហការក្រុម និងការតាមដានពេលវេលា។",
          price: "$១៧៉",
          originalPrice: "$២៤៉",
          rating: 4.6,
          reviewCount: 134,
          image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center",
          tags: ["Vue.js", "Express", "MySQL"],
          features: ["សហការក្រុម", "តាមដានពេល", "ច្រកអតិថិជន", "កម្មវិធីទូរស័ព្ទ"],
          badge: null,
          onSale: true,
          demoUrl: "https://project-suite-demo.vercel.app",
          purchaseUrl: "https://gumroad.com/l/project-management-suite",
          downloadUrl: "https://github.com/yourusername/project-management/releases"
        }
      ],
      guarantees: [
        {
          icon: Shield,
          title: "ការធានា ៣០ ថ្ងៃ",
          description: "ការបង្វិលប្រាក់វិញពេញលេញ"
        },
        {
          icon: Headphones,
          title: "ការគាំទ្រ ២៤/៧",
          description: "ការគាំទ្របច្ចេកទេសមួយជីវិត"
        },
        {
          icon: Zap,
          title: "ទាញយកភ្លាមៗ",
          description: "ទាញយកភ្លាមៗបន្ទាប់ពីទិញ"
        }
      ]
    }
  };

  const text = content[language as keyof typeof content] || content.km;

  // Enhanced link opening function with analytics tracking
  const openLink = (url: string, linkType: 'demo' | 'purchase' | 'download' | 'contact' = 'demo', productTitle?: string) => {
    if (!url || url === "#") {
      console.warn(`Invalid URL for ${productTitle || 'product'}: ${url}`);
      return;
    }
    
    // Optional: Track link clicks for analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        event_category: 'Store Link',
        event_label: `${productTitle} - ${linkType}`,
        value: linkType === 'purchase' ? 1 : 0
      });
    }
    
    try {
      window.open(url, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error(`Failed to open link: ${url}`, error);
      window.location.href = url;
    }
  };

  // Handle purchase with confirmation
  const handlePurchase = (product: any) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'begin_checkout', {
        event_category: 'Store',
        event_label: product.title,
        value: parseFloat(product.price.replace('$', '').replace('៉', '').replace('១', '1').replace('២', '2').replace('៣', '3').replace('៤', '4').replace('៥', '5').replace('៦', '6').replace('៧', '7').replace('៨', '8').replace('៩', '9')),
        currency: 'USD'
      });
    }
    
    openLink(product.purchaseUrl, 'purchase', product.title);
  };

  // Handle image errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, productTitle: string) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
    const fallbackDiv = target.nextElementSibling as HTMLDivElement;
    if (fallbackDiv) {
      fallbackDiv.style.display = 'flex';
    }
  };

  const getBadgeText = (badge: string | null) => {
    if (!badge) return null;
    const badges = {
      bestseller: text.bestseller,
      new: text.newRelease,
      sale: text.onSale
    };
    return badges[badge as keyof typeof badges];
  };

  const getBadgeVariant = (badge: string | null) => {
    const variants = {
      bestseller: "destructive",
      new: "default",
      sale: "secondary"
    };
    return variants[badge as keyof typeof variants] || "default";
  };

  return (
    <section id="store" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{text.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {text.subtitle}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {text.products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0">
              <div className="relative">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    onError={(e) => handleImageError(e, product.title)}
                  />
                  {/* Fallback div - hidden by default */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center hidden"
                    style={{ display: 'none' }}
                  >
                    <div className="text-4xl font-bold text-primary/30">
                      {product.title.charAt(0)}
                    </div>
                  </div>
                </div>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex space-x-2">
                  {product.badge && (
                    <Badge variant={getBadgeVariant(product.badge) as any}>
                      {getBadgeText(product.badge)}
                    </Badge>
                  )}
                  {product.onSale && (
                    <Badge variant="destructive">
                      {text.onSale}
                    </Badge>
                  )}
                </div>
                
                {/* Rating */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button 
                    size="sm" 
                    variant="secondary"
                    onClick={() => openLink(product.demoUrl, 'demo', product.title)}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {text.viewDemo}
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={() => handlePurchase(product)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {text.buyNow}
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold flex-1">{product.title}</h3>
                  <div className="text-right ml-4">
                    <div className="text-2xl font-bold text-primary">{product.price}</div>
                    {product.originalPrice && (
                      <div className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </div>
                    )}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {/* Features */}
                <div className="mb-4">
                  <p className="text-sm font-medium mb-2">{text.features}:</p>
                  <div className="grid grid-cols-2 gap-1">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Reviews */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.reviewCount} {text.reviews}
                  </span>
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button 
                    className="flex-1"
                    onClick={() => handlePurchase(product)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {text.buyNow}
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => openLink(product.demoUrl, 'demo', product.title)}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {text.viewDemo}
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => openLink(product.downloadUrl, 'download', product.title)}
                    className="px-3"
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Guarantees */}
        <div className="grid md:grid-cols-3 gap-6">
          {text.guarantees.map((guarantee, index) => (
            <Card key={index} className="p-6 text-center border-primary/20 bg-primary/5">
              <guarantee.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{guarantee.title}</h3>
              <p className="text-sm text-muted-foreground">{guarantee.description}</p>
            </Card>
          ))}
        </div>

        {/* Custom Development CTA */}
        <div className="text-center mt-16">
          <Card className="inline-block p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <h3 className="text-xl font-semibold mb-4">
              {language === 'km' ? 'ត្រូវការកម្មវិធីតាមតម្រូវការ?' : 'Need Custom Software?'}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              {language === 'km' 
                ? 'ខ្ញុំអាចបង្កើតកម្មវិធីតាមតម្រូវការជាក់លាក់របស់អ្នក។ ទំនាក់ទំនងមកខ្ញុំសម្រាប់ការពិគ្រោះយោបល់ឥតគិតថ្លៃ។'
                : 'I can build custom software solutions tailored to your specific needs. Contact me for a free consultation.'
              }
            </p>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => openLink("mailto:your.email@example.com?subject=Custom Software Inquiry", 'contact')}
            >
              <Mail className="w-4 h-4 mr-2" />
              {language === 'km' ? 'ទំនាក់ទំនងសម្រាប់គម្រោងតាមតម្រូវការ' : 'Contact for Custom Project'}
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};