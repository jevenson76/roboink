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
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false); // For product type categories
  
  const {
    selectedCategories,
    setSelectedCategories,
    selectedProductTypes,
    setSelectedProductTypes,
    sortBy,
    setSortBy,
  } = useFilter();
  
  const [displayedProducts, setDisplayedProducts] = useState(24); // Show 24 products initially
  const PRODUCTS_PER_PAGE = 24;

  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategories([categoryFromUrl]);
    }
    if (productTypeFromUrl) {
      setSelectedProductTypes([productTypeFromUrl]);
    }
    if (typeFromUrl && productTypes[typeFromUrl]) {
      // If a type category is selected, select all product types in that category
      const typeItems = productTypes[typeFromUrl].items.map(item => item.id);
      setSelectedProductTypes(typeItems);
    }
  }, [categoryFromUrl, productTypeFromUrl, typeFromUrl, setSelectedCategories, setSelectedProductTypes]);

  // Reset displayed products when filters change
  useEffect(() => {
    setDisplayedProducts(PRODUCTS_PER_PAGE);
  }, [selectedCategories, selectedProductTypes, searchQuery, sortBy]);


  // Filter products based on selected categories, product types, and ratings
  // Exclude custom request product from regular filtering
  let filteredProducts = [...products.filter(p => p.id !== 999)];
  
  // Apply search query filter
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
  

  // Sort products based on selected sort option
  switch (sortBy) {
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'newest':
      filteredProducts.sort((a, b) => b.id - a.id); // Using ID as a proxy for newest
      break;
    case 'rating':
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
    case 'featured':
    default:
      // Featured products first, then by ID
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
      <section className="bg-[#efece9] py-8 text-center">
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
            (selectedCategories.length > 0 || selectedProductTypes.length > 0) ? (
              <>
                {selectedCategories.length > 0 && (
                  <span>
                    {selectedCategories.map(cat => 
                      categories.find(c => c.id === cat)?.name || cat.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
                    ).join(', ')}
                  </span>
                )}
                {selectedCategories.length > 0 && selectedProductTypes.length > 0 && ' • '}
                {selectedProductTypes.length > 0 && (
                  <span>
                    {selectedProductTypes.map(type => {
                      for (const [, category] of Object.entries(productTypes)) {
                        const item = category.items.find(i => i.id === type);
                        if (item) return item.name;
                      }
                      return type;
                    }).join(', ')}
                  </span>
                )}
              </>
            ) : 
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
              <div className="mb-6 flex flex-wrap items-center gap-2">
                <span className="text-navy font-semibold">Active filters:</span>
                {selectedCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategories(selectedCategories.filter(c => c !== cat))}
                    className="px-4 py-1 bg-navy text-parchment rounded-full text-sm flex items-center hover:bg-navy/80"
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
                      className="px-4 py-1 bg-navy text-parchment rounded-full text-sm flex items-center hover:bg-navy/80"
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
                  className="text-navy/60 hover:text-navy text-sm underline"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.slice(0, displayedProducts).map(product => (
                <ProductCardPRD key={product.id} {...product} />
              ))}
              {/* Custom Request Card - Always shown in lower right */}
              {products.find(p => p.id === 999) && (
                <ProductCardPRD 
                  key={999} 
                  {...products.find(p => p.id === 999)!}
                  className="lg:col-start-3"
                />
              )}
            </div>

            {/* No Products Message */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-navy/60 text-lg">No products found matching your filters.</p>
                <button
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedProductTypes([]);
                  }}
                  className="mt-4 text-navy underline hover:no-underline"
                >
                  Clear filters
                </button>
              </div>
            )}

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
        </main>
      </div>

      <OrnamentalDivider className="mb-12 mt-12" bgColor="bg-[#efece9]" />
      <div className="h-1 bg-navy"></div>
      <FooterPRD />
    </div>
  );
};

export default CollectionsPage;