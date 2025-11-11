'use client';

interface QuickActionsProps {
  portalType: 'client' | 'agency' | 'admin';
  onActionClick: (action: string) => void;
}

type ActionButton = {
  id: string;
  label: string;
  icon: string;
  variant: 'primary' | 'success' | 'info';
};

const actionsMap: Record<string, ActionButton[]> = {
  client: [
    { id: 'create-campaign', label: 'Create New Campaign', icon: '➕', variant: 'primary' },
    { id: 'generate-report', label: 'Generate Report', icon: '📄', variant: 'info' },
    { id: 'view-analytics', label: 'View Analytics', icon: '📊', variant: 'info' },
    { id: 'upload-asset', label: 'Upload Asset', icon: '📁', variant: 'success' },
  ],
  agency: [
    { id: 'add-client', label: 'Add New Client', icon: '➕', variant: 'primary' },
    { id: 'create-campaign', label: 'Create Campaign', icon: '📢', variant: 'success' },
    { id: 'generate-report', label: 'Generate Report', icon: '📄', variant: 'info' },
    { id: 'view-analytics', label: 'View Per-Client Analytics', icon: '📈', variant: 'info' },
  ],
  admin: [
    { id: 'approve-campaign', label: 'Review Approvals', icon: '✅', variant: 'success' },
    { id: 'register-company', label: 'Register New Company', icon: '🏢', variant: 'primary' },
    { id: 'edit-formula', label: 'Edit Formula/Metric', icon: '📐', variant: 'info' },
    { id: 'view-activity', label: 'View Activity Log', icon: '📝', variant: 'info' },
  ],
};

export default function QuickActions({ portalType, onActionClick }: QuickActionsProps) {
  const actions = actionsMap[portalType] || actionsMap.client;

  const getButtonClasses = (variant: 'primary' | 'success' | 'info') => {
    const baseClasses = 'px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all hover:shadow-md';
    
    switch (variant) {
      case 'primary':
        return `${baseClasses} bg-blue-600 text-white hover:bg-blue-700`;
      case 'success':
        return `${baseClasses} bg-green-600 text-white hover:bg-green-700`;
      case 'info':
        return `${baseClasses} bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50`;
      default:
        return baseClasses;
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">🚀</span>
        <h2 className="text-xl font-bold text-gray-900">Quick Actions</h2>
      </div>
      <div className="flex flex-wrap gap-4">
        {actions.map((action) => (
          <button
            key={action.id}
            onClick={() => onActionClick(action.id)}
            className={getButtonClasses(action.variant)}
          >
            <span className="text-lg">{action.icon}</span>
            <span>{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
