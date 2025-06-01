import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RobustNavbar from '../components/RobustNavbar';
import FooterPRD from '../components/FooterPRD';
import ProductCardPRD from '../components/ProductCardPRD';
import OrnamentalDivider from '../components/OrnamentalDivider';
import ModernFilterSidebar from '../components/ModernFilterSidebar';
import { useFilter } from '../context/FilterContext';
import { products } from '../data/products';
import { productTypes } from '../data/productTypes';
import { Filter, X } from 'lucide-react';

interface CategoryMapping {
  [key: string]: {
    name: string;
    productTypeKey: keyof typeof productTypes;
  };
}

const categoryMapping: CategoryMapping = {
  'apparel': { name: 'Apparel', productTypeKey: 'apparel' },
  'bags': { name: 'Bags', productTypeKey: 'bags' },
  'drinkware': { name: 'Drinkware', productTypeKey: 'drinkware' },
  'home-decor': { name: 'Home Decor', productTypeKey: 'homeDecor' },
  'accessories': { name: 'Accessories', productTypeKey: 'accessories' },
  'pet-items': { name: 'Pet Items', productTypeKey: 'petItems' }
};

const CollectionCategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const { selectedProductTypes, sortBy, setSortBy, setSelectedProductTypes } = useFilter();
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // CLEAR FILTERS ON MOUNT - Don't auto-select anything
  useEffect(() => {
    // Clear all filters when navigating to a product type page
    setSelectedProductTypes([]);
  }, [category, setSelectedProductTypes]);

  if (!category || !categoryMapping[category]) {
    return <div>Category not found</div>;
  }

  const categoryInfo = categoryMapping[category];
  const categoryProductTypes = productTypes[categoryInfo.productTypeKey];
  
  // Get all product type IDs for this category
  const categoryProductTypeIds = categoryProductTypes.items.map(item => item.id);
  
  // Filter products by category
  let filteredProducts = products.filter(p => 
    categoryProductTypeIds.includes(p.productType) && p.id !== 999
  );
  
  // Apply selected product type filters ONLY if some are selected
  // If none are selected, show all products in the category
  if (selectedProductTypes.length > 0) {
    filteredProducts = filteredProducts.filter(p => 
      selectedProductTypes.includes(p.productType)
    );
  }

  // Sort products
  switch (sortBy) {
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
    case 'featured':
    default:
      filteredProducts.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return b.rating * b.reviewCount - a.rating * a.reviewCount;
      });
  }

  const activeFilterCount = selectedProductTypes.filter(type => 
    categoryProductTypeIds.includes(type)
  ).length;

  return (
    <div className="min-h-screen bg-[#efece9] animate-fade-in-from-top">
      <RobustNavbar />
      
      {/* Hero Section */}
      <section className="bg-[#efece9] py-8 text-center">
        <h1 className="text-5xl font-slab font-bold text-navy mb-2 drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
          RoboInk Handmade {categoryInfo.name}
        </h1>
        <p className="text-lg sm:text-xl text-[#800020] font-body font-bold max-w-3xl mx-auto px-4 truncate">
          Premium Quality • Hand-Printed Designs • Made with Love
        </p>
      </section>

      {/* Mobile Filter Button */}
      <button
        onClick={() => setIsMobileFilterOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-40 bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-white p-4 rounded-full shadow-lg flex items-center space-x-2 hover:scale-110 transition-transform"
      >
        <Filter className="w-5 h-5" />
        {activeFilterCount > 0 && (
          <span className="bg-white text-[#B8860B] rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
            {activeFilterCount}
          </span>
        )}
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex gap-8">
        {/* ADD FILTER SIDEBAR HERE */}
        <ModernFilterSidebar 
          totalProducts={filteredProducts.length}
          isMobileOpen={isMobileFilterOpen}
          onMobileClose={() => setIsMobileFilterOpen(false)}
        />
        
        <main className="flex-1">
          {/* Active Filters - Professional Design */}
          {selectedProductTypes.length > 0 && (
            <div className="mb-6">
              <div className="flex flex-wrap items-center gap-2">
                {selectedProductTypes
                  .filter(type => categoryProductTypeIds.includes(type))
                  .map(type => {
                    const productType = categoryProductTypes.items.find(item => item.id === type);
                    return productType ? (
                      <button
                        key={type}
                        onClick={() => setSelectedProductTypes(selectedProductTypes.filter(t => t !== type))}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-navy/10 border border-navy/20 rounded-full text-sm hover:bg-navy/20 transition-colors"
                      >
                        <span className="text-navy font-medium">{productType.name}</span>
                        <X className="w-3.5 h-3.5 text-navy/60" />
                      </button>
                    ) : null;
                  })}
                <button
                  onClick={() => setSelectedProductTypes([])}
                  className="text-brass hover:text-copper text-sm font-medium ml-2"
                >
                  Clear all
                </button>
              </div>
            </div>
          )}

          {/* Sort Bar */}
          <div className="flex flex-wrap items-center justify-between mb-8 pb-6 border-b border-navy/20">
            <p className="text-navy/60 font-semibold">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'Item' : 'Items'}
            </p>
            
            <div className="flex items-center space-x-4">
              <span className="text-navy font-semibold">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-navy/30 rounded px-3 py-1 text-navy focus:outline-none focus:border-navy"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCardPRD key={product.id} {...product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-navy/60 text-lg">No products found in this category.</p>
            </div>
          )}
        </main>
      </div>

      <OrnamentalDivider className="mb-12 mt-12" bgColor="bg-[#efece9]" />
      <div className="h-1 bg-navy"></div>
      <FooterPRD />
    </div>
  );
};

export default CollectionCategoryPage;