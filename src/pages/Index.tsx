import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ChatbotSection from '@/components/ChatbotSection';

const Index = () => {
  useEffect(() => {
    // Set dark mode as default
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground custom-scrollbar">
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ChatbotSection />
      </main>
      
      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/50">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-terminal-green">//</span> Built with ❤️ using React, TypeScript, and Tailwind CSS
            </p>
          </div>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="mailto:contact@jaiditya.dev" className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm">
              Email
            </a>
            <a href="https://github.com/jaiditya" className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm">
              GitHub
            </a>
            <a href="https://linkedin.com/in/jaiditya" className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm">
              LinkedIn
            </a>
            <a href="https://twitter.com/jaiditya" className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm">
              Twitter
            </a>
          </div>
          <p className="text-xs text-muted-foreground font-mono">
            © 2024 Jaiditya. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;