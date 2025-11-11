'use client';

import { useState } from 'react';

type ServiceType = 'full-wrap' | 'side-wrap' | 'front-ad' | 'back-ad' | 'digital-display' | 'video-slot' | 'premium-package' | 'standard-package' | 'economy-package';

type Service = {
  id: ServiceType;
  name: string;
  category: 'Individual' | 'Package';
  description: string;
  price: string;
  features: string[];
  recommended?: boolean;
};

export default function ServiceSelectionPage() {
  const [selectedService, setSelectedService] = useState<ServiceType>('full-wrap');

  const services: Service[] = [
    // Individual Services
    {
      id: 'full-wrap',
      name: 'Full Bus Wrap',
      category: 'Individual',
      description: 'Complete bus exterior coverage for maximum brand visibility',
      price: '€3,500/month',
      features: [
        'Entire bus exterior covered',
        'Maximum visibility from all angles',
        'Premium impact and brand awareness',
        'Professional installation included',
      ],
    },
    {
      id: 'side-wrap',
      name: 'Side Wrap',
      category: 'Individual',
      description: 'Large-format advertising on both sides of the bus',
      price: '€2,200/month',
      features: [
        'Both side panels covered',
        'High visibility in traffic',
        'Eye-level exposure',
        'Weather-resistant materials',
      ],
    },
    {
      id: 'front-ad',
      name: 'Front Advertisement',
      category: 'Individual',
      description: 'Strategic placement on the front of the bus',
      price: '€800/month',
      features: [
        'Front panel placement',
        'First impression visibility',
        'Ideal for brand logos',
        'Easy to read messaging',
      ],
    },
    {
      id: 'back-ad',
      name: 'Back Advertisement',
      category: 'Individual',
      description: 'Rear panel advertising for following traffic',
      price: '€900/month',
      features: [
        'Back panel placement',
        'High exposure to following vehicles',
        'Perfect for call-to-action',
        'Premium positioning',
      ],
    },
    {
      id: 'digital-display',
      name: 'Digital Display Inside',
      category: 'Individual',
      description: 'LED screens inside the bus for passenger engagement',
      price: '€1,200/month',
      features: [
        'HD digital screens',
        'Rotating ad content',
        'Captive audience',
        'Analytics included',
      ],
    },
    {
      id: 'video-slot',
      name: 'Video Advertisement Slot',
      category: 'Individual',
      description: 'Short video clips played on internal screens',
      price: '€600/month',
      features: [
        '15-30 second video slots',
        'Play frequency: 4x per hour',
        'Engaged passenger audience',
        'Audio-visual impact',
      ],
    },
    // Package Deals
    {
      id: 'premium-package',
      name: 'Premium Package',
      category: 'Package',
      description: 'Complete advertising solution for maximum impact',
      price: '€5,800/month',
      features: [
        'Full Bus Wrap',
        'Digital Display Inside',
        'Video Advertisement Slot',
        '15% savings vs individual',
      ],
      recommended: true,
    },
    {
      id: 'standard-package',
      name: 'Standard Package',
      category: 'Package',
      description: 'Balanced exterior and interior advertising',
      price: '€3,500/month',
      features: [
        'Side Wrap (both sides)',
        'Back Advertisement',
        'Digital Display Inside',
        '12% savings vs individual',
      ],
    },
    {
      id: 'economy-package',
      name: 'Economy Package',
      category: 'Package',
      description: 'Cost-effective solution for brand visibility',
      price: '€2,000/month',
      features: [
        'Front Advertisement',
        'Back Advertisement',
        'Video Advertisement Slot',
        '10% savings vs individual',
      ],
    },
  ];

  const selectedServiceData = services.find(s => s.id === selectedService);

  // Placeholder for bus preview - in production, these would be actual images
  const getBusPreview = (serviceId: ServiceType) => {
    const previews: Record<ServiceType, { emoji: string; description: string }> = {
      'full-wrap': { emoji: '🚌', description: 'Entire bus covered in your brand colors and design' },
      'side-wrap': { emoji: '🚍', description: 'Both side panels featuring your advertisement' },
      'front-ad': { emoji: '🚎', description: 'Front panel with your logo and message' },
      'back-ad': { emoji: '🚐', description: 'Rear panel visible to following traffic' },
      'digital-display': { emoji: '📺', description: 'LED screens mounted inside the bus' },
      'video-slot': { emoji: '🎬', description: 'Video content playing on internal displays' },
      'premium-package': { emoji: '⭐', description: 'Full wrap + digital displays + video slots' },
      'standard-package': { emoji: '💼', description: 'Side wrap + back ad + digital display' },
      'economy-package': { emoji: '💰', description: 'Front + back ads + video slot' },
    };
    return previews[serviceId];
  };

  const preview = getBusPreview(selectedService);

  const individualServices = services.filter(s => s.category === 'Individual');
  const packageServices = services.filter(s => s.category === 'Package');

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">🎨</span>
          <h1 className="text-3xl font-bold text-gray-900">Service Selection</h1>
        </div>
        <p className="text-gray-600">Choose the perfect advertising solution for your campaign</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Services List */}
        <div className="lg:col-span-2 space-y-6">
          {/* Individual Services */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Individual Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {individualServices.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`text-left p-5 rounded-lg border-2 transition-all ${
                    selectedService === service.id
                      ? 'border-blue-600 bg-blue-50 shadow-md'
                      : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-900">{service.name}</h3>
                    {selectedService === service.id && (
                      <span className="text-blue-600">✓</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                  <div className="text-lg font-bold text-blue-600">{service.price}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Package Services */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Package Deals</h2>
            <div className="grid grid-cols-1 gap-4">
              {packageServices.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`text-left p-5 rounded-lg border-2 transition-all relative ${
                    selectedService === service.id
                      ? 'border-green-600 bg-green-50 shadow-md'
                      : 'border-gray-200 bg-white hover:border-green-300 hover:shadow-sm'
                  }`}
                >
                  {service.recommended && (
                    <div className="absolute -top-3 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      RECOMMENDED
                    </div>
                  )}
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-900 text-lg">{service.name}</h3>
                    {selectedService === service.id && (
                      <span className="text-green-600 text-xl">✓</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                  <div className="text-xl font-bold text-green-600">{service.price}</div>
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <div className="text-xs text-gray-500 mb-2">Includes:</div>
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <div className="lg:col-span-1">
          <div className="sticky top-4 bg-white rounded-lg border-2 border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Preview</h3>
            
            {/* Bus Preview */}
            <div className="bg-gradient-to-br from-blue-50 to-gray-100 rounded-lg p-8 mb-6 text-center">
              <div className="text-8xl mb-4">{preview.emoji}</div>
              <p className="text-sm text-gray-700">{preview.description}</p>
              <div className="mt-4 text-xs text-gray-500 italic">
                * Actual design will be customized to your brand
              </div>
            </div>

            {/* Service Details */}
            {selectedServiceData && (
              <div>
                <h4 className="font-bold text-gray-900 mb-3">{selectedServiceData.name}</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Price:</span>
                    <span className="font-bold text-blue-600">{selectedServiceData.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Category:</span>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      selectedServiceData.category === 'Package'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {selectedServiceData.category}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h5 className="font-semibold text-gray-900 mb-2 text-sm">Features:</h5>
                  <ul className="space-y-2">
                    {selectedServiceData.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Add to Campaign
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start gap-3">
          <span className="text-3xl">💡</span>
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">Need Help Choosing?</h3>
            <p className="text-sm text-blue-800 mb-3">
              Our team can help you select the best advertising solution for your budget and goals. 
              Package deals offer the best value with savings up to 15%!
            </p>
            <button className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
