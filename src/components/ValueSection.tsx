import React from 'react';
import { Link } from 'react-router-dom';
import { Cog, Zap, Clock, Palette } from 'lucide-react';

const ValueSection: React.FC = () => {
  return (
    <div className="py-6 relative z-10" style={{ backgroundColor: 'rgba(245, 238, 211, 0.95)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-burgundy mb-4">Why Choose RoboInkTees?</h2>
          <p className="text-burgundy max-w-3xl mx-auto">
            Our unique blend of Victorian aesthetics and cutting-edge AI technology creates wearable art that stands the test of time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {/* Feature 1 */}
          <div className="bg-deep-navy p-6 rounded-lg border border-brass-gold shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(212,180,131,0.2)] relative z-10">
            <div className="w-14 h-14 bg-brass-gold bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Cog className="h-8 w-8 text-brass-gold" />
            </div>
            <h3 className="text-xl font-bold text-creamy-ivory text-center mb-2">Precision Engineering</h3>
            <p className="text-creamy-ivory/60 text-center">
              Each design is meticulously crafted with attention to every gear, cog, and mechanical detail.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-deep-navy p-6 rounded-lg border border-brass-gold shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(212,180,131,0.2)] relative z-10">
            <div className="w-14 h-14 bg-brass-gold bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Zap className="h-8 w-8 text-brass-gold" />
            </div>
            <h3 className="text-xl font-bold text-creamy-ivory text-center mb-2">AI-Powered Designs</h3>
            <p className="text-creamy-ivory/60 text-center">
              Our proprietary algorithms generate unique steampunk patterns that are truly one-of-a-kind.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-deep-navy p-6 rounded-lg border border-brass-gold shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(212,180,131,0.2)] relative z-10">
            <div className="w-14 h-14 bg-brass-gold bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Clock className="h-8 w-8 text-brass-gold" />
            </div>
            <h3 className="text-xl font-bold text-creamy-ivory text-center mb-2">Timeless Quality</h3>
            <p className="text-creamy-ivory/60 text-center">
              Premium materials and printing techniques ensure your garments last for years to come.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-deep-navy p-6 rounded-lg border border-brass-gold shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(212,180,131,0.2)] relative z-10">
            <div className="w-14 h-14 bg-brass-gold bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Palette className="h-8 w-8 text-brass-gold" />
            </div>
            <h3 className="text-xl font-bold text-creamy-ivory text-center mb-2">Custom Creations</h3>
            <p className="text-creamy-ivory/60 text-center">
              Request personalized designs that blend your ideas with our steampunk aesthetic.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center relative z-10">
          <Link 
            to="/faq#process" 
            className="inline-block px-8 py-3 bg-brass-gold text-deep-navy rounded-md font-bold text-lg transition-all duration-300 hover:bg-copper hover:shadow-[0_0_15px_rgba(212,180,131,0.7)] transform hover:-translate-y-1 border-2 border-warm-brown"
          >
            Discover Our Process
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ValueSection;