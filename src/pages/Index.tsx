import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { VideosSection } from "@/components/VideosSection";
import { StoreSection } from "@/components/StoreSection";
import { BlogSection } from "@/components/BlogSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState('km'); // Default to Khmer

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleLanguage = () => setLanguage(language === 'km' ? 'en' : 'km');

  return (
    <div className="min-h-screen bg-background">
      <Header 
        isDark={isDark} 
        toggleTheme={toggleTheme}
        language={language}
        toggleLanguage={toggleLanguage}
      />
      <main>
        <HeroSection language={language} />
        <AboutSection language={language} />
        <ProjectsSection language={language} />
        <VideosSection language={language} />
        <StoreSection language={language} />
        <BlogSection language={language} />
        <ContactSection language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Index;
