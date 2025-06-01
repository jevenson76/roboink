import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductCardPRDProps {
  id: number;
  title: string;
  price: number;
  image: string;
  rating?: number;
  reviewCount?: number;
  isNew?: boolean;
}

const ProductCardPRD: React.FC<ProductCardPRDProps> = ({ id, title, price, image, rating, reviewCount, isNew }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Add default size M when adding from product card
    addToCart({
      id: id.toString(),
      title,
      price,
      image,
      size: 'M',
      quantity: 1
    });
  };
  return (
    <div 
      className="group product-card-enhanced bg-parchment border border-navy rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full relative"
      data-product-id={id}
      data-product-title={title}
      data-product-price={price}
      data-shopify-product="true"
    >
      {/* New Badge */}
      {isNew && (
        <div className="absolute top-3 left-3 z-20">
          <div className="relative">
            <div className="bg-gradient-to-r from-brass to-copper text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg uppercase tracking-wider animate-pulse-slow">
              New
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-brass to-copper rounded-full blur-sm opacity-50"></div>
          </div>
        </div>
      )}
      
      {/* Gradient overlay on hover - bottom to top */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/20 via-navy/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
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
          <p className="text-2xl font-slab font-bold text-navy price-tag">
            ${price.toFixed(2)}
          </p>
          
          <button 
            onClick={handleAddToCart}
            className="p-2.5 bg-parchment border-2 border-navy rounded-full text-navy hover:bg-navy hover:text-parchment hover:scale-105 transition-all duration-300 group/btn flex items-center justify-center"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardPRD;