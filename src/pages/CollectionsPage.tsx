import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import NavbarPRD from '../components/NavbarPRD';
import FooterPRD from '../components/FooterPRD';
import ProductCardPRD from '../components/ProductCardPRD';
import OrnamentalDivider from '../components/OrnamentalDivider';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { productTypes } from '../data/productTypes';
import { ChevronDown } from 'lucide-react';

const CollectionsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  const searchQuery = searchParams.get('search');
  const productTypeFromUrl = searchParams.get('productType');
  const typeFromUrl = searchParams.get('type'); // For product type categories
  const [selectedCategories, setSelectedCategories] = useState<string[]>(categoryFromUrl ? [categoryFromUrl] : []);
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>(productTypeFromUrl ? [productTypeFromUrl] : []);
  const [expandedProductTypes, setExpandedProductTypes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('featured');
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
  }, [categoryFromUrl, productTypeFromUrl, typeFromUrl]);

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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border-2 border-navy rounded-lg p-6 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
              <h3 className="text-xl font-slab font-bold text-navy mb-6">Filters</h3>
              
              {/* Design Categories */}
              <div className="mb-8">
                <h4 className="font-semibold text-navy mb-4">Design Categories</h4>
                <div className="space-y-2">
                  {['robots', 'vehicles', 'clockwork-creatures', 'gadgetry-gizmos', 'typographic-treasures', 'victorian-vanguard', 'retro-futurism', 'skulls', 'custom-requests'].map((cat) => (
                    <label key={cat} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value={cat}
                        checked={selectedCategories.includes(cat)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedCategories([...selectedCategories, cat]);
                          } else {
                            setSelectedCategories(selectedCategories.filter(c => c !== cat));
                          }
                        }}
                        className="mr-3 text-navy rounded"
                      />
                      <span className="text-navy/80">
                        {cat.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Product Types */}
              <div>
                {Object.entries(productTypes).map(([key, category]) => (
                  <div key={key} className="mb-4">
                    <div className="flex items-center justify-between w-full mb-2">
                      <Link 
                        to={`/collections/${key.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '')}`}
                        className="font-semibold text-navy hover:text-navy/80 underline flex-grow"
                      >
                        {category.name}
                      </Link>
                      <button
                        onClick={() => {
                          if (expandedProductTypes.includes(key)) {
                            setExpandedProductTypes(expandedProductTypes.filter(k => k !== key));
                          } else {
                            setExpandedProductTypes([...expandedProductTypes, key]);
                          }
                        }}
                        className="ml-2 p-1"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform ${expandedProductTypes.includes(key) ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                    {expandedProductTypes.includes(key) && (
                      <div className="space-y-2 ml-4">
                        {category.items.map((item) => (
                          <label key={item.id} className="flex items-center cursor-pointer">
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
            </div>
          </div>

          {/* Products Section */}
          <div className="lg:col-span-3">
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
                  className="px-4 py-2 border-2 border-navy rounded-lg bg-[#efece9] text-navy focus:outline-none focus:ring-2 focus:ring-navy/20"
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
          </div>
        </div>
      </main>

      <OrnamentalDivider className="mb-12 mt-12" bgColor="bg-[#efece9]" />
      <div className="h-1 bg-navy"></div>
      <FooterPRD />
    </div>
  );
};

export default CollectionsPage;