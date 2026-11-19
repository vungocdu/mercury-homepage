import type { Metadata } from 'next'
import { Download, Filter, Calendar } from 'lucide-react'
import AnalyticsDashboard from '@/components/AnalyticsDashboard'

export const metadata: Metadata = {
  title: 'Analytics Dashboard - Mercury Solutions',
  description: 'Email marketing analytics dashboard for tracking TVC services performance',
  robots: {
    index: false,
    follow: false,
  },
}

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
              <p className="text-gray-600 mt-1">Track email marketing performance for TVC services</p>
            </div>
            <div className="flex items-center space-x-3">
              <button className="btn-secondary inline-flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </button>
              <button className="btn-secondary inline-flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Date Range
              </button>
              <button className="btn-primary inline-flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Export
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Dashboard */}
          <div className="lg:col-span-2">
            <AnalyticsDashboard />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Conversion Rate</span>
                  <span className="font-semibold text-green-600">14.7%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Avg. Session Duration</span>
                  <span className="font-semibold text-blue-600">2m 34s</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Bounce Rate</span>
                  <span className="font-semibold text-orange-600">23.4%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Pages per Session</span>
                  <span className="font-semibold text-purple-600">2.8</span>
                </div>
              </div>
            </div>

            {/* UTM Tracking Guide */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">UTM Tracking Guide</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-gray-900">Campaign Naming</p>
                  <p className="text-gray-600">tvc_services_2024_q1</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Content Types</p>
                  <p className="text-gray-600">hero_cta, portfolio_link, contact_form</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Keywords</p>
                  <p className="text-gray-600">video_production, tvc_services</p>
                </div>
              </div>
            </div>

            {/* Recent Campaigns */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Campaigns</h3>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <p className="font-medium text-green-900">TVC Services Q1 2024</p>
                  <p className="text-sm text-green-700">89 views • 12 conversions</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="font-medium text-blue-900">Video Production Promo</p>
                  <p className="text-sm text-blue-700">67 views • 8 conversions</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <p className="font-medium text-purple-900">Digital Art Showcase</p>
                  <p className="text-sm text-purple-700">45 views • 5 conversions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 