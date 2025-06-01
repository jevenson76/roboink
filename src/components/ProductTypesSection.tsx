import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Package, Coffee, Home, Smartphone, Heart } from 'lucide-react';
import { products } from '../data/products';
import { productTypes } from '../data/productTypes';

interface ProductTypesSectionProps {
  enableSteampunk?: boolean;
}

const ProductTypesSection: React.FC<ProductTypesSectionProps> = ({ enableSteampunk = false }) => {
  const categoryData = [
    {
      key: 'apparel',
      name: 'Apparel',
      icon: ShoppingBag,
      link: '/collections/apparel',
      color: 'bg-navy',
      hoverColor: 'hover:bg-navy/90'
    },
    {
      key: 'bags',
      name: 'Bags',
      icon: Package,
      link: '/collections/bags',
      color: 'bg-[#8B4513]',
      hoverColor: 'hover:bg-[#8B4513]/90'
    },
    {
      key: 'drinkware',
      name: 'Drinkware',
      icon: Coffee,
      link: '/collections/drinkware',
      color: 'bg-[#CD7F32]',
      hoverColor: 'hover:bg-[#CD7F32]/90'
    },
    {
      key: 'homeDecor',
      name: 'Home Decor',
      icon: Home,
      link: '/collections/home-decor',
      color: 'bg-[#B87333]',
      hoverColor: 'hover:bg-[#B87333]/90'
    },
    {
      key: 'accessories',
      name: 'Accessories',
      icon: Smartphone,
      link: '/collections/accessories',
      color: 'bg-[#5a7a7a]',
      hoverColor: 'hover:bg-[#5a7a7a]/90'
    },
    {
      key: 'petItems',
      name: 'Pet Items',
      icon: Heart,
      link: '/collections/pet-items',
      color: 'bg-[#800020]',
      hoverColor: 'hover:bg-[#800020]/90'
    }
  ];

  // Calculate item counts for each category
  const getCategoryItemCount = (categoryKey: string) => {
    const categoryTypes = productTypes[categoryKey as keyof typeof productTypes];
    if (!categoryTypes) return 0;
    
    const typeIds = categoryTypes.items.map(item => item.id);
    return products.filter(p => typeIds.includes(p.productType) && p.id !== 999).length;
  };

  return (
    <section className="py-16 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={enableSteampunk
            ? "steampunk-heading steampunk-heading-lg text-center mb-4"
            : "text-4xl md:text-5xl font-slab font-bold text-navy mb-4"
          } style={enableSteampunk ? {} : { textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
            Shop by Product Type
          </h2>
          <p className="text-lg text-[#800020] font-slab font-bold max-w-3xl mx-auto">
            Find the perfect canvas for your steampunk style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryData.map((category) => {
            const Icon = category.icon;
            const itemCount = getCategoryItemCount(category.key);
            
            return (
              <Link
                key={category.key}
                to={category.link}
                className="group relative bg-white border-2 border-navy rounded-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-20 h-20 ${category.color} rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-slab font-bold text-navy mb-2">
                    {category.name}
                  </h3>
                  
                  <p className="text-navy/60 mb-4">
                    {itemCount} {itemCount === 1 ? 'Item' : 'Items'}
                  </p>
                  
                  <div className={`px-6 py-2 ${category.color} text-white rounded-full font-slab font-semibold transition-all duration-300 ${category.hoverColor}`}>
                    Shop Now
                  </div>
                </div>
                
                {/* Decorative corner element */}
                <div className="absolute top-4 right-4 w-8 h-8 opacity-10">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="text-navy">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-8c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"/>
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductTypesSection;