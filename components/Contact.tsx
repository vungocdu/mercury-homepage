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
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Let's discuss it!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thinking of applying digital transformation to your business? 
            Fill out the form below and we'll get right back to you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Get in Touch
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mercury-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your first name"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mercury-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mercury-500 focus:border-transparent transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mercury-500 focus:border-transparent transition-colors duration-200"
                  placeholder="+84 123 456 789"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mercury-500 focus:border-transparent transition-colors duration-200 resize-none"
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-mercury-100 rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-mercury-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Profiles */}
            <div className="bg-gradient-to-r from-mercury-50 to-blue-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Social profiles</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-mercury-600 rounded-lg flex items-center justify-center text-white hover:bg-mercury-700 transition-colors duration-200">
                  <span className="text-sm font-semibold">LI</span>
                </a>
                <a href="#" className="w-10 h-10 bg-mercury-600 rounded-lg flex items-center justify-center text-white hover:bg-mercury-700 transition-colors duration-200">
                  <span className="text-sm font-semibold">FB</span>
                </a>
                <a href="#" className="w-10 h-10 bg-mercury-600 rounded-lg flex items-center justify-center text-white hover:bg-mercury-700 transition-colors duration-200">
                  <span className="text-sm font-semibold">TW</span>
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-xl p-6 h-48 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Interactive Map</p>
                <p className="text-sm text-gray-500">33 Ng. 41 P. Thai Ha, Hanoi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 