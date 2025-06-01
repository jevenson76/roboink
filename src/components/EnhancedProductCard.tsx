import React, { useState, useEffect } from 'react';
import { ShoppingCart, Heart, Eye, Sparkles, TrendingUp } from 'lucide-react';

interface EnhancedProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  rating?: number;
  reviewCount?: number;
  stock?: number;
  viewCount?: number;
  customizable?: boolean;
}

const EnhancedProductCard: React.FC<EnhancedProductCardProps> = ({ 
  title, 
  price, 
  image, 
  rating = 4.5, 
  reviewCount = 0,
  stock = 10,
  viewCount = 0,
  customizable = true
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [currentViewers, setCurrentViewers] = useState(Math.floor(Math.random() * 5) + 1);
  // const [quickViewOpen, setQuickViewOpen] = useState(false);

  // Simulate real-time viewers
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentViewers(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        return Math.max(1, Math.min(8, prev + change));
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Safe number parsing for calculations
  const safePrice = Number(price) || 0;
  const safeStock = Number(stock) || 0;
  const safeViewCount = Number(viewCount) || 0;
  const safeReviewCount = Number(reviewCount) || 0;

  // Calculate urgency indicators
  const isLowStock = safeStock <= 5 && safeStock > 0;
  const isPopular = safeViewCount > 100 || safeReviewCount > 50;
  const isTrending = safeViewCount > 200;

  // Safe rating calculation
  const safeRating = Math.min(5, Math.max(0, Number(rating) || 0));

  return (
    <div 
      className="group relative transform transition-all duration-500 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Urgency badges */}
      <div className="absolute -top-2 -right-2 z-20 flex flex-col gap-1">
        {isLowStock && (
          <span className="px-2 py-1 bg-red-600 text-white text-xs font-bold rounded-full animate-pulse">
            Only {safeStock} left!
          </span>
        )}
        {isTrending && (
          <span className="px-2 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            Trending
          </span>
        )}
      </div>

      {/* Main card */}
      <div className="bg-gradient-to-b from-amber-400 to-amber-600 p-1 rounded-lg shadow-2xl overflow-hidden relative">
        {/* Steam particles animation */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute bottom-0 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-float"></div>
            <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-white/20 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-0 left-3/4 w-2 h-2 bg-white/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          </div>
        )}

        <div className="bg-stone-50 bg-opacity-95 rounded-[0.3rem] overflow-hidden relative">
          {/* Corner rivets */}
          <div className={`absolute top-1 left-1 w-3 h-3 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 border border-gray-500 shadow-inner transition-transform duration-500 ${isHovered ? 'rotate-180' : ''}`}></div>
          <div className={`absolute top-1 right-1 w-3 h-3 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 border border-gray-500 shadow-inner transition-transform duration-500 ${isHovered ? '-rotate-180' : ''}`}></div>
          <div className={`absolute bottom-1 left-1 w-3 h-3 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 border border-gray-500 shadow-inner transition-transform duration-500 ${isHovered ? '-rotate-180' : ''}`}></div>
          <div className={`absolute bottom-1 right-1 w-3 h-3 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 border border-gray-500 shadow-inner transition-transform duration-500 ${isHovered ? 'rotate-180' : ''}`}></div>
          
          {/* Product image container */}
          <div className="relative aspect-square w-full overflow-hidden bg-amber-100/20">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
              loading="lazy"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Customizable badge */}
            {customizable && (
              <div className="absolute top-2 left-2 px-3 py-1 bg-gradient-to-r from-purple-600 to-purple-800 text-white text-xs font-bold rounded-full flex items-center gap-1 shadow-lg">
                <Sparkles className="w-3 h-3" />
                AI Customizable
              </div>
            )}
            
            {/* Action buttons */}
            <div className="absolute top-2 right-2 flex flex-col gap-2">
              <button 
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 shadow-lg ${
                  isWishlisted 
                    ? 'bg-red-500 text-white' 
                    : 'bg-slate-900/70 text-stone-100 hover:text-amber-400 hover:bg-slate-900/90'
                }`}
              >
                <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
              
              <button 
                onClick={() => console.log('Quick view clicked')}
                className="p-2 rounded-full bg-slate-900/70 backdrop-blur-sm text-stone-100 hover:text-amber-400 transition-all duration-300 hover:bg-slate-900/90 shadow-lg opacity-0 group-hover:opacity-100"
              >
                <Eye className="h-5 w-5" />
              </button>
            </div>

            {/* Live viewer count */}
            {currentViewers > 2 && (
              <div className="absolute bottom-2 left-2 px-2 py-1 bg-slate-900/80 backdrop-blur-sm text-stone-100 text-xs rounded-full flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                {currentViewers} viewing now
              </div>
            )}
          </div>
          
          {/* Product info */}
          <div className="p-4">
            <h3 className="text-slate-900 font-bold text-lg mb-2 line-clamp-2 hover:text-amber-600 transition-colors cursor-pointer">
              {title}
            </h3>
            
            {/* Rating with safe rendering */}
            {safeRating > 0 && (
              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-4 h-4 ${star <= Math.round(safeRating) ? 'text-amber-500 fill-current' : 'text-gray-300'}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-slate-600">
                  ({safeReviewCount} {safeReviewCount === 1 ? 'review' : 'reviews'})
                </span>
              </div>
            )}
            
            {/* Price with safe formatting */}
            <div className="flex justify-between items-end mb-3">
              <div>
                <p className="text-2xl font-bold text-amber-600">${safePrice.toFixed(2)}</p>
                <p className="text-xs text-slate-600">
                  {safePrice < 25 ? 'Simple Item' : safePrice < 40 ? 'Standard Item' : 'Premium Item'}
                </p>
              </div>
              
              {/* Popularity indicator */}
              {isPopular && (
                <span className="text-xs text-amber-600 font-semibold">
                  🔥 Popular Choice
                </span>
              )}
            </div>
            
            {/* CTA button */}
            <button className="w-full relative overflow-hidden group/btn bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white font-bold py-3 px-4 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105">
              <span className="relative z-10 flex items-center justify-center gap-2">
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </span>
              {/* Animated overlay */}
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0% {
            opacity: 0;
            transform: translateY(0) scale(0.8);
          }
          50% {
            opacity: 0.5;
            transform: translateY(-50px) scale(1.2);
          }
          100% {
            opacity: 0;
            transform: translateY(-100px) scale(1.5);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default EnhancedProductCard;