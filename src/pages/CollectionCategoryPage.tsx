import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import NavbarPRD from '../components/NavbarPRD';
import FooterPRD from '../components/FooterPRD';
import ProductCardPRD from '../components/ProductCardPRD';
import OrnamentalDivider from '../components/OrnamentalDivider';
import FilterSidebar from '../components/FilterSidebar';
import { useFilter } from '../context/FilterContext';
import { products } from '../data/products';
import { productTypes } from '../data/productTypes';
import { ChevronRight, Home } from 'lucide-react';

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
  const { selectedProductTypes, sortBy, setSortBy } = useFilter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
  
  // Apply selected product type filters
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

  return (
    <div className="min-h-screen bg-[#efece9] animate-fade-in-from-top">
      <NavbarPRD />
      
      {/* Hero Section */}
      <section className="bg-[#efece9] py-8 text-center">
        <h1 className="text-5xl font-slab font-bold text-navy mb-2 drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
          RoboInk Handmade {categoryInfo.name}
        </h1>
        <p className="text-xl text-[#800020] font-slab font-bold max-w-3xl mx-auto">
          Explore our collection of handcrafted {categoryInfo.name.toLowerCase()}
        </p>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center text-sm text-navy/60">
          <Link to="/" className="hover:text-navy flex items-center">
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link to="/collections" className="hover:text-navy">
            Collections
          </Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-navy font-semibold">{categoryInfo.name}</span>
        </nav>
      </div>

      <FilterSidebar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 ml-80">
        <div className="w-full">
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
        </div>
      </main>

      <OrnamentalDivider className="mb-12 mt-12" bgColor="bg-[#efece9]" />
      <div className="h-1 bg-navy"></div>
      <FooterPRD />
    </div>
  );
};

export default CollectionCategoryPage;