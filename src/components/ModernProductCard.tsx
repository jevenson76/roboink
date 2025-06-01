import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ModernProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  rating?: number;
  reviewCount?: number;
  featured?: boolean;
}

const ModernProductCard: React.FC<ModernProductCardProps> = ({ 
  id, 
  title, 
  price, 
  image, 
  rating = 0, 
  reviewCount = 0,
  featured = false
}) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      id,
      title,
      price,
      image,
      size: 'M' // Default size
    });
  };

  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl">
      {/* Image Container */}
      <Link to={`/product/${id}`} className="block aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-3">
            <button 
              onClick={handleAddToCart}
              className="rounded-full bg-white p-3 text-dark hover:bg-highlight hover:text-white transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
            <Link 
              to={`/product/${id}`}
              className="rounded-full bg-white p-3 text-dark hover:bg-highlight hover:text-white transition-colors"
            >
              <Eye className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </Link>
      
      {/* Product Info */}
      <div className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="text-lg font-semibold text-dark hover:text-highlight transition-colors">
            {title}
          </h3>
        </Link>
        
        {/* Rating */}
        {rating > 0 && (
          <div className="mt-1 flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-4 w-4 ${i < Math.round(rating) ? 'text-secondary' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-600">({reviewCount})</span>
          </div>
        )}
        
        {/* Price and Cart Button */}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xl font-bold text-primary">${price.toFixed(2)}</span>
          <button 
            onClick={handleAddToCart}
            className="rounded-full bg-accent p-2 text-white hover:bg-accent/90 transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-3 right-3 rounded-full bg-highlight px-3 py-1 text-xs font-bold text-white">
          Featured
        </div>
      )}
    </div>
  );
};

export default ModernProductCard;