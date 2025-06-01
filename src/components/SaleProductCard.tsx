import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';

interface SaleProductCardProps {
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  image: string;
  rating?: number;
  reviewCount?: number;
}

const SaleProductCard: React.FC<SaleProductCardProps> = ({ 
  id, 
  title, 
  price, 
  originalPrice,
  discountPercentage,
  image, 
  rating, 
  reviewCount 
}) => {
  return (
    <div className="group product-card-enhanced bg-parchment border border-navy rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full relative">
      {/* Sale Badge */}
      <div className="absolute top-4 left-4 z-10 bg-[#800020] text-parchment px-3 py-1 rounded-full font-head text-sm animate-pulse">
        -{discountPercentage}%
      </div>
      
      <Link to={`/product/${id}`} className="block flex-1 flex flex-col">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden bg-parchment image-container">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover product-image transition-transform duration-600"
          />
        </div>
        
        {/* Product Info */}
        <div className="p-4 border-t border-navy flex-1 flex flex-col">
          <h3 className="text-lg font-slab font-semibold text-navy mb-2 line-clamp-2 flex-1">
            {title}
          </h3>
        
          {/* Star Rating */}
          {rating && (
            <div className="flex items-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((star) => {
                const filled = star <= Math.round(rating);
                return (
                  <Star 
                    key={star}
                    className={`w-4 h-4 ${filled ? 'text-[#800020] fill-[#800020]' : 'text-navy/30 fill-navy/30'}`}
                  />
                );
              })}
              {reviewCount !== undefined && (
                <span className="text-sm text-navy/60 ml-1">
                  ({reviewCount})
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
      
      {/* Price and Cart Button - Always at bottom */}
      <div className="px-4 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-gray-500 line-through font-body text-sm">
              ${originalPrice.toFixed(2)}
            </span>
            <p className="text-2xl font-slab font-bold text-[#800020] price-tag">
              ${price.toFixed(2)}
            </p>
          </div>
          
          <button className="p-3 bg-parchment border-2 border-navy rounded-full text-navy hover:bg-navy hover:text-parchment hover:scale-110 transition-all duration-300 group">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaleProductCard;