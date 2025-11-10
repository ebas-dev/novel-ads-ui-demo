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
    targetAudience: '',
    campaignType: 'bus',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Campaign created! (This is a UI demo - no actual data is saved)');
    onClose();
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
            onChange={(e) => setFormData({ ...formData, campaignType: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="bus">Bus Advertising</option>
            <option value="train">Train Advertising</option>
            <option value="billboard">Billboard</option>
            <option value="digital">Digital Display</option>
          </select>
        </div>

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

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Target Audience</label>
          <textarea
            value={formData.targetAudience}
            onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={3}
            placeholder="Describe your target audience"
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
            <div className="text-xs text-green-600 mt-1">↑ 15% vs last period</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">Engagement Rate</div>
            <div className="text-2xl font-bold text-green-600">3.4%</div>
            <div className="text-xs text-green-600 mt-1">↑ 0.8% vs last period</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">ROI</div>
            <div className="text-2xl font-bold text-purple-600">14.2%</div>
            <div className="text-xs text-green-600 mt-1">↑ 2.1% improvement</div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">Cost Per Impression</div>
            <div className="text-2xl font-bold text-orange-600">€0.0075</div>
            <div className="text-xs text-green-600 mt-1">↓ €0.0012 vs target</div>
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
