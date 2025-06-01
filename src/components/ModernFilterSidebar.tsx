import React, { useState, useEffect } from 'react';
import { ChevronDown, X, Filter, Search, RotateCcw, Sparkles } from 'lucide-react';
import { useFilter } from '../context/FilterContext';
import { categories } from '../data/categories';
import { productTypes } from '../data/productTypes';
import { products } from '../data/products';

interface ModernFilterSidebarProps {
  totalProducts?: number;
  onMobileClose?: () => void;
  isMobileOpen?: boolean;
}

const ModernFilterSidebar: React.FC<ModernFilterSidebarProps> = ({ 
  totalProducts = 0, 
  onMobileClose,
  isMobileOpen = false 
}) => {
  const {
    selectedCategories,
    selectedProductTypes,
    expandedProductTypes,
    toggleCategory,
    toggleProductType,
    toggleProductTypeExpansion,
    setSelectedCategories,
    setSelectedProductTypes,
  } = useFilter();

  const [isOpen, setIsOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  
  // Auto-expand sections that have active filters
  useEffect(() => {
    const sectionsToExpand = [];
    
    // Check product types
    if (selectedProductTypes.length > 0) {
      sectionsToExpand.push('product-types');
      // Also expand specific product type categories
      Object.entries(productTypes).forEach(([key, category]) => {
        if (category.items.some(item => selectedProductTypes.includes(item.id))) {
          if (!expandedProductTypes.includes(key)) {
            toggleProductTypeExpansion(key);
          }
        }
      });
    }
    
    // Check categories
    if (selectedCategories.length > 0) {
      sectionsToExpand.push('categories');
    }
    
    // Update expanded sections
    setExpandedSections(prev => {
      const newSections = [...new Set([...prev, ...sectionsToExpand])];
      return newSections;
    });
  }, [selectedProductTypes, selectedCategories]);

  // Calculate counts for each filter option
  const getCategoryCount = (categoryId: string) => {
    return products.filter(p => p.category === categoryId && p.id !== 999).length;
  };

  const getProductTypeCount = (typeId: string) => {
    return products.filter(p => p.productType === typeId && p.id !== 999).length;
  };

  // Toggle section expansion
  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedProductTypes([]);
    setSearchTerm('');
  };

  // Get active filter count
  const activeFilterCount = selectedCategories.length + selectedProductTypes.length;

  // Filter items based on search
  const filterBySearch = <T extends { name: string }>(items: T[]): T[] => {
    if (!searchTerm) return items;
    return items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const sidebarContent = (
    <>
      {/* Search */}
      <div className="relative group">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-brass transition-colors" />
        <input
          type="text"
          placeholder="Search filters..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-3 py-3 bg-white border border-gray-200 rounded-xl focus:border-brass focus:ring-2 focus:ring-brass/20 focus:outline-none transition-all text-sm"
        />
      </div>

      {/* Active Filters Summary */}
      {activeFilterCount > 0 && (
        <div className="bg-navy/5 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-navy">
              {activeFilterCount} filter{activeFilterCount !== 1 ? 's' : ''} applied
            </span>
            <button
              onClick={clearAllFilters}
              className="flex items-center gap-1.5 text-xs text-brass hover:text-copper transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Clear all
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedCategories.map(cat => {
              const category = categories.find(c => c.id === cat);
              return category ? (
                <span key={cat} className="inline-flex items-center gap-1 px-2.5 py-1 bg-brass/10 text-brass rounded-full text-xs">
                  {category.name}
                  <button
                    onClick={() => toggleCategory(cat)}
                    className="hover:text-copper"
                  >
                    ×
                  </button>
                </span>
              ) : null;
            })}
            {selectedProductTypes.map(type => {
              const productType = Object.values(productTypes).flatMap(cat => cat.items).find(item => item.id === type);
              return productType ? (
                <span key={type} className="inline-flex items-center gap-1 px-2.5 py-1 bg-brass/10 text-brass rounded-full text-xs">
                  {productType.name}
                  <button
                    onClick={() => toggleProductType(type)}
                    className="hover:text-copper"
                  >
                    ×
                  </button>
                </span>
              ) : null;
            })}
          </div>
        </div>
      )}

      {/* Results Count */}
      <div className="bg-gradient-to-r from-brass/10 to-copper/10 rounded-xl p-4 text-center">
        <p className="text-2xl font-bold text-navy">{totalProducts}</p>
        <p className="text-sm text-navy/70">Products Found</p>
      </div>

      {/* Product Types Section */}
      <div className="bg-white/50 rounded-xl border border-gray-100 overflow-hidden backdrop-blur-sm">
        <button
          onClick={() => toggleSection('product-types')}
          className="w-full p-3 flex items-center justify-between hover:bg-gray-50/50 transition-colors"
        >
          <span className="font-medium text-navy">Product Types</span>
          <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
            expandedSections.includes('product-types') ? 'rotate-180' : ''
          }`} />
        </button>
        
        {expandedSections.includes('product-types') && (
          <div className="p-3 pt-0 space-y-2">
            {Object.entries(productTypes).map(([key, category]) => (
              <div key={key} className="space-y-2">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => {
                      // Toggle all items in this category
                      const allTypeIds = category.items.map(item => item.id);
                      const allSelected = allTypeIds.every(id => selectedProductTypes.includes(id));
                      
                      if (allSelected) {
                        // Deselect all
                        setSelectedProductTypes(selectedProductTypes.filter(id => !allTypeIds.includes(id)));
                      } else {
                        // Select all
                        const newTypes = [...new Set([...selectedProductTypes, ...allTypeIds])];
                        setSelectedProductTypes(newTypes);
                        // Auto-expand this section
                        if (!expandedProductTypes.includes(key)) {
                          toggleProductTypeExpansion(key);
                        }
                      }
                    }}
                    className={`flex-1 text-left py-1 pr-2 hover:text-brass transition-colors ${
                      category.items.every(item => selectedProductTypes.includes(item.id)) ? 'text-brass font-medium' : ''
                    }`}
                  >
                    <h4 className="text-sm font-medium">{category.name}</h4>
                  </button>
                  <button
                    onClick={() => toggleProductTypeExpansion(key)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <ChevronDown 
                      className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${
                        expandedProductTypes.includes(key) ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                </div>
                
                {expandedProductTypes.includes(key) && (
                  <div className="space-y-1.5 ml-2">
                    {filterBySearch(category.items).map((item) => {
                      const count = getProductTypeCount(item.id);
                      const isSelected = selectedProductTypes.includes(item.id);
                      
                      return (
                        <button
                          key={item.id}
                          onClick={() => toggleProductType(item.id)}
                          className={`w-full flex items-center justify-between p-2.5 rounded-full cursor-pointer transition-all ${
                            isSelected 
                              ? 'bg-navy text-white' 
                              : 'hover:bg-gray-100 text-navy/80'
                          }`}
                        >
                          <span className={`text-sm ${isSelected ? 'text-white font-medium' : 'text-navy/80'}`}>
                            {item.name}
                          </span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            isSelected 
                              ? 'bg-white/20 text-white' 
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Design Categories Section */}
      <div className="bg-white/50 rounded-xl border border-gray-100 overflow-hidden backdrop-blur-sm">
        <button
          onClick={() => toggleSection('categories')}
          className="w-full p-3 flex items-center justify-between hover:bg-gray-50/50 transition-colors"
        >
          <span className="font-medium text-navy">Design Categories</span>
          <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
            expandedSections.includes('categories') ? 'rotate-180' : ''
          }`} />
        </button>
        
        {expandedSections.includes('categories') && (
          <div className="p-3 pt-0 space-y-1">
            {filterBySearch(categories.filter(cat => cat.id !== 'custom-requests')).map((category) => {
              const count = getCategoryCount(category.id);
              const isSelected = selectedCategories.includes(category.id);
              
              return (
                <button
                  key={category.id}
                  onClick={() => toggleCategory(category.id)}
                  className={`w-full flex items-center justify-between p-2.5 rounded-full cursor-pointer transition-all ${
                    isSelected 
                      ? 'bg-navy text-white' 
                      : 'hover:bg-gray-100 text-navy/80'
                  }`}
                >
                  <span className={`text-sm ${isSelected ? 'text-white font-medium' : 'text-navy/80'}`}>
                    {category.name}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    isSelected 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Decorative Element */}
      <div className="flex justify-center py-4">
        <div className="relative">
          <Sparkles className="w-6 h-6 text-brass/20" />
          <div className="absolute inset-0 animate-ping">
            <Sparkles className="w-6 h-6 text-brass/10" />
          </div>
        </div>
      </div>
    </>
  );

  // Desktop View
  const desktopSidebar = (
    <aside className={`hidden lg:block transition-all duration-300 ${isOpen ? 'w-80' : 'w-16'} flex-shrink-0`}>
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 overflow-hidden h-fit">
        {/* Header */}
        <div className="bg-gradient-to-r from-navy to-navy/90 p-4 flex items-center justify-between">
          <h3 className={`text-lg font-medium text-white transition-opacity duration-300 flex items-center gap-2 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            <Filter className="w-4 h-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="text-xs bg-brass text-white px-2 py-0.5 rounded-full">
                {activeFilterCount}
              </span>
            )}
          </h3>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white/80 hover:text-white transition-colors"
            aria-label={isOpen ? 'Collapse filters' : 'Expand filters'}
          >
            <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? '' : '-rotate-90'}`} />
          </button>
        </div>

        {/* Collapsed State */}
        {!isOpen && (
          <div className="p-4 flex flex-col items-center">
            <button
              onClick={() => setIsOpen(true)}
              className="relative group"
              aria-label="Expand filters"
            >
              <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-200 group-hover:shadow-md transition-all">
                <Filter className="w-5 h-5 text-navy" />
                {activeFilterCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brass text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {activeFilterCount}
                  </span>
                )}
              </div>
            </button>
          </div>
        )}

        {/* Expanded State */}
        {isOpen && (
          <div className="p-4 space-y-4">
            {sidebarContent}
          </div>
        )}
      </div>
    </aside>
  );

  // Mobile View
  const mobileSidebar = isMobileOpen && (
    <div className="lg:hidden fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onMobileClose} />
      <div className="absolute left-0 top-0 h-full w-80 bg-gray-50 shadow-2xl overflow-y-auto">
        {/* Mobile Header */}
        <div className="bg-gradient-to-r from-navy to-navy/90 p-4 flex items-center justify-between sticky top-0 z-10">
          <h3 className="text-lg font-medium text-white flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="text-xs bg-brass text-white px-2 py-0.5 rounded-full">
                {activeFilterCount}
              </span>
            )}
          </h3>
          <button
            onClick={onMobileClose}
            className="text-white/80 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Content */}
        <div className="p-4 space-y-4">
          {sidebarContent}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {desktopSidebar}
      {mobileSidebar}
    </>
  );
};

export default ModernFilterSidebar;