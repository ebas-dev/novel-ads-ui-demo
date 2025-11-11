'use client';

import { useState } from 'react';

interface Campaign {
  id: number;
  name: string;
  type: string;
  status: 'draft' | 'pending' | 'approved' | 'active' | 'paused' | 'completed';
  approvalStatus: 'pending' | 'approved' | 'rejected' | 'not_submitted';
  budget: number;
  spent: number;
  impressions: string;
  startDate: string;
  endDate: string;
  client: string;
}

export default function CampaignPage({ onCreateNew, onGenerateReport }: { onCreateNew: () => void; onGenerateReport?: () => void }) {
  const [campaigns] = useState<Campaign[]>([
    {
      id: 1,
      name: 'Summer Bus Campaign',
      type: 'Intercity Bus - Nicosia-Limassol',
      status: 'active',
      approvalStatus: 'approved',
      budget: 25000,
      spent: 18450,
      impressions: '1.2M',
      startDate: '2025-06-01',
      endDate: '2025-08-31',
      client: 'Cyprus Retail Group',
    },
    {
      id: 2,
      name: 'Limassol Seafront Campaign',
      type: 'OSEA Bus - Limassol Seafront',
      status: 'active',
      approvalStatus: 'approved',
      budget: 15000,
      spent: 8200,
      impressions: '850K',
      startDate: '2025-07-15',
      endDate: '2025-09-15',
      client: 'Cyprus Retail Group',
    },
    {
      id: 3,
      name: 'City Routes Special',
      type: 'OSEA Bus - Multiple Routes',
      status: 'draft',
      approvalStatus: 'not_submitted',
      budget: 20000,
      spent: 0,
      impressions: '0',
      startDate: '2025-12-01',
      endDate: '2026-02-28',
      client: 'Cyprus Retail Group',
    },
    {
      id: 4,
      name: 'Holiday Campaign 2025',
      type: 'Intercity Bus - Nicosia-Paphos',
      status: 'pending',
      approvalStatus: 'pending',
      budget: 30000,
      spent: 0,
      impressions: '0',
      startDate: '2025-12-15',
      endDate: '2026-01-15',
      client: 'Cyprus Retail Group',
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'approved':
        return 'bg-blue-100 text-blue-800';
      case 'draft':
        return 'bg-gray-100 text-gray-800';
      case 'paused':
        return 'bg-orange-100 text-orange-800';
      case 'completed':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getApprovalStatusColor = (approvalStatus: string) => {
    switch (approvalStatus) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'not_submitted':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleUpdateCampaign = (id: number, name: string) => {
    alert(`Update campaign: ${name}\n(This is a UI demo - no actual changes are saved)`);
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">My Campaigns</h1>
          <p className="text-gray-600">Manage and monitor your advertising campaigns</p>
        </div>
        <div className="flex gap-3">
          {onGenerateReport && (
            <button
              onClick={onGenerateReport}
              className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center gap-2"
            >
              <span>📄</span>
              Generate Report
            </button>
          )}
          <button
            onClick={onCreateNew}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <span>➕</span>
            Create New Campaign
          </button>
        </div>
      </div>

      {/* Campaigns Grid */}
      <div className="grid gap-6">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{campaign.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                    {campaign.status.toUpperCase()}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getApprovalStatusColor(campaign.approvalStatus)}`}>
                    Approval: {campaign.approvalStatus.replace('_', ' ').toUpperCase()}
                  </span>
                </div>
                <p className="text-gray-600">{campaign.type} • {campaign.client}</p>
              </div>
              <div className="flex gap-2">
                {campaign.status === 'draft' && (
                  <button
                    onClick={() => alert(`Submit "${campaign.name}" for approval\n(This is a UI demo)`)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Submit for Approval
                  </button>
                )}
                {campaign.status === 'approved' && (
                  <button
                    onClick={() => alert(`Launch "${campaign.name}"\n(This is a UI demo)`)}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
                  >
                    Launch Campaign
                  </button>
                )}
                <button
                  onClick={() => handleUpdateCampaign(campaign.id, campaign.name)}
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  Edit
                </button>
              </div>
            </div>

            {/* Campaign Stats */}
            <div className="grid grid-cols-4 gap-4 mb-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Budget</div>
                <div className="text-xl font-bold text-blue-600">€{campaign.budget.toLocaleString()}</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Spent</div>
                <div className="text-xl font-bold text-orange-600">€{campaign.spent.toLocaleString()}</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Impressions</div>
                <div className="text-xl font-bold text-green-600">{campaign.impressions}</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Remaining</div>
                <div className="text-xl font-bold text-purple-600">
                  €{(campaign.budget - campaign.spent).toLocaleString()}
                </div>
              </div>
            </div>

            {/* Campaign Timeline */}
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span>📅</span>
                <span>Start: {new Date(campaign.startDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🏁</span>
                <span>End: {new Date(campaign.endDate).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
