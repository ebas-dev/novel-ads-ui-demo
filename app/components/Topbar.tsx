'use client';

type PortalType = 'client' | 'agency' | 'admin';

interface TopbarProps {
  currentPortal: PortalType;
  onPortalChange: (portal: PortalType) => void;
}

export default function Topbar({ currentPortal, onPortalChange }: TopbarProps) {
  const portals = [
    { id: 'client' as PortalType, label: 'Client', icon: '👥' },
    { id: 'agency' as PortalType, label: 'Agency', icon: '🏢' },
    { id: 'admin' as PortalType, label: 'Admin', icon: '⚙️' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="text-2xl">🚌</div>
        <span className="text-xl font-bold text-blue-600">NovelAds</span>
      </div>

      {/* Portal Tabs */}
      <div className="flex items-center gap-2">
        {portals.map((portal) => (
          <button
            key={portal.id}
            onClick={() => onPortalChange(portal.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              currentPortal === portal.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span>{portal.icon}</span>
            <span className="font-medium">{portal.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
