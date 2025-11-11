'use client';

import { useState } from 'react';

interface PricingFormula {
  id: number;
  name: string;
  formula: string;
  description: string;
  isActive: boolean;
  lastModified: string;
}

interface RouteMultiplier {
  id: number;
  routeName: string;
  routeType: 'Intercity' | 'OSEA';
  visibilityLevel: 'High' | 'Medium' | 'Low';
  multiplier: number;
  lastModified: string;
}

interface ProductMultiplier {
  id: number;
  productName: string;
  basePrice: number;
  visibilityScore: number;
  multiplier: number;
  lastModified: string;
}

export default function FormsMetricsPage() {
  const [activeTab, setActiveTab] = useState<'formulas' | 'routes' | 'products'>('formulas');
  const [editingItem, setEditingItem] = useState<number | null>(null);

  const [pricingFormulas, setPricingFormulas] = useState<PricingFormula[]>([
    {
      id: 1,
      name: 'Standard Pricing Formula',
      formula: 'basePrice × routeMultiplier × productMultiplier × duration',
      description: 'Default formula used for most campaigns',
      isActive: true,
      lastModified: '2025-10-15',
    },
    {
      id: 2,
      name: 'Premium Route Formula',
      formula: 'basePrice × (routeMultiplier + 0.2) × productMultiplier × duration',
      description: 'Enhanced pricing for high-visibility routes',
      isActive: true,
      lastModified: '2025-09-20',
    },
    {
      id: 3,
      name: 'Package Deal Formula',
      formula: '(sum(basePrices) × 0.85) × routeMultiplier × duration',
      description: 'Discounted pricing for package deals (15% off)',
      isActive: true,
      lastModified: '2025-08-10',
    },
  ]);

  const [routeMultipliers, setRouteMultipliers] = useState<RouteMultiplier[]>([
    { id: 1, routeName: 'Nicosia-Limassol', routeType: 'Intercity', visibilityLevel: 'High', multiplier: 1.3, lastModified: '2025-10-01' },
    { id: 2, routeName: 'Nicosia-Larnaca', routeType: 'Intercity', visibilityLevel: 'High', multiplier: 1.25, lastModified: '2025-10-01' },
    { id: 3, routeName: 'Nicosia-Paphos', routeType: 'Intercity', visibilityLevel: 'Medium', multiplier: 1.1, lastModified: '2025-10-01' },
    { id: 4, routeName: 'Limassol-Larnaca', routeType: 'Intercity', visibilityLevel: 'Medium', multiplier: 1.0, lastModified: '2025-10-01' },
    { id: 5, routeName: 'Limassol-Paphos', routeType: 'Intercity', visibilityLevel: 'Low', multiplier: 0.85, lastModified: '2025-10-01' },
    { id: 6, routeName: 'Larnaca-Paphos', routeType: 'Intercity', visibilityLevel: 'Low', multiplier: 0.8, lastModified: '2025-10-01' },
    { id: 7, routeName: 'Nicosia City Center', routeType: 'OSEA', visibilityLevel: 'High', multiplier: 1.4, lastModified: '2025-10-01' },
    { id: 8, routeName: 'Limassol Seafront', routeType: 'OSEA', visibilityLevel: 'High', multiplier: 1.35, lastModified: '2025-10-01' },
    { id: 9, routeName: 'Larnaca Airport Express', routeType: 'OSEA', visibilityLevel: 'High', multiplier: 1.3, lastModified: '2025-10-01' },
    { id: 10, routeName: 'Paphos Tourist Route', routeType: 'OSEA', visibilityLevel: 'Medium', multiplier: 1.15, lastModified: '2025-10-01' },
    { id: 11, routeName: 'Polis Coastal Line', routeType: 'OSEA', visibilityLevel: 'Low', multiplier: 0.9, lastModified: '2025-10-01' },
  ]);

  const [productMultipliers, setProductMultipliers] = useState<ProductMultiplier[]>([
    { id: 1, productName: 'Full Wrap', basePrice: 3500, visibilityScore: 10, multiplier: 1.5, lastModified: '2025-10-01' },
    { id: 2, productName: 'Side Wrap', basePrice: 2200, visibilityScore: 8, multiplier: 1.3, lastModified: '2025-10-01' },
    { id: 3, productName: 'Front Ad', basePrice: 800, visibilityScore: 6, multiplier: 1.0, lastModified: '2025-10-01' },
    { id: 4, productName: 'Back Ad', basePrice: 900, visibilityScore: 7, multiplier: 1.1, lastModified: '2025-10-01' },
    { id: 5, productName: 'Digital Display', basePrice: 1200, visibilityScore: 8, multiplier: 1.25, lastModified: '2025-10-01' },
    { id: 6, productName: 'Video Slot', basePrice: 600, visibilityScore: 7, multiplier: 1.15, lastModified: '2025-10-01' },
  ]);

  const handleUpdateFormula = (id: number, field: string, value: string | boolean) => {
    setPricingFormulas(prev => prev.map(formula => 
      formula.id === id ? { ...formula, [field]: value, lastModified: new Date().toISOString().split('T')[0] } : formula
    ));
  };

  const handleUpdateRouteMultiplier = (id: number, multiplier: number) => {
    setRouteMultipliers(prev => prev.map(route => 
      route.id === id ? { ...route, multiplier, lastModified: new Date().toISOString().split('T')[0] } : route
    ));
  };

  const handleUpdateProductMultiplier = (id: number, field: string, value: number) => {
    setProductMultipliers(prev => prev.map(product => 
      product.id === id ? { ...product, [field]: value, lastModified: new Date().toISOString().split('T')[0] } : product
    ));
  };

  const getVisibilityColor = (level: string) => {
    switch (level) {
      case 'High': return 'text-green-600 bg-green-50';
      case 'Medium': return 'text-yellow-600 bg-yellow-50';
      case 'Low': return 'text-orange-600 bg-orange-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">📐</span>
          <h1 className="text-3xl font-bold text-gray-900">Pricing Formulas & Metrics</h1>
        </div>
        <p className="text-gray-600">Manage pricing formulas, route visibility multipliers, and product multipliers</p>
      </div>

      {/* Tabs */}
      <div className="mb-6 border-b border-gray-200">
        <div className="flex gap-6">
          <button
            onClick={() => setActiveTab('formulas')}
            className={`pb-3 px-2 font-medium transition-all ${
              activeTab === 'formulas'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Pricing Formulas
          </button>
          <button
            onClick={() => setActiveTab('routes')}
            className={`pb-3 px-2 font-medium transition-all ${
              activeTab === 'routes'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Route Multipliers
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`pb-3 px-2 font-medium transition-all ${
              activeTab === 'products'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Product Multipliers
          </button>
        </div>
      </div>

      {/* Pricing Formulas Tab */}
      {activeTab === 'formulas' && (
        <div className="space-y-4">
          {pricingFormulas.map(formula => (
            <div key={formula.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  {editingItem === formula.id ? (
                    <input
                      type="text"
                      value={formula.name}
                      onChange={(e) => handleUpdateFormula(formula.id, 'name', e.target.value)}
                      className="text-lg font-semibold mb-2 w-full px-2 py-1 border border-gray-300 rounded"
                    />
                  ) : (
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{formula.name}</h3>
                  )}
                  
                  {editingItem === formula.id ? (
                    <textarea
                      value={formula.formula}
                      onChange={(e) => handleUpdateFormula(formula.id, 'formula', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded font-mono text-sm mb-2"
                      rows={2}
                    />
                  ) : (
                    <div className="bg-gray-50 px-4 py-3 rounded-lg mb-2">
                      <code className="text-sm text-gray-800">{formula.formula}</code>
                    </div>
                  )}

                  {editingItem === formula.id ? (
                    <textarea
                      value={formula.description}
                      onChange={(e) => handleUpdateFormula(formula.id, 'description', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                      rows={2}
                    />
                  ) : (
                    <p className="text-sm text-gray-600">{formula.description}</p>
                  )}
                </div>

                <div className="ml-4 flex items-center gap-3">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formula.isActive}
                      onChange={(e) => handleUpdateFormula(formula.id, 'isActive', e.target.checked)}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <span className="text-sm text-gray-700">Active</span>
                  </label>
                  
                  {editingItem === formula.id ? (
                    <button
                      onClick={() => setEditingItem(null)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => setEditingItem(formula.id)}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm"
                    >
                      Edit
                    </button>
                  )}
                </div>
              </div>

              <div className="text-xs text-gray-500">
                Last modified: {formula.lastModified}
              </div>
            </div>
          ))}

          <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-all">
            + Add New Formula
          </button>
        </div>
      )}

      {/* Route Multipliers Tab */}
      {activeTab === 'routes' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Route Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Visibility</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Multiplier</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Price Impact</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Last Modified</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {routeMultipliers.map(route => (
                  <tr key={route.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{route.routeName}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-sm">
                        {route.routeType}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded text-sm ${getVisibilityColor(route.visibilityLevel)}`}>
                        {route.visibilityLevel}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      {editingItem === route.id ? (
                        <input
                          type="number"
                          step="0.05"
                          value={route.multiplier}
                          onChange={(e) => handleUpdateRouteMultiplier(route.id, parseFloat(e.target.value))}
                          className="w-20 px-2 py-1 border border-gray-300 rounded"
                        />
                      ) : (
                        <span className="font-mono font-semibold">{route.multiplier.toFixed(2)}x</span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      {route.multiplier > 1 ? (
                        <span className="text-green-600">+{((route.multiplier - 1) * 100).toFixed(0)}%</span>
                      ) : route.multiplier < 1 ? (
                        <span className="text-red-600">{((route.multiplier - 1) * 100).toFixed(0)}%</span>
                      ) : (
                        <span className="text-gray-600">Standard</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">{route.lastModified}</td>
                    <td className="py-3 px-4">
                      {editingItem === route.id ? (
                        <button
                          onClick={() => setEditingItem(null)}
                          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          onClick={() => setEditingItem(route.id)}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 text-sm"
                        >
                          Edit
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Product Multipliers Tab */}
      {activeTab === 'products' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Product Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Base Price</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Visibility Score</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Multiplier</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Effective Impact</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Last Modified</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {productMultipliers.map(product => (
                  <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{product.productName}</td>
                    <td className="py-3 px-4">
                      {editingItem === product.id ? (
                        <input
                          type="number"
                          value={product.basePrice}
                          onChange={(e) => handleUpdateProductMultiplier(product.id, 'basePrice', parseFloat(e.target.value))}
                          className="w-24 px-2 py-1 border border-gray-300 rounded"
                        />
                      ) : (
                        <span className="font-semibold">€{product.basePrice.toLocaleString()}</span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      {editingItem === product.id ? (
                        <input
                          type="number"
                          min="1"
                          max="10"
                          value={product.visibilityScore}
                          onChange={(e) => handleUpdateProductMultiplier(product.id, 'visibilityScore', parseFloat(e.target.value))}
                          className="w-16 px-2 py-1 border border-gray-300 rounded"
                        />
                      ) : (
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${product.visibilityScore * 10}%` }}
                            />
                          </div>
                          <span className="text-sm font-mono">{product.visibilityScore}/10</span>
                        </div>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      {editingItem === product.id ? (
                        <input
                          type="number"
                          step="0.05"
                          value={product.multiplier}
                          onChange={(e) => handleUpdateProductMultiplier(product.id, 'multiplier', parseFloat(e.target.value))}
                          className="w-20 px-2 py-1 border border-gray-300 rounded"
                        />
                      ) : (
                        <span className="font-mono font-semibold">{product.multiplier.toFixed(2)}x</span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-green-600">+{((product.multiplier - 1) * 100).toFixed(0)}%</span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">{product.lastModified}</td>
                    <td className="py-3 px-4">
                      {editingItem === product.id ? (
                        <button
                          onClick={() => setEditingItem(null)}
                          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          onClick={() => setEditingItem(product.id)}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 text-sm"
                        >
                          Edit
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Pricing Calculator Example */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
          <span>💡</span> Pricing Calculation Example
        </h3>
        <div className="text-sm text-blue-800 space-y-2">
          <p className="font-mono bg-white px-3 py-2 rounded">
            Final Price = Base Price × Route Multiplier × Product Multiplier × Duration (months)
          </p>
          <p className="text-xs">
            <strong>Example:</strong> Full Wrap (€3,500) on Nicosia-Limassol (1.3x) for 3 months with Full Wrap multiplier (1.5x)
          </p>
          <p className="font-mono bg-white px-3 py-2 rounded">
            = €3,500 × 1.3 × 1.5 × 3 = <strong className="text-green-700">€20,475</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
