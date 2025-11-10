'use client';

export default function AccountManagementPage() {
  const accountInfo = {
    companyName: 'Acme Corporation',
    contactName: 'John Smith',
    email: 'john.smith@acme.com',
    phone: '+1 234 567 8900',
    address: '123 Business St, New York, NY 10001',
    accountType: 'Premium',
    memberSince: '2024-03-15',
  };

  const handleUpdateProfile = () => {
    alert('Update profile functionality\n(This is a UI demo - no actual changes are saved)');
  };

  const handleChangePassword = () => {
    alert('Change password functionality\n(This is a UI demo - no actual changes are saved)');
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Account Management</h1>
        <p className="text-gray-600">Manage your account settings and preferences</p>
      </div>

      {/* Account Information */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Account Information</h2>
        
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
            <input
              type="text"
              value={accountInfo.companyName}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
              disabled
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name</label>
            <input
              type="text"
              value={accountInfo.contactName}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={accountInfo.email}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              value={accountInfo.phone}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
            <input
              type="text"
              value={accountInfo.address}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        <button
          onClick={handleUpdateProfile}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Update Profile
        </button>
      </div>

      {/* Account Details */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Account Type</h3>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">{accountInfo.accountType}</div>
              <div className="text-sm text-gray-600">Current Plan</div>
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
              Upgrade Plan
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Member Since</h3>
          <div className="text-3xl font-bold text-purple-600 mb-1">
            {new Date(accountInfo.memberSince).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long' 
            })}
          </div>
          <div className="text-sm text-gray-600">Account Registration Date</div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Security Settings</h2>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <div className="font-medium text-gray-900">Password</div>
              <div className="text-sm text-gray-600">Last changed 45 days ago</div>
            </div>
            <button
              onClick={handleChangePassword}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors"
            >
              Change Password
            </button>
          </div>

          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <div className="font-medium text-gray-900">Two-Factor Authentication</div>
              <div className="text-sm text-gray-600">Add an extra layer of security</div>
            </div>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors">
              Enable 2FA
            </button>
          </div>

          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <div className="font-medium text-gray-900">Login History</div>
              <div className="text-sm text-gray-600">View recent account activity</div>
            </div>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors">
              View History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
