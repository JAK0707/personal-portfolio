import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React', level: 95, color: 'text-terminal-blue' },
      { name: 'TypeScript', level: 90, color: 'text-terminal-blue' },
      { name: 'Next.js', level: 85, color: 'text-terminal-green' },
      { name: 'Tailwind CSS', level: 90, color: 'text-terminal-purple' },
      { name: 'Vue.js', level: 80, color: 'text-terminal-green' },
      { name: 'Framer Motion', level: 75, color: 'text-terminal-orange' }
    ]
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 90, color: 'text-terminal-green' },
      { name: 'Python', level: 85, color: 'text-terminal-blue' },
      { name: 'Express.js', level: 88, color: 'text-terminal-green' },
      { name: 'FastAPI', level: 80, color: 'text-terminal-orange' },
      { name: 'GraphQL', level: 75, color: 'text-terminal-purple' },
      { name: 'REST APIs', level: 92, color: 'text-terminal-blue' }
    ]
  },
  {
    title: 'Database',
    icon: '🗄️',
    skills: [
      { name: 'PostgreSQL', level: 85, color: 'text-terminal-blue' },
      { name: 'MongoDB', level: 80, color: 'text-terminal-green' },
      { name: 'Redis', level: 75, color: 'text-terminal-red' },
      { name: 'MySQL', level: 80, color: 'text-terminal-orange' },
      { name: 'Prisma', level: 85, color: 'text-terminal-purple' },
      { name: 'Supabase', level: 75, color: 'text-terminal-green' }
    ]
  },
  {
    title: 'DevOps & Cloud',
    icon: '☁️',
    skills: [
      { name: 'AWS', level: 80, color: 'text-terminal-orange' },
      { name: 'Docker', level: 85, color: 'text-terminal-blue' },
      { name: 'Kubernetes', level: 70, color: 'text-terminal-purple' },
      { name: 'CI/CD', level: 85, color: 'text-terminal-green' },
      { name: 'Terraform', level: 75, color: 'text-terminal-purple' },
      { name: 'Vercel', level: 90, color: 'text-terminal-green' }
    ]
  },
  {
    title: 'Tools & Other',
    icon: '🛠️',
    skills: [
      { name: 'Git', level: 95, color: 'text-terminal-orange' },
      { name: 'VS Code', level: 95, color: 'text-terminal-blue' },
      { name: 'Figma', level: 80, color: 'text-terminal-purple' },
      { name: 'Linux', level: 85, color: 'text-terminal-green' },
      { name: 'Jest', level: 80, color: 'text-terminal-red' },
      { name: 'Postman', level: 90, color: 'text-terminal-orange' }
    ]
  },
  {
    title: 'AI & ML',
    icon: '🤖',
    skills: [
      { name: 'OpenAI API', level: 85, color: 'text-terminal-green' },
      { name: 'Machine Learning', level: 70, color: 'text-terminal-blue' },
      { name: 'LangChain', level: 75, color: 'text-terminal-purple' },
      { name: 'TensorFlow', level: 65, color: 'text-terminal-orange' },
      { name: 'Hugging Face', level: 70, color: 'text-terminal-yellow' },
      { name: 'Vector DBs', level: 75, color: 'text-terminal-red' }
    ]
  }
];

export default function SkillsSection() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-mono">
            <span className="text-terminal-green">//</span> Tools and technologies I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className={`glass hover:shadow-glow transition-all duration-500 transform hover:-translate-y-2 border-primary/20 animate-code-reveal`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCategory(category.title)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <span className="text-3xl">{category.icon}</span>
                  <span className="text-xl text-foreground">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className={`font-mono text-sm ${skill.color}`}>
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress 
                        value={hoveredCategory === category.title ? skill.level : 0} 
                        className="h-2 bg-muted"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Programming Languages Showcase */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold mb-8 text-foreground">
            <span className="font-mono">Programming Languages</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'JavaScript', level: 'Expert', color: 'bg-terminal-yellow' },
              { name: 'TypeScript', level: 'Expert', color: 'bg-terminal-blue' },
              { name: 'Python', level: 'Advanced', color: 'bg-terminal-green' },
              { name: 'Java', level: 'Intermediate', color: 'bg-terminal-orange' },
              { name: 'Go', level: 'Beginner', color: 'bg-terminal-purple' },
              { name: 'Rust', level: 'Beginner', color: 'bg-terminal-red' }
            ].map((lang) => (
              <div
                key={lang.name}
                className="glass p-4 rounded-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              >
                <div className={`w-12 h-12 ${lang.color} rounded-lg mb-3 mx-auto flex items-center justify-center`}>
                  <span className="text-black font-bold text-lg">
                    {lang.name.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <div className="font-mono text-sm text-foreground font-semibold">
                  {lang.name}
                </div>
                <div className="text-xs text-muted-foreground font-mono">
                  {lang.level}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Learning */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Certifications */}
          <Card className="glass border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span className="text-2xl">🏆</span>
                <span className="text-xl text-foreground">Certifications</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  'AWS Certified Solutions Architect',
                  'Google Cloud Professional Developer',
                  'Meta React Developer Certificate',
                  'Docker Certified Associate'
                ].map((cert) => (
                  <div key={cert} className="flex items-center space-x-3">
                    <Badge variant="outline" className="border-primary/50 text-primary">✓</Badge>
                    <span className="text-sm text-foreground font-mono">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Currently Learning */}
          <Card className="glass border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span className="text-2xl">📚</span>
                <span className="text-xl text-foreground">Currently Learning</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  'Web3 & Blockchain Development',
                  'Advanced Machine Learning',
                  'System Design & Architecture',
                  'Rust Programming Language'
                ].map((topic) => (
                  <div key={topic} className="flex items-center space-x-3">
                    <Badge variant="outline" className="border-accent/50 text-accent">📖</Badge>
                    <span className="text-sm text-foreground font-mono">{topic}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}