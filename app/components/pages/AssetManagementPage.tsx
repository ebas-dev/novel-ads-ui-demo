'use client';

import { useState } from 'react';

type Asset = {
  id: string;
  name: string;
  type: string;
  campaign: string;
  uploadedBy: string;
  uploadDate: string;
  status: string;
  size: string;
};

export default function AssetManagementPage() {
  const [assets] = useState<Asset[]>([
    {
      id: '1',
      name: 'summer_sale_banner.jpg',
      type: 'Image',
      campaign: 'Summer Sale 2025',
      uploadedBy: 'John Doe',
      uploadDate: '2025-11-10',
      status: 'Active',
      size: '2.4 MB'
    },
    {
      id: '2',
      name: 'product_video.mp4',
      type: 'Video',
      campaign: 'Product Launch',
      uploadedBy: 'Jane Smith',
      uploadDate: '2025-11-09',
      status: 'Under Review',
      size: '15.8 MB'
    },
    {
      id: '3',
      name: 'brand_logo.svg',
      type: 'Image',
      campaign: 'Brand Awareness',
      uploadedBy: 'Marketing Team',
      uploadDate: '2025-11-08',
      status: 'Active',
      size: '245 KB'
    },
    {
      id: '4',
      name: 'holiday_ad.png',
      type: 'Image',
      campaign: 'Holiday Campaign',
      uploadedBy: 'Sarah Johnson',
      uploadDate: '2025-11-05',
      status: 'Archived',
      size: '1.8 MB'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-800';
      case 'Archived':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Image':
        return '🖼️';
      case 'Video':
        return '🎥';
      case 'Document':
        return '📄';
      default:
        return '📎';
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">📁</span>
          <h1 className="text-3xl font-bold text-gray-900">Asset Management</h1>
        </div>
        <p className="text-gray-600">Upload and manage campaign assets</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">{assets.length}</div>
            <div className="text-gray-600 font-medium">Total Assets</div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">
              {assets.filter(a => a.status === 'Active').length}
            </div>
            <div className="text-gray-600 font-medium">Active</div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-600 mb-2">
              {assets.filter(a => a.status === 'Under Review').length}
            </div>
            <div className="text-gray-600 font-medium">Under Review</div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-600 mb-2">20.3 MB</div>
            <div className="text-gray-600 font-medium">Total Size</div>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="mb-6">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
          <span className="text-lg">⬆️</span>
          <span>Upload New Asset</span>
        </button>
      </div>

      {/* Assets Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Asset
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Campaign
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Uploaded By
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Size
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {assets.map((asset) => (
                <tr key={asset.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{getTypeIcon(asset.type)}</span>
                      <div className="font-medium text-gray-900">{asset.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {asset.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {asset.campaign}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {asset.uploadedBy}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {asset.uploadDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {asset.size}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(asset.status)}`}>
                      {asset.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-4">View</button>
                    <button className="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
