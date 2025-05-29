import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';

// Import category images
import robotsImg from '../assets/ROBOTS.png';
import vehiclesImg from '../assets/VEHICLES.png';
import clockworkImg from '../assets/CLOCKWORK CREATURES.png';
import gadgetryImg from '../assets/GADGETRY & GIZMOS.png';
import typographicImg from '../assets/TEXT.png';
import victorianImg from '../assets/VICTORIAN VANGUARD.png';
import retroImg from '../assets/RETRO-FUTURISM.png';
import skullsImg from '../assets/SKULLS.png';
import customImg from '../assets/CUSTOM.png';

// Map category IDs to their images
const categoryImages: { [key: string]: string } = {
  'robots': robotsImg,
  'vehicles': vehiclesImg,
  'clockwork-creatures': clockworkImg,
  'gadgetry-gizmos': gadgetryImg,
  'typographic-treasures': typographicImg,
  'victorian-vanguard': victorianImg,
  'retro-futurism': retroImg,
  'skulls': skullsImg,
  'custom-requests': customImg
};

const CollectionsSection: React.FC = () => {
  return (
    <section className="py-6 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-slab font-bold text-navy text-center mb-2" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
          Our Collections
        </h2>
        
        <p className="text-lg text-[#800020] font-slab font-bold text-center mb-8 max-w-3xl mx-auto">
          Explore our curated selection of steampunk-inspired designs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            return (
              <Link
                key={category.id}
                to={category.id === 'custom-requests' ? '/custom-requests' : `/collections?category=${category.id}`}
                className="group relative border-2 border-navy rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* Category Icon/Gear decoration - positioned to overlay top-right corner */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-parchment border-2 border-navy rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 z-10">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    className="text-[#2a6e78] transition-transform duration-1000 group-hover:rotate-180"
                  >
                    <circle cx="18" cy="18" r="15" stroke="currentColor" strokeWidth="2" />
                    <circle cx="18" cy="18" r="4.5" fill="currentColor" />
                    {Array.from({ length: 8 }).map((_, i) => {
                      const angle = (i * 45) * Math.PI / 180;
                      const x1 = 18 + 10.5 * Math.cos(angle);
                      const y1 = 18 + 10.5 * Math.sin(angle);
                      const x2 = 18 + 15 * Math.cos(angle);
                      const y2 = 18 + 15 * Math.sin(angle);
                      return (
                        <line
                          key={i}
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      );
                    })}
                  </svg>
                </div>
                
                {/* Category Image */}
                <div className="relative w-full h-48 overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src={categoryImages[category.id]}
                    alt={`${category.name} collection`}
                    className="w-full h-full object-contain p-4"
                  />
                </div>

                {/* Card Content */}
                <div className="p-4 flex flex-col flex-grow" style={{backgroundColor: '#f2d19e !important'}}>
                  <h3 className="text-xl font-slab font-bold text-navy mb-2 drop-shadow-md">
                    {category.name}
                  </h3>
                  
                  <p className="text-sm text-navy/80 mb-3 flex-grow">
                    {category.description}
                  </p>
                  
                  <div className="mt-auto text-navy font-semibold group-hover:underline">
                    {category.id === 'custom-requests' ? 'Customize Now' : 'View Collection →'}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;