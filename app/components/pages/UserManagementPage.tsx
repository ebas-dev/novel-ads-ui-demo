'use client';

import { useState } from 'react';

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  company: string;
  status: string;
  lastLogin: string;
  twoFactorEnabled: boolean;
};

export default function UserManagementPage() {
  const [users] = useState<User[]>([
    {
      id: '1',
      name: 'Georgios Papadopoulos',
      email: 'georgios@cyprusretail.com.cy',
      role: 'Client Admin',
      company: 'Cyprus Retail Group',
      status: 'Active',
      lastLogin: '2025-11-11 09:30',
      twoFactorEnabled: true
    },
    {
      id: '2',
      name: 'Elena Andreou',
      email: 'elena@cyprusretail.com.cy',
      role: 'Client User',
      company: 'Cyprus Retail Group',
      status: 'Active',
      lastLogin: '2025-11-10 14:22',
      twoFactorEnabled: false
    },
    {
      id: '3',
      name: 'Nikos Constantinou',
      email: 'nikos@nicosiamarketing.com.cy',
      role: 'Agency User',
      company: 'Nicosia Marketing Agency',
      status: 'Active',
      lastLogin: '2025-11-11 08:15',
      twoFactorEnabled: true
    },
    {
      id: '4',
      name: 'Sofia Ioannou',
      email: 'sofia@techstartcy.com',
      role: 'Client Admin',
      company: 'TechStart Cyprus Ltd',
      status: 'Pending Approval',
      lastLogin: 'Never',
      twoFactorEnabled: false
    },
    {
      id: '5',
      name: 'Admin User',
      email: 'admin@novelads.com.cy',
      role: 'Admin',
      company: 'NovelAds Platform Cyprus',
      status: 'Active',
      lastLogin: '2025-11-11 10:45',
      twoFactorEnabled: true
    }
  ]);

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Admin':
        return 'bg-purple-100 text-purple-800';
      case 'Agency User':
        return 'bg-blue-100 text-blue-800';
      case 'Client Admin':
        return 'bg-green-100 text-green-800';
      case 'Client User':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Pending Approval':
        return 'bg-yellow-100 text-yellow-800';
      case 'Suspended':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">👥</span>
          <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
        </div>
        <p className="text-gray-600">Manage user accounts and permissions across the platform</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">{users.length}</div>
            <div className="text-gray-600 font-medium">Total Users</div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">
              {users.filter(u => u.status === 'Active').length}
            </div>
            <div className="text-gray-600 font-medium">Active Users</div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-600 mb-2">
              {users.filter(u => u.status === 'Pending Approval').length}
            </div>
            <div className="text-gray-600 font-medium">Pending Approval</div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {users.filter(u => u.twoFactorEnabled).length}
            </div>
            <div className="text-gray-600 font-medium">2FA Enabled</div>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="mb-6">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
          <span className="text-lg">➕</span>
          <span>Register New User</span>
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Company
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Login
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  2FA
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="font-medium text-gray-900">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getRoleColor(user.role)}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {user.company}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(user.status)}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {user.lastLogin}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {user.twoFactorEnabled ? (
                      <span className="text-green-600">✓ Enabled</span>
                    ) : (
                      <span className="text-gray-400">✗ Disabled</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-4">Edit</button>
                    {user.status === 'Pending Approval' && (
                      <button className="text-green-600 hover:text-green-900 mr-4">Approve</button>
                    )}
                    <button className="text-red-600 hover:text-red-900">Suspend</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Info Box */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <span className="text-2xl">ℹ️</span>
          <div>
            <h3 className="font-semibold text-blue-900 mb-1">User Roles Explained</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li><strong>Admin:</strong> Full system access, approves campaigns and companies</li>
              <li><strong>Agency User:</strong> Manages multiple clients and creates campaign suggestions</li>
              <li><strong>Client Admin:</strong> Can manage users within their company and create campaigns</li>
              <li><strong>Client User:</strong> Can view analytics and limited campaign access</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
