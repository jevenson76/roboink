import React, { useState, useEffect } from 'react';
import RobustNavbar from '../components/RobustNavbar';
import FooterPRD from '../components/FooterPRD';
import OrnamentalDivider from '../components/OrnamentalDivider';
import { User, Package, Heart, Settings, LogOut, Mail, Lock } from 'lucide-react';

const AccountPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#efece9] animate-fade-in-from-top">
        <RobustNavbar />
        
        {/* Login Section */}
        <section className="max-w-md mx-auto px-4 py-16">
          <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-brass">
            <h1 className="text-3xl font-head text-navy text-center mb-8">
              Welcome Back
            </h1>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-navy font-body mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-brass" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border-2 border-navy/20 rounded-lg focus:border-brass focus:outline-none"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-navy font-body mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-brass" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border-2 border-navy/20 rounded-lg focus:border-brass focus:outline-none"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-brass to-copper text-parchment font-head text-lg rounded-full hover:from-copper hover:to-brass transition-all duration-300"
              >
                Sign In
              </button>
            </form>
            
            <div className="mt-8 text-center">
              <p className="text-navy/70 font-body mb-4">
                Don't have an account?
              </p>
              <button className="text-brass hover:text-copper font-head underline">
                Create Account
              </button>
            </div>
          </div>
        </section>
        
        <OrnamentalDivider className="my-12" bgColor="bg-[#efece9]" />
        <div className="h-1 bg-navy"></div>
        <FooterPRD />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#efece9] animate-fade-in-from-top">
      <RobustNavbar />
      
      {/* Account Dashboard */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-head text-navy">
            My Account
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-navy hover:text-brass transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-body">Sign Out</span>
          </button>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <nav className="bg-white rounded-lg shadow-lg p-4 border-2 border-brass/20">
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      activeTab === 'profile'
                        ? 'bg-brass/20 text-brass'
                        : 'hover:bg-gray-100 text-navy'
                    }`}
                  >
                    <User className="w-5 h-5" />
                    <span className="font-body">Profile</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('orders')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      activeTab === 'orders'
                        ? 'bg-brass/20 text-brass'
                        : 'hover:bg-gray-100 text-navy'
                    }`}
                  >
                    <Package className="w-5 h-5" />
                    <span className="font-body">Orders</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('wishlist')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      activeTab === 'wishlist'
                        ? 'bg-brass/20 text-brass'
                        : 'hover:bg-gray-100 text-navy'
                    }`}
                  >
                    <Heart className="w-5 h-5" />
                    <span className="font-body">Wishlist</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('settings')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      activeTab === 'settings'
                        ? 'bg-brass/20 text-brass'
                        : 'hover:bg-gray-100 text-navy'
                    }`}
                  >
                    <Settings className="w-5 h-5" />
                    <span className="font-body">Settings</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          
          {/* Content Area */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-brass/20">
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-2xl font-head text-navy mb-6">Profile Information</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-navy/70 font-body mb-1">Email</label>
                      <p className="text-navy font-body">{email || 'user@example.com'}</p>
                    </div>
                    <div>
                      <label className="block text-navy/70 font-body mb-1">Member Since</label>
                      <p className="text-navy font-body">January 2025</p>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-2xl font-head text-navy mb-6">Order History</h2>
                  <p className="text-navy/70 font-body">You haven't placed any orders yet.</p>
                  <a 
                    href="/collections"
                    className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-brass to-copper text-parchment font-head rounded-full hover:from-copper hover:to-brass transition-all"
                  >
                    Start Shopping
                  </a>
                </div>
              )}
              
              {activeTab === 'wishlist' && (
                <div>
                  <h2 className="text-2xl font-head text-navy mb-6">My Wishlist</h2>
                  <p className="text-navy/70 font-body">Your wishlist is empty.</p>
                  <a 
                    href="/collections"
                    className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-brass to-copper text-parchment font-head rounded-full hover:from-copper hover:to-brass transition-all"
                  >
                    Browse Products
                  </a>
                </div>
              )}
              
              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-2xl font-head text-navy mb-6">Account Settings</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-head text-navy mb-3">Email Preferences</h3>
                      <label className="flex items-center gap-3">
                        <input type="checkbox" className="w-5 h-5 text-brass" defaultChecked />
                        <span className="font-body text-navy">Receive promotional emails</span>
                      </label>
                    </div>
                    <div>
                      <h3 className="text-lg font-head text-navy mb-3">Privacy</h3>
                      <button className="text-brass hover:text-copper font-body underline">
                        Download my data
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <OrnamentalDivider className="my-12" bgColor="bg-[#efece9]" />
      <div className="h-1 bg-navy"></div>
      <FooterPRD />
    </div>
  );
};

export default AccountPage;