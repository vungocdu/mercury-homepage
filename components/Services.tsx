import { Brain, Video, Palette, Globe, Bot, Eye, Zap, Target, Sparkles, Film } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: 'AI Intelligence Solutions',
      description: 'Advanced artificial intelligence systems powered by machine learning, neural networks, and deep learning algorithms for intelligent automation.',
      features: ['Machine Learning Models', 'Neural Networks', 'Predictive Analytics', 'AI Automation'],
      gradient: 'from-cyan-400 to-purple-600',
      category: 'AI Technology'
    },
    {
      icon: Video,
      title: 'TVC Professional Services',
      description: 'Premium television commercial production, creative content development, and digital marketing solutions for professional brand representation.',
      features: ['TV Commercial Production', 'Brand Video Content', 'Digital Marketing', 'Creative Direction'],
      gradient: 'from-purple-400 to-pink-600',
      category: 'Media Production'
    },
    {
      icon: Eye,
      title: 'Computer Vision & Analytics',
      description: 'Real-time image processing, object detection, facial recognition, and visual data analysis using advanced computer vision technologies.',
      features: ['Object Detection', 'Facial Recognition', 'Image Processing', 'Visual Analytics'],
      gradient: 'from-green-400 to-cyan-600',
      category: 'Vision Technology'
    },
    {
      icon: Bot,
      title: 'Intelligent Automation',
      description: 'Smart process automation, robotic process automation (RPA), and AI-powered workflow optimization for business efficiency.',
      features: ['Process Automation', 'RPA Solutions', 'Workflow Optimization', 'Smart Systems'],
      gradient: 'from-orange-400 to-red-600',
      category: 'Automation'
    },
    {
      icon: Globe,
      title: 'Digital Transformation',
      description: 'Comprehensive digital ecosystem development with modern web technologies, cloud integration, and scalable architecture solutions.',
      features: ['Web Applications', 'Cloud Integration', 'Digital Ecosystems', 'Scalable Architecture'],
      gradient: 'from-blue-400 to-cyan-600',
      category: 'Digital Solutions'
    },
    {
      icon: Film,
      title: 'Creative AI Content',
      description: 'AI-powered content creation, motion graphics, digital art generation, and automated creative production workflows.',
      features: ['AI Content Creation', 'Motion Graphics', 'Digital Art', 'Creative Automation'],
      gradient: 'from-pink-400 to-purple-600',
      category: 'Creative Technology'
    }
  ]

  return (
    <section id="services" className="section-padding tvc-professional relative">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 mb-6">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-gray-800">Professional AI & TVC Services</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Our</span>{' '}
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent font-extrabold">
              Digital Solutions
            </span>
          </h2>
          
          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge AI technology and professional TVC services that transform businesses 
            through intelligent automation, computer vision, and premium content creation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group digital-card p-8 hover:scale-105 transition-all duration-500 fade-in-scale relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200">
                <span className="text-xs font-medium text-gray-700">{service.category}</span>
              </div>
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-200 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300 group-hover:text-gray-100 transition-colors">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-3 animate-pulse"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <div className="relative">
          <div className="ai-gradient-bg rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Powering Innovation Across Industries
                </h3>
                <p className="text-white/80 max-w-2xl mx-auto">
                  Our AI and TVC solutions deliver measurable results for businesses worldwide
                </p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="group">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2 cyber-glow group-hover:scale-110 transition-transform">
                    99.8%
                  </div>
                  <div className="text-white/80">AI Accuracy Rate</div>
                </div>
                <div className="group">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                    150+
                  </div>
                  <div className="text-white/80">TVC Productions</div>
                </div>
                <div className="group">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                    24/7
                  </div>
                  <div className="text-white/80">AI Processing</div>
                </div>
                <div className="group">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                    ∞
                  </div>
                  <div className="text-white/80">Scalability</div>
                </div>
              </div>
            </div>
            
            {/* Floating particles */}
            <div className="absolute top-10 left-10 w-4 h-4 bg-white/20 rounded-full animate-float"></div>
            <div className="absolute top-20 right-20 w-6 h-6 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-20 left-20 w-3 h-3 bg-white/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
} 