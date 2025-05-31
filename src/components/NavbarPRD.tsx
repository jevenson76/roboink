import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, ChevronDown, Search } from 'lucide-react';
import logo from '../assets/Logo.png';
import { categories } from '../data/categories';
import { productTypes } from '../data/productTypes';
import SearchModal from './SearchModal';
import { useCart } from '../context/CartContext';

const NavbarPRD: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const { cartCount } = useCart();

  return (
    <>
      <nav className="sticky top-0 z-50 bg-parchment border-b border-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo + Brand */}
            <Link to="/" className="flex items-center space-x-4">
              <img
                src={logo}
                alt="RoboInk Tees"
                className="h-24 w-auto"
              />
              <span 
                className="font-slab font-bold"
                style={{ 
                  fontSize: '3.5rem',
                  color: '#8B4513',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3), 3px 3px 6px rgba(0,0,0,0.15)',
                  letterSpacing: '0.02em',
                  fontWeight: '700'
                }}
              >
                RoboInk Tees
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <Link
                to="/"
                className="relative text-navy font-slab text-xl font-semibold hover:text-navy/80 transition-colors group"
              >
                Featured
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              {/* Product Types Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => {
                  if (dropdownTimeout) clearTimeout(dropdownTimeout);
                  setActiveDropdown('productTypes');
                }}
                onMouseLeave={() => {
                  const timeout = setTimeout(() => setActiveDropdown(null), 300);
                  setDropdownTimeout(timeout);
                }}
              >
                <Link
                  to="/collections"
                  className="relative text-navy font-slab text-xl font-semibold hover:text-navy/80 transition-colors group flex items-center py-2"
                >
                  Product Types
                  <ChevronDown className="ml-1 w-4 h-4" />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy transition-all duration-300 group-hover:w-full"></span>
                </Link>
                
                {/* Dropdown Menu */}
                {activeDropdown === 'productTypes' && (
                  <div 
                    className="absolute top-full left-0 -mt-1 pt-3 w-auto min-w-[180px] bg-parchment border-2 border-navy rounded-lg shadow-xl p-2"
                  >
                    {Object.entries(productTypes).map(([key, category]) => (
                      <Link
                        key={key}
                        to={`/collections/${key.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '')}`}
                        className="block py-2 px-3 text-navy hover:text-[#800020] hover:bg-navy/5 rounded transition-all duration-200 group whitespace-nowrap"
                      >
                        <span className="font-slab font-semibold text-base relative">
                          {category.name}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#800020] transition-all duration-300 group-hover:w-full"></span>
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Collections Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => {
                  if (dropdownTimeout) clearTimeout(dropdownTimeout);
                  setActiveDropdown('collections');
                }}
                onMouseLeave={() => {
                  const timeout = setTimeout(() => setActiveDropdown(null), 300);
                  setDropdownTimeout(timeout);
                }}
              >
                <Link
                  to="/collections"
                  className="relative text-navy font-slab text-xl font-semibold hover:text-navy/80 transition-colors group flex items-center py-2"
                >
                  Collections
                  <ChevronDown className="ml-1 w-4 h-4" />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy transition-all duration-300 group-hover:w-full"></span>
                </Link>
                
                {/* Dropdown Menu */}
                {activeDropdown === 'collections' && (
                  <div 
                    className="absolute top-full left-0 -mt-1 pt-3 w-auto bg-parchment border-2 border-navy rounded-lg shadow-xl p-4"
                  >
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        to={category.id === 'custom-requests' ? '/custom-requests' : `/collections?category=${category.id}`}
                        className="block py-2 px-3 -mx-2 text-navy hover:text-[#800020] hover:bg-navy/5 rounded transition-all duration-200 group whitespace-nowrap"
                      >
                        <span className="font-slab font-semibold text-base relative">
                          {category.name}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#800020] transition-all duration-300 group-hover:w-full"></span>
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link
                to="/faq"
                className="relative text-navy font-slab text-xl font-semibold hover:text-navy/80 transition-colors group"
              >
                FAQ
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              <Link
                to="/contact"
                className="relative text-navy font-slab text-xl font-semibold hover:text-navy/80 transition-colors group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>

            {/* Search, Cart & Mobile Menu */}
            <div className="flex items-center space-x-4 mt-3.5">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-navy hover:text-navy/80 transition-colors"
              >
                <Search className="w-6 h-6" />
              </button>
              
              <Link to="/cart" className="relative p-2 text-navy hover:text-navy/80 transition-colors">
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold text-parchment bg-navy rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-navy hover:text-navy/80 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-parchment border-t border-navy max-h-[70vh] overflow-y-auto">
            <div className="px-4 py-4 space-y-2">
              <Link
                to="/"
                className="block px-4 py-3 text-navy font-slab text-xl font-semibold hover:bg-navy/10 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Featured
              </Link>
              
              {/* Product Types */}
              <div>
                <Link
                  to="/collections"
                  className="block px-4 py-3 text-navy font-slab text-xl font-semibold hover:bg-navy/10 rounded transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Product Types
                </Link>
                <div className="ml-6 space-y-1">
                  {Object.entries(productTypes).map(([key, category]) => (
                    <Link
                      key={key}
                      to={`/collections/${key.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '')}`}
                      className="block px-4 py-2 text-navy/80 hover:text-[#800020] transition-colors text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Collections */}
              <div>
                <Link
                  to="/collections"
                  className="block px-4 py-3 text-navy font-slab text-xl font-semibold hover:bg-navy/10 rounded transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Collections
                </Link>
                <div className="ml-6 space-y-1">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/collections?category=${category.id}`}
                      className="block px-4 py-2 text-navy/80 hover:text-[#800020] transition-colors text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link
                to="/faq"
                className="block px-4 py-3 text-navy font-slab text-xl font-semibold hover:bg-navy/10 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSearchOpen(true);
                }}
                className="w-full px-4 py-3 text-navy font-slab text-xl font-semibold hover:bg-navy/10 rounded transition-colors text-left"
              >
                Search
              </button>
            </div>
          </div>
        )}
      </nav>
      
      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default NavbarPRD;