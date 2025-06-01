import React from 'react';
import { Link } from 'react-router-dom';

interface CustomSectionProps {
  enableSteampunk?: boolean;
}

const CustomSection: React.FC<CustomSectionProps> = ({ enableSteampunk = false }) => {
  return (
    <section className="py-6 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#B8860B]/10 to-[#DAA520]/10 border-2 border-navy rounded-lg shadow-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left side - Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className={enableSteampunk
                ? "steampunk-heading steampunk-heading-md mb-4"
                : "text-3xl md:text-4xl font-slab font-bold text-navy mb-4"
              } style={enableSteampunk ? {} : { textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                Need Something Unique?
              </h2>
              <p className={enableSteampunk
                ? "steampunk-subtitle mb-6 max-w-2xl"
                : "text-lg text-[#800020] font-slab font-bold mb-6 max-w-2xl"
              }>
                Commission a one-of-a-kind steampunk design tailored to your vision
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  to="/custom-requests"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-parchment font-slab font-semibold rounded-full hover:from-[#DAA520] hover:to-[#FFD700] transition-all duration-300 shadow-lg text-center"
                >
                  Start Custom Order
                </Link>
                <Link
                  to="/collections?category=typographic-treasures"
                  className="inline-block px-6 py-3 bg-parchment border-2 border-navy text-navy font-slab font-semibold rounded-full hover:bg-navy hover:text-parchment transition-all duration-300 text-center"
                >
                  Browse Text Designs
                </Link>
              </div>
            </div>

            {/* Right side - Visual element */}
            <div className="flex-shrink-0">
              <div className="relative w-48 h-48 md:w-56 md:h-56">
                {/* Decorative gear background */}
                <svg className="absolute inset-0 w-full h-full text-[#B8860B]/20" viewBox="0 0 200 200">
                  <g className="animate-spin-slow" style={{ transformOrigin: 'center' }}>
                    <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="2" fill="none" />
                    <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="2" fill="none" />
                    <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="2" fill="none" />
                    {Array.from({ length: 12 }).map((_, i) => {
                      const angle = (i * 30) * Math.PI / 180;
                      const x1 = 100 + 50 * Math.cos(angle);
                      const y1 = 100 + 50 * Math.sin(angle);
                      const x2 = 100 + 90 * Math.cos(angle);
                      const y2 = 100 + 90 * Math.sin(angle);
                      return (
                        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2" />
                      );
                    })}
                  </g>
                </svg>
                
                {/* Center content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-parchment border-2 border-navy rounded-full w-32 h-32 md:w-36 md:h-36 flex flex-col items-center justify-center">
                    <span className="text-3xl md:text-4xl font-slab font-bold text-[#800020]">CUSTOM</span>
                    <span className="text-sm md:text-base font-slab text-navy">DESIGNS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional info */}
          <div className="mt-8 pt-8 border-t border-navy/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-slab font-bold text-navy mb-2">Personalized Text</h3>
                <p className="text-sm text-navy/70">
                  Add custom steampunk-styled text, names, or quotes to any design
                </p>
              </div>
              <div>
                <h3 className="font-slab font-bold text-navy mb-2">Original Artwork</h3>
                <p className="text-sm text-navy/70">
                  Commission completely new designs based on your ideas
                </p>
              </div>
              <div>
                <h3 className="font-slab font-bold text-navy mb-2">Design Modifications</h3>
                <p className="text-sm text-navy/70">
                  Customize existing designs with color changes or added elements
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSection;