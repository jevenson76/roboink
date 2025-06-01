import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.png';

interface HeroPRDProps {
  enableSteampunk?: boolean;
}

const HeroPRD: React.FC<HeroPRDProps> = ({ enableSteampunk = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[525px] flex items-center overflow-hidden bg-parchment">
      {/* Hero Image Background with enhanced effects */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        {/* Multi-layer overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-parchment/10 to-parchment/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/20 via-transparent to-navy/20"></div>
        
        {/* Enhanced shimmer effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_8s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_12s_ease-in-out_infinite_reverse] bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent"></div>
        </div>
      </div>

      {/* Floating gear decorations */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        <svg className="hero-gear-accent top-left" viewBox="0 0 60 60">
          <circle cx="30" cy="30" r="20" stroke="#B87333" strokeWidth="2" fill="none" />
          <circle cx="30" cy="30" r="10" fill="#B87333" />
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 45) * Math.PI / 180;
            const x1 = 30 + 15 * Math.cos(angle);
            const y1 = 30 + 15 * Math.sin(angle);
            const x2 = 30 + 25 * Math.cos(angle);
            const y2 = 30 + 25 * Math.sin(angle);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#B87333" strokeWidth="3" />;
          })}
        </svg>
      </div>

      {/* Enhanced Content */}
      <div className="relative z-10 flex justify-center w-full">
        <div className="inline-block text-center px-8">
          
          {/* Content wrapper */}
          <div className="relative z-10">
            {/* Victorian ornament above title */}
            <div className={`victorian-divider ${isLoaded ? 'hero-text-reveal' : 'opacity-0'}`} />
            
            {/* Main Title */}
            <h1 
              className={enableSteampunk 
                ? `steampunk-heading steampunk-heading-xl ${isLoaded ? 'hero-text-reveal' : 'opacity-0'}`
                : `text-5xl sm:text-6xl md:text-7xl font-slab font-bold mb-6 ${isLoaded ? 'hero-text-reveal' : 'opacity-0'}`
              }
              style={enableSteampunk ? { animationDelay: '0.5s' } : { 
                color: '#F8F5F0',
                textShadow: '4px 4px 8px rgba(0,0,0,0.8), 2px 2px 4px rgba(0,0,0,0.6)',
                animationDelay: '0.5s' 
              }}
            >
              Where Victorian Engineering
              <br />
              Meets Modern Style
            </h1>
          
            {/* Subtitle */}
            <p 
              className={enableSteampunk
                ? `steampunk-subtitle mb-8 ${isLoaded ? 'hero-text-reveal' : 'opacity-0'}`
                : `text-2xl sm:text-3xl font-slab text-parchment mb-8 ${isLoaded ? 'hero-text-reveal' : 'opacity-0'}`
              }
              style={enableSteampunk ? { animationDelay: '0.8s' } : { 
                textShadow: '3px 3px 6px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.6)',
                animationDelay: '0.8s' 
              }}
            >
              Handcrafted Steampunk Designs for the Modern Maker
            </p>
            
            {/* Victorian ornament below subtitle */}
            <div className={`victorian-divider ${isLoaded ? 'hero-text-reveal' : 'opacity-0'}`} 
                 style={{ animationDelay: '1s' }} />
            
            {/* Professional CTA Button */}
            <div className={`mt-12 ${isLoaded ? 'hero-text-reveal' : 'opacity-0'}`}
                 style={{ animationDelay: '1.2s' }}>
              <Link 
                to="/collections" 
                className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brass to-copper text-parchment font-medium text-lg rounded-full shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 group overflow-hidden"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 -inset-x-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity"></div>
                
                {/* Button content */}
                <span className="relative z-10 font-body tracking-wide">Explore Collections</span>
                <svg className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                
                {/* Pulse ring on hover */}
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100">
                  <span className="absolute inset-0 rounded-full bg-brass/20 animate-ping"></span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Animated steam particles */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute bottom-0 w-20 h-20 bg-white/10 rounded-full blur-xl animate-steam"
            style={{
              left: `${20 * i}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i}s`
            }}
          />
        ))}
      </div>

      {/* Bottom border with gear pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-navy via-[#B87333] to-navy"></div>
    </section>
  );
};

export default HeroPRD;