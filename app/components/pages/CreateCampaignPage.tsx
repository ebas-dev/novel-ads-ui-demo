'use client';

import React, { useState } from 'react';

interface CreateCampaignPageProps {
  onBack: () => void;
  userRole: 'client' | 'agency' | 'admin';
}

export default function CreateCampaignPage({ onBack, userRole }: CreateCampaignPageProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    startDate: '',
    endDate: '',
    budget: '',
    description: '',
    selectedServices: [] as string[],
    selectedPackage: '',
    campaignType: 'intercity' as 'intercity' | 'osea',
    selectedRoutes: [] as string[],
  });

  const intercityRoutes = [
    'Nicosia-Limassol',
    'Nicosia-Larnaca',
    'Nicosia-Paphos',
    'Limassol-Larnaca',
    'Limassol-Paphos',
    'Larnaca-Paphos',
  ];

  const oseaRoutes = [
    'Nicosia City Center',
    'Limassol Seafront',
    'Larnaca Airport Express',
    'Paphos Tourist Route',
    'Polis Coastal Line',
  ];

  const services = [
    { id: 'full-wrap', name: 'Full Wrap', price: '€3,500/month', icon: '🚌', description: 'Complete bus coverage' },
    { id: 'side-wrap', name: 'Side Wrap', price: '€2,200/month', icon: '🎨', description: 'Both side panels' },
    { id: 'front-ad', name: 'Front Ad', price: '€800/month', icon: '📋', description: 'Front panel only' },
    { id: 'back-ad', name: 'Back Ad', price: '€900/month', icon: '📄', description: 'Back panel only' },
    { id: 'digital-display', name: 'Digital Display', price: '€1,200/month', icon: '📺', description: 'Interior screens' },
    { id: 'video-slot', name: 'Video Slot', price: '€600/month', icon: '🎬', description: '30-sec video ads' },
  ];

  const packages = [
    { id: 'premium', name: 'Premium Package', price: '€5,800/month', icon: '⭐', description: 'Full Wrap + Digital Display + Video', savings: '15%' },
    { id: 'standard', name: 'Standard Package', price: '€3,500/month', icon: '📦', description: 'Side Wrap + Digital Display', savings: '10%' },
    { id: 'economy', name: 'Economy Package', price: '€2,000/month', icon: '💼', description: 'Front + Back Ads', savings: '12%' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRouteToggle = (route: string) => {
    setFormData(prev => ({
      ...prev,
      selectedRoutes: prev.selectedRoutes.includes(route)
        ? prev.selectedRoutes.filter(r => r !== route)
        : [...prev.selectedRoutes, route]
    }));
  };

  const handleServiceSelect = (serviceId: string) => {
    // Toggle individual service selection
    if (formData.selectedServices.includes(serviceId)) {
      // Remove service
      setFormData({ 
        ...formData, 
        selectedServices: formData.selectedServices.filter(id => id !== serviceId),
        selectedPackage: '' // Clear package when selecting individual services
      });
    } else {
      // Add service
      setFormData({ 
        ...formData, 
        selectedServices: [...formData.selectedServices, serviceId],
        selectedPackage: '' // Clear package when selecting individual services
      });
    }
  };

  const handlePackageSelect = (packageId: string) => {
    // Select package and clear individual services
    if (formData.selectedPackage === packageId) {
      // Deselect package
      setFormData({ ...formData, selectedPackage: '' });
    } else {
      // Select package and clear individual services
      setFormData({ 
        ...formData, 
        selectedPackage: packageId,
        selectedServices: [] // Clear individual services when selecting package
      });
    }
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    // In a real app, this would submit to backend
    console.log('Campaign created:', formData);
    alert('Campaign created successfully!');
    onBack();
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.name && formData.startDate && formData.endDate && formData.budget;
      case 2:
        return formData.selectedServices.length > 0 || formData.selectedPackage !== '';
      case 3:
        return formData.selectedRoutes.length > 0;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={onBack}
                className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
              >
                <span>←</span> Back
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Create New Campaign</h1>
                <p className="text-sm text-gray-500 mt-1">Step {step} of 3</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className={`flex items-center gap-3 ${step >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                1
              </div>
              <span className="font-medium">Basic Details</span>
            </div>
            <div className="flex-1 h-1 bg-gray-200 mx-4">
              <div className={`h-full ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`} style={{ width: step >= 2 ? '100%' : '0%', transition: 'width 0.3s' }} />
            </div>
            <div className={`flex items-center gap-3 ${step >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                2
              </div>
              <span className="font-medium">Select Service</span>
            </div>
            <div className="flex-1 h-1 bg-gray-200 mx-4">
              <div className={`h-full ${step >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`} style={{ width: step >= 3 ? '100%' : '0%', transition: 'width 0.3s' }} />
            </div>
            <div className={`flex items-center gap-3 ${step >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                3
              </div>
              <span className="font-medium">Select Routes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 mt-6">
        <div className="bg-white rounded-lg shadow-sm">
          {step === 1 && (
            <div className="p-8">
              <h2 className="text-xl font-semibold mb-6">Campaign Basic Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Campaign Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Summer Bus Campaign"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget *
                  </label>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., €5,000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date *
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    End Date *
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Describe your campaign objectives and key messages..."
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="p-8">
              <h2 className="text-xl font-semibold mb-2">Select Advertising Service</h2>
              <p className="text-gray-600 mb-6">Choose the service type that best fits your campaign goals</p>
              
              {/* Individual Services */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Individual Services</h3>
                <p className="text-sm text-gray-600 mb-4">Select one or more services (or choose a package below)</p>
                <div className="grid grid-cols-3 gap-4">
                  {services.map(service => (
                    <div
                      key={service.id}
                      onClick={() => handleServiceSelect(service.id)}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all relative ${
                        formData.selectedServices.includes(service.id)
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      } ${formData.selectedPackage ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {formData.selectedServices.includes(service.id) && (
                        <div className="absolute top-2 right-2 bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                          ✓
                        </div>
                      )}
                      <div className="text-4xl mb-2">{service.icon}</div>
                      <h4 className="font-semibold text-gray-900">{service.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                      <p className="text-blue-600 font-semibold mt-2">{service.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Package Deals */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Package Deals</h3>
                <p className="text-sm text-gray-600 mb-4">Or select one complete package</p>
                <div className="grid grid-cols-3 gap-4">
                  {packages.map(pkg => (
                    <div
                      key={pkg.id}
                      onClick={() => handlePackageSelect(pkg.id)}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all relative ${
                        formData.selectedPackage === pkg.id
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      } ${formData.selectedServices.length > 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                        Save {pkg.savings}
                      </div>
                      {formData.selectedPackage === pkg.id && (
                        <div className="absolute top-2 left-2 bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                          ✓
                        </div>
                      )}
                      <div className="text-4xl mb-2 mt-6">{pkg.icon}</div>
                      <h4 className="font-semibold text-gray-900">{pkg.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">{pkg.description}</p>
                      <p className="text-blue-600 font-semibold mt-2">{pkg.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Selection Summary */}
              {(formData.selectedServices.length > 0 || formData.selectedPackage) && (
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Your Selection:</h4>
                  {formData.selectedPackage && (
                    <p className="text-blue-800">
                      Package: {packages.find(p => p.id === formData.selectedPackage)?.name}
                    </p>
                  )}
                  {formData.selectedServices.length > 0 && (
                    <div className="text-blue-800">
                      <p className="font-medium">Services ({formData.selectedServices.length}):</p>
                      <ul className="list-disc list-inside ml-2">
                        {formData.selectedServices.map(serviceId => (
                          <li key={serviceId}>
                            {services.find(s => s.id === serviceId)?.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {step === 3 && (
            <div className="p-8">
              <h2 className="text-xl font-semibold mb-6">Select Bus Routes</h2>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Campaign Type
                </label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setFormData({ ...formData, campaignType: 'intercity', selectedRoutes: [] })}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                      formData.campaignType === 'intercity'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Intercity Bus
                  </button>
                  <button
                    onClick={() => setFormData({ ...formData, campaignType: 'osea', selectedRoutes: [] })}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                      formData.campaignType === 'osea'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    OSEA Bus
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Available Routes (Select one or more)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {(formData.campaignType === 'intercity' ? intercityRoutes : oseaRoutes).map(route => (
                    <label
                      key={route}
                      className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        formData.selectedRoutes.includes(route)
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.selectedRoutes.includes(route)}
                        onChange={() => handleRouteToggle(route)}
                        className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="font-medium text-gray-900">{route}</span>
                    </label>
                  ))}
                </div>
              </div>

              {formData.selectedRoutes.length > 0 && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm font-medium text-blue-900">
                    Selected: {formData.selectedRoutes.join(', ')}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="border-t border-gray-200 px-8 py-4 flex justify-between">
            <button
              onClick={step === 1 ? onBack : handleBack}
              className="px-6 py-2 text-gray-700 hover:text-gray-900 font-medium"
            >
              {step === 1 ? 'Cancel' : 'Previous'}
            </button>
            <button
              onClick={step === 3 ? handleSubmit : handleNext}
              disabled={!isStepValid()}
              className={`px-6 py-2 rounded-lg font-medium ${
                isStepValid()
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {step === 3 ? 'Create Campaign' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
