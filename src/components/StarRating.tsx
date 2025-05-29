import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
  size?: 'sm' | 'md' | 'lg';
  showCount?: boolean;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ 
  rating, 
  reviewCount, 
  size = 'sm',
  showCount = true,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  // Round rating to nearest 0.5
  const roundedRating = Math.round(rating * 2) / 2;
  
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= roundedRating;
        const halfFilled = star - 0.5 === roundedRating;
        
        return (
          <div key={star} className="relative">
            <Star 
              className={`${sizeClasses[size]} ${filled ? 'text-brass-gold fill-brass-gold' : 'text-navy/30 fill-navy/30'}`}
            />
            {halfFilled && (
              <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                <Star className={`${sizeClasses[size]} text-brass-gold fill-brass-gold`} />
              </div>
            )}
          </div>
        );
      })}
      {showCount && reviewCount !== undefined && (
        <span className={`text-warm-brown ml-1 ${textSizeClasses[size]}`}>
          ({reviewCount})
        </span>
      )}
    </div>
  );
};

export default StarRating;