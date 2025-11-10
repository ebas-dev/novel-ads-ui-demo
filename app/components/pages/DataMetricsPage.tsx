'use client';

export default function DataMetricsPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Data and Analytics Metrics</h1>
        <p className="text-gray-600">View comprehensive system-wide analytics and metrics</p>
      </div>

      {/* System Overview */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-2">Total Campaigns</div>
          <div className="text-3xl font-bold text-blue-600">156</div>
          <div className="text-xs text-green-600 mt-1">↑ 12 this week</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-2">Active Companies</div>
          <div className="text-3xl font-bold text-green-600">42</div>
          <div className="text-xs text-green-600 mt-1">↑ 5 this quarter</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-2">Total Users</div>
          <div className="text-3xl font-bold text-purple-600">387</div>
          <div className="text-xs text-green-600 mt-1">↑ 23 this month</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-2">System Revenue</div>
          <div className="text-3xl font-bold text-orange-600">€2.4M</div>
          <div className="text-xs text-green-600 mt-1">↑ 18% vs last month</div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">System Performance</h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Campaign Success Rate</span>
              <span className="text-sm font-bold text-green-600">94%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '94%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">User Satisfaction</span>
              <span className="text-sm font-bold text-blue-600">4.8/5</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '96%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Platform Uptime</span>
              <span className="text-sm font-bold text-purple-600">99.9%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-600 h-2 rounded-full" style={{ width: '99.9%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Analytics */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Revenue by Formula & Metric Data</h2>
        <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg mb-4">
          <div className="text-center text-gray-500">
            <div className="text-4xl mb-2">📊</div>
            <div>Revenue chart would appear here</div>
            <div className="text-sm">(Bar chart showing revenue formulas and metrics)</div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">Revenue per Campaign</div>
            <div className="text-2xl font-bold text-blue-600">€15,384</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">Revenue per Company</div>
            <div className="text-2xl font-bold text-green-600">€57,143</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">Avg Campaign Budget</div>
            <div className="text-2xl font-bold text-purple-600">€21,500</div>
          </div>
        </div>
      </div>

      {/* Activity Overview */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity Metrics</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Metric</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Today</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">This Week</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">This Month</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Trend</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">New Campaigns</td>
                <td className="py-3 px-4">3</td>
                <td className="py-3 px-4">12</td>
                <td className="py-3 px-4">47</td>
                <td className="py-3 px-4 text-green-600">↑ 18%</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">New Users</td>
                <td className="py-3 px-4">8</td>
                <td className="py-3 px-4">23</td>
                <td className="py-3 px-4">89</td>
                <td className="py-3 px-4 text-green-600">↑ 25%</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">Approvals Processed</td>
                <td className="py-3 px-4">5</td>
                <td className="py-3 px-4">18</td>
                <td className="py-3 px-4">67</td>
                <td className="py-3 px-4 text-green-600">↑ 12%</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">Revenue Generated</td>
                <td className="py-3 px-4">€45K</td>
                <td className="py-3 px-4">€178K</td>
                <td className="py-3 px-4">€712K</td>
                <td className="py-3 px-4 text-green-600">↑ 22%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
