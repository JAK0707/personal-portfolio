import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin, Building2 } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: 'TechCorp Solutions',
    position: 'Senior Full Stack Developer',
    duration: 'Jan 2022 - Present',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Leading development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.',
    achievements: [
      'Reduced application load time by 40% through optimization',
      'Led migration to microservices architecture',
      'Mentored 5 junior developers',
      'Implemented CI/CD pipeline reducing deployment time by 60%'
    ],
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL', 'Redis'],
    logo: '🚀'
  },
  {
    id: 2,
    company: 'StartupXYZ',
    position: 'Frontend Developer',
    duration: 'Jun 2020 - Dec 2021',
    location: 'Remote',
    type: 'Full-time',
    description: 'Built responsive web applications for early-stage startup. Collaborated closely with design team to create pixel-perfect user interfaces.',
    achievements: [
      'Developed mobile-first responsive designs',
      'Implemented real-time features using WebSocket',
      'Increased user engagement by 35%',
      'Built component library used across 3 products'
    ],
    technologies: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Figma'],
    logo: '💡'
  },
  {
    id: 3,
    company: 'DevStudio',
    position: 'Junior Web Developer',
    duration: 'Aug 2019 - May 2020',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'Developed and maintained client websites using modern web technologies. Gained experience in full-stack development and agile methodologies.',
    achievements: [
      'Delivered 15+ client projects on time',
      'Improved website performance scores by 25%',
      'Learned and applied modern web frameworks',
      'Contributed to open-source projects'
    ],
    technologies: ['JavaScript', 'PHP', 'MySQL', 'WordPress', 'Bootstrap'],
    logo: '🎯'
  },
  {
    id: 4,
    company: 'FreelanceHub',
    position: 'Freelance Developer',
    duration: 'Jan 2019 - Jul 2019',
    location: 'Remote',
    type: 'Contract',
    description: 'Provided web development services to small businesses and startups. Specialized in e-commerce solutions and landing page optimization.',
    achievements: [
      'Completed 20+ freelance projects',
      'Built e-commerce platforms generating $500K+ revenue',
      'Achieved 5-star rating on freelancing platforms',
      'Developed custom WordPress themes'
    ],
    technologies: ['React', 'Shopify', 'WooCommerce', 'Stripe', 'Google Analytics'],
    logo: '💼'
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-mono">
            <span className="text-terminal-green">//</span> My professional journey and achievements
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-terminal transform md:-translate-x-0.5"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-2 shadow-glow z-10">
                </div>

                {/* Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <Card className="glass hover:shadow-glow transition-all duration-500 border-primary/20">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-3xl">{exp.logo}</div>
                          <div>
                            <CardTitle className="text-xl text-foreground">{exp.position}</CardTitle>
                            <div className="flex items-center space-x-2 text-primary font-mono font-semibold">
                              <Building2 className="h-4 w-4" />
                              <span>{exp.company}</span>
                            </div>
                          </div>
                        </div>
                        <Badge 
                          variant={exp.type === 'Full-time' ? 'default' : 'outline'} 
                          className="font-mono text-xs"
                        >
                          {exp.type}
                        </Badge>
                      </div>

                      <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <CalendarDays className="h-4 w-4" />
                          <span className="font-mono">{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span className="font-mono">{exp.location}</span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </CardDescription>

                      {/* Key Achievements */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-foreground mb-2 font-mono text-sm">
                          <span className="text-terminal-green">//</span> Key Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2 mt-1">▸</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 font-mono text-sm">
                          <span className="text-terminal-blue">tech</span>
                          <span className="text-foreground">:</span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="secondary" 
                              className="text-xs font-mono bg-muted/50 hover:bg-primary/20 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Resume CTA */}
        <div className="text-center mt-16">
          <div className="glass p-8 rounded-lg max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-4 text-foreground">Want to know more?</h3>
            <p className="text-muted-foreground mb-6 font-mono text-sm">
              Download my complete resume for detailed information about my experience and skills.
            </p>
            <div className="space-y-3">
              <button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-primary-foreground font-semibold py-3 px-6 rounded-lg">
                📄 Download Resume (PDF)
              </button>
              <button className="w-full border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 font-semibold py-3 px-6 rounded-lg font-mono text-sm">
                👁️ View Online Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}