'use client';

import { useState } from 'react';

export default function AnalyticsPage() {
  const [selectedCampaign, setSelectedCampaign] = useState('all');

  const campaigns = [
    { id: 'all', name: 'All Campaigns' },
    { id: '1', name: 'Summer Bus Campaign' },
    { id: '2', name: 'Downtown Express' },
    { id: '3', name: 'City Routes Special' },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Analytics</h1>
        <p className="text-gray-600">View detailed performance analytics for your campaigns</p>
      </div>

      {/* Campaign Filter */}
      <div className="mb-6 bg-white rounded-lg p-4 shadow-sm border border-gray-200">
        <label className="block text-sm font-medium text-gray-700 mb-2">Select Campaign</label>
        <select
          value={selectedCampaign}
          onChange={(e) => setSelectedCampaign(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {campaigns.map((campaign) => (
            <option key={campaign.id} value={campaign.id}>
              {campaign.name}
            </option>
          ))}
        </select>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-2">Total Impressions</div>
          <div className="text-3xl font-bold text-blue-600">2.4M</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-2">Total Spend</div>
          <div className="text-3xl font-bold text-purple-600">€18,450</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-2">Cost Per Impression</div>
          <div className="text-3xl font-bold text-orange-600">€0.0075</div>
        </div>
      </div>

      {/* Performance Chart Placeholder */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Performance Over Time</h3>
        <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
          <div className="text-center text-gray-500">
            <div className="text-4xl mb-2">📊</div>
            <div>Performance chart would appear here</div>
            <div className="text-sm">(Line chart showing impressions and spend trends)</div>
          </div>
        </div>
      </div>

      {/* Detailed Metrics Table */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Per-Campaign Analytics</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Campaign</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Impressions</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Spend</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Cost/Impression</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">Summer Bus Campaign</td>
                <td className="py-3 px-4">1.2M</td>
                <td className="py-3 px-4">€18,450</td>
                <td className="py-3 px-4">€0.0154</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">Limassol Seafront Campaign</td>
                <td className="py-3 px-4">850K</td>
                <td className="py-3 px-4">€8,200</td>
                <td className="py-3 px-4">€0.0096</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">City Routes Special</td>
                <td className="py-3 px-4">450K</td>
                <td className="py-3 px-4">€4,000</td>
                <td className="py-3 px-4">€0.0089</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
