interface MetricCardProps {
  title: string;
  value: string;
  subtext?: string;
  trend?: string;
  trendPositive?: boolean;
}

function MetricCard({ title, value, subtext, trend, trendPositive }: MetricCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="text-center">
        <div className="text-4xl font-bold text-gray-900 mb-2">{value}</div>
        <div className="text-gray-600 font-medium mb-1">{title}</div>
        {trend && (
          <div className={`text-sm ${trendPositive ? 'text-green-600' : 'text-red-600'}`}>
            {trend}
          </div>
        )}
        {subtext && (
          <div className="text-sm text-yellow-600 font-medium mt-1">{subtext}</div>
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
    { title: 'Active Campaigns', value: '3', trend: '+1 this week', trendPositive: true },
    { title: 'Total Impressions', value: '2.4M', trend: '+15% vs last month', trendPositive: true },
    { title: 'Avg. ROI', value: '14.2%', trend: '+2.1% improvement', trendPositive: true },
    { title: 'Monthly Spend', value: '€18,450', subtext: 'Budget: €25,000' },
  ];

  const agencyMetrics = [
    { title: 'Active Clients', value: '24', trend: '+3 this month', trendPositive: true },
    { title: 'Total Campaigns', value: '67', trend: '+8 vs last month', trendPositive: true },
    { title: 'Revenue', value: '€145K', trend: '+12%', trendPositive: true },
    { title: 'Client Satisfaction', value: '4.8/5', trend: '+0.2', trendPositive: true },
  ];

  const adminMetrics = [
    { title: 'Total Campaigns', value: '156', trend: '+12 this week', trendPositive: true },
    { title: 'Pending Approvals', value: '8', trend: '2 urgent', trendPositive: false },
    { title: 'Total Companies', value: '42', trend: '+5 this quarter', trendPositive: true },
    { title: 'System Activity', value: '387', trend: 'Active sessions', trendPositive: true },
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
