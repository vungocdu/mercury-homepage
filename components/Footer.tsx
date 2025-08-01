import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-bg">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'hsl(var(--bg-secondary))' }}>
              Mercury Solutions
            </h3>
            <p className="mb-6 leading-relaxed" style={{ color: 'hsl(var(--bg-secondary) / 0.8)' }}>
              At Mercury Solutions, we focus on computer vision and data visualization 
              implementation to provide better management solutions for businesses 
              from SMEs to MNCs.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" style={{ color: 'hsl(var(--link-primary))' }} />
                <span style={{ color: 'hsl(var(--bg-secondary) / 0.8)' }}>
                  33 Ng. 41 P. Thai Ha, Trung Liet, Dong Da, Hanoi, Vietnam
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" style={{ color: 'hsl(var(--link-primary))' }} />
                <span style={{ color: 'hsl(var(--bg-secondary) / 0.8)' }}>+84 24 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" style={{ color: 'hsl(var(--link-primary))' }} />
                <span style={{ color: 'hsl(var(--bg-secondary) / 0.8)' }}>info@mercury-solutions.vn</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: 'hsl(var(--bg-secondary))' }}>Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="professional-link transition-colors duration-200" style={{ color: 'hsl(var(--bg-secondary) / 0.8)' }}>Data Analysis</a></li>
              <li><a href="#services" className="professional-link transition-colors duration-200" style={{ color: 'hsl(var(--bg-secondary) / 0.8)' }}>Web Development</a></li>
              <li><a href="#services" className="professional-link transition-colors duration-200" style={{ color: 'hsl(var(--bg-secondary) / 0.8)' }}>Mobile Development</a></li>
              <li><a href="#services" className="professional-link transition-colors duration-200" style={{ color: 'hsl(var(--bg-secondary) / 0.8)' }}>AI & Machine Learning</a></li>
              <li><a href="#services" className="professional-link transition-colors duration-200" style={{ color: 'hsl(var(--bg-secondary) / 0.8)' }}>DevOps & Cloud</a></li>
              <li><a href="/tvc" className="professional-link transition-colors duration-200" style={{ color: 'hsl(var(--bg-secondary) / 0.8)' }}>TVC & Digital Art</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: 'hsl(var(--bg-secondary))' }}>Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="professional-link transition-colors duration-200" style={{ color: 'hsl(var(--bg-secondary) / 0.8)' }}>Home</a></li>
              <li><a href="#projects" className="professional-link transition-colors duration-200" style={{ color: 'hsl(var(--bg-secondary) / 0.8)' }}>Projects</a></li>
              <li><a href="#technology" className="professional-link transition-colors duration-200" style={{ color: 'hsl(var(--bg-secondary) / 0.8)' }}>Technology</a></li>
              <li><a href="#process" className="professional-link transition-colors duration-200" style={{ color: 'hsl(var(--bg-secondary) / 0.8)' }}>Process</a></li>
              <li><a href="/tvc" className="professional-link transition-colors duration-200" style={{ color: 'hsl(var(--bg-secondary) / 0.8)' }}>TVC Services</a></li>
              <li><a href="#contact" className="professional-link transition-colors duration-200" style={{ color: 'hsl(var(--bg-secondary) / 0.8)' }}>Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8" style={{ borderColor: 'hsl(var(--bg-secondary) / 0.2)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm" style={{ color: 'hsl(var(--bg-secondary) / 0.6)' }}>
              © {currentYear} Mercury Solutions. All rights reserved.
            </p>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="professional-link transition-colors duration-200" style={{ color: 'hsl(var(--bg-secondary) / 0.6)' }}>
                Privacy Policy
              </a>
              <a href="#" className="professional-link transition-colors duration-200" style={{ color: 'hsl(var(--bg-secondary) / 0.6)' }}>
                Terms of Service
              </a>
              <a href="#" className="professional-link transition-colors duration-200" style={{ color: 'hsl(var(--bg-secondary) / 0.6)' }}>
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 