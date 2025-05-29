import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.png';

const HeroPRD: React.FC = () => {
  return (
    <section className="relative min-h-[650px] flex items-center overflow-hidden bg-parchment">
      {/* Hero Image Background with shimmer effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        {/* Overlay for text contrast */}
        <div className="absolute inset-0 bg-parchment/20"></div>
        
        {/* Shimmer effect for dynamic feel */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_8s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        </div>
      </div>

      {/* Content PRD VERSION */}
      <div className="relative z-10 flex justify-center w-full -mt-[220px]" data-component="hero-prd">
        <div className="inline-block">
          <h1 
            className="font-slab font-bold mb-10 whitespace-nowrap animate-[fadeInUp_0.8s_ease-out] text-left"
            style={{
              fontSize: '3rem',
              lineHeight: '1',
              color: 'white',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
            }}
          >
            Where Victorian Engineering Meets <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>Modern Style</span>
          </h1>
          
          <div className="mt-20 text-left">
            <Link 
              to="/collections" 
              className="inline-block px-12 py-4 bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-parchment font-slab font-bold text-xl rounded-full transition-all duration-300 hover:from-[#DAA520] hover:to-[#FFD700] hover:scale-105 animate-[fadeInUp_0.8s_ease-out_0.3s] animate-fill-mode-both transform-gpu"
              style={{
                boxShadow: '10px 10px 50px rgba(0, 0, 0, 0.8)'
              }}
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Animated gear decoration */}
      <div className="absolute bottom-10 right-10 opacity-20">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          className="text-navy animate-spin-slow"
        >
          <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="2" />
          <circle cx="60" cy="60" r="15" fill="currentColor" />
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30) * Math.PI / 180;
            const x1 = 60 + 35 * Math.cos(angle);
            const y1 = 60 + 35 * Math.sin(angle);
            const x2 = 60 + 50 * Math.cos(angle);
            const y2 = 60 + 50 * Math.sin(angle);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="currentColor"
                strokeWidth="4"
              />
            );
          })}
        </svg>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-navy"></div>
    </section>
  );
};

export default HeroPRD;