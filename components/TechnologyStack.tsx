import InteractiveBackground from './InteractiveBackground'
import { Cpu, Zap } from 'lucide-react'

export default function TechnologyStack() {
  const techStacks = [
    {
      category: 'Frontend',
      items: [
        { name: 'HTML5', type: 'language' },
        { name: 'CSS', type: 'language' },
        { name: 'JavaScript', type: 'language' },
        { name: 'React', type: 'framework' },
        { name: 'Vue', type: 'framework' },
        { name: 'Webpack', type: 'tool' },
        { name: 'Sass', type: 'tool' }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Python', type: 'language' },
        { name: 'Go', type: 'language' },
        { name: 'Node.js', type: 'language' },
        { name: 'Flask', type: 'framework' },
        { name: 'Django', type: 'framework' },
        { name: 'Laravel', type: 'framework' },
        { name: 'Express', type: 'framework' },
        { name: 'Meteor', type: 'framework' },
        { name: 'GraphQL', type: 'framework' }
      ]
    },
    {
      category: 'Database',
      items: [
        { name: 'MongoDB', type: 'database' },
        { name: 'MySQL', type: 'database' },
        { name: 'PostgreSQL', type: 'database' },
        { name: 'Redis', type: 'database' },
        { name: 'SQL Server', type: 'database' }
      ]
    },
    {
      category: 'DevOps',
      items: [
        { name: 'Ansible', type: 'tool' },
        { name: 'Terraform', type: 'tool' },
        { name: 'Docker', type: 'tool' },
        { name: 'Kubernetes', type: 'tool' },
        { name: 'AWS', type: 'cloud' },
        { name: 'Google Cloud', type: 'cloud' },
        { name: 'GitLab CI', type: 'tool' },
        { name: 'Jenkins', type: 'tool' }
      ]
    },
    {
      category: 'Mobile',
      items: [
        { name: 'Kotlin', type: 'language' },
        { name: 'Java', type: 'language' },
        { name: 'Swift', type: 'language' },
        { name: 'Objective-C', type: 'language' },
        { name: 'Flutter', type: 'framework' },
        { name: 'React Native', type: 'framework' }
      ]
    },
    {
      category: 'AI & ML',
      items: [
        { name: 'TensorFlow', type: 'framework' },
        { name: 'Keras', type: 'framework' },
        { name: 'PyTorch', type: 'framework' },
        { name: 'FastAI', type: 'framework' },
        { name: 'OpenCV', type: 'library' },
        { name: 'scikit-learn', type: 'library' },
        { name: 'Pandas', type: 'library' },
        { name: 'NumPy', type: 'library' }
      ]
    }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'language': return 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-foreground border border-blue-500/30'
      case 'framework': return 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-foreground border border-green-500/30'
      case 'database': return 'bg-gradient-to-r from-purple-500/20 to-violet-500/20 text-foreground border border-purple-500/30'
      case 'tool': return 'bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-foreground border border-orange-500/30'
      case 'cloud': return 'bg-gradient-to-r from-indigo-500/20 to-blue-500/20 text-foreground border border-indigo-500/30'
      case 'library': return 'bg-gradient-to-r from-pink-500/20 to-rose-500/20 text-foreground border border-pink-500/30'
      default: return 'bg-gradient-to-r from-gray-500/20 to-slate-500/20 text-foreground border border-gray-500/30'
    }
  }

  const getIconGradient = (category: string) => {
    switch (category) {
      case 'Frontend': return 'from-blue-400 to-cyan-600'
      case 'Backend': return 'from-green-400 to-emerald-600'
      case 'Database': return 'from-purple-400 to-violet-600'
      case 'DevOps': return 'from-orange-400 to-amber-600'
      case 'Mobile': return 'from-indigo-400 to-blue-600'
      case 'AI & ML': return 'from-pink-400 to-rose-600'
      default: return 'from-gray-400 to-slate-600'
    }
  }

  return (
    <section id="technology" className="section-padding relative overflow-hidden">
      {/* Interactive Dots Background */}
      <InteractiveBackground effect="dots" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/20 mb-6">
            <Cpu className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">Advanced Technology Stack</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Our</span>{' '}
            <span className="cyber-glow bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
              Technology Stack
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technologies and frameworks that power our AI solutions and digital innovations. 
            Always evolving, always improving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStacks.map((stack, index) => (
            <div 
              key={index} 
              className="digital-card p-6 hover:scale-105 transition-all duration-500 fade-in-scale relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Icon */}
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${getIconGradient(stack.category)} rounded-xl flex items-center justify-center animate-float mr-4`} style={{ animationDelay: `${index * 0.3}s` }}>
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {stack.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {stack.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${getTypeColor(item.type)}`}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Additional Technologies */}
        <div className="mt-16 relative">
          <div className="ai-gradient-bg rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Additional Technologies & Innovation Tools
                </h3>
                <p className="text-white/80 max-w-2xl mx-auto">
                  Advanced monitoring, testing, and integration solutions that ensure optimal performance
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { category: 'Monitoring', tools: ['Prometheus', 'Grafana'] },
                  { category: 'Log Management', tools: ['ELK Stack', 'Graylog'] },
                  { category: 'Testing', tools: ['Selenium', 'Appium', 'JMeter'] },
                  { category: 'Integration', tools: ['RabbitMQ', 'OpenAPI', 'REST APIs'] }
                ].map((section, index) => (
                  <div key={index} className="group">
                    <h4 className="font-semibold text-white mb-3 flex items-center">
                      <div className="w-2 h-2 bg-white/60 rounded-full mr-2 animate-pulse"></div>
                      {section.category}
                    </h4>
                    <div className="space-y-2">
                      {section.tools.map((tool, toolIndex) => (
                        <div key={toolIndex} className="text-sm text-white/80 hover:text-white transition-colors duration-200 flex items-center">
                          <div className="w-1 h-1 bg-white/40 rounded-full mr-2"></div>
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Floating tech particles */}
            <div className="absolute top-8 left-8 w-4 h-4 bg-white/20 rounded-full animate-float"></div>
            <div className="absolute top-16 right-16 w-6 h-6 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-16 left-16 w-3 h-3 bg-white/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
} 