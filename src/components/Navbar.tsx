import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import logo from '../assets/Logo.png';
import SteampunkNavButton from './SteampunkNavButton';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();
  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-brass-gold via-copper to-brass-gold border-b-4 border-warm-brown shadow-2xl backdrop-blur-sm">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-36 flex items-center justify-between">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center space-x-4">
          <img
            src={logo}
            alt="RoboInkTees"
            className="h-16 w-auto"
          />
          <span className="text-deep-navy text-4xl lg:text-5xl font-bold hover:text-5xl lg:hover:text-6xl hover:text-copper transition-all duration-300">
            RoboInkTees
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-4">
          <SteampunkNavButton
            to="/"
            className="w-20 h-20"
          >
            Home
          </SteampunkNavButton>
          <SteampunkNavButton
            to="/collections"
            className="w-20 h-20"
          >
            Collections
          </SteampunkNavButton>
          <SteampunkNavButton
            to="/about"
            className="w-20 h-20"
          >
            About
          </SteampunkNavButton>
          <SteampunkNavButton
            to="/contact"
            className="w-20 h-20"
          >
            Contact
          </SteampunkNavButton>
        </div>

        {/* Cart & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <Link
            to="/cart"
            className="relative group text-deep-navy hover:text-warm-brown p-3 transition-all duration-300"
          >
            <ShoppingCart className="w-8 h-8 group-hover:animate-pulse" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2.5 py-1 text-sm font-bold text-creamy-ivory bg-gradient-to-r from-warm-brown to-brass-gold rounded-full shadow-gear animate-pulse-slow">
                {cartItemCount}
              </span>
            )}
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-deep-navy hover:text-warm-brown p-3 transition-all duration-300 group"
          >
            {isMenuOpen ? (
              <X className="w-8 h-8 animate-gear-spin" />
            ) : (
              <Menu className="w-8 h-8 group-hover:animate-gear-spin" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-creamy-ivory border-t-2 border-copper">
          <div className="px-4 py-3 space-y-1">
            <Link
              to="/"
              className="block px-4 py-4 text-2xl lg:text-3xl text-deep-navy hover:text-copper hover:text-3xl lg:hover:text-4xl hover:font-bold transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/collections"
              className="block px-4 py-4 text-2xl lg:text-3xl text-deep-navy hover:text-copper hover:text-3xl lg:hover:text-4xl hover:font-bold transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Collections
            </Link>
            <Link
              to="/about"
              className="block px-4 py-4 text-2xl lg:text-3xl text-deep-navy hover:text-copper hover:text-3xl lg:hover:text-4xl hover:font-bold transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-4 text-2xl lg:text-3xl text-deep-navy hover:text-copper hover:text-3xl lg:hover:text-4xl hover:font-bold transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
