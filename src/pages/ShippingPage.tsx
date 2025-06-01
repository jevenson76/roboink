import React, { useEffect } from 'react';
import RobustNavbar from '../components/RobustNavbar';
import FooterPRD from '../components/FooterPRD';
import OrnamentalDivider from '../components/OrnamentalDivider';
import { Truck, Globe, Clock, Package } from 'lucide-react';

const ShippingPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const shippingOptions = [
    {
      name: 'Standard Shipping',
      time: '5-7 business days',
      cost: '$5.99',
      free: 'Free on orders over $50'
    },
    {
      name: 'Express Shipping',
      time: '2-3 business days',
      cost: '$12.99',
      free: 'Free on orders over $100'
    },
    {
      name: 'Priority Shipping',
      time: '1-2 business days',
      cost: '$19.99',
      free: 'Free on orders over $150'
    }
  ];

  const internationalRates = [
    { region: 'Canada', time: '7-10 business days', cost: '$15.99' },
    { region: 'United Kingdom', time: '10-14 business days', cost: '$19.99' },
    { region: 'Europe', time: '10-14 business days', cost: '$22.99' },
    { region: 'Australia/NZ', time: '14-21 business days', cost: '$24.99' },
    { region: 'Asia', time: '14-21 business days', cost: '$26.99' },
    { region: 'Rest of World', time: '14-28 business days', cost: '$29.99' }
  ];

  return (
    <div className="min-h-screen bg-[#efece9] animate-fade-in-from-top">
      <RobustNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy/10 to-transparent py-12 text-center">
        <h1 className="text-5xl font-slab font-bold text-navy drop-shadow-lg mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Shipping Information</h1>
        <p className="text-xl text-[#800020] font-body font-bold max-w-2xl mx-auto">
          Fast, reliable shipping to steampunk enthusiasts worldwide
        </p>
      </section>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Shipping Features */}
        <section className="mb-16">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white border-2 border-navy rounded-lg p-6 text-center">
              <Truck className="w-10 h-10 text-[#800020] mx-auto mb-3" />
              <h3 className="font-bold text-navy mb-2">Fast Delivery</h3>
              <p className="text-sm text-navy/80">Most orders ship within 24 hours</p>
            </div>
            <div className="bg-white border-2 border-navy rounded-lg p-6 text-center">
              <Package className="w-10 h-10 text-[#800020] mx-auto mb-3" />
              <h3 className="font-bold text-navy mb-2">Secure Packaging</h3>
              <p className="text-sm text-navy/80">Every order carefully packed</p>
            </div>
            <div className="bg-white border-2 border-navy rounded-lg p-6 text-center">
              <Globe className="w-10 h-10 text-[#800020] mx-auto mb-3" />
              <h3 className="font-bold text-navy mb-2">Worldwide</h3>
              <p className="text-sm text-navy/80">We ship to over 50 countries</p>
            </div>
            <div className="bg-white border-2 border-navy rounded-lg p-6 text-center">
              <Clock className="w-10 h-10 text-[#800020] mx-auto mb-3" />
              <h3 className="font-bold text-navy mb-2">Order Tracking</h3>
              <p className="text-sm text-navy/80">Track your package every step</p>
            </div>
          </div>
        </section>

        {/* Domestic Shipping */}
        <section className="mb-16">
          <h2 className="text-3xl font-slab font-bold text-navy mb-8">Domestic Shipping (USA)</h2>
          <div className="bg-white border-2 border-navy rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-navy text-parchment">
                <tr>
                  <th className="px-6 py-4 text-left font-slab">Shipping Method</th>
                  <th className="px-6 py-4 text-left font-slab">Delivery Time</th>
                  <th className="px-6 py-4 text-left font-slab">Cost</th>
                  <th className="px-6 py-4 text-left font-slab">Free Shipping</th>
                </tr>
              </thead>
              <tbody>
                {shippingOptions.map((option, index) => (
                  <tr key={option.name} className={index % 2 === 0 ? 'bg-white' : 'bg-[#f2d19e]'}>
                    <td className="px-6 py-4 font-bold text-navy">{option.name}</td>
                    <td className="px-6 py-4 text-navy/80">{option.time}</td>
                    <td className="px-6 py-4 text-navy/80">{option.cost}</td>
                    <td className="px-6 py-4 text-[#800020] font-semibold">{option.free}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-4 bg-[#f2d19e] border border-navy rounded">
            <p className="text-navy">
              <strong>Note:</strong> Delivery times are estimates and begin once your order has been shipped. 
              Orders placed before 2 PM EST on business days typically ship same day.
            </p>
          </div>
        </section>

        {/* International Shipping */}
        <section className="mb-16">
          <h2 className="text-3xl font-slab font-bold text-navy mb-8">International Shipping</h2>
          <div className="bg-white border-2 border-navy rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-navy text-parchment">
                <tr>
                  <th className="px-6 py-4 text-left font-slab">Region</th>
                  <th className="px-6 py-4 text-left font-slab">Estimated Delivery</th>
                  <th className="px-6 py-4 text-left font-slab">Shipping Cost</th>
                </tr>
              </thead>
              <tbody>
                {internationalRates.map((rate, index) => (
                  <tr key={rate.region} className={index % 2 === 0 ? 'bg-white' : 'bg-[#f2d19e]'}>
                    <td className="px-6 py-4 font-bold text-navy">{rate.region}</td>
                    <td className="px-6 py-4 text-navy/80">{rate.time}</td>
                    <td className="px-6 py-4 text-navy/80">{rate.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-4 bg-[#f2d19e] border border-navy rounded">
            <p className="text-navy mb-2">
              <strong>Important:</strong> International customers are responsible for any customs duties, 
              taxes, or fees imposed by their country.
            </p>
          </div>
        </section>

        {/* Processing Times */}
        <section className="mb-16 bg-white border-2 border-navy rounded-lg p-8">
          <h2 className="text-3xl font-slab font-bold text-navy mb-6">Order Processing</h2>
          <div className="space-y-4 text-navy/80">
            <p>
              <strong className="text-navy">Standard Orders:</strong> Processed within 1-2 business days
            </p>
            <p>
              <strong className="text-navy">Custom Orders:</strong> Please allow 3-5 business days for production
            </p>
            <p>
              <strong className="text-navy">Holiday Seasons:</strong> Processing may take an additional 1-2 days during peak times
            </p>
          </div>
          
          <div className="mt-6 p-4 bg-[#f2d19e] border border-navy rounded">
            <p className="text-navy">
              All orders are handmade with care in our workshop. We'll send you tracking information 
              as soon as your order ships!
            </p>
          </div>
        </section>

        {/* Shipping Policies */}
        <section>
          <h2 className="text-3xl font-slab font-bold text-navy mb-8">Shipping Policies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-navy rounded-lg p-6">
              <h3 className="text-xl font-bold text-navy mb-4">Order Tracking</h3>
              <ul className="space-y-2 text-navy/80">
                <li>• Tracking number provided via email</li>
                <li>• Real-time updates available</li>
                <li>• SMS notifications available</li>
                <li>• Track directly on our website</li>
              </ul>
            </div>
            
            <div className="bg-white border-2 border-navy rounded-lg p-6">
              <h3 className="text-xl font-bold text-navy mb-4">Delivery Issues</h3>
              <ul className="space-y-2 text-navy/80">
                <li>• Lost packages fully insured</li>
                <li>• Damaged items replaced free</li>
                <li>• Wrong address? Contact us ASAP</li>
                <li>• Delivery attempts: 3 maximum</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-navy mb-4">
              <strong>Questions about shipping?</strong>
            </p>
            <p className="text-navy/80">
              Contact us at{' '}
              <a href="mailto:shipping@roboinktees.com" className="underline hover:text-[#B8860B]">
                shipping@roboinktees.com
              </a>
            </p>
          </div>
        </section>
      </main>

      <OrnamentalDivider className="mb-12 mt-12" bgColor="bg-[#efece9]" />
      <div className="h-1 bg-navy"></div>
      <FooterPRD />
    </div>
  );
};

export default ShippingPage;