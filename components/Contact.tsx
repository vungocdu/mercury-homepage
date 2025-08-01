'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Clock,
      title: 'Working hours',
      details: [
        'Open – Mon-Fri 8-4',
        'Closed – Sat-Sun and Public Holidays'
      ]
    },
    {
      icon: MapPin,
      title: 'Our location',
      details: [
        'Head Office:',
        '33 Ng. 41 P. Thai Ha, Trung Liet,',
        'Dong Da, Hanoi, Vietnam'
      ]
    },
    {
      icon: Phone,
      title: 'Contact',
      details: [
        'Phone: +84 24 1234 5678',
        'Email: info@mercury-solutions.vn'
      ]
    }
  ]

  return (
    <section id="contact" className="section-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'hsl(var(--text-primary))' }}>
            Let's discuss it!
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'hsl(var(--text-secondary))' }}>
            Thinking of applying digital transformation to your business? 
            Fill out the form below and we'll get right back to you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="contact-form">
            <h3 className="text-2xl font-semibold mb-6" style={{ color: 'hsl(var(--text-primary))' }}>
              Get in Touch
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2" style={{ color: 'hsl(var(--text-primary))' }}>
                    First name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="form-input w-full"
                    placeholder="Your first name"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2" style={{ color: 'hsl(var(--text-primary))' }}>
                    Last name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="form-input w-full"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'hsl(var(--text-primary))' }}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input w-full"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{ color: 'hsl(var(--text-primary))' }}>
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input w-full"
                  placeholder="+84 123 456 789"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'hsl(var(--text-primary))' }}>
                  Your message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="form-input w-full resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary inline-flex items-center justify-center"
              >
                Send message
                <Send size={20} className="ml-2" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6" style={{ color: 'hsl(var(--text-primary))' }}>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 professional-card rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6" style={{ color: 'hsl(var(--link-primary))' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2" style={{ color: 'hsl(var(--text-primary))' }}>{info.title}</h4>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} style={{ color: 'hsl(var(--text-secondary))' }}>{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Profiles */}
            <div className="professional-card p-6">
              <h4 className="font-semibold mb-4" style={{ color: 'hsl(var(--text-primary))' }}>Social profiles</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center text-white transition-colors duration-200" 
                   style={{ backgroundColor: 'hsl(var(--link-primary))' }}>
                  <span className="text-sm font-semibold">LI</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center text-white transition-colors duration-200" 
                   style={{ backgroundColor: 'hsl(var(--link-primary))' }}>
                  <span className="text-sm font-semibold">FB</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center text-white transition-colors duration-200" 
                   style={{ backgroundColor: 'hsl(var(--link-primary))' }}>
                  <span className="text-sm font-semibold">TW</span>
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="professional-card p-6 h-48 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto mb-2" style={{ color: 'hsl(var(--text-secondary))' }} />
                <p style={{ color: 'hsl(var(--text-secondary))' }}>Interactive Map</p>
                <p className="text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>33 Ng. 41 P. Thai Ha, Hanoi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 