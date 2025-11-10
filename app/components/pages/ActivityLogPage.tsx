'use client';

export default function ActivityLogPage() {
  const activities = [
    {
      id: 1,
      type: 'campaign_approved',
      user: 'Admin User',
      action: 'Approved campaign',
      target: 'Winter Holiday Campaign',
      timestamp: '2025-11-10 14:32:15',
      icon: '✅',
      color: 'green',
    },
    {
      id: 2,
      type: 'account_created',
      user: 'System',
      action: 'New account registered',
      target: 'NewTech Solutions',
      timestamp: '2025-11-10 13:15:42',
      icon: '👤',
      color: 'blue',
    },
    {
      id: 3,
      type: 'campaign_created',
      user: 'John Smith (Acme Corp)',
      action: 'Created new campaign',
      target: 'Spring Launch Ads',
      timestamp: '2025-11-10 11:08:33',
      icon: '📢',
      color: 'purple',
    },
    {
      id: 4,
      type: 'company_registered',
      user: 'Admin User',
      action: 'Registered new company',
      target: 'Green Energy Corp',
      timestamp: '2025-11-10 09:45:12',
      icon: '🏢',
      color: 'orange',
    },
    {
      id: 5,
      type: 'campaign_updated',
      user: 'Sarah Johnson (TechStart)',
      action: 'Updated campaign',
      target: 'Downtown Express',
      timestamp: '2025-11-09 16:22:05',
      icon: '✏️',
      color: 'blue',
    },
    {
      id: 6,
      type: 'account_approved',
      user: 'Admin User',
      action: 'Approved account',
      target: 'Local Business LLC',
      timestamp: '2025-11-09 14:10:28',
      icon: '✅',
      color: 'green',
    },
    {
      id: 7,
      type: 'user_login',
      user: 'Mike Davis',
      action: 'User logged in',
      target: 'System',
      timestamp: '2025-11-09 10:05:17',
      icon: '🔐',
      color: 'gray',
    },
    {
      id: 8,
      type: 'campaign_completed',
      user: 'System',
      action: 'Campaign completed',
      target: 'Summer Bus Campaign',
      timestamp: '2025-11-08 23:59:59',
      icon: '🏁',
      color: 'gray',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      green: 'bg-green-100 text-green-800',
      blue: 'bg-blue-100 text-blue-800',
      purple: 'bg-purple-100 text-purple-800',
      orange: 'bg-orange-100 text-orange-800',
      gray: 'bg-gray-100 text-gray-800',
    };
    return colors[color] || colors.gray;
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Activity Log</h1>
        <p className="text-gray-600">Monitor all system activities and user actions</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 mb-6">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Activity Type</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="all">All Activities</option>
              <option value="campaigns">Campaigns</option>
              <option value="accounts">Accounts</option>
              <option value="companies">Companies</option>
              <option value="users">Users</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="all">All Time</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">User</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="all">All Users</option>
              <option value="admin">Admin Users</option>
              <option value="clients">Clients</option>
              <option value="system">System</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* Activity Timeline */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-900">Recent Activities</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {activities.map((activity) => (
            <div key={activity.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${getColorClasses(activity.color)}`}>
                  {activity.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <span className="font-semibold text-gray-900">{activity.user}</span>
                      <span className="text-gray-600"> {activity.action} </span>
                      <span className="font-semibold text-gray-900">{activity.target}</span>
                    </div>
                    <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                      {new Date(activity.timestamp).toLocaleString()}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">
                    Activity ID: {activity.type}_{activity.id}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-gray-200 text-center">
          <button className="text-blue-600 font-medium hover:text-blue-700">
            Load More Activities
          </button>
        </div>
      </div>
    </div>
  );
}
