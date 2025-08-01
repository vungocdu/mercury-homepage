'use client';

import { useState, useEffect } from 'react';
import { BarChart3, Users, MousePointer, TrendingUp, Mail, Eye } from 'lucide-react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  emailTraffic: number;
  conversions: number;
  topCampaigns: Array<{
    name: string;
    views: number;
    conversions: number;
  }>;
  recentActivity: Array<{
    timestamp: string;
    event: string;
    source: string;
    campaign?: string;
  }>;
}

export default function AnalyticsDashboard() {
  const [data, setData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    emailTraffic: 0,
    conversions: 0,
    topCampaigns: [],
    recentActivity: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading analytics data
    // In production, this would fetch from your analytics API
    setTimeout(() => {
      setData({
        pageViews: 1247,
        uniqueVisitors: 892,
        emailTraffic: 156,
        conversions: 23,
        topCampaigns: [
          { name: 'TVC Services Q1 2024', views: 89, conversions: 12 },
          { name: 'Video Production Promo', views: 67, conversions: 8 },
          { name: 'Digital Art Showcase', views: 45, conversions: 5 },
          { name: 'Corporate Brand Films', views: 34, conversions: 4 }
        ],
        recentActivity: [
          { timestamp: '2024-01-15 14:30', event: 'Page View', source: 'mailchimp', campaign: 'TVC Services Q1 2024' },
          { timestamp: '2024-01-15 14:25', event: 'CTA Click', source: 'mailchimp', campaign: 'TVC Services Q1 2024' },
          { timestamp: '2024-01-15 14:20', event: 'Contact Form', source: 'mailchimp', campaign: 'Video Production Promo' },
          { timestamp: '2024-01-15 14:15', event: 'Portfolio View', source: 'mailchimp', campaign: 'Digital Art Showcase' }
        ]
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-20 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Email Marketing Analytics</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <BarChart3 className="w-4 h-4" />
          <span>Last 30 days</span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Total Page Views</p>
              <p className="text-2xl font-bold">{data.pageViews.toLocaleString()}</p>
            </div>
            <Eye className="w-8 h-8 opacity-80" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Unique Visitors</p>
              <p className="text-2xl font-bold">{data.uniqueVisitors.toLocaleString()}</p>
            </div>
            <Users className="w-8 h-8 opacity-80" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Email Traffic</p>
              <p className="text-2xl font-bold">{data.emailTraffic.toLocaleString()}</p>
            </div>
            <Mail className="w-8 h-8 opacity-80" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Conversions</p>
              <p className="text-2xl font-bold">{data.conversions.toLocaleString()}</p>
            </div>
            <TrendingUp className="w-8 h-8 opacity-80" />
          </div>
        </div>
      </div>

      {/* Top Campaigns */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Campaigns</h3>
        <div className="space-y-3">
          {data.topCampaigns.map((campaign, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-semibold text-purple-600">{index + 1}</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{campaign.name}</p>
                  <p className="text-sm text-gray-600">{campaign.views} views</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-green-600">{campaign.conversions} conversions</p>
                <p className="text-sm text-gray-600">
                  {((campaign.conversions / campaign.views) * 100).toFixed(1)}% rate
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {data.recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MousePointer className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{activity.event}</p>
                  <p className="text-sm text-gray-600">
                    {activity.campaign ? `${activity.campaign} • ` : ''}
                    {activity.source}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* UTM Parameter Guide */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-blue-900 mb-2">UTM Parameters for Mailchimp</h4>
        <p className="text-sm text-blue-800 mb-3">
          Use these UTM parameters in your Mailchimp campaigns to track traffic:
        </p>
        <div className="bg-white p-3 rounded border">
          <code className="text-sm text-gray-700">
            https://www.mercurysolutions.vn/tvc?utm_source=mailchimp&utm_medium=email&utm_campaign=YOUR_CAMPAIGN&utm_content=YOUR_CONTENT&utm_term=YOUR_TERM
          </code>
        </div>
      </div>
    </div>
  );
} 