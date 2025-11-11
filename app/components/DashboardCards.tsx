interface MetricCardProps {
  title: string;
  value: string;
  subtext?: string;
}

function MetricCard({ title, value, subtext }: MetricCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="text-center">
        <div className="text-4xl font-bold text-gray-900 mb-2">{value}</div>
        <div className="text-gray-600 font-medium mb-1">{title}</div>
        {subtext && (
          <div className="text-sm text-gray-500 font-medium mt-1">{subtext}</div>
        )}
      </div>
    </div>
  );
}

interface DashboardCardsProps {
  portalType: 'client' | 'agency' | 'admin';
}

export default function DashboardCards({ portalType }: DashboardCardsProps) {
  const clientMetrics = [
    { title: 'Active Campaigns', value: '3' },
    { title: 'Total Impressions', value: '2.4M' },
    { title: 'Total Spend', value: '€18,450' },
    { title: 'Monthly Budget', value: '€25,000' },
  ];

  const agencyMetrics = [
    { title: 'Active Clients', value: '24' },
    { title: 'Total Campaigns', value: '67' },
    { title: 'Revenue', value: '€145K' },
  ];

  const adminMetrics = [
    { title: 'Total Campaigns', value: '156' },
    { title: 'Pending Approvals', value: '8', subtext: '2 urgent' },
    { title: 'Total Companies', value: '42' },
    { title: 'System Activity', value: '387', subtext: 'Active sessions' },
  ];

  const metricsMap = {
    client: clientMetrics,
    agency: agencyMetrics,
    admin: adminMetrics,
  };

  const metrics = metricsMap[portalType] || clientMetrics;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
}
