import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, User } from 'lucide-react';
import logo from '../assets/Logo.png';
import { categories } from '../data/categories';
import { productTypes } from '../data/productTypes';
import { useCart } from '../context/CartContext';
import { useFilter } from '../context/FilterContext';

const RobustNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const { cartCount } = useCart();
  const { clearAllFilters } = useFilter();
  const navigate = useNavigate();

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms delay before closing
    setDropdownTimeout(timeout);
  };

  const navItems = [
    { label: 'New Arrivals', path: '/new-arrivals' },
    { 
      label: 'Product Types', 
      path: '/collections',
      dropdown: Object.entries(productTypes).map(([key, category]) => ({
        label: category.name,
        path: `/collections/${key.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '')}`
      }))
    },
    { 
      label: 'Collections', 
      path: '/collections',
      dropdown: categories.map(category => ({
        label: category.name,
        path: category.id === 'custom-requests' 
          ? '/custom-requests' 
          : `/collections?category=${category.id}`
      }))
    },
    { label: 'Sale', path: '/sale' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 border-b-4 border-copper bg-gradient-to-b from-parchment to-parchment/95 shadow-lg backdrop-blur-sm">
      <div className="mx-auto max-w-7xl">
        <div className="flex h-24 items-center px-4 sm:px-6 lg:px-8">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 mr-auto">
            <img 
              src={logo} 
              alt="RoboInk Tees" 
              className="h-24 w-auto" 
            />
            <span className="text-4xl font-body font-black text-brass tracking-wide" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3), 1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
              RoboInk Tees
            </span>
          </Link>

          {/* Navigation Links - All in one flex container */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.path ? (
                  item.dropdown ? (
                    <div 
                      className="group"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        to={item.path}
                        className="font-body text-lg text-navy transition-all hover:text-brass py-2"
                      >
                        {item.label}
                      </Link>
                      
                      {activeDropdown === item.label && (
                        <div className="absolute left-0 top-full -mt-1 pt-3">
                          <div className="w-72 rounded-lg border-2 border-brass bg-parchment py-2 shadow-2xl dropdown-steampunk">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={subItem.path}
                              onClick={() => {
                                // Clear filters when navigating to product type pages
                                if (item.label === 'Product Types') {
                                  clearAllFilters();
                                }
                              }}
                              className="block px-4 py-3 font-body text-navy transition-all hover:bg-brass/10 hover:text-brass hover:pl-6"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="font-body text-lg text-navy transition-all hover:text-brass"
                    >
                      {item.label}
                    </Link>
                  )
                ) : (
                  <button
                    onClick={item.action}
                    className="font-body text-lg text-navy transition-all hover:text-brass"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
            {/* Search Section */}
            <div className="relative">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="flex items-center justify-center rounded-full p-2 text-navy transition-all hover:bg-brass/10 hover:text-brass"
              >
                <Search className="h-6 w-6" />
              </button>
              
              {/* Pill-shaped Search Box */}
              {isSearchOpen && (
                <div className="absolute right-0 mt-2 z-50">
                  <div 
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm"
                    onClick={() => setIsSearchOpen(false)}
                  />
                  <div className="relative bg-parchment border-2 border-brass rounded-full px-6 py-3 shadow-xl animate-fade-in">
                    <form 
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (searchQuery.trim()) {
                          navigate(`/collections?search=${encodeURIComponent(searchQuery)}`);
                          setIsSearchOpen(false);
                          setSearchQuery('');
                        }
                      }}
                      className="flex items-center gap-3 min-w-[300px]"
                    >
                      <Search className="h-5 w-5 text-brass" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search for designs..."
                        className="flex-1 bg-transparent outline-none font-body text-navy placeholder-navy/50"
                        autoFocus
                      />
                      <button 
                        type="submit"
                        className="text-brass hover:text-copper transition-colors font-body"
                      >
                        Search
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
            
            <Link 
              to="/cart" 
              className="flex items-center justify-center relative rounded-full p-2 text-navy transition-all hover:bg-brass/10 hover:text-brass"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-brass text-xs font-bold text-parchment shadow-md">
                  {cartCount}
                </span>
              )}
            </Link>
            
            {/* Account */}
            <Link 
              to="/account" 
              className="flex items-center justify-center rounded-full p-2 text-navy transition-all hover:bg-brass/10 hover:text-brass"
            >
              <User className="h-6 w-6" />
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex items-center justify-center rounded-full p-2 text-navy transition-all hover:bg-brass/10 hover:text-brass ml-4"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t-2 border-brass bg-parchment">
          <div className="px-2 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.path ? (
                  item.dropdown ? (
                    <>
                      <Link
                        to={item.path}
                        className="block px-4 py-3 font-body text-lg text-navy transition-all hover:bg-brass/10 hover:text-brass rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                      <div className="ml-4 mt-2 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.path}
                            className="block px-4 py-2 font-body text-base text-navy/80 transition-all hover:bg-brass/10 hover:text-brass rounded-lg"
                            onClick={() => {
                              setIsMenuOpen(false);
                              // Clear filters when navigating to product type pages
                              if (item.label === 'Product Types') {
                                clearAllFilters();
                              }
                            }}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="block px-4 py-3 font-body text-lg text-navy transition-all hover:bg-brass/10 hover:text-brass rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                ) : (
                  <button
                    onClick={() => {
                      item.action();
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 font-body text-lg text-navy transition-all hover:bg-brass/10 hover:text-brass rounded-lg"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

    </nav>
  );
};

export default RobustNavbar;