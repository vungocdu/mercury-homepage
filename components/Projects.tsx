import { ExternalLink, Smartphone, Globe, Zap } from 'lucide-react'
import InteractiveBackground from './InteractiveBackground'

export default function Projects() {
  const projects = [
    {
      title: 'ACTIWELL Mobile & CMS',
      description: 'With Actiwell, managing workouts and booking is a breeze. Check available slots for gyms or fitness centers anytime and quickly book Pickleball courts or Yoga classes.',
      features: [
        'Simplified Scheduling',
        'Automated Booking',
        'Customer Management',
        'Marketing Tools'
      ],
      platforms: ['Mobile App', 'Web App'],
      technologies: ['Flutter', 'React', 'Laravel'],
      image: '/images/actiwell.jpg'
    },
    {
      title: 'Timekeeping by AI Camera',
      description: 'The attendance management system for Fujikin Vietnam\'s factory integrates AI cameras to collect entry and exit information of employees within the system.',
      features: [
        'AI Camera Integration',
        'Attendance Management',
        'HR Optimization',
        'Real-time Monitoring'
      ],
      platforms: ['Web App'],
      technologies: ['React', 'Laravel', 'AI/ML'],
      image: '/images/timekeeping.jpg'
    },
    {
      title: 'myArm Mobile Application',
      description: 'MyArm is a work and project management application that helps users organize tasks efficiently and manage projects intelligently.',
      features: [
        'Project Management',
        'Task Organization',
        'Team Collaboration',
        'Deadline Tracking'
      ],
      platforms: ['Mobile App', 'Web App'],
      technologies: ['Flutter', 'Laravel', 'React'],
      image: '/images/myarm.jpg'
    },
    {
      title: 'Property Management System',
      description: 'SaaS applications for hotel owner and hotel management entrepreneurs. Application offers multiple-branch and realtime hotels chain management.',
      features: [
        'Channel Manager',
        'Room Control Unit',
        'Camera AI Integration',
        'Multi-branch Management'
      ],
      platforms: ['Web App', 'Mobile App'],
      technologies: ['React', 'Node.js', 'IoT'],
      image: '/images/property.jpg'
    },
    {
      title: 'Power Control IoT Platform',
      description: 'We have built an IoT platform that gathering IoT devices status, analyses electric consumption data and control these devices over cloud in mili-seconds.',
      features: [
        '30% Electricity Savings',
        '50% Faster Control',
        '1M+ Device Support',
        'Real-time Analytics'
      ],
      platforms: ['IoT Platform', 'Web Dashboard'],
      technologies: ['IoT', 'Cloud', 'Analytics'],
      image: '/images/power-control.jpg'
    },
    {
      title: 'Airhub – Your Local Guide',
      description: 'Online web app and best designed for smartphone webapp to provide traveller informations such as local guides map, special offers from local brand.',
      features: [
        'Local Guide',
        'Virtual Frontdesk',
        'AI Assistance',
        'Local Offers'
      ],
      platforms: ['Web App', 'Mobile Web'],
      technologies: ['React', 'AI/ML', 'Maps API'],
      image: '/images/airhub.jpg'
    }
  ]

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Interactive Dots Background */}
      <InteractiveBackground effect="dots" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/20 mb-6">
            <Zap className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">High-Performance Applications</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">We excel in building</span>{' '}
            <span className="cyber-glow bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
              high-load mobile and web applications
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects that demonstrate our expertise 
            in delivering innovative solutions across various industries with cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="digital-card overflow-hidden hover:scale-105 transition-all duration-500 group fade-in-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image Placeholder */}
              <div className="h-48 ai-gradient-bg flex items-center justify-center relative overflow-hidden">
                <div className="text-center relative z-10">
                  <Globe className="w-12 h-12 text-white mx-auto mb-2 animate-float" />
                  <p className="text-sm text-white/80">Project Preview</p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-3 animate-pulse"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Platforms & Technologies */}
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <Smartphone className="w-4 h-4 mr-2 text-primary" />
                      Platforms:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.platforms.map((platform, platformIndex) => (
                        <span key={platformIndex} className="px-3 py-1 ai-chip text-xs rounded-full">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-accent" />
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-gradient-to-r from-accent/20 to-primary/20 text-foreground text-xs rounded-full border border-accent/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="digital-card p-8 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Start Your AI Project?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve your digital transformation goals 
                with our cutting-edge AI and technology solutions.
              </p>
              <a href="#contact" className="group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center transform hover:scale-105 shadow-lg hover:shadow-xl">
                Launch Your Project
                <ExternalLink size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            {/* Floating particles for CTA */}
            <div className="absolute top-4 right-4 w-4 h-4 bg-primary/20 rounded-full animate-float"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
} 