import React, { useEffect, useState } from 'react';
import RobustNavbar from '../components/RobustNavbar';
import FooterPRD from '../components/FooterPRD';
import SaleProductCard from '../components/SaleProductCard';
import OrnamentalDivider from '../components/OrnamentalDivider';
import CountdownClock from '../components/CountdownClock';
import { products } from '../data/products';
import { Tag, Percent } from 'lucide-react';

const SalePage: React.FC = () => {
  const [sortBy, setSortBy] = useState('discount-high');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get featured products as "sale" items with a 20% discount
  const saleProducts = products
    .filter(p => p.id !== 999 && p.featured)
    .map(product => ({
      ...product,
      originalPrice: product.price,
      price: Math.round(product.price * 0.8 * 100) / 100, // 20% off
      discountPercentage: 20
    }));

  // Sort products based on selection
  const sortedProducts = [...saleProducts];
  switch (sortBy) {
    case 'price-low':
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    case 'discount-high':
      sortedProducts.sort((a, b) => (b.originalPrice - b.price) - (a.originalPrice - a.price));
      break;
    default:
      break;
  }

  return (
    <div className="min-h-screen bg-[#efece9] animate-fade-in-from-top">
      <RobustNavbar />
      
      {/* Hero Section - Professional Enterprise Style */}
      <section className="bg-gradient-to-br from-navy via-navy/95 to-brass/20 py-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-brass/5 to-transparent"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-brass/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Tag className="w-4 h-4 text-brass" />
              <span className="text-sm font-body text-brass uppercase tracking-wide">Limited Time Offer</span>
            </div>
            
            <h1 className="text-6xl sm:text-7xl font-slab text-parchment mb-3">
              Sale Items
            </h1>
            
            <p className="text-2xl font-body text-parchment/80 mb-8">
              Save up to 20% on featured steampunk designs
            </p>
            
            {/* Countdown Clock */}
            <div 
              className="mt-8"
              data-shopify-countdown="true"
              data-countdown-end="next-sunday"
            >
              <CountdownClock />
            </div>
          </div>
        </div>
      </section>

      <OrnamentalDivider className="my-12" bgColor="bg-[#efece9]" />

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap items-center justify-between mb-8">
          <h2 className="text-3xl font-head text-navy">
            Sale Items ({saleProducts.length})
          </h2>
          
          <div className="flex items-center gap-4">
            <span className="font-body text-navy">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border-2 border-navy rounded-lg bg-parchment text-navy focus:outline-none focus:ring-2 focus:ring-brass"
            >
              <option value="discount-high">Biggest Savings</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map(product => (
            <SaleProductCard key={product.id} {...product} />
          ))}
        </div>

        {saleProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl font-body text-navy mb-6">
              No sale items available at the moment.
            </p>
            <a 
              href="/collections"
              className="inline-block px-8 py-3 bg-gradient-to-r from-brass to-copper text-parchment font-head text-lg rounded-full hover:from-copper hover:to-brass transition-all duration-300"
            >
              Shop All Products
            </a>
          </div>
        )}
      </section>

      <OrnamentalDivider className="mt-16 mb-12" bgColor="bg-[#efece9]" />
      <div className="h-1 bg-navy"></div>
      <FooterPRD />
    </div>
  );
};

export default SalePage;