import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Cog } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-deep-navy border-t-2 border-brass-gold">
      {/* Steam pipes decoration */}
      <div className="relative h-8 bg-warm-brown/20 overflow-hidden">
        <div className="absolute inset-0 flex justify-around items-center">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="h-2 bg-brass-gold rounded-full" style={{ width: `${Math.random() * 3 + 1}%` }}></div>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and about */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Cog className="h-8 w-8 text-brass-gold" />
              <span className="ml-2 text-xl font-bold text-creamy-ivory">RoboInkTees</span>
            </div>
            <p className="text-creamy-ivory/60 mb-4">
              Where Victorian Engineering Meets AI Design. Timeless style, machine-made.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brass-gold hover:text-creamy-ivory transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-brass-gold hover:text-creamy-ivory transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-brass-gold hover:text-creamy-ivory transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-creamy-ivory font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-creamy-ivory/60 hover:text-brass-gold transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/collections" className="text-creamy-ivory/60 hover:text-brass-gold transition-colors duration-300">Shop</Link>
              </li>
              <li>
                <Link to="/about" className="text-creamy-ivory/60 hover:text-brass-gold transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-creamy-ivory/60 hover:text-brass-gold transition-colors duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Customer service */}
          <div>
            <h3 className="text-creamy-ivory font-bold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-creamy-ivory/60 hover:text-brass-gold transition-colors duration-300">FAQ</Link>
              </li>
              <li>
                <Link to="/faq" className="text-creamy-ivory/60 hover:text-brass-gold transition-colors duration-300">Shipping & Returns</Link>
              </li>
              <li>
                <a href="#" className="text-creamy-ivory/60 hover:text-brass-gold transition-colors duration-300">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-creamy-ivory/60 hover:text-brass-gold transition-colors duration-300">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-creamy-ivory font-bold text-lg mb-4">Join Our Newsletter</h3>
            <p className="text-creamy-ivory/60 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 bg-warm-brown/20 text-creamy-ivory border border-warm-brown/40 rounded-l focus:outline-none focus:border-brass-gold"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-brass-gold text-deep-navy rounded-r hover:bg-copper transition-colors duration-300 flex items-center"
              >
                <Cog className="h-5 w-5 mr-1 animate-spin-slow" />
                <span>Join</span>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-warm-brown/40 flex flex-col md:flex-row justify-between items-center">
          <p className="text-creamy-ivory/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} RoboInkTees. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-creamy-ivory/60 hover:text-brass-gold text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-creamy-ivory/60 hover:text-brass-gold text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-creamy-ivory/60 hover:text-brass-gold text-sm transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;