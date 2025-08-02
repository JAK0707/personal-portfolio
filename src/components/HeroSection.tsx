import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, ExternalLink } from 'lucide-react';

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const phrases = [
    'Hi, I\'m Jaiditya',
    'Full Stack Developer',
    'Problem Solver',
    'Code Enthusiast'
  ];

  const currentPhrase = phrases[currentIndex] || '';

  useEffect(() => {
    if (isTyping) {
      if (displayText.length < currentPhrase.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timer);
      }
    } else {
      if (displayText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, currentPhrase]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="font-mono gradient-text">
                {displayText}
                <span className="cursor-blink"></span>
              </span>
            </h1>
            
            <div className="font-mono text-lg md:text-xl text-muted-foreground mb-6">
              <span className="text-terminal-blue">const</span>{' '}
              <span className="text-terminal-purple">developer</span>{' '}
              <span className="text-foreground">=</span>{' '}
              <span className="text-terminal-green">"Passionate about crafting digital experiences"</span>
              <span className="text-terminal-orange">;</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="glass p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary">3+</div>
              <div className="text-sm text-muted-foreground font-mono">Years Experience</div>
            </div>
            <div className="glass p-4 rounded-lg">
              <div className="text-2xl font-bold text-accent">50+</div>
              <div className="text-sm text-muted-foreground font-mono">Projects Built</div>
            </div>
            <div className="glass p-4 rounded-lg">
              <div className="text-2xl font-bold text-secondary">1.2k+</div>
              <div className="text-sm text-muted-foreground font-mono">GitHub Stars</div>
            </div>
            <div className="glass p-4 rounded-lg">
              <div className="text-2xl font-bold text-terminal-orange">500+</div>
              <div className="text-sm text-muted-foreground font-mono">LeetCode Solved</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              <Github className="mr-2 h-5 w-5" />
              View Projects
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              <ExternalLink className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Code Snippet Preview */}
          <div className="glass p-6 rounded-lg text-left font-mono text-sm max-w-md mx-auto mb-12">
            <div className="text-terminal-green mb-2">// Latest Project</div>
            <div className="text-muted-foreground">
              <span className="text-terminal-blue">function</span>{' '}
              <span className="text-terminal-yellow">buildAmazingThings</span>
              <span className="text-foreground">() {'{'}</span>
            </div>
            <div className="text-muted-foreground ml-4">
              <span className="text-terminal-blue">return</span>{' '}
              <span className="text-terminal-green">"Clean code + Great UX"</span>
              <span className="text-terminal-orange">;</span>
            </div>
            <div className="text-foreground">{'}'}</div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-primary opacity-70" />
          </div>
        </div>
      </div>
    </section>
  );
}