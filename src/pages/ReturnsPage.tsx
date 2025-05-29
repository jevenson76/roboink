import React, { useEffect } from 'react';
import NavbarPRD from '../components/NavbarPRD';
import FooterPRD from '../components/FooterPRD';
import OrnamentalDivider from '../components/OrnamentalDivider';
import { Package, Clock, RefreshCw, CheckCircle, AlertCircle } from 'lucide-react';

const ReturnsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#efece9] animate-fade-in-from-top">
      <NavbarPRD />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy/10 to-transparent py-12 text-center">
        <h1 className="text-5xl font-slab font-bold text-navy drop-shadow-lg mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Returns & Exchanges</h1>
        <p className="text-xl text-[#800020] font-slab font-bold max-w-2xl mx-auto">
          Your satisfaction is our priority. Easy returns within 30 days.
        </p>
      </section>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Return Policy Overview */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-navy rounded-lg p-6 text-center">
              <Clock className="w-12 h-12 text-[#800020] mx-auto mb-4" />
              <h3 className="text-xl font-slab font-bold text-navy mb-2">30-Day Returns</h3>
              <p className="text-navy/80">
                Return any unworn item within 30 days of delivery
              </p>
            </div>
            <div className="bg-white border-2 border-navy rounded-lg p-6 text-center">
              <RefreshCw className="w-12 h-12 text-[#800020] mx-auto mb-4" />
              <h3 className="text-xl font-slab font-bold text-navy mb-2">Easy Exchanges</h3>
              <p className="text-navy/80">
                Wrong size? We'll exchange it for free
              </p>
            </div>
            <div className="bg-white border-2 border-navy rounded-lg p-6 text-center">
              <Package className="w-12 h-12 text-[#800020] mx-auto mb-4" />
              <h3 className="text-xl font-slab font-bold text-navy mb-2">Prepaid Labels</h3>
              <p className="text-navy/80">
                We provide return shipping labels for US orders
              </p>
            </div>
          </div>
        </section>

        {/* Return Process */}
        <section className="mb-16 bg-white border-2 border-navy rounded-lg p-8">
          <h2 className="text-3xl font-slab font-bold text-navy mb-8">How to Return or Exchange</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-navy text-parchment rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-bold text-navy mb-2">Request a Return</h3>
                <p className="text-navy/80">
                  Email us at returns@roboinktees.com with your order number and reason for return.
                  We'll respond within 24 hours with your return authorization.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-navy text-parchment rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-bold text-navy mb-2">Print Return Label</h3>
                <p className="text-navy/80">
                  We'll email you a prepaid return shipping label. Simply print it out and attach it to your package.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-navy text-parchment rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-bold text-navy mb-2">Pack Your Items</h3>
                <p className="text-navy/80">
                  Place items in original packaging if available. Include all tags and ensure items are unworn and unwashed.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-navy text-parchment rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-bold text-navy mb-2">Ship It Back</h3>
                <p className="text-navy/80">
                  Drop off your package at any authorized shipping location. We'll process your return within 5-7 business days.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Return Conditions */}
        <section className="mb-16">
          <h2 className="text-3xl font-slab font-bold text-navy mb-8">Return Conditions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#f2d19e] border-2 border-navy rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-navy mb-4">Eligible for Return</h3>
              <ul className="space-y-2 text-navy/80">
                <li>• Unworn items with tags attached</li>
                <li>• Within 30 days of delivery</li>
                <li>• In original condition</li>
                <li>• Wrong size or fit issues</li>
                <li>• Defective or damaged items</li>
                <li>• Incorrect item received</li>
              </ul>
            </div>
            
            <div className="bg-white border-2 border-navy rounded-lg p-6">
              <AlertCircle className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-navy mb-4">Not Eligible for Return</h3>
              <ul className="space-y-2 text-navy/80">
                <li>• Worn or washed items</li>
                <li>• Items without original tags</li>
                <li>• Custom or personalized orders</li>
                <li>• Items on final sale</li>
                <li>• After 30 days from delivery</li>
                <li>• Items with pet hair or odors</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Exchange Information */}
        <section className="mb-16 bg-white border-2 border-navy rounded-lg p-8">
          <h2 className="text-3xl font-slab font-bold text-navy mb-6">Exchanges</h2>
          <p className="text-navy/80 mb-6">
            Need a different size? We're happy to exchange your item for a different size at no additional cost. 
            Simply follow the return process and indicate the size you'd like in exchange.
          </p>
          <div className="bg-[#f2d19e] border border-navy rounded p-4">
            <p className="text-navy">
              <strong>Note:</strong> Exchanges are subject to availability. If your desired size is out of stock, 
              we'll issue a full refund and notify you when the item is back in stock.
            </p>
          </div>
        </section>

        {/* Refund Information */}
        <section>
          <h2 className="text-3xl font-slab font-bold text-navy mb-6">Refund Policy</h2>
          <div className="bg-white border-2 border-navy rounded-lg p-8">
            <ul className="space-y-4 text-navy/80">
              <li className="flex items-start">
                <span className="text-[#800020] mr-3">•</span>
                <span>Refunds are processed within 5-7 business days of receiving your return</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#800020] mr-3">•</span>
                <span>Original shipping costs are non-refundable unless the return is due to our error</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#800020] mr-3">•</span>
                <span>Refunds will be issued to the original payment method</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#800020] mr-3">•</span>
                <span>You'll receive an email confirmation when your refund is processed</span>
              </li>
            </ul>
            
            <div className="mt-8 p-4 bg-[#f2d19e] border border-navy rounded">
              <p className="text-navy">
                <strong>Questions?</strong> Contact our returns team at returns@roboinktees.com
              </p>
            </div>
          </div>
        </section>
      </main>

      <OrnamentalDivider className="mb-12 mt-12" bgColor="bg-[#efece9]" />
      <div className="h-1 bg-navy"></div>
      <FooterPRD />
    </div>
  );
};

export default ReturnsPage;