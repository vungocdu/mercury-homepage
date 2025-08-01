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
    <section id="technology" className="section-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center space-x-2 professional-card px-4 py-2 rounded-full mb-6">
            <Cpu className="w-4 h-4" style={{ color: 'hsl(var(--link-primary))' }} />
            <span className="text-sm font-medium" style={{ color: 'hsl(var(--text-primary))' }}>Advanced Technology Stack</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            <span style={{ color: 'hsl(var(--text-primary))' }}>Our</span>{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Technology Stack
            </span>
          </h2>
          
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>
            Cutting-edge technologies and frameworks that power our AI solutions and digital innovations. 
            Always evolving, always improving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStacks.map((stack, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105"
              style={{
                backgroundColor: 'hsl(var(--card-bg))',
                border: '1px solid hsl(var(--card-border))',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="p-6 relative z-10">
                {/* Category Icon */}
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${getIconGradient(stack.category)} rounded-xl flex items-center justify-center animate-float mr-4`} style={{ animationDelay: `${index * 0.3}s` }}>
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold" style={{ color: 'hsl(var(--text-primary))' }}>
                    {stack.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${getTypeColor(item.type)}`}
                      style={{ color: 'hsl(var(--text-primary))' }}
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Additional Technologies */}
        <div className="mt-16 relative">
          <div className="rounded-3xl p-8 lg:p-12 relative overflow-hidden"
               style={{
                 backgroundColor: 'hsl(var(--card-bg))',
                 border: '1px solid hsl(var(--card-border))',
                 boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
               }}>
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4" style={{ color: 'hsl(var(--text-primary))' }}>
                  Additional Technologies & Innovation Tools
                </h3>
                <p className="max-w-2xl mx-auto" style={{ color: 'hsl(var(--text-secondary))' }}>
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
                    <h4 className="font-semibold mb-3 flex items-center" style={{ color: 'hsl(var(--text-primary))' }}>
                      <div className="w-2 h-2 rounded-full mr-2 animate-pulse" style={{ backgroundColor: 'hsl(var(--link-primary))' }}></div>
                      {section.category}
                    </h4>
                    <div className="space-y-2">
                      {section.tools.map((tool, toolIndex) => (
                        <div key={toolIndex} className="text-sm hover:text-primary transition-colors duration-200 flex items-center" style={{ color: 'hsl(var(--text-secondary))' }}>
                          <div className="w-1 h-1 rounded-full mr-2" style={{ backgroundColor: 'hsl(var(--text-secondary))' }}></div>
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 