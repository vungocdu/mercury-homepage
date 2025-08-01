import { ClipboardList, Palette, Code, Rocket } from 'lucide-react'

export default function Process() {
  const processes = [
    {
      icon: ClipboardList,
      title: 'Plan',
      description: 'Receive requirements and information from clients, include IT Consultancy to make suggestions and develop project estimations as per their expectations.',
      step: '01'
    },
    {
      icon: Palette,
      title: 'Design & Define',
      description: 'Based on the requirement specifications prepare project documents, which help in further stages. Define overall system architecture and technology stack.',
      step: '02'
    },
    {
      icon: Code,
      title: 'Build & Test',
      description: 'Our team of experts uses the chosen programming language, techniques, and methodologies to build the software. Evaluate the quality of software development.',
      step: '03'
    },
    {
      icon: Rocket,
      title: 'Deploy & Maintenance',
      description: 'The final software outcome is released and checked for deployment issues if any. According to the service level agreement, we ensure continuous maintenance.',
      step: '04'
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
              
              <div className="relative z-10 rounded-2xl p-6 hover:scale-105 transition-all duration-300 group"
                   style={{
                     backgroundColor: 'hsl(var(--card-bg))',
                     border: '1px solid hsl(var(--card-border))',
                     boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                   }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-200" style={{ backgroundColor: 'hsl(var(--link-primary))' }}>
                    <process.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold" style={{ color: 'hsl(var(--link-primary))' }}>{process.step}</div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'hsl(var(--text-primary))' }}>
                  {process.title}
                </h3>
                
                <p className="leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>
                  {process.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Process Benefits */}
        <div className="mt-20 rounded-3xl p-8 lg:p-12"
             style={{
               backgroundColor: 'hsl(var(--card-bg))',
               border: '1px solid hsl(var(--card-border))',
               boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
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