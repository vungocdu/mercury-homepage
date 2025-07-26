import { ArrowRight, Brain, Bot, Zap, Globe, ChevronRight, Cpu, Network, Eye, Target } from 'lucide-react'
import InteractiveBackground from './InteractiveBackground'
import ParticleEffect from './ParticleEffect'

export default function Hero() {
  const aiCapabilities = [
    {
      icon: Brain,
      title: 'AI Intelligence',
      description: 'Advanced machine learning and neural networks',
      gradient: 'from-cyan-400 to-purple-600'
    },
    {
      icon: Bot,
      title: 'Automation',
      description: 'Intelligent process automation solutions',
      gradient: 'from-purple-400 to-pink-600'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Real-time image and video analysis',
      gradient: 'from-green-400 to-cyan-600'
    },
    {
      icon: Network,
      title: 'Digital Integration',
      description: 'Seamless technology ecosystem connection',
      gradient: 'from-orange-400 to-red-600'
    }
  ]

  return (
    <section id="home" className="pt-16 min-h-screen relative overflow-hidden">
      {/* Interactive 3D Background */}
      <InteractiveBackground effect="globe" />
      
      {/* Particle Effect */}
      <ParticleEffect />
      
      {/* Neural network background overlay */}
      <div className="absolute inset-0 neural-network-bg opacity-30 z-10"></div>
      
      <div className="container-custom relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
          {/* Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/20">
                <Zap className="w-4 h-4 text-primary animate-pulse-glow" />
                <span className="text-sm font-medium text-foreground">TVC Professional AI Agent</span>
              </div>
              
              <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Next-Gen</span>{' '}
                <span className="cyber-glow bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent animate-gradient-x">
                  AI Technology
                </span>{' '}
                <span className="text-foreground">Solutions</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Mercury Solutions delivers cutting-edge AI and digital transformation services. 
                From computer vision to intelligent automation, we empower businesses with 
                advanced technology solutions that drive innovation and efficiency.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-xl">
                Launch AI Project
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#projects" className="group digital-card text-foreground font-semibold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center hover:scale-105">
                Explore Solutions
                <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* AI Capabilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
              {aiCapabilities.map((capability, index) => (
                <div key={index} className="group digital-card p-4 hover:scale-105 transition-all duration-300 fade-in-scale" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-start space-x-3">
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${capability.gradient} rounded-xl flex items-center justify-center animate-float`} style={{ animationDelay: `${index * 0.5}s` }}>
                      <capability.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{capability.title}</h3>
                      <p className="text-sm text-muted-foreground">{capability.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Dashboard Visualization */}
          <div className="relative fade-in-scale" style={{ animationDelay: '0.3s' }}>
            <div className="relative z-10 digital-card p-8 animate-float">
              <div className="space-y-6">
                {/* AI Status Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 ai-chip rounded-xl flex items-center justify-center">
                      <Cpu className="w-6 h-6 text-primary animate-pulse-glow" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">AI Command Center</h3>
                      <p className="text-sm text-muted-foreground">Real-time intelligence</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-500 font-medium">ACTIVE</span>
                  </div>
                </div>
                
                {/* AI Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="ai-chip p-4 text-center group hover:scale-105 transition-transform">
                    <div className="text-2xl font-bold cyber-glow">99.8%</div>
                    <div className="text-xs text-muted-foreground">AI Accuracy</div>
                  </div>
                  <div className="ai-chip p-4 text-center group hover:scale-105 transition-transform">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-xs text-muted-foreground">Processing</div>
                  </div>
                  <div className="ai-chip p-4 text-center group hover:scale-105 transition-transform">
                    <div className="text-2xl font-bold text-accent">∞</div>
                    <div className="text-xs text-muted-foreground">Scalability</div>
                  </div>
                </div>

                {/* Neural Network Visualization */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Neural Network Load</span>
                    <span className="text-sm font-semibold text-primary">Optimized</span>
                  </div>
                  <div className="relative w-full bg-border rounded-full h-3 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-green-500 h-full rounded-full animate-gradient-x" style={{ width: '92%' }}></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent h-full rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* TVC Agent Status */}
                <div className="tech-border p-4 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">TVC Agent Status</span>
                    <Target className="w-4 h-4 text-primary" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-muted-foreground">Response Time:</span>
                      <span className="text-primary ml-1 font-medium">0.03ms</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Efficiency:</span>
                      <span className="text-accent ml-1 font-medium">98.7%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-green-400/20 to-cyan-600/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -right-4 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-lg animate-float"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
} 