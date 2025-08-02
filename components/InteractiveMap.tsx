"use client"

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

// Type declarations for Google Maps
declare global {
  interface Window {
    google: any
  }
}

const InteractiveMap = () => {
  const { t } = useLanguage()
  const mapRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [loadError, setLoadError] = useState(false)

  useEffect(() => {
    // Load Google Maps API
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places`
    script.async = true
    script.defer = true
    script.onload = () => {
      initializeMap()
    }
    script.onerror = () => {
      setLoadError(true)
      setIsLoading(false)
    }
    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  const initializeMap = () => {
    if (!mapRef.current || !window.google) return

    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 21.0285, lng: 105.8542 }, // Hanoi coordinates
      zoom: 15,
      styles: [
        {
          featureType: 'all',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#7c93a3' }, { lightness: -10 }]
        },
        {
          featureType: 'all',
          elementType: 'labels.text.stroke',
          stylers: [{ color: '#ffffff' }, { lightness: 16 }]
        },
        {
          featureType: 'all',
          elementType: 'labels.icon',
          stylers: [{ visibility: 'off' }]
        },
        {
          featureType: 'administrative',
          elementType: 'geometry.fill',
          stylers: [{ color: '#fefefe' }]
        },
        {
          featureType: 'administrative',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#c9c9c9' }]
        },
        {
          featureType: 'administrative',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#9e9e9e' }]
        },
        {
          featureType: 'landscape.man_made',
          elementType: 'geometry',
          stylers: [{ color: '#f5f5f5' }]
        },
        {
          featureType: 'landscape.natural',
          elementType: 'geometry',
          stylers: [{ color: '#f5f5f5' }]
        },
        {
          featureType: 'landscape.natural',
          elementType: 'geometry.fill',
          stylers: [{ color: '#f5f5f5' }]
        },
        {
          featureType: 'landscape.natural',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#9e9e9e' }]
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [{ color: '#e5e5e5' }]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#757575' }]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{ color: '#c5c8c9' }]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#6b9a76' }]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{ color: '#ffffff' }]
        },
        {
          featureType: 'road',
          elementType: 'geometry.fill',
          stylers: [{ color: '#f2f2f2' }]
        },
        {
          featureType: 'road',
          elementType: 'labels.icon',
          stylers: [{ visibility: 'off' }]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#757575' }]
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry',
          stylers: [{ color: '#dadada' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{ color: '#f5f5f5' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#f5f5f5' }, { lightness: 40 }]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#616161' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.stroke',
          stylers: [{ color: '#ffffff' }]
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#9e9e9e' }]
        },
        {
          featureType: 'transit.line',
          elementType: 'geometry',
          stylers: [{ color: '#e5e5e5' }]
        },
        {
          featureType: 'transit.line',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#e5e5e5' }]
        },
        {
          featureType: 'transit.station',
          elementType: 'geometry',
          stylers: [{ color: '#eeeeee' }]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#c9c9c9' }]
        },
        {
          featureType: 'water',
          elementType: 'geometry.fill',
          stylers: [{ color: '#a3d4f4' }]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#9e9e9e' }]
        }
      ]
    })

    // Add marker for office location
    const marker = new window.google.maps.Marker({
      position: { lat: 21.0285, lng: 105.8542 },
      map: map,
      title: 'Mercury Solutions Office',
      icon: {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#1e40af"/>
            <circle cx="20" cy="20" r="8" fill="white"/>
            <circle cx="20" cy="20" r="4" fill="#1e40af"/>
          </svg>
        `),
        scaledSize: new window.google.maps.Size(40, 40),
        anchor: new window.google.maps.Point(20, 20)
      }
    })

    // Add info window
    const infoWindow = new window.google.maps.InfoWindow({
      content: `
        <div style="padding: 10px; max-width: 200px;">
          <h3 style="margin: 0 0 8px 0; color: #1e40af; font-weight: bold;">Mercury Solutions</h3>
          <p style="margin: 0 0 8px 0; color: #666;">${t('map.officeAddress.address')}</p>
          <p style="margin: 0; color: #666;">${t('contact.info.phone')}</p>
        </div>
      `
    })

    marker.addListener('click', () => {
      infoWindow.open(map, marker)
    })

    setIsLoading(false)
  }

  if (loadError) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('map.title')}
            </h2>
            <p className="text-gray-600 mb-8">
              {t('map.subtitle')}
            </p>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <p className="text-red-600">
                Unable to load map. Please try again later.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-mercury-blue-600 to-mercury-blue-800 bg-clip-text text-transparent mb-6">
            {t('map.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('map.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {isLoading ? (
                <div className="h-96 flex items-center justify-center">
                  <p className="text-gray-600">{t('map.loading')}</p>
                </div>
              ) : (
                <div id="map" ref={mapRef} className="h-96 w-full" />
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Office Address */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('map.officeAddress.title')}</h3>
              <p className="text-gray-600 mb-2">
                {t('map.officeAddress.address')}
              </p>
              <p className="text-sm text-gray-500">
                {t('map.officeAddress.description')}
              </p>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">{t('map.contact.phone')}</p>
                  <p className="text-gray-900 font-semibold">{t('contact.info.phone')}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">{t('map.contact.email')}</p>
                  <p className="text-gray-900 font-semibold">{t('contact.info.email')}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">{t('map.contact.businessHours')}</p>
                  <p className="text-gray-900 font-semibold">{t('map.contact.weekdays')}</p>
                  <p className="text-gray-600 text-sm">{t('map.contact.saturday')}</p>
                </div>
              </div>
            </div>

            {/* Directions */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('map.directions.title')}</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Bus:</strong> {t('map.directions.bus')}</p>
                <p><strong>Taxi:</strong> {t('map.directions.taxi')}</p>
                <p><strong>Motorbike:</strong> {t('map.directions.motorbike')}</p>
                <p><strong>Parking:</strong> {t('map.directions.parking')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InteractiveMap 