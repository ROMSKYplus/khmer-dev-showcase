import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
  language: string;
  toggleLanguage: () => void;
}

export const Header = ({ isDark, toggleTheme, language, toggleLanguage }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = {
    en: [
      { href: "#home", label: "Home" },
      { href: "#about", label: "About" },
      { href: "#projects", label: "Projects" },
      { href: "#videos", label: "Videos" },
      { href: "#store", label: "Store" },
      { href: "#blog", label: "Blog" },
      { href: "#contact", label: "Contact" },
    ],
    km: [
      { href: "#home", label: "ដើម" },
      { href: "#about", label: "អំពី" },
      { href: "#projects", label: "គម្រោង" },
      { href: "#videos", label: "វីដេអូ" },
      { href: "#store", label: "ហាង" },
      { href: "#blog", label: "ប្លុក" },
      { href: "#contact", label: "ទំនាក់ទំនង" },
    ],
  };

  const currentNavItems = navItems[language as keyof typeof navItems] || navItems.km;

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">P</span>
            </div>
            <span className="font-bold text-xl text-foreground">
              {language === 'km' ? 'ផតហ្វលីយ៉ូ' : 'Podfolio'}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {currentNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hidden sm:flex"
            >
              <Globe className="w-4 h-4 mr-2" />
              {language === 'km' ? 'EN' : 'KM'}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              {currentNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="flex justify-start"
              >
                <Globe className="w-4 h-4 mr-2" />
                {language === 'km' ? 'English' : 'ខ្មែរ'}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};