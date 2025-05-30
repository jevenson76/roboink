import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/collections?category=${categoryId}`);
  };

  const handleProductTypeClick = (typeId: string) => {
    navigate(`/collections?productType=${typeId}`);
  };

  return (
    <div className="fixed left-0 top-36 w-80 h-[calc(100vh-9rem)] bg-white border-2 border-navy rounded-r-lg shadow-lg overflow-hidden z-40">
      <div className="h-full overflow-y-auto p-6">
        <h3 className="text-xl font-slab font-bold text-navy mb-6">Filters</h3>
        
        {/* Design Categories */}
        <div className="mb-8">
          <h4 className="font-slab font-semibold text-navy mb-4">Design Categories</h4>
          <div className="space-y-2">
            {categories
              .filter(cat => cat.id !== 'custom-requests')
              .map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`flex items-center w-full cursor-pointer hover:bg-navy/5 p-2 rounded transition-colors duration-200 ${
                    selectedCategories.includes(cat.id) ? 'bg-navy/10' : ''
                  }`}
                >
                  <span className={`text-navy/80 ${selectedCategories.includes(cat.id) ? 'font-semibold' : ''}`}>
                    {cat.name}
                  </span>
                </button>
              ))}
          </div>
        </div>
        
        {/* Product Types */}
        <div>
          <h4 className="font-slab font-semibold text-navy mb-4">Product Types</h4>
          {Object.entries(productTypes).map(([key, category]) => (
            <div key={key} className="mb-4">
              <button
                onClick={() => {
                  if (expandedProductTypes.includes(key)) {
                    setExpandedProductTypes(expandedProductTypes.filter(k => k !== key));
                  } else {
                    setExpandedProductTypes([...expandedProductTypes, key]);
                  }
                }}
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
                  <Link 
                    to={`/collections/${key.toLowerCase()}`}
                    className="block text-sm text-brass-gold hover:text-copper underline mb-2"
                  >
                    View All {category.name}
                  </Link>
                  {category.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleProductTypeClick(item.id)}
                      className={`flex items-center w-full p-2 -mx-2 rounded text-sm hover:bg-navy/5 transition-colors duration-200 ${
                        selectedProductTypes.includes(item.id) ? 'bg-navy/10' : ''
                      }`}
                    >
                      <span className={`text-navy/80 ${selectedProductTypes.includes(item.id) ? 'font-semibold' : ''}`}>
                        {item.name}
                      </span>
                    </button>
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
              navigate('/collections');
            }}
            className="mt-6 w-full py-2 bg-brass-gold text-deep-navy rounded-full hover:bg-copper transition-colors duration-200 font-slab font-semibold"
          >
            Clear All Filters
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;