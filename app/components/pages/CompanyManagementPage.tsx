'use client';

import { useState } from 'react';

interface Company {
  id: number;
  name: string;
  registrationNumber: string;
  address: string;
  contactEmail: string;
  status: 'active' | 'pending' | 'inactive';
  users: number;
  campaigns: number;
  registeredDate: string;
}

export default function CompanyManagementPage({ onRegisterNew }: { onRegisterNew: () => void }) {
  const [companies] = useState<Company[]>([
    {
      id: 1,
      name: 'Acme Corporation',
      registrationNumber: 'ACM12345',
      address: '123 Business St, New York, NY 10001',
      contactEmail: 'contact@acme.com',
      status: 'active',
      users: 8,
      campaigns: 12,
      registeredDate: '2024-03-15',
    },
    {
      id: 2,
      name: 'TechStart Inc',
      registrationNumber: 'TSI67890',
      address: '456 Tech Ave, San Francisco, CA 94102',
      contactEmail: 'info@techstart.io',
      status: 'active',
      users: 5,
      campaigns: 7,
      registeredDate: '2024-06-22',
    },
    {
      id: 3,
      name: 'Local Business LLC',
      registrationNumber: 'LBL54321',
      address: '789 Main St, Austin, TX 78701',
      contactEmail: 'hello@localbiz.com',
      status: 'active',
      users: 3,
      campaigns: 4,
      registeredDate: '2024-08-10',
    },
    {
      id: 4,
      name: 'NewTech Solutions',
      registrationNumber: 'NTS98765',
      address: '321 Innovation Dr, Boston, MA 02101',
      contactEmail: 'contact@newtech.com',
      status: 'pending',
      users: 0,
      campaigns: 0,
      registeredDate: '2025-11-07',
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'inactive':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleViewCompany = (company: Company) => {
    alert(`Company Details:\n\n` +
          `Name: ${company.name}\n` +
          `Registration: ${company.registrationNumber}\n` +
          `Users: ${company.users}\n` +
          `Campaigns: ${company.campaigns}\n\n` +
          `(This is a UI demo)`);
  };

  const handleUserManagement = (company: Company) => {
    alert(`Manage users for: ${company.name}\n\n` +
          `Current Users: ${company.users}\n\n` +
          `This would open user management interface.\n` +
          `(This is a UI demo)`);
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Company Management</h1>
          <p className="text-gray-600">Manage registered companies and their users</p>
        </div>
        <button
          onClick={onRegisterNew}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <span>➕</span>
          Register New Company
        </button>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-2">Total Companies</div>
          <div className="text-3xl font-bold text-blue-600">{companies.length}</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-2">Active</div>
          <div className="text-3xl font-bold text-green-600">
            {companies.filter(c => c.status === 'active').length}
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-2">Total Users</div>
          <div className="text-3xl font-bold text-purple-600">
            {companies.reduce((sum, c) => sum + c.users, 0)}
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-2">Total Campaigns</div>
          <div className="text-3xl font-bold text-orange-600">
            {companies.reduce((sum, c) => sum + c.campaigns, 0)}
          </div>
        </div>
      </div>

      {/* Companies Grid */}
      <div className="grid gap-4">
        {companies.map((company) => (
          <div key={company.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{company.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(company.status)}`}>
                    {company.status.toUpperCase()}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-600">Registration Number</div>
                    <div className="font-medium text-gray-900">{company.registrationNumber}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Contact Email</div>
                    <div className="font-medium text-gray-900">{company.contactEmail}</div>
                  </div>
                  <div className="col-span-2">
                    <div className="text-sm text-gray-600">Address</div>
                    <div className="font-medium text-gray-900">{company.address}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Registered Date</div>
                    <div className="font-medium text-gray-900">
                      {new Date(company.registeredDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-xs text-gray-600">Users</div>
                    <div className="text-xl font-bold text-blue-600">{company.users}</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-xs text-gray-600">Campaigns</div>
                    <div className="text-xl font-bold text-green-600">{company.campaigns}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 ml-4">
                <button
                  onClick={() => handleViewCompany(company)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors whitespace-nowrap"
                >
                  View Overview
                </button>
                <button
                  onClick={() => handleUserManagement(company)}
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors whitespace-nowrap"
                >
                  User Management
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
