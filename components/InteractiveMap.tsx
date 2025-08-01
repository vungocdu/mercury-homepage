"use client"

import { useState, useEffect } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

// Type declarations for Google Maps
declare global {
  interface Window {
    google: any
  }
}

const InteractiveMap = () => {
  const { t } = useLanguage()
  const [isMapLoaded, setIsMapLoaded] = useState(false)

  useEffect(() => {
    // Load Google Maps script
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places`
    script.async = true
    script.defer = true
    script.onload = () => {
      setIsMapLoaded(true)
      initMap()
    }
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  const initMap = () => {
    if (typeof window !== 'undefined' && window.google) {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 21.0285, lng: 105.8542 }, // Hà Nội coordinates
        zoom: 15,
        styles: [
          {
            featureType: 'all',
            elementType: 'geometry',
            stylers: [{ color: '#f5f5f5' }]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#c9c9c9' }]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9e9e9e' }]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#757575' }]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{ color: '#e5e5e5' }]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#ffffff' }]
          },
          {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#bcbcbc' }]
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9e9e9e' }]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{ color: '#fadcff' }]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#f1f1f1' }]
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#b3d5ff' }]
          },
          {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{ color: '#e5e5e5' }]
          },
          {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{ color: '#eeeeee' }]
          },
          {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [{ color: '#f5f5f5' }]
          },
          {
            featureType: 'landscape.man_made',
            elementType: 'geometry',
            stylers: [{ color: '#ffffff' }]
          },
          {
            featureType: 'poi.business',
            elementType: 'all',
            stylers: [{ visibility: 'off' }]
          },
          {
            featureType: 'transit',
            elementType: 'labels.icon',
            stylers: [{ visibility: 'off' }]
          }
        ]
      })

      // Add marker for Mercury Solutions office
      const marker = new window.google.maps.Marker({
        position: { lat: 21.0285, lng: 105.8542 }, // Approximate coordinates for Thái Hà
        map: map,
        title: 'Mercury Solutions',
        icon: {
          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" fill="#2E5BFF" stroke="#1E3A8A" stroke-width="2"/>
              <circle cx="20" cy="20" r="8" fill="#FFD60A"/>
              <circle cx="20" cy="20" r="4" fill="#2E5BFF"/>
            </svg>
          `),
          scaledSize: new window.google.maps.Size(40, 40),
          anchor: new window.google.maps.Point(20, 20)
        }
      })

      // Add info window
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; max-width: 250px;">
            <h3 style="margin: 0 0 8px 0; color: #2E5BFF; font-weight: bold;">Mercury Solutions</h3>
            <p style="margin: 0 0 8px 0; color: #666;">${t.map.officeAddress.address}</p>
            <p style="margin: 0; color: #666;">${t.contact.info.phone}</p>
          </div>
        `
      })

      marker.addListener('click', () => {
        infoWindow.open(map, marker)
      })
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-mercury-blue-600 to-mercury-blue-800 bg-clip-text text-transparent mb-6">
            {t.map.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.map.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div 
                id="map" 
                className="w-full h-96 lg:h-[500px] rounded-2xl"
                style={{ minHeight: '400px' }}
              >
                {!isMapLoaded && (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-mercury-blue-600 mx-auto mb-4"></div>
                      <p className="text-gray-600">{t.map.loading}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office Address */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-mercury-blue-500 to-mercury-blue-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t.map.officeAddress.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t.map.officeAddress.address}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    {t.map.officeAddress.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-mercury-gold-500 to-mercury-gold-600 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t.map.contact.phone}</p>
                    <p className="text-gray-900 font-semibold">{t.contact.info.phone}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-mercury-gold-500 to-mercury-gold-600 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t.map.contact.email}</p>
                    <p className="text-gray-900 font-semibold">{t.contact.info.email}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-mercury-gold-500 to-mercury-gold-600 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t.map.contact.businessHours}</p>
                    <p className="text-gray-900 font-semibold">{t.map.contact.weekdays}</p>
                    <p className="text-gray-600 text-sm">{t.map.contact.saturday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions */}
            <div className="bg-gradient-to-r from-mercury-blue-50 to-mercury-gold-50 rounded-2xl p-8 border border-mercury-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.map.directions.title}</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Bus:</strong> {t.map.directions.bus}</p>
                <p><strong>Taxi:</strong> {t.map.directions.taxi}</p>
                <p><strong>Motorbike:</strong> {t.map.directions.motorbike}</p>
                <p><strong>Parking:</strong> {t.map.directions.parking}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InteractiveMap 