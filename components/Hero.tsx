import { ArrowRight, Brain, Bot, Zap, Globe, ChevronRight, Cpu, Network, Eye, Target } from 'lucide-react'
import InteractiveBackground from './InteractiveBackground'
import ParticleEffect from './ParticleEffect'
import TextReveal from './TextReveal'

export default function Hero() {
  const aiCapabilities = [
    {
      icon: Brain,
      title: 'AI Intelligence',
      description: 'Advanced machine learning and neural networks',
      color: 'hsl(var(--link-primary))'
    },
    {
      icon: Bot,
      title: 'Automation',
      description: 'Intelligent process automation solutions',
      color: 'hsl(var(--success-color))'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Real-time image and video analysis',
      color: 'hsl(var(--warning-color))'
    },
    {
      icon: Network,
      title: 'Digital Integration',
      description: 'Seamless technology ecosystem connection',
      color: 'hsl(var(--link-primary))'
    }
  ]

  return (
    <section id="home" className="hero-bg pt-16 min-h-screen relative overflow-hidden">
      {/* Interactive 3D Background */}
      <InteractiveBackground effect="globe" />
      
      {/* Particle Effect */}
      <ParticleEffect />
      
      <div className="container-custom relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
          {/* Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-6">
              <TextReveal delay={0.1}>
                <div className="inline-flex items-center space-x-2 professional-card px-4 py-2 rounded-full">
                  <Zap className="w-4 h-4" style={{ color: 'hsl(var(--link-primary))' }} />
                  <span className="text-sm font-medium" style={{ color: 'hsl(var(--text-primary))' }}>
                    TVC Professional AI Agent
                  </span>
                </div>
              </TextReveal>
              
              <TextReveal delay={0.2}>
                <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
                  <span style={{ color: 'hsl(var(--text-primary))' }}>Next-Gen</span>{' '}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
                    AI Technology
                  </span>{' '}
                  <span style={{ color: 'hsl(var(--text-primary))' }}>Solutions</span>
                </h1>
              </TextReveal>
              
              <TextReveal delay={0.3}>
                <p className="text-xl leading-relaxed max-w-lg" style={{ color: 'hsl(var(--text-secondary))' }}>
                  Mercury Solutions delivers cutting-edge AI and digital transformation services. 
                  From computer vision to intelligent automation, we empower businesses with 
                  advanced technology solutions that drive innovation and efficiency.
                </p>
              </TextReveal>
            </div>

            {/* CTA Buttons */}
            <TextReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-primary group inline-flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Launch AI Project
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#projects" className="btn-secondary group inline-flex items-center justify-center hover:scale-105">
                  Explore Solutions
                  <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </TextReveal>

            {/* AI Capabilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
              {aiCapabilities.map((capability, index) => (
                <TextReveal key={index} delay={0.5 + index * 0.1}>
                  <div className="group service-card p-4 hover:scale-105 transition-all duration-300 fade-in-scale" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center animate-float" 
                           style={{ 
                             backgroundColor: capability.color,
                             animationDelay: `${index * 0.5}s` 
                           }}>
                        <capability.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold group-hover:text-primary transition-colors" style={{ color: 'hsl(var(--text-primary))' }}>
                          {capability.title}
                        </h3>
                        <p className="text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>
                          {capability.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </TextReveal>
              ))}
            </div>
          </div>

          {/* AI Dashboard Visualization */}
          <div className="relative fade-in-scale" style={{ animationDelay: '0.3s' }}>
            <div className="relative z-10 professional-card p-8 animate-float">
              <div className="space-y-6">
                {/* AI Status Header */}
                <TextReveal delay={0.6}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 professional-card rounded-xl flex items-center justify-center">
                        <Cpu className="w-6 h-6" style={{ color: 'hsl(var(--link-primary))' }} />
                      </div>
                      <div>
                        <h3 className="font-semibold" style={{ color: 'hsl(var(--text-primary))' }}>
                          AI Command Center
                        </h3>
                        <p className="text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>
                          Real-time intelligence
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-500 font-medium">ACTIVE</span>
                    </div>
                  </div>
                </TextReveal>
                
                {/* AI Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  <TextReveal delay={0.7}>
                    <div className="professional-card p-4 text-center group hover:scale-105 transition-transform">
                      <div className="text-2xl font-bold" style={{ color: 'hsl(var(--link-primary))' }}>99.8%</div>
                      <div className="text-xs" style={{ color: 'hsl(var(--text-secondary))' }}>AI Accuracy</div>
                    </div>
                  </TextReveal>
                  <TextReveal delay={0.8}>
                    <div className="professional-card p-4 text-center group hover:scale-105 transition-transform">
                      <div className="text-2xl font-bold" style={{ color: 'hsl(var(--link-primary))' }}>24/7</div>
                      <div className="text-xs" style={{ color: 'hsl(var(--text-secondary))' }}>Processing</div>
                    </div>
                  </TextReveal>
                  <TextReveal delay={0.9}>
                    <div className="professional-card p-4 text-center group hover:scale-105 transition-transform">
                      <div className="text-2xl font-bold" style={{ color: 'hsl(var(--warning-color))' }}>∞</div>
                      <div className="text-xs" style={{ color: 'hsl(var(--text-secondary))' }}>Scalability</div>
                    </div>
                  </TextReveal>
                </div>

                {/* Neural Network Visualization */}
                <TextReveal delay={1.0}>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>Neural Network Load</span>
                      <span className="text-sm font-semibold" style={{ color: 'hsl(var(--link-primary))' }}>Optimized</span>
                    </div>
                    <div className="relative w-full rounded-full h-3 overflow-hidden" style={{ backgroundColor: 'hsl(var(--border))' }}>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 h-full rounded-full animate-gradient-x" style={{ width: '92%' }}></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent h-full rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </TextReveal>

                {/* TVC Agent Status */}
                <TextReveal delay={1.1}>
                  <div className="professional-card p-4 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium" style={{ color: 'hsl(var(--text-primary))' }}>
                        TVC Agent Status
                      </span>
                      <Target className="w-4 h-4" style={{ color: 'hsl(var(--link-primary))' }} />
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span style={{ color: 'hsl(var(--text-secondary))' }}>Response Time:</span>
                        <span className="ml-1 font-medium" style={{ color: 'hsl(var(--link-primary))' }}>0.03ms</span>
                      </div>
                      <div>
                        <span style={{ color: 'hsl(var(--text-secondary))' }}>Efficiency:</span>
                        <span className="ml-1 font-medium" style={{ color: 'hsl(var(--warning-color))' }}>98.7%</span>
                      </div>
                    </div>
                  </div>
                </TextReveal>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-green-400/20 to-blue-600/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -right-4 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-lg animate-float"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{ borderColor: 'hsl(var(--link-primary))' }}>
            <div className="w-1 h-3 rounded-full mt-2 animate-pulse" style={{ backgroundColor: 'hsl(var(--link-primary))' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
} 