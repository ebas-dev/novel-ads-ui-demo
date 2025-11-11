'use client';

import { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
          >
            ×
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

// Client: Create New Campaign
export function CreateCampaignModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    budget: '',
    startDate: '',
    endDate: '',
    campaignType: 'intercity-bus',
    selectedRoutes: [] as string[],
  });

  // Sample routes - in production these would come from your database
  const intercityRoutes = [
    'Nicosia - Limassol',
    'Nicosia - Larnaca',
    'Nicosia - Paphos',
    'Limassol - Paphos',
    'Larnaca - Limassol',
    'Paphos - Polis',
  ];

  const oseaRoutes = [
    'Route 1: Nicosia City Center',
    'Route 2: Limassol Seafront',
    'Route 3: Larnaca Airport Express',
    'Route 4: Paphos Tourist Route',
    'Route 5: University of Cyprus Circuit',
  ];

  const availableRoutes = formData.campaignType === 'intercity-bus' ? intercityRoutes : oseaRoutes;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Campaign created! (This is a UI demo - no actual data is saved)');
    onClose();
  };

  const toggleRoute = (route: string) => {
    setFormData({
      ...formData,
      selectedRoutes: formData.selectedRoutes.includes(route)
        ? formData.selectedRoutes.filter(r => r !== route)
        : [...formData.selectedRoutes, route]
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create New Campaign">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Campaign Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter campaign name"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Campaign Type</label>
          <select
            value={formData.campaignType}
            onChange={(e) => setFormData({ ...formData, campaignType: e.target.value, selectedRoutes: [] })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="intercity-bus">🚌 Intercity Bus Routes</option>
            <option value="osea-bus">🚍 OSEA Bus Routes</option>
          </select>
          {formData.campaignType === 'intercity-bus' && (
            <p className="mt-1 text-xs text-gray-500">Long-distance bus routes between major cities</p>
          )}
          {formData.campaignType === 'osea-bus' && (
            <p className="mt-1 text-xs text-gray-500">Local urban bus routes within city areas</p>
          )}
        </div>

        {/* Route Selection - Only show for bus campaigns */}
        {(formData.campaignType === 'intercity-bus' || formData.campaignType === 'osea-bus') && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Routes 
              <span className="ml-2 text-xs font-normal text-gray-500">
                ({formData.selectedRoutes.length} selected)
              </span>
            </label>
            <div className="border border-gray-300 rounded-lg p-3 max-h-48 overflow-y-auto">
              {availableRoutes.map((route) => (
                <label
                  key={route}
                  className="flex items-center p-2 hover:bg-gray-50 rounded cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={formData.selectedRoutes.includes(route)}
                    onChange={() => toggleRoute(route)}
                    className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">{route}</span>
                </label>
              ))}
            </div>
            {formData.selectedRoutes.length === 0 && (
              <p className="mt-1 text-xs text-red-600">Please select at least one route</p>
            )}
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
            <input
              type="date"
              value={formData.startDate}
              onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
            <input
              type="date"
              value={formData.endDate}
              onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Budget (€)</label>
          <input
            type="number"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter budget amount"
            required
          />
        </div>

        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Create Campaign
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
}

// Agency: Add New Client
export function AddClientModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Client added successfully! (This is a UI demo - no actual data is saved)');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Client">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter company name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Contact Name</label>
          <input
            type="text"
            value={formData.contactName}
            onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter contact person name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="client@company.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="+1 234 567 8900"
          />
        </div>

        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Add Client
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
}

// Admin: Approve Campaign
export function ApproveCampaignModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const campaigns = [
    { id: 1, name: 'Summer Bus Campaign', client: 'Acme Corp', status: 'pending' },
    { id: 2, name: 'Downtown Express Ads', client: 'TechStart Inc', status: 'pending' },
    { id: 3, name: 'City Routes Special', client: 'Local Business LLC', status: 'pending' },
  ];

  const handleApprove = (id: number, name: string) => {
    alert(`Campaign "${name}" approved! (This is a UI demo)`);
  };

  const handleDecline = (id: number, name: string) => {
    alert(`Campaign "${name}" declined! (This is a UI demo)`);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Approve Campaigns">
      <div className="space-y-3">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-gray-900">{campaign.name}</h3>
                <p className="text-sm text-gray-600">Client: {campaign.client}</p>
              </div>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                Pending
              </span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleApprove(campaign.id, campaign.name)}
                className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700"
              >
                ✅ Approve
              </button>
              <button
                onClick={() => handleDecline(campaign.id, campaign.name)}
                className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700"
              >
                ❌ Decline
              </button>
            </div>
          </div>
        ))}
        <button
          onClick={onClose}
          className="w-full bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors mt-4"
        >
          Close
        </button>
      </div>
    </Modal>
  );
}

// Admin: Register Company
export function RegisterCompanyModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    companyName: '',
    registrationNumber: '',
    address: '',
    contactEmail: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Company registered successfully! (This is a UI demo - no actual data is saved)');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Register New Company">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter company name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Registration Number</label>
          <input
            type="text"
            value={formData.registrationNumber}
            onChange={(e) => setFormData({ ...formData, registrationNumber: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., 12345678"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <textarea
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={3}
            placeholder="Company address"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
          <input
            type="email"
            value={formData.contactEmail}
            onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="contact@company.com"
            required
          />
        </div>

        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Register Company
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
}

// Analytics View (used by Client and Agency)
export function AnalyticsModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Campaign Analytics">
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">Total Impressions</div>
            <div className="text-2xl font-bold text-blue-600">2,456,789</div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">Cost Per Impression</div>
            <div className="text-2xl font-bold text-orange-600">€0.0075</div>
          </div>
        </div>

        <div className="border-t pt-4">
          <h3 className="font-semibold text-gray-900 mb-3">Top Performing Campaigns</h3>
          <div className="space-y-2">
            {['Summer Bus Campaign', 'Downtown Express', 'City Routes Special'].map((campaign, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-700">{campaign}</span>
                <span className="text-blue-600 font-semibold">{(18 - i * 2).toFixed(1)}% ROI</span>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Close Analytics
        </button>
      </div>
    </Modal>
  );
}

// Generate Report Modal
export function GenerateReportModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [reportType, setReportType] = useState('campaign-draft');
  const [selectedCampaigns, setSelectedCampaigns] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [format, setFormat] = useState('pdf');

  const handleGenerateReport = (e: React.FormEvent) => {
    e.preventDefault();
    const reportTypeText = reportType === 'campaign-draft' ? 'Campaign Draft Report' : 'Campaign Overview & Analytics Report';
    alert(`✅ ${reportTypeText} generated successfully!\n\nFormat: ${format.toUpperCase()}\n\n(This is a UI demo - in production, a ${format.toUpperCase()} file would be downloaded)`);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Generate Report">
      <form onSubmit={handleGenerateReport} className="space-y-6">
        {/* Report Type Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Report Type</label>
          <div className="space-y-3">
            <label className="flex items-start p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="reportType"
                value="campaign-draft"
                checked={reportType === 'campaign-draft'}
                onChange={(e) => setReportType(e.target.value)}
                className="mt-1 mr-3"
              />
              <div>
                <div className="font-semibold text-gray-900">📋 Campaign Draft Report</div>
                <div className="text-sm text-gray-600">Generate a detailed draft report for a new campaign to share with your team for internal review</div>
              </div>
            </label>
            
            <label className="flex items-start p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="reportType"
                value="campaign-overview"
                checked={reportType === 'campaign-overview'}
                onChange={(e) => setReportType(e.target.value)}
                className="mt-1 mr-3"
              />
              <div>
                <div className="font-semibold text-gray-900">📊 Campaign Overview & Analytics</div>
                <div className="text-sm text-gray-600">Generate a comprehensive report of active campaigns with performance metrics and analytics</div>
              </div>
            </label>
          </div>
        </div>

        {/* Campaign Draft Specific Options */}
        {reportType === 'campaign-draft' && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">Draft Campaign Details</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-blue-800 mb-1">Campaign Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-blue-300 rounded-lg"
                  placeholder="Enter campaign name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-800 mb-1">Campaign Type</label>
                <select className="w-full px-4 py-2 border border-blue-300 rounded-lg">
                  <option>🚌 Intercity Bus Routes</option>
                  <option>🚍 OSEA Bus Routes</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-800 mb-1">Routes</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-blue-300 rounded-lg"
                  placeholder="e.g., Nicosia-Limassol, Limassol Seafront"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-blue-800 mb-1">Budget (€)</label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 border border-blue-300 rounded-lg"
                    placeholder="25000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-800 mb-1">Duration</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-blue-300 rounded-lg"
                    placeholder="3 months"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Campaign Overview Specific Options */}
        {reportType === 'campaign-overview' && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-3">Select Campaigns</h4>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {['Summer Bus Campaign', 'Downtown Express', 'City Routes Special', 'Holiday Campaign 2025'].map((campaign) => (
                <label key={campaign} className="flex items-center p-2 hover:bg-green-100 rounded cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedCampaigns.includes(campaign)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedCampaigns([...selectedCampaigns, campaign]);
                      } else {
                        setSelectedCampaigns(selectedCampaigns.filter(c => c !== campaign));
                      }
                    }}
                    className="mr-3"
                  />
                  <span className="text-sm text-green-900">{campaign}</span>
                </label>
              ))}
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-green-800 mb-1">Start Date</label>
                <input
                  type="date"
                  value={dateRange.start}
                  onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                  className="w-full px-4 py-2 border border-green-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-green-800 mb-1">End Date</label>
                <input
                  type="date"
                  value={dateRange.end}
                  onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                  className="w-full px-4 py-2 border border-green-300 rounded-lg"
                />
              </div>
            </div>
          </div>
        )}

        {/* Format Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Export Format</label>
          <div className="grid grid-cols-3 gap-3">
            {['pdf', 'excel', 'powerpoint'].map((fmt) => (
              <label
                key={fmt}
                className={`flex items-center justify-center p-3 border-2 rounded-lg cursor-pointer transition-colors ${
                  format === fmt
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-300 hover:bg-gray-50'
                }`}
              >
                <input
                  type="radio"
                  name="format"
                  value={fmt}
                  checked={format === fmt}
                  onChange={(e) => setFormat(e.target.value)}
                  className="sr-only"
                />
                <div className="text-center">
                  <div className="text-2xl mb-1">
                    {fmt === 'pdf' && '📄'}
                    {fmt === 'excel' && '📊'}
                    {fmt === 'powerpoint' && '📽️'}
                  </div>
                  <div className="text-xs font-semibold text-gray-700 uppercase">{fmt}</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Include Options */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-3">Include in Report</h4>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" defaultChecked className="mr-3" />
              <span className="text-sm text-gray-700">Executive Summary</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" defaultChecked className="mr-3" />
              <span className="text-sm text-gray-700">Performance Metrics</span>
            </label>
            {reportType === 'campaign-overview' && (
              <>
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-3" />
                  <span className="text-sm text-gray-700">Charts & Visualizations</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3" />
                  <span className="text-sm text-gray-700">Detailed Analytics</span>
                </label>
              </>
            )}
            <label className="flex items-center">
              <input type="checkbox" className="mr-3" />
              <span className="text-sm text-gray-700">Company Branding</span>
            </label>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Generate Report
          </button>
        </div>
      </form>
    </Modal>
  );
}
