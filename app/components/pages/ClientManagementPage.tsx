'use client';

import { useState } from 'react';

interface Client {
  id: number;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  activeCampaigns: number;
  totalSpend: number;
  status: 'active' | 'inactive';
}

export default function ClientManagementPage({ onAddClient }: { onAddClient: () => void }) {
  const [clients] = useState<Client[]>([
    {
      id: 1,
      companyName: 'Acme Corporation',
      contactName: 'John Smith',
      email: 'john.smith@acme.com',
      phone: '+1 234 567 8900',
      activeCampaigns: 3,
      totalSpend: 45000,
      status: 'active',
    },
    {
      id: 2,
      companyName: 'TechStart Inc',
      contactName: 'Sarah Johnson',
      email: 'sarah@techstart.io',
      phone: '+1 234 567 8901',
      activeCampaigns: 2,
      totalSpend: 28000,
      status: 'active',
    },
    {
      id: 3,
      companyName: 'Local Business LLC',
      contactName: 'Mike Davis',
      email: 'mike@localbiz.com',
      phone: '+1 234 567 8902',
      activeCampaigns: 1,
      totalSpend: 15000,
      status: 'active',
    },
    {
      id: 4,
      companyName: 'Global Ventures',
      contactName: 'Emma Wilson',
      email: 'emma@globalventures.com',
      phone: '+1 234 567 8903',
      activeCampaigns: 0,
      totalSpend: 8500,
      status: 'inactive',
    },
  ]);

  const handleViewClient = (client: Client) => {
    alert(`View details for: ${client.companyName}\n\n` +
          `Contact: ${client.contactName}\n` +
          `Email: ${client.email}\n` +
          `Active Campaigns: ${client.activeCampaigns}\n` +
          `Total Spend: €${client.totalSpend.toLocaleString()}\n\n` +
          `(This is a UI demo)`);
  };

  const handleCreateCampaign = (client: Client) => {
    alert(`Create campaign suggestion for: ${client.companyName}\n(This is a UI demo)`);
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Client Management</h1>
          <p className="text-gray-600">Manage your clients and their campaigns</p>
        </div>
        <button
          onClick={onAddClient}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <span>➕</span>
          Add New Client
        </button>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-2">Total Clients</div>
          <div className="text-3xl font-bold text-blue-600">{clients.length}</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-2">Active Clients</div>
          <div className="text-3xl font-bold text-green-600">
            {clients.filter(c => c.status === 'active').length}
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-2">Total Revenue</div>
          <div className="text-3xl font-bold text-purple-600">
            €{clients.reduce((sum, c) => sum + c.totalSpend, 0).toLocaleString()}
          </div>
        </div>
      </div>

      {/* Clients Grid */}
      <div className="grid gap-4">
        {clients.map((client) => (
          <div key={client.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{client.companyName}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    client.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {client.status.toUpperCase()}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-600">Contact Person</div>
                    <div className="font-medium text-gray-900">{client.contactName}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Email</div>
                    <div className="font-medium text-gray-900">{client.email}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Phone</div>
                    <div className="font-medium text-gray-900">{client.phone}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Active Campaigns</div>
                    <div className="font-medium text-gray-900">{client.activeCampaigns}</div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg inline-block">
                  <div className="text-sm text-gray-600">Total Spend</div>
                  <div className="text-2xl font-bold text-blue-600">€{client.totalSpend.toLocaleString()}</div>
                </div>
              </div>

              <div className="flex flex-col gap-2 ml-4">
                <button
                  onClick={() => handleViewClient(client)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors whitespace-nowrap"
                >
                  View Overview
                </button>
                <button
                  onClick={() => handleCreateCampaign(client)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors whitespace-nowrap"
                >
                  Suggest Campaign
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
