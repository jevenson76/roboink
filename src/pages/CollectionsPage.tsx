import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import NavbarPRD from '../components/NavbarPRD';
import FooterPRD from '../components/FooterPRD';
import ProductCardPRD from '../components/ProductCardPRD';
import OrnamentalDivider from '../components/OrnamentalDivider';
import FilterSidebar from '../components/FilterSidebar';
import { useFilter } from '../context/FilterContext';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { productTypes } from '../data/productTypes';
import { Filter } from 'lucide-react';

const CollectionsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  const searchQuery = searchParams.get('search');
  const productTypeFromUrl = searchParams.get('productType');
  const typeFromUrl = searchParams.get('type');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  const {
    selectedCategories,
    setSelectedCategories,
    selectedProductTypes,
    setSelectedProductTypes,
    sortBy,
    setSortBy,
  } = useFilter();
  
  const [displayedProducts, setDisplayedProducts] = useState(24);
  const PRODUCTS_PER_PAGE = 24;

  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategories([categoryFromUrl]);
    }
    if (productTypeFromUrl) {
      setSelectedProductTypes([productTypeFromUrl]);
    }
    if (typeFromUrl && productTypes[typeFromUrl]) {
      const typeItems = productTypes[typeFromUrl].items.map(item => item.id);
      setSelectedProductTypes(typeItems);
    }
  }, [categoryFromUrl, productTypeFromUrl, typeFromUrl, setSelectedCategories, setSelectedProductTypes]);

  useEffect(() => {
    setDisplayedProducts(PRODUCTS_PER_PAGE);
  }, [selectedCategories, selectedProductTypes, searchQuery, sortBy]);

  // Filter products
  let filteredProducts = [...products.filter(p => p.id !== 999)];
  
  if (searchQuery) {
    filteredProducts = filteredProducts.filter(product => 
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }
  
  if (selectedCategories.length > 0) {
    filteredProducts = filteredProducts.filter(p => selectedCategories.includes(p.category));
  }
  
  if (selectedProductTypes.length > 0) {
    filteredProducts = filteredProducts.filter(p => selectedProductTypes.includes(p.productType));
  }

  // Sort products
  switch (sortBy) {
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'newest':
      filteredProducts.sort((a, b) => b.id - a.id);
      break;
    case 'rating':
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
    case 'featured':
    default:
      filteredProducts.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return a.id - b.id;
      });
      break;
  }

  const activeFilterCount = selectedCategories.length + selectedProductTypes.length;

  return (
    <div className="min-h-screen bg-[#efece9] animate-fade-in-from-top">
      <NavbarPRD />
      
      {/* Hero Section */}
      <section className="bg-[#efece9] py-8 text-center relative">
        <h1 className="text-5xl font-slab font-bold text-navy mb-2 drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
          {searchQuery ? `Search Results for "${searchQuery}"` : 
           typeFromUrl && productTypes[typeFromUrl] ? `${productTypes[typeFromUrl].name} Collection` :
           'RoboInk Handmade Items'}
        </h1>
        <p className="text-xl text-[#800020] font-slab font-bold max-w-3xl mx-auto">
          {searchQuery ? 
            `Found ${filteredProducts.length} items matching your search` :
            typeFromUrl && productTypes[typeFromUrl] ? 
            `Explore our collection of handcrafted ${productTypes[typeFromUrl].name.toLowerCase()}` :
            'Explore our complete collection of steampunk-inspired designs'
          }
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
        <FilterSidebar 
          totalProducts={filteredProducts.length}
          isMobileOpen={isMobileFilterOpen}
          onMobileClose={() => setIsMobileFilterOpen(false)}
        />
        
        <main className="flex-1">
          {/* Sort Bar */}
          <div className="flex flex-wrap items-center justify-between mb-8 pb-6 border-b border-navy/20">
            <p className="text-navy/60 font-semibold">
              {filteredProducts.length > displayedProducts 
                ? `Showing 1-${displayedProducts} of ${filteredProducts.length} Items`
                : `${filteredProducts.length} Items`
              }
            </p>
            
            <div className="flex items-center space-x-4">
              <span className="text-navy font-semibold">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border-2 border-navy rounded-lg bg-[#efece9] text-navy focus:outline-none focus:ring-2 focus:ring-[#B8860B] transition-all"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          {/* Active Filters */}
          {(selectedCategories.length > 0 || selectedProductTypes.length > 0) && (
            <div className="mb-6 p-4 bg-[#f2d19e] border-2 border-navy rounded-lg">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-navy font-slab font-semibold">Active filters:</span>
                {selectedCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategories(selectedCategories.filter(c => c !== cat))}
                    className="px-4 py-1 bg-navy text-parchment rounded-full text-sm flex items-center hover:bg-navy/80 transition-colors"
                  >
                    {cat.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    <span className="ml-2">×</span>
                  </button>
                ))}
                {selectedProductTypes.map(type => {
                  const productType = Object.values(productTypes).flatMap(cat => cat.items).find(item => item.id === type);
                  return productType ? (
                    <button
                      key={type}
                      onClick={() => setSelectedProductTypes(selectedProductTypes.filter(t => t !== type))}
                      className="px-4 py-1 bg-navy text-parchment rounded-full text-sm flex items-center hover:bg-navy/80 transition-colors"
                    >
                      {productType.name}
                      <span className="ml-2">×</span>
                    </button>
                  ) : null;
                })}
                <button
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedProductTypes([]);
                  }}
                  className="text-[#800020] hover:text-[#800020]/80 text-sm underline font-semibold ml-2"
                >
                  Clear all
                </button>
              </div>
            </div>
          )}

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white border-2 border-navy rounded-lg">
              <p className="text-navy text-xl mb-6">No products found matching your filters.</p>
              <button
                onClick={() => {
                  setSelectedCategories([]);
                  setSelectedProductTypes([]);
                }}
                className="px-6 py-3 bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-parchment font-slab font-semibold rounded-full hover:from-[#DAA520] hover:to-[#FFD700] transition-all duration-300"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.slice(0, displayedProducts).map(product => (
                  <ProductCardPRD key={product.id} {...product} />
                ))}
              </div>

              {/* Load More */}
              {filteredProducts.length > displayedProducts && (
                <div className="mt-16 text-center">
                  <button 
                    onClick={() => setDisplayedProducts(prev => prev + PRODUCTS_PER_PAGE)}
                    className="px-8 py-3 bg-[#efece9] border-2 border-navy text-navy font-slab font-semibold rounded-full hover:bg-navy hover:text-parchment transition-all duration-300"
                  >
                    Load More Products ({filteredProducts.length - displayedProducts} remaining)
                  </button>
                </div>
              )}
            </>
          )}
        </main>
      </div>

      <OrnamentalDivider className="mb-12 mt-12" bgColor="bg-[#efece9]" />
      <div className="h-1 bg-navy"></div>
      <FooterPRD />
    </div>
  );
};

export default CollectionsPage;