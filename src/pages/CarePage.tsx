import React, { useEffect } from 'react';
import NavbarPRD from '../components/NavbarPRD';
import FooterPRD from '../components/FooterPRD';
import OrnamentalDivider from '../components/OrnamentalDivider';
import { Shirt, Droplets, Sun, Wind, AlertTriangle } from 'lucide-react';

const CarePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#efece9] animate-fade-in-from-top">
      <NavbarPRD />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy/10 to-transparent py-12 text-center">
        <h1 className="text-5xl font-slab font-bold text-navy drop-shadow-lg mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Care Instructions</h1>
        <p className="text-xl text-[#800020] font-slab font-bold max-w-2xl mx-auto">
          Keep your steampunk apparel looking magnificent for years to come
        </p>
      </section>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Care Icons Overview */}
        <section className="mb-16">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white border-2 border-navy rounded-lg p-6 text-center">
              <Droplets className="w-12 h-12 text-[#800020] mx-auto mb-4" />
              <h3 className="font-bold text-navy mb-2">Wash Cold</h3>
              <p className="text-sm text-navy/80">Machine wash in cold water</p>
            </div>
            <div className="bg-white border-2 border-navy rounded-lg p-6 text-center">
              <Shirt className="w-12 h-12 text-[#800020] mx-auto mb-4" />
              <h3 className="font-bold text-navy mb-2">Inside Out</h3>
              <p className="text-sm text-navy/80">Turn garment inside out</p>
            </div>
            <div className="bg-white border-2 border-navy rounded-lg p-6 text-center">
              <Wind className="w-12 h-12 text-[#800020] mx-auto mb-4" />
              <h3 className="font-bold text-navy mb-2">Air Dry</h3>
              <p className="text-sm text-navy/80">Hang or lay flat to dry</p>
            </div>
            <div className="bg-white border-2 border-navy rounded-lg p-6 text-center">
              <Sun className="w-12 h-12 text-[#800020] mx-auto mb-4" />
              <h3 className="font-bold text-navy mb-2">No Bleach</h3>
              <p className="text-sm text-navy/80">Avoid harsh chemicals</p>
            </div>
          </div>
        </section>

        {/* Detailed Instructions */}
        <section className="mb-16 bg-white border-2 border-navy rounded-lg p-8">
          <h2 className="text-3xl font-slab font-bold text-navy mb-8">Washing Instructions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-navy mb-3">Before First Wear</h3>
              <p className="text-navy/80">
                We recommend washing your new RoboInkTees garment before wearing to remove any residual 
                printing materials and to set the colors. This also helps soften the fabric for maximum comfort.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-navy mb-3">Regular Washing</h3>
              <ul className="space-y-2 text-navy/80">
                <li className="flex items-start">
                  <span className="text-[#800020] mr-2">•</span>
                  Turn garment inside out to protect the design
                </li>
                <li className="flex items-start">
                  <span className="text-[#800020] mr-2">•</span>
                  Machine wash cold (30°C/86°F maximum)
                </li>
                <li className="flex items-start">
                  <span className="text-[#800020] mr-2">•</span>
                  Use mild detergent - avoid fabric softeners
                </li>
                <li className="flex items-start">
                  <span className="text-[#800020] mr-2">•</span>
                  Wash with similar colors
                </li>
                <li className="flex items-start">
                  <span className="text-[#800020] mr-2">•</span>
                  Gentle or delicate cycle recommended
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Drying Instructions */}
        <section className="mb-16">
          <h2 className="text-3xl font-slab font-bold text-navy mb-8">Drying & Ironing</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#f2d19e] border-2 border-navy rounded-lg p-6">
              <h3 className="text-xl font-bold text-navy mb-4">Drying</h3>
              <ul className="space-y-2 text-navy/80">
                <li>• Air dry recommended for best results</li>
                <li>• If using dryer, use low heat setting</li>
                <li>• Remove promptly to prevent wrinkles</li>
                <li>• Hang or lay flat to maintain shape</li>
                <li>• Avoid direct sunlight to prevent fading</li>
              </ul>
            </div>
            
            <div className="bg-white border-2 border-navy rounded-lg p-6">
              <h3 className="text-xl font-bold text-navy mb-4">Ironing</h3>
              <ul className="space-y-2 text-navy/80">
                <li>• Iron inside out on low/medium heat</li>
                <li>• Never iron directly on the design</li>
                <li>• Use a pressing cloth if needed</li>
                <li>• Steam setting is safe to use</li>
                <li>• For best results, iron while slightly damp</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Special Care */}
        <section className="mb-16 bg-white border-2 border-navy rounded-lg p-8">
          <h2 className="text-3xl font-slab font-bold text-navy mb-6">Special Care Tips</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-[#800020] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-navy mb-2">Stain Removal</h4>
                <p className="text-navy/80">
                  Treat stains immediately with cold water. For stubborn stains, pre-treat with a 
                  gentle stain remover before washing. Avoid rubbing the design area vigorously.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-[#800020] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-navy mb-2">Storage</h4>
                <p className="text-navy/80">
                  Store in a cool, dry place. Fold carefully along natural seams or hang to prevent 
                  creasing the design. Use cedar blocks to prevent moths naturally.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-[#800020] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-navy mb-2">Design Longevity</h4>
                <p className="text-navy/80">
                  Our handmade designs are built to last. Following these care instructions will 
                  ensure your steampunk apparel maintains its vibrant colors and crisp details for years.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Do's and Don'ts */}
        <section>
          <h2 className="text-3xl font-slab font-bold text-navy mb-8">Quick Reference</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#f2d19e] border-2 border-navy rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-700 mb-4">✓ DO</h3>
              <ul className="space-y-2 text-navy/80">
                <li>• Wash in cold water</li>
                <li>• Turn inside out</li>
                <li>• Use gentle detergent</li>
                <li>• Air dry when possible</li>
                <li>• Iron inside out</li>
                <li>• Store properly</li>
              </ul>
            </div>
            
            <div className="bg-white border-2 border-navy rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-700 mb-4">✗ DON'T</h3>
              <ul className="space-y-2 text-navy/80">
                <li>• Use bleach or harsh chemicals</li>
                <li>• Wash in hot water</li>
                <li>• Iron directly on design</li>
                <li>• Use fabric softener</li>
                <li>• Dry clean (unless specified)</li>
                <li>• Wring or twist when wet</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-navy text-parchment rounded-lg text-center">
            <p className="text-lg">
              <strong>Remember:</strong> Each RoboInkTees garment is handmade with care. 
              Proper care ensures your steampunk style stays pristine!
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

export default CarePage;