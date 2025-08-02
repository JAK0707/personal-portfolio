import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'DevPortfolio Pro',
    description: 'Modern portfolio template with glassmorphism design, dark/light mode, and smooth animations.',
    image: '/api/placeholder/400/250',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/jaiditya/devportfolio-pro',
    liveUrl: 'https://devportfolio-pro.vercel.app',
    stars: 234,
    forks: 45,
    category: 'Frontend'
  },
  {
    id: 2,
    title: 'AI Code Assistant',
    description: 'Intelligent code completion and optimization tool powered by machine learning algorithms.',
    image: '/api/placeholder/400/250',
    technologies: ['Python', 'FastAPI', 'OpenAI', 'Docker', 'Redis'],
    githubUrl: 'https://github.com/jaiditya/ai-code-assistant',
    liveUrl: 'https://ai-code-assistant.dev',
    stars: 512,
    forks: 89,
    category: 'AI/ML'
  },
  {
    id: 3,
    title: 'CloudSync Dashboard',
    description: 'Real-time analytics dashboard for cloud infrastructure monitoring with beautiful visualizations.',
    image: '/api/placeholder/400/250',
    technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'Chart.js', 'WebSocket'],
    githubUrl: 'https://github.com/jaiditya/cloudsync-dashboard',
    liveUrl: 'https://cloudsync-dashboard.com',
    stars: 189,
    forks: 32,
    category: 'Full Stack'
  },
  {
    id: 4,
    title: 'Crypto Trading Bot',
    description: 'Automated cryptocurrency trading bot with advanced technical analysis and risk management.',
    image: '/api/placeholder/400/250',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Socket.io', 'TradingView'],
    githubUrl: 'https://github.com/jaiditya/crypto-trading-bot',
    liveUrl: '#',
    stars: 367,
    forks: 78,
    category: 'Backend'
  },
  {
    id: 5,
    title: 'Mobile Task Manager',
    description: 'Cross-platform mobile app for task management with offline sync and team collaboration.',
    image: '/api/placeholder/400/250',
    technologies: ['React Native', 'Expo', 'Firebase', 'Redux', 'TypeScript'],
    githubUrl: 'https://github.com/jaiditya/mobile-task-manager',
    liveUrl: 'https://play.google.com/store/apps',
    stars: 145,
    forks: 23,
    category: 'Mobile'
  },
  {
    id: 6,
    title: 'DevOps Pipeline',
    description: 'Complete CI/CD pipeline setup with automated testing, deployment, and monitoring.',
    image: '/api/placeholder/400/250',
    technologies: ['Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Terraform'],
    githubUrl: 'https://github.com/jaiditya/devops-pipeline',
    liveUrl: '#',
    stars: 298,
    forks: 67,
    category: 'DevOps'
  }
];

const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'AI/ML', 'Mobile', 'DevOps'];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-mono">
            <span className="text-terminal-green">//</span> Showcasing my latest work and side projects
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`font-mono transition-all duration-300 ${
                selectedCategory === category 
                  ? 'bg-gradient-primary shadow-glow' 
                  : 'border-primary/30 text-primary hover:bg-primary/10'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`glass hover:shadow-glow transition-all duration-500 transform hover:-translate-y-2 animate-code-reveal border-primary/20`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg h-48 bg-gradient-code">
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-2">💻</div>
                      <div className="font-mono text-sm text-primary">Project #{project.id}</div>
                    </div>
                  </div>
                  {hoveredProject === project.id && (
                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center space-x-4 transition-all duration-300">
                      <Button size="sm" variant="outline" className="border-primary text-primary">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" className="bg-gradient-primary">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                      </Button>
                    </div>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="border-primary/50 text-primary font-mono text-xs">
                    {project.category}
                  </Badge>
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitFork className="h-3 w-3" />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                </div>
                
                <CardTitle className="text-xl mb-2 text-foreground">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs font-mono bg-muted">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs font-mono bg-muted">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1 border-primary/30 text-primary hover:bg-primary/10">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-primary">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}