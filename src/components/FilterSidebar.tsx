import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useFilter } from '../context/FilterContext';
import { categories } from '../data/categories';
import { productTypes } from '../data/productTypes';

const FilterSidebar: React.FC = () => {
  const {
    selectedCategories,
    selectedProductTypes,
    expandedProductTypes,
    toggleCategory,
    toggleProductType,
    toggleProductTypeExpansion,
  } = useFilter();

  return (
    <div className="w-64 bg-white border-2 border-navy rounded-lg shadow-xl overflow-hidden flex-shrink-0">
      <div className="p-6">
        <h3 className="text-xl font-slab font-bold text-navy mb-6">Filters</h3>
        
        {/* Product Types */}
        <div className="mb-8">
          <h4 className="font-slab font-semibold text-navy mb-4">Product Types</h4>
          {Object.entries(productTypes).map(([key, category]) => (
            <div key={key} className="mb-4">
              <button
                onClick={() => toggleProductTypeExpansion(key)}
                className="flex items-center justify-between w-full p-2 -mx-2 rounded hover:bg-navy/5 transition-colors duration-200 group"
              >
                <span className="font-slab font-semibold text-navy group-hover:text-brass-gold transition-colors duration-200">
                  {category.name}
                </span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    expandedProductTypes.includes(key) ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {expandedProductTypes.includes(key) && (
                <div className="ml-4 mt-2 space-y-2">
                  {category.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => toggleProductType(item.id)}
                      className={`flex items-center w-full p-2 -mx-2 rounded text-sm transition-colors duration-200 ${
                        selectedProductTypes.includes(item.id) 
                          ? 'bg-navy text-parchment' 
                          : 'hover:bg-navy/5 text-navy/80'
                      }`}
                    >
                      <span>{item.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Design Categories */}
        <div>
          <h4 className="font-slab font-semibold text-navy mb-4">Design Categories</h4>
          <div className="space-y-2">
            {categories
              .filter(cat => cat.id !== 'custom-requests')
              .map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => toggleCategory(cat.id)}
                  className={`flex items-center w-full p-2 -mx-2 rounded transition-colors duration-200 ${
                    selectedCategories.includes(cat.id)
                      ? 'bg-navy text-parchment'
                      : 'text-navy/80 hover:bg-navy/5'
                  }`}
                >
                  <span>{cat.name}</span>
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;