import React, { useEffect } from 'react';
import RobustNavbar from '../components/RobustNavbar';
import FooterPRD from '../components/FooterPRD';
import ProductCardPRD from '../components/ProductCardPRD';
import OrnamentalDivider from '../components/OrnamentalDivider';
import SteampunkGearDivider from '../components/SteampunkGearDivider';
import { products } from '../data/products';
import { Sparkles } from 'lucide-react';

const NewArrivalsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get the 12 most recent products (excluding custom product)
  const newProducts = products
    .filter(p => p.id !== 999)
    .sort((a, b) => b.id - a.id)
    .slice(0, 12);

  return (
    <div className="min-h-screen bg-[#efece9] animate-fade-in-from-top">
      <RobustNavbar />
      
      {/* Hero Section - Professional Style */}
      <section className="bg-gradient-to-br from-navy via-navy/95 to-brass/20 py-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-brass/5 to-transparent"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-brass/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-brass" />
              <span className="text-sm font-body text-brass uppercase tracking-wide">Just Added</span>
            </div>
            
            <h1 className="text-6xl sm:text-7xl font-slab text-parchment mb-3">
              New Arrivals
            </h1>
            
            <p className="text-2xl font-body text-parchment/80">
              Fresh designs from our steampunk collection
            </p>
          </div>
        </div>
      </section>

      {/* Steampunk Gear Divider */}
      <SteampunkGearDivider className="my-8" />

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {newProducts.map(product => (
            <ProductCardPRD key={product.id} {...product} isNew={true} />
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="/collections"
            className="inline-block px-8 py-3 bg-gradient-to-r from-brass to-copper text-parchment font-head text-lg rounded-full hover:from-copper hover:to-brass transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Products
          </a>
        </div>
      </section>

      <OrnamentalDivider className="mt-16 mb-12" bgColor="bg-[#efece9]" />
      <div className="h-1 bg-navy"></div>
      <FooterPRD />
    </div>
  );
};

export default NewArrivalsPage;