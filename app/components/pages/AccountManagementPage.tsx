'use client';

interface AccountManagementPageProps {
  portalType?: 'client' | 'agency' | 'admin';
}

export default function AccountManagementPage({ portalType = 'client' }: AccountManagementPageProps) {
  const getAccountInfo = () => {
    if (portalType === 'agency') {
      return {
        companyName: 'Cyprus Marketing Solutions',
        registrationNumber: 'HE 123456',
        vatNumber: 'CY12345678X',
        contactName: 'Maria Constantinou',
        email: 'maria@cyprusmarketing.com.cy',
        phone: '+357 25 456 789',
        address: 'Archbishop Makarios III Avenue 45, Limassol, Cyprus',
        accountType: 'Agency',
        userRole: 'Agency Admin',
        memberSince: '2023-09-20',
        twoFactorEnabled: true,
      };
    }
    
    // Default client account
    return {
      companyName: 'Cyprus Retail Group',
      registrationNumber: 'HE 234567',
      vatNumber: 'CY23456789Y',
      contactName: 'Georgios Papadopoulos',
      email: 'georgios@cyprusretail.com.cy',
      phone: '+357 22 123 456',
      address: 'Makarios Avenue 123, Nicosia, Cyprus',
      accountType: 'Client',
      userRole: 'Client Admin',
      memberSince: '2024-03-15',
      twoFactorEnabled: false,
    };
  };

  const accountInfo = getAccountInfo();

  const handleUpdateProfile = () => {
    alert('Update profile functionality\n(This is a UI demo - no actual changes are saved)');
  };

  const handleRequestCompanyChange = () => {
    alert('Company information change request submitted!\nAn admin will review and approve your changes.\n(This is a UI demo - no actual request is sent)');
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
        
        {/* Company Details - Requires Admin Approval */}
        <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-start gap-2 mb-3">
            <span className="text-yellow-600">⚠️</span>
            <div>
              <p className="text-sm font-semibold text-yellow-900">Company Information (Requires Admin Approval)</p>
              <p className="text-xs text-yellow-700">Changes to company name, registration number, or VAT require admin approval</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
              <input
                type="text"
                value={accountInfo.companyName}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Registration Number *</label>
              <input
                type="text"
                value={accountInfo.registrationNumber}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white"
                placeholder="e.g., HE 123456"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">VAT Number *</label>
              <input
                type="text"
                value={accountInfo.vatNumber}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white"
                placeholder="e.g., CY12345678X"
              />
            </div>
          </div>
          
          <button
            onClick={handleRequestCompanyChange}
            className="mt-4 bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-yellow-700 transition-colors text-sm"
          >
            Request Company Info Change
          </button>
        </div>
        
        {/* Regular Account Fields */}
        <div className="grid grid-cols-2 gap-6 mb-6">
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
          <div>
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
              <div className="text-sm text-gray-600 mb-2">Account Category</div>
              <div className="text-sm">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full font-semibold">
                  {accountInfo.userRole}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <div className="text-xs text-blue-800">
              {accountInfo.accountType === 'Client' && '• Can create campaigns and view analytics'}
              {accountInfo.accountType === 'Agency' && '• Can manage multiple clients and campaigns'}
              {accountInfo.accountType === 'Admin' && '• Full system access and approval permissions'}
            </div>
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
              <div className="text-sm text-gray-600">
                {accountInfo.twoFactorEnabled 
                  ? '✓ Enabled - Extra security active'
                  : 'Add an extra layer of security'}
              </div>
            </div>
            <button className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              accountInfo.twoFactorEnabled
                ? 'bg-red-100 text-red-700 hover:bg-red-200'
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}>
              {accountInfo.twoFactorEnabled ? 'Disable 2FA' : 'Enable 2FA'}
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
