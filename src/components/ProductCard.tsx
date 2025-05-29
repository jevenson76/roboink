import React from 'react';
import { ShoppingCart, Heart, Settings } from 'lucide-react';
import BrassButton from './BrassButton';
import StarRating from './StarRating';

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  rating?: number;
  reviewCount?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image, rating, reviewCount }) => {
  return (
    <div className="group relative transform transition-all duration-500 hover:-translate-y-2">
      {/* Card background with brass frame effect */}
      <div className="bg-gradient-to-b from-brass-gold to-warm-brown p-1 rounded-lg shadow-2xl overflow-hidden">
        <div className="bg-creamy-ivory bg-opacity-90 rounded-[0.3rem] overflow-hidden relative">
          {/* Rivets in corners */}
          <div className="absolute top-1 left-1 w-3 h-3 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 border border-gray-500 shadow-inner"></div>
          <div className="absolute top-1 right-1 w-3 h-3 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 border border-gray-500 shadow-inner"></div>
          <div className="absolute bottom-1 left-1 w-3 h-3 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 border border-gray-500 shadow-inner"></div>
          <div className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 border border-gray-500 shadow-inner"></div>
          
          {/* Product image */}
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-warm-brown bg-opacity-10">
            <img
              src={image}
              alt={title}
              className="h-60 w-full object-cover object-center transition-all duration-500 group-hover:scale-105"
            />
            {/* Overlay with gear effect on hover */}
            <div className="absolute inset-0 bg-deep-navy bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Settings className="w-20 h-20 text-brass-gold animate-gear-spin" />
              </div>
            </div>
            {/* Wishlist button */}
            <button className="absolute top-2 right-2 p-2 rounded-full bg-deep-navy/70 backdrop-blur-sm text-creamy-ivory hover:text-brass-gold transition-all duration-300 hover:bg-deep-navy/90 shadow-gear">
              <Heart className="h-5 w-5" />
            </button>
          </div>
          
          {/* Product info */}
          <div className="p-4">
            <h3 className="text-deep-navy font-bold text-lg mb-2">{title}</h3>
            {rating && (
              <StarRating 
                rating={rating} 
                reviewCount={reviewCount} 
                size="sm" 
                className="mb-2"
              />
            )}
            <div className="flex justify-between items-center">
              <p className="text-warm-brown font-bold">${price.toFixed(2)}</p>
              <BrassButton className="text-sm py-2 px-4" variant="primary">
                <ShoppingCart className="inline h-4 w-4 mr-1" />
                Add
              </BrassButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;