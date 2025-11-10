'use client';

import { useState } from 'react';

interface PendingCampaign {
  id: number;
  name: string;
  client: string;
  type: string;
  budget: number;
  submittedDate: string;
}

interface PendingAccount {
  id: number;
  companyName: string;
  contactName: string;
  email: string;
  submittedDate: string;
}

export default function ApprovalsPage() {
  const [pendingCampaigns, setPendingCampaigns] = useState<PendingCampaign[]>([
    {
      id: 1,
      name: 'Winter Holiday Campaign',
      client: 'Acme Corporation',
      type: 'Bus Advertising',
      budget: 30000,
      submittedDate: '2025-11-08',
    },
    {
      id: 2,
      name: 'Spring Launch Ads',
      client: 'TechStart Inc',
      type: 'Train Advertising',
      budget: 22000,
      submittedDate: '2025-11-09',
    },
    {
      id: 3,
      name: 'Black Friday Special',
      client: 'Local Business LLC',
      type: 'Digital Display',
      budget: 18000,
      submittedDate: '2025-11-10',
    },
  ]);

  const [pendingAccounts, setPendingAccounts] = useState<PendingAccount[]>([
    {
      id: 1,
      companyName: 'NewTech Solutions',
      contactName: 'Alice Brown',
      email: 'alice@newtech.com',
      submittedDate: '2025-11-07',
    },
    {
      id: 2,
      companyName: 'Green Energy Corp',
      contactName: 'Bob Martinez',
      email: 'bob@greenenergy.com',
      submittedDate: '2025-11-09',
    },
  ]);

  const handleApproveCampaign = (campaign: PendingCampaign) => {
    setPendingCampaigns(pendingCampaigns.filter(c => c.id !== campaign.id));
    alert(`✅ Campaign "${campaign.name}" has been approved!\n(This is a UI demo - no actual changes are saved)`);
  };

  const handleDeclineCampaign = (campaign: PendingCampaign) => {
    setPendingCampaigns(pendingCampaigns.filter(c => c.id !== campaign.id));
    alert(`❌ Campaign "${campaign.name}" has been declined.\n(This is a UI demo - no actual changes are saved)`);
  };

  const handleApproveAccount = (account: PendingAccount) => {
    setPendingAccounts(pendingAccounts.filter(a => a.id !== account.id));
    alert(`✅ Account for "${account.companyName}" has been approved!\n(This is a UI demo - no actual changes are saved)`);
  };

  const handleDeclineAccount = (account: PendingAccount) => {
    setPendingAccounts(pendingAccounts.filter(a => a.id !== account.id));
    alert(`❌ Account for "${account.companyName}" has been declined.\n(This is a UI demo - no actual changes are saved)`);
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Approvals</h1>
        <p className="text-gray-600">Review and approve pending campaigns and accounts</p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-2">Pending Campaign Approvals</div>
          <div className="text-3xl font-bold text-orange-600">{pendingCampaigns.length}</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-2">Pending Account Approvals</div>
          <div className="text-3xl font-bold text-purple-600">{pendingAccounts.length}</div>
        </div>
      </div>

      {/* Campaign Approvals */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Campaign Approvals</h2>
        {pendingCampaigns.length === 0 ? (
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 text-center text-gray-500">
            No pending campaign approvals
          </div>
        ) : (
          <div className="grid gap-4">
            {pendingCampaigns.map((campaign) => (
              <div key={campaign.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{campaign.name}</h3>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                        PENDING
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>Client: <span className="font-medium text-gray-900">{campaign.client}</span></div>
                      <div>Type: <span className="font-medium text-gray-900">{campaign.type}</span></div>
                      <div>Budget: <span className="font-medium text-blue-600">€{campaign.budget.toLocaleString()}</span></div>
                      <div>Submitted: <span className="font-medium text-gray-900">{new Date(campaign.submittedDate).toLocaleDateString()}</span></div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleApproveCampaign(campaign)}
                      className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
                    >
                      ✅ Approve
                    </button>
                    <button
                      onClick={() => handleDeclineCampaign(campaign)}
                      className="bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
                    >
                      ❌ Decline
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Account Approvals */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Account Approvals</h2>
        {pendingAccounts.length === 0 ? (
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 text-center text-gray-500">
            No pending account approvals
          </div>
        ) : (
          <div className="grid gap-4">
            {pendingAccounts.map((account) => (
              <div key={account.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{account.companyName}</h3>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                        PENDING
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>Contact: <span className="font-medium text-gray-900">{account.contactName}</span></div>
                      <div>Email: <span className="font-medium text-gray-900">{account.email}</span></div>
                      <div>Submitted: <span className="font-medium text-gray-900">{new Date(account.submittedDate).toLocaleDateString()}</span></div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleApproveAccount(account)}
                      className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
                    >
                      ✅ Approve
                    </button>
                    <button
                      onClick={() => handleDeclineAccount(account)}
                      className="bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
                    >
                      ❌ Decline
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
