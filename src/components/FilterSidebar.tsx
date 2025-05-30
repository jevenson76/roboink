import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useFilter } from '../context/FilterContext';
import { categories } from '../data/categories';
import { productTypes } from '../data/productTypes';

const FilterSidebar: React.FC = () => {
  const {
    selectedCategories,
    setSelectedCategories,
    selectedProductTypes,
    setSelectedProductTypes,
    expandedProductTypes,
    setExpandedProductTypes,
  } = useFilter();

  return (
    <div className="fixed left-0 top-36 w-80 h-[calc(100vh-9rem)] bg-white border-2 border-navy rounded-r-lg shadow-lg overflow-hidden z-40">
      <div className="h-full overflow-y-auto p-6">
        <h3 className="text-xl font-slab font-bold text-navy mb-6">Filters</h3>
        
        {/* Design Categories */}
        <div className="mb-8">
          <h4 className="font-semibold text-navy mb-4">Design Categories</h4>
          <div className="space-y-2">
            {categories
              .filter(cat => cat.id !== 'custom')
              .map((cat) => (
                <label key={cat.id} className="flex items-center cursor-pointer hover:bg-navy/5 p-1 rounded transition-colors duration-200">
                  <input
                    type="checkbox"
                    value={cat.id}
                    checked={selectedCategories.includes(cat.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedCategories([...selectedCategories, cat.id]);
                      } else {
                        setSelectedCategories(selectedCategories.filter(c => c !== cat.id));
                      }
                    }}
                    className="mr-3 text-navy rounded"
                  />
                  <span className="text-navy/80">
                    {cat.name}
                  </span>
                </label>
              ))}
          </div>
        </div>
        
        {/* Product Types */}
        <div>
          <h4 className="font-semibold text-navy mb-4">Product Types</h4>
          {Object.entries(productTypes).map(([key, category]) => (
            <div key={key} className="mb-4 group">
              <div className="flex items-center justify-between w-full mb-2 p-2 -m-2 rounded hover:bg-navy/5 transition-colors duration-200">
                <button
                  onClick={() => {
                    if (expandedProductTypes.includes(key)) {
                      setExpandedProductTypes(expandedProductTypes.filter(k => k !== key));
                    } else {
                      setExpandedProductTypes([...expandedProductTypes, key]);
                    }
                  }}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="font-semibold text-navy group-hover:text-brass-gold transition-colors duration-200">
                    {category.name}
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${expandedProductTypes.includes(key) ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {expandedProductTypes.includes(key) && (
                <div className="space-y-2 ml-4 mt-2">
                  <Link 
                    to={`/collections/${key.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '')}`}
                    className="block text-sm text-brass-gold hover:text-copper underline mb-2"
                  >
                    View All {category.name}
                  </Link>
                  {category.items.map((item) => (
                    <label key={item.id} className="flex items-center cursor-pointer hover:bg-navy/5 p-1 rounded transition-colors duration-200">
                      <input
                        type="checkbox"
                        value={item.id}
                        checked={selectedProductTypes.includes(item.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedProductTypes([...selectedProductTypes, item.id]);
                          } else {
                            setSelectedProductTypes(selectedProductTypes.filter(t => t !== item.id));
                          }
                        }}
                        className="mr-3 text-navy rounded"
                      />
                      <span className="text-navy/80 text-sm">{item.name}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Clear Filters Button */}
        {(selectedCategories.length > 0 || selectedProductTypes.length > 0) && (
          <button
            onClick={() => {
              setSelectedCategories([]);
              setSelectedProductTypes([]);
            }}
            className="mt-6 w-full py-2 bg-brass-gold text-deep-navy rounded hover:bg-copper transition-colors duration-200 font-semibold"
          >
            Clear All Filters
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;