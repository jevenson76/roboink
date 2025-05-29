import React, { useEffect } from 'react';
import NavbarPRD from '../components/NavbarPRD';
import FooterPRD from '../components/FooterPRD';
import OrnamentalDivider from '../components/OrnamentalDivider';

const SizeGuidePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sizeChart = {
    unisex: [
      { size: 'XS', chest: '31-34', waist: '25-27', length: '26' },
      { size: 'S', chest: '34-37', waist: '28-30', length: '27' },
      { size: 'M', chest: '38-41', waist: '31-33', length: '28' },
      { size: 'L', chest: '42-45', waist: '34-37', length: '29' },
      { size: 'XL', chest: '46-49', waist: '38-41', length: '30' },
      { size: '2XL', chest: '50-53', waist: '42-45', length: '31' },
      { size: '3XL', chest: '54-57', waist: '46-49', length: '32' }
    ],
    ladies: [
      { size: 'XS', chest: '30-32', waist: '24-26', hip: '33-35' },
      { size: 'S', chest: '32-34', waist: '26-28', hip: '35-37' },
      { size: 'M', chest: '35-37', waist: '29-31', hip: '38-40' },
      { size: 'L', chest: '38-40', waist: '32-34', hip: '41-43' },
      { size: 'XL', chest: '41-43', waist: '35-37', hip: '44-46' },
      { size: '2XL', chest: '44-46', waist: '38-40', hip: '47-49' }
    ]
  };

  return (
    <div className="min-h-screen bg-[#efece9] animate-fade-in-from-top">
      <NavbarPRD />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy/10 to-transparent py-12 text-center">
        <h1 className="text-5xl font-slab font-bold text-navy drop-shadow-lg mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Size Guide</h1>
        <p className="text-xl text-[#800020] font-slab font-bold max-w-2xl mx-auto">
          Find your perfect fit with our comprehensive sizing chart
        </p>
      </section>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Measuring Tips */}
        <section className="mb-16 bg-white border-2 border-navy rounded-lg p-8">
          <h2 className="text-3xl font-slab font-bold text-navy mb-6">How to Measure</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-navy mb-3">Chest</h3>
              <p className="text-navy/80">
                Measure around the fullest part of your chest, keeping the tape measure horizontal.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-navy mb-3">Waist</h3>
              <p className="text-navy/80">
                Measure around your natural waistline, keeping the tape comfortably loose.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-navy mb-3">Length</h3>
              <p className="text-navy/80">
                Measure from the highest point of your shoulder down to the desired hem length.
              </p>
            </div>
          </div>
        </section>

        {/* Size Charts */}
        <section className="space-y-12">
          {/* Unisex Sizes */}
          <div>
            <h2 className="text-3xl font-slab font-bold text-navy mb-6">Unisex T-Shirt Sizes</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-2 border-navy">
                <thead className="bg-navy text-parchment">
                  <tr>
                    <th className="px-6 py-3 text-left font-slab">Size</th>
                    <th className="px-6 py-3 text-left font-slab">Chest (inches)</th>
                    <th className="px-6 py-3 text-left font-slab">Waist (inches)</th>
                    <th className="px-6 py-3 text-left font-slab">Length (inches)</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeChart.unisex.map((row, index) => (
                    <tr key={row.size} className={index % 2 === 0 ? 'bg-white' : 'bg-[#f2d19e]'}>
                      <td className="px-6 py-4 font-bold text-navy">{row.size}</td>
                      <td className="px-6 py-4 text-navy/80">{row.chest}</td>
                      <td className="px-6 py-4 text-navy/80">{row.waist}</td>
                      <td className="px-6 py-4 text-navy/80">{row.length}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Ladies Sizes */}
          <div>
            <h2 className="text-3xl font-slab font-bold text-navy mb-6">Ladies' Fitted Sizes</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-2 border-navy">
                <thead className="bg-navy text-parchment">
                  <tr>
                    <th className="px-6 py-3 text-left font-slab">Size</th>
                    <th className="px-6 py-3 text-left font-slab">Chest (inches)</th>
                    <th className="px-6 py-3 text-left font-slab">Waist (inches)</th>
                    <th className="px-6 py-3 text-left font-slab">Hip (inches)</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeChart.ladies.map((row, index) => (
                    <tr key={row.size} className={index % 2 === 0 ? 'bg-white' : 'bg-[#f2d19e]'}>
                      <td className="px-6 py-4 font-bold text-navy">{row.size}</td>
                      <td className="px-6 py-4 text-navy/80">{row.chest}</td>
                      <td className="px-6 py-4 text-navy/80">{row.waist}</td>
                      <td className="px-6 py-4 text-navy/80">{row.hip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="mt-16 bg-[#f2d19e] border-2 border-navy rounded-lg p-8">
          <h2 className="text-2xl font-slab font-bold text-navy mb-4">Important Notes</h2>
          <ul className="space-y-3 text-navy/80">
            <li className="flex items-start">
              <span className="text-[#800020] mr-2">•</span>
              All measurements are in inches
            </li>
            <li className="flex items-start">
              <span className="text-[#800020] mr-2">•</span>
              Our shirts are pre-shrunk, but we recommend washing in cold water
            </li>
            <li className="flex items-start">
              <span className="text-[#800020] mr-2">•</span>
              For a looser fit, we recommend ordering one size up
            </li>
            <li className="flex items-start">
              <span className="text-[#800020] mr-2">•</span>
              Measurements may vary by up to 1 inch due to handmade production
            </li>
          </ul>
          <p className="mt-6 text-navy">
            <strong>Need help?</strong> Contact our customer service team at support@roboinktees.com
          </p>
        </section>
      </main>

      <OrnamentalDivider className="mb-12 mt-12" bgColor="bg-[#efece9]" />
      <div className="h-1 bg-navy"></div>
      <FooterPRD />
    </div>
  );
};

export default SizeGuidePage;