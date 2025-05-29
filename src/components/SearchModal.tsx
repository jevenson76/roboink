import React, { useState, useEffect } from 'react';
import { X, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { categories } from '../data/categories';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(products);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults(products.slice(0, 6)); // Show first 6 products when no search
    } else {
      const filtered = products.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
        categories.find(cat => cat.id === product.category)?.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filtered);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="relative min-h-full flex items-start justify-center p-4 pt-20">
        <div className="relative bg-parchment border-2 border-navy rounded-lg w-full max-w-3xl shadow-xl">
          {/* Header */}
          <div className="sticky top-0 bg-parchment border-b border-navy p-6 rounded-t-lg">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-navy hover:text-navy/80 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="flex items-center gap-3">
              <Search className="w-6 h-6 text-navy" />
              <input
                type="text"
                placeholder="Search for robots, vehicles, skulls..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && searchTerm.trim()) {
                    navigate(`/collections?search=${encodeURIComponent(searchTerm)}`);
                    onClose();
                  }
                }}
                className="flex-1 text-xl font-slab bg-transparent border-none outline-none text-navy placeholder-navy/50"
                autoFocus
              />
            </div>
          </div>

          {/* Results */}
          <div className="p-6 max-h-[60vh] overflow-y-auto">
            {searchResults.length === 0 ? (
              <p className="text-center text-navy/60 font-slab text-lg py-8">
                No products found matching "{searchTerm}"
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {searchResults.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    onClick={onClose}
                    className="flex gap-4 p-4 border border-navy/20 rounded-lg hover:bg-[#f2d19e] transition-colors"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-24 h-24 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-slab font-bold text-navy mb-1">{product.title}</h3>
                      <p className="text-sm text-navy/70 mb-2 line-clamp-2">{product.description}</p>
                      <p className="font-slab font-bold text-[#B87333]">${product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {searchTerm && searchResults.length > 0 && (
            <div className="border-t border-navy p-4 text-center">
              <Link
                to={`/collections?search=${encodeURIComponent(searchTerm)}`}
                onClick={onClose}
                className="text-navy font-slab font-semibold hover:underline"
              >
                View all {searchResults.length} results →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;