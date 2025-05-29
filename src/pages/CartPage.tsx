import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavbarPRD from '../components/NavbarPRD';
import FooterPRD from '../components/FooterPRD';
import OrnamentalDivider from '../components/OrnamentalDivider';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleCheckout = () => {
    // Check if cart contains custom request
    const hasCustomRequest = cartItems.some(item => item.id === 999);
    if (hasCustomRequest) {
      navigate('/custom-requests');
    } else {
      // Normal checkout flow (would integrate with Shopify)
      console.log('Proceeding to normal checkout');
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#efece9] animate-fade-in-from-top">
        <NavbarPRD />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <ShoppingBag className="w-24 h-24 text-navy/30 mx-auto mb-6" />
          <h1 className="text-4xl font-slab font-bold text-navy drop-shadow-lg mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Your Cart is Empty</h1>
          <p className="text-xl text-navy/80 mb-8">
            Looks like you haven't added any steampunk treasures yet!
          </p>
          <Link
            to="/collections"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-parchment font-slab font-semibold rounded-full hover:from-[#DAA520] hover:to-[#FFD700] transition-all duration-300"
          >
            Start Shopping
          </Link>
        </main>
        <div className="h-1 bg-navy mt-auto"></div>
        <FooterPRD />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#efece9] animate-fade-in-from-top">
      <NavbarPRD />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-slab font-bold text-navy drop-shadow-lg mb-8" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white border-2 border-navy rounded-lg p-6 flex flex-col sm:flex-row gap-4">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  
                  <div className="flex-grow">
                    <h3 className="text-xl font-slab font-bold text-navy mb-2">{item.title}</h3>
                    <p className="text-navy/60 mb-4">Size: {item.size}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                          className="p-2 border border-navy rounded hover:bg-navy hover:text-parchment transition-all"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-semibold text-navy w-12 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                          className="p-2 border border-navy rounded hover:bg-navy hover:text-parchment transition-all"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <span className="text-xl font-bold text-navy">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id, item.size)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded transition-all"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#f2d19e] border-2 border-navy rounded-lg p-6 sticky top-32">
              <h2 className="text-2xl font-slab font-bold text-navy mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-navy">
                  <span>Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-navy">
                  <span>Shipping</span>
                  <span className="font-semibold">
                    {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-navy">
                  <span>Tax</span>
                  <span className="font-semibold">${tax.toFixed(2)}</span>
                </div>
                {shipping === 0 && (
                  <p className="text-sm text-green-700 font-semibold">
                    ✓ Free shipping on orders over $50!
                  </p>
                )}
              </div>
              
              <div className="border-t border-navy/20 pt-4 mb-6">
                <div className="flex justify-between text-xl font-bold text-navy">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button 
                onClick={handleCheckout}
                className="w-full py-4 bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-parchment font-slab font-bold text-xl rounded-full hover:from-[#DAA520] hover:to-[#FFD700] transition-all duration-300 shadow-lg"
              >
                Proceed to Checkout
              </button>

              <div className="mt-6 text-center">
                <Link to="/collections" className="text-navy hover:underline">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>

        <OrnamentalDivider className="my-16" bgColor="bg-[#efece9]" />

        {/* Security Badges */}
        <div className="text-center">
          <p className="text-sm text-navy/60 mb-4">Secure checkout powered by</p>
          <div className="flex justify-center items-center space-x-8">
            <span className="text-navy font-semibold">Shopify Payments</span>
            <span className="text-navy font-semibold">SSL Encrypted</span>
            <span className="text-navy font-semibold">PCI Compliant</span>
          </div>
        </div>
      </main>

      <div className="h-1 bg-navy mt-16"></div>
      <FooterPRD />
    </div>
  );
};

export default CartPage;