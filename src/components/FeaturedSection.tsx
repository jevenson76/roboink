import React from 'react';
import { Link } from 'react-router-dom';
import ProductCardPRD from './ProductCardPRD';
import { products } from '../data/products';

const FeaturedSection: React.FC = () => {
  // Get 3 apparel items (t-shirt, hoodie, beanie)
  const apparelProducts = [
    products.find(p => p.id === 1), // Victorian Clockwork Automaton - T-shirt
    products.find(p => p.id === 2), // Steampunk Airship Navigator - Hoodie
    products.find(p => p.id === 23) // Gear Head Beanie
  ].filter(Boolean);

  // Get one item from each other category
  const otherCategoryProducts = [
    products.find(p => p.id === 6), // Retro Future Vision - Tote Bag (Bags)
    products.find(p => p.id === 12), // Steam Bot Water Bottle (Drinkware)
    products.find(p => p.id === 27), // Gear Wolf Blanket (Home Decor)
    products.find(p => p.id === 7), // Cogwheel Skull Design - Phone Case (Accessories)
    products.find(p => p.id === 26) // Brass Bird Pet Bandana (Pet Items)
  ].filter(Boolean);

  const featuredProducts = [...apparelProducts, ...otherCategoryProducts];

  return (
    <section className="py-6 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-slab font-bold text-navy text-center mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
          Featured Designs
        </h2>
        
        <p className="text-lg text-[#800020] font-slab font-bold text-center mb-12 max-w-3xl mx-auto">
          Discover our most popular steampunk creations, ready to wear
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map(product => product && (
            <ProductCardPRD key={product.id} {...product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link 
            to="/collections" 
            className="inline-block px-8 py-3 bg-parchment border-2 border-navy text-navy font-slab font-semibold rounded-full transition-all duration-300 hover:bg-navy hover:text-parchment"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;