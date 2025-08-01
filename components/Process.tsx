import { ClipboardList, Palette, Code, Rocket } from 'lucide-react'

// SVG Component for Plan Diagram
const PlanDiagram = () => (
  <svg 
    viewBox="0 0 400 300" 
    className="w-full h-full"
    style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
  >
    <defs>
      <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#2E5BFF', stopOpacity: 0.1 }} />
        <stop offset="100%" style={{ stopColor: '#1E3A8A', stopOpacity: 0.2 }} />
      </linearGradient>
      <linearGradient id="projectPlanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#2E5BFF', stopOpacity: 0.3 }} />
        <stop offset="100%" style={{ stopColor: '#1E3A8A', stopOpacity: 0.4 }} />
      </linearGradient>
    </defs>
    
    {/* Connection Lines */}
    <g stroke="#2E5BFF" strokeWidth="2" fill="none">
      {/* Feasibility Study to Project Plan */}
      <line x1="80" y1="60" x2="180" y2="80" />
      {/* Project Plan to High-Level Architecture */}
      <line x1="220" y1="80" x2="320" y2="60" />
      {/* Project Plan to Road Map */}
      <line x1="180" y1="100" x2="120" y2="140" />
      {/* Road Map to User Stories */}
      <line x1="120" y1="160" x2="100" y2="200" />
      {/* Project Plan to Charter */}
      <line x1="200" y1="100" x2="280" y2="140" />
      {/* Charter to RACI */}
      <line x1="280" y1="160" x2="200" y2="200" />
      {/* Charter to Budget */}
      <line x1="300" y1="160" x2="320" y2="200" />
      
      {/* Dotted Lines */}
      <line x1="60" y1="80" x2="20" y2="120" strokeDasharray="5,5" opacity="0.6" />
      <line x1="340" y1="80" x2="380" y2="120" strokeDasharray="5,5" opacity="0.6" />
      <line x1="80" y1="220" x2="40" y2="260" strokeDasharray="5,5" opacity="0.6" />
    </g>
    
    {/* Nodes */}
    <g>
      {/* FEASIBILITY STUDY */}
      <rect x="40" y="40" width="80" height="40" rx="8" fill="url(#nodeGradient)" stroke="#2E5BFF" strokeWidth="2" />
      <text x="80" y="62" textAnchor="middle" fill="#2E5BFF" fontSize="8" fontWeight="bold" transform="rotate(-15 80 62)">
        FEASIBILITY
      </text>
      <text x="80" y="72" textAnchor="middle" fill="#2E5BFF" fontSize="8" fontWeight="bold" transform="rotate(-15 80 72)">
        STUDY
      </text>
      
      {/* PROJECT PLAN - Central Hub */}
      <rect x="160" y="60" width="100" height="50" rx="10" fill="url(#projectPlanGradient)" stroke="#2E5BFF" strokeWidth="3" />
      <text x="210" y="82" textAnchor="middle" fill="#2E5BFF" fontSize="10" fontWeight="bold">
        PROJECT
      </text>
      <text x="210" y="95" textAnchor="middle" fill="#2E5BFF" fontSize="10" fontWeight="bold">
        PLAN
      </text>
      
      {/* HIGH-LVL ARCHITECTURE */}
      <rect x="300" y="40" width="80" height="40" rx="8" fill="url(#nodeGradient)" stroke="#2E5BFF" strokeWidth="2" />
      <text x="340" y="62" textAnchor="middle" fill="#2E5BFF" fontSize="8" fontWeight="bold" transform="rotate(15 340 62)">
        HIGH-LVL
      </text>
      <text x="340" y="72" textAnchor="middle" fill="#2E5BFF" fontSize="8" fontWeight="bold" transform="rotate(15 340 72)">
        ARCHITECTURE
      </text>
      
      {/* ROAD MAP */}
      <rect x="80" y="120" width="80" height="40" rx="8" fill="url(#nodeGradient)" stroke="#2E5BFF" strokeWidth="2" />
      <text x="120" y="142" textAnchor="middle" fill="#2E5BFF" fontSize="8" fontWeight="bold">
        ROAD MAP
      </text>
      
      {/* USER STORIES */}
      <rect x="60" y="180" width="80" height="40" rx="8" fill="url(#nodeGradient)" stroke="#2E5BFF" strokeWidth="2" />
      <text x="100" y="202" textAnchor="middle" fill="#2E5BFF" fontSize="8" fontWeight="bold">
        USER
      </text>
      <text x="100" y="212" textAnchor="middle" fill="#2E5BFF" fontSize="8" fontWeight="bold">
        STORIES
      </text>
      
      {/* CHARTER */}
      <rect x="240" y="120" width="80" height="40" rx="8" fill="url(#nodeGradient)" stroke="#2E5BFF" strokeWidth="2" />
      <text x="280" y="142" textAnchor="middle" fill="#2E5BFF" fontSize="8" fontWeight="bold">
        CHARTER
      </text>
      
      {/* RACI */}
      <rect x="160" y="180" width="80" height="40" rx="8" fill="url(#nodeGradient)" stroke="#2E5BFF" strokeWidth="2" />
      <text x="200" y="202" textAnchor="middle" fill="#2E5BFF" fontSize="8" fontWeight="bold">
        RACI
      </text>
      
      {/* BUDGET */}
      <rect x="280" y="180" width="80" height="40" rx="8" fill="url(#nodeGradient)" stroke="#2E5BFF" strokeWidth="2" />
      <text x="320" y="202" textAnchor="middle" fill="#2E5BFF" fontSize="8" fontWeight="bold">
        BUDGET
      </text>
    </g>
  </svg>
)

export default function Process() {
  const processes = [
    {
      icon: ClipboardList,
      title: 'Plan',
      description: 'Receive requirements and information from clients, include IT Consultancy to make suggestions and develop project estimations as per their expectations.',
      step: '01',
      image: '/images/process/plan.jpg',
      imageAlt: 'Planning phase with requirements gathering and project estimation',
      customComponent: PlanDiagram
    },
    {
      icon: Palette,
      title: 'Design & Define',
      description: 'Based on the requirement specifications prepare project documents, which help in further stages. Define overall system architecture and technology stack.',
      step: '02',
      image: '/images/process/design.jpg',
      imageAlt: 'Design phase with wireframes and system architecture'
    },
    {
      icon: Code,
      title: 'Build & Test',
      description: 'Our team of experts uses the chosen programming language, techniques, and methodologies to build the software. Evaluate the quality of software development.',
      step: '03',
      image: '/images/process/build.jpg',
      imageAlt: 'Development and testing phase with code implementation'
    },
    {
      icon: Rocket,
      title: 'Deploy & Maintenance',
      description: 'The final software outcome is released and checked for deployment issues if any. According to the service level agreement, we ensure continuous maintenance.',
      step: '04',
      image: '/images/process/deploy.jpg',
      imageAlt: 'Deployment and maintenance phase with continuous monitoring'
    }
  ]

  return (
    <section id="process" className="section-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'hsl(var(--text-primary))' }}>
            Our Process
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'hsl(var(--text-secondary))' }}>
            We follow a proven methodology to deliver high-quality solutions 
            that meet your business requirements and exceed expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < processes.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 z-0" style={{ width: 'calc(100% - 2rem)', backgroundColor: 'hsl(var(--border))' }}></div>
              )}
              
              <div className="relative z-10 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group"
                   style={{
                     backgroundColor: 'hsl(var(--card-bg))',
                     border: '2px solid hsl(var(--card-border))',
                     boxShadow: '0 4px 6px -1px rgb(30 58 138 / 0.1), 0 2px 4px -1px rgb(30 58 138 / 0.06)'
                   }}>
                
                {/* Process Image */}
                <div className="relative h-48 overflow-hidden">
                  {/* Background Image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-mercury-blue-500/20 to-mercury-blue-600/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: 'hsl(var(--link-primary))' }}>
                        <process.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-white" style={{ color: 'hsl(var(--link-primary))' }}>{process.step}</div>
                    </div>
                  </div>
                  
                  {/* Custom Component for Plan */}
                  {process.customComponent && (
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <process.customComponent />
                    </div>
                  )}
                  
                  {/* Actual Image (commented out until images are added) */}
                  {/* 
                  <img 
                    src={process.image} 
                    alt={process.imageAlt}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    onError={(e) => {
                      // Fallback to gradient if image fails to load
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  */}
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-mercury-blue-400/30 to-mercury-blue-600/30 opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
                
                {/* Process Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3" style={{ color: 'hsl(var(--text-primary))' }}>
                    {process.title}
                  </h3>
                  
                  <p className="leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>
                    {process.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Benefits */}
        <div className="mt-20 rounded-3xl p-8 lg:p-12"
             style={{
               backgroundColor: 'hsl(var(--card-bg))',
               border: '2px solid hsl(var(--card-border))',
               boxShadow: '0 4px 6px -1px rgb(30 58 138 / 0.1), 0 2px 4px -1px rgb(30 58 138 / 0.06)'
             }}>
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4" style={{ color: 'hsl(var(--text-primary))' }}>
              Why Choose Our Process?
            </h3>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(var(--text-secondary))' }}>
              Our systematic approach ensures transparency, quality, and timely delivery 
              of your projects while maintaining clear communication throughout.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'hsl(var(--success-color))' }}>
                <div className="text-2xl font-bold text-white">✓</div>
              </div>
              <h4 className="text-lg font-semibold mb-2" style={{ color: 'hsl(var(--text-primary))' }}>Transparent Communication</h4>
              <p style={{ color: 'hsl(var(--text-secondary))' }}>Regular updates and clear communication at every stage of development.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'hsl(var(--link-primary))' }}>
                <div className="text-2xl font-bold text-white">⚡</div>
              </div>
              <h4 className="text-lg font-semibold mb-2" style={{ color: 'hsl(var(--text-primary))' }}>Agile Methodology</h4>
              <p style={{ color: 'hsl(var(--text-secondary))' }}>Flexible development approach with iterative improvements and quick feedback.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'hsl(var(--warning-color))' }}>
                <div className="text-2xl font-bold text-white">🛡️</div>
              </div>
              <h4 className="text-lg font-semibold mb-2" style={{ color: 'hsl(var(--text-primary))' }}>Quality Assurance</h4>
              <p style={{ color: 'hsl(var(--text-secondary))' }}>Comprehensive testing and quality checks to ensure robust and reliable solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 