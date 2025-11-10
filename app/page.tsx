'use client';

import { useState } from 'react';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import DashboardCards from './components/DashboardCards';
import QuickActions from './components/QuickActions';
import { 
  CreateCampaignModal, 
  AddClientModal, 
  ApproveCampaignModal, 
  RegisterCompanyModal,
  AnalyticsModal 
} from './components/Modals';

// Page Components
import CampaignPage from './components/pages/CampaignPage';
import AnalyticsPage from './components/pages/AnalyticsPage';
import ClientManagementPage from './components/pages/ClientManagementPage';
import ApprovalsPage from './components/pages/ApprovalsPage';
import CompanyManagementPage from './components/pages/CompanyManagementPage';
import AccountManagementPage from './components/pages/AccountManagementPage';
import DataMetricsPage from './components/pages/DataMetricsPage';
import ActivityLogPage from './components/pages/ActivityLogPage';

type PortalType = 'client' | 'agency' | 'admin';

export default function Home() {
  const [currentPortal, setCurrentPortal] = useState<PortalType>('client');
  const [activeMenuItem, setActiveMenuItem] = useState('dashboard');
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleActionClick = (action: string) => {
    // Map action IDs to modal types based on flowchart
    if (action === 'create-campaign') {
      setActiveModal('create-campaign');
    } else if (action === 'view-analytics') {
      setActiveMenuItem('analytics');
    } else if (action === 'add-client') {
      setActiveModal('add-client');
    } else if (action === 'approve-campaign') {
      setActiveMenuItem('approvals');
    } else if (action === 'register-company') {
      setActiveModal('register-company');
    } else if (action === 'edit-campaign' || action === 'approve-account') {
      alert(`Action: ${action}\n\nThis would open a modal for ${action.replace('-', ' ')}.\n(This is a UI demo)`);
    } else {
      alert(`Action: ${action}\n\nThis is a UI demo. In production, this would navigate to the appropriate page or open a relevant modal.`);
    }
  };

  const getDashboardTitle = () => {
    const titles: Record<PortalType, string> = {
      client: 'Client Dashboard',
      agency: 'Agency Dashboard',
      admin: 'Admin Dashboard',
    };
    return titles[currentPortal];
  };

  const getDashboardSubtitle = () => {
    const subtitles: Record<PortalType, string> = {
      client: 'Welcome to your advertising dashboard. All features are fully interactive!',
      agency: 'Manage your clients and campaigns effectively.',
      admin: 'Approve campaigns, manage companies, and monitor system activity.',
    };
    return subtitles[currentPortal];
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Topbar currentPortal={currentPortal} onPortalChange={setCurrentPortal} />
      <Sidebar 
        portalType={currentPortal} 
        activeItem={activeMenuItem} 
        onItemClick={setActiveMenuItem} 
      />
      
      <main className="ml-64 mt-14 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Show dashboard only when dashboard is active */}
          {activeMenuItem === 'dashboard' && (
            <>
              {/* Dashboard Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">📊</span>
                  <h1 className="text-3xl font-bold text-gray-900">{getDashboardTitle()}</h1>
                </div>
                <p className="text-gray-600">{getDashboardSubtitle()}</p>
              </div>

              {/* Metrics Cards */}
              <div className="mb-8">
                <DashboardCards portalType={currentPortal} />
              </div>

              {/* Quick Actions */}
              <div className="mb-8">
                <QuickActions portalType={currentPortal} onActionClick={handleActionClick} />
              </div>
            </>
          )}

          {/* Additional Content Area */}
          {activeMenuItem !== 'dashboard' && (
            <div>
              {/* Client Portal Pages */}
              {currentPortal === 'client' && activeMenuItem === 'campaigns' && (
                <CampaignPage onCreateNew={() => setActiveModal('create-campaign')} />
              )}
              {currentPortal === 'client' && activeMenuItem === 'analytics' && (
                <AnalyticsPage />
              )}
              {currentPortal === 'client' && activeMenuItem === 'account-management' && (
                <AccountManagementPage />
              )}

              {/* Agency Portal Pages */}
              {currentPortal === 'agency' && activeMenuItem === 'client-management' && (
                <ClientManagementPage onAddClient={() => setActiveModal('add-client')} />
              )}
              {currentPortal === 'agency' && activeMenuItem === 'analytics' && (
                <AnalyticsPage />
              )}

              {/* Admin Portal Pages */}
              {currentPortal === 'admin' && activeMenuItem === 'campaign-management' && (
                <CampaignPage onCreateNew={() => setActiveModal('create-campaign')} />
              )}
              {currentPortal === 'admin' && activeMenuItem === 'approvals' && (
                <ApprovalsPage />
              )}
              {currentPortal === 'admin' && activeMenuItem === 'company-management' && (
                <CompanyManagementPage onRegisterNew={() => setActiveModal('register-company')} />
              )}
              {currentPortal === 'admin' && activeMenuItem === 'data-metrics' && (
                <DataMetricsPage />
              )}
              {currentPortal === 'admin' && activeMenuItem === 'activity-log' && (
                <ActivityLogPage />
              )}
            </div>
          )}
        </div>
      </main>

      {/* Modals */}
      <CreateCampaignModal 
        isOpen={activeModal === 'create-campaign'} 
        onClose={() => setActiveModal(null)} 
      />
      <AddClientModal 
        isOpen={activeModal === 'add-client'} 
        onClose={() => setActiveModal(null)} 
      />
      <ApproveCampaignModal 
        isOpen={activeModal === 'approve-campaign'} 
        onClose={() => setActiveModal(null)} 
      />
      <RegisterCompanyModal 
        isOpen={activeModal === 'register-company'} 
        onClose={() => setActiveModal(null)} 
      />
    </div>
  );
}
