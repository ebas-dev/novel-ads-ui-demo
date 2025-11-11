'use client';

type MenuItem = {
  id: string;
  label: string;
  icon: string;
};

interface SidebarProps {
  portalType: 'client' | 'agency' | 'admin';
  activeItem: string;
  onItemClick: (itemId: string) => void;
}

const menuItems: Record<string, MenuItem[]> = {
  client: [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'campaigns', label: 'Campaign Page', icon: '📢' },
    { id: 'services', label: 'Service Selection', icon: '🎨' },
    { id: 'analytics', label: 'Analytics Page', icon: '📈' },
    { id: 'assets', label: 'Asset Management', icon: '📁' },
    { id: 'account-management', label: 'Account Management', icon: '⚙️' },
  ],
  agency: [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'client-management', label: 'Client Management', icon: '👥' },
    { id: 'campaigns', label: 'Campaign Page', icon: '📢' },
    { id: 'services', label: 'Service Selection', icon: '🎨' },
    { id: 'analytics', label: 'Analytics Page', icon: '📈' },
    { id: 'assets', label: 'Asset Management', icon: '📁' },
    { id: 'account-management', label: 'Account Management', icon: '⚙️' },
  ],
  admin: [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'campaign-management', label: 'Campaign Management', icon: '📢' },
    { id: 'approvals', label: 'Approvals', icon: '✅' },
    { id: 'company-management', label: 'Company Management', icon: '🏢' },
    { id: 'user-management', label: 'User Management', icon: '👥' },
    { id: 'data-metrics', label: 'Data and Analytics Metrics', icon: '📊' },
    { id: 'forms-metrics', label: 'Pricing Formulas', icon: '�' },
    { id: 'assets', label: 'Asset Management', icon: '📁' },
    { id: 'activity-log', label: 'Activity Log', icon: '📝' },
  ],
};

export default function Sidebar({ portalType, activeItem, onItemClick }: SidebarProps) {
  const items = menuItems[portalType] || menuItems.client;

  return (
    <div className="fixed left-0 top-14 bottom-0 w-64 bg-gray-50 border-r border-gray-200 overflow-y-auto">
      <div className="p-4">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
          {portalType.toUpperCase()} PORTAL
        </h3>
        <nav className="space-y-1">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => onItemClick(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeItem === item.id
                  ? 'bg-blue-600 text-white font-medium'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
