interface FooterProps {
  language: string;
}

export const Footer = ({ language }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-card border-t">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">P</span>
            </div>
            <span className="font-bold text-xl">
              {language === 'km' ? 'ផតហ្វលីយ៉ូ' : 'Podfolio'}
            </span>
          </div>
          <p className="text-muted-foreground mb-6">
            {language === 'km' 
              ? 'បង្កើតដំណោះស្រាយឌីជីថលសម្រាប់អនាគតដ៏ល្អប្រសើរ'
              : 'Building digital solutions for a better tomorrow'
            }
          </p>
          <p className="text-sm text-muted-foreground">
            © {currentYear} {language === 'km' ? 'រក្សាសិទ្ធិគ្រប់យ៉ាង' : 'All rights reserved'}
          </p>
        </div>
      </div>
    </footer>
  );
};