import React from 'react';
import { Cog } from 'lucide-react';
import heroImage from '../assets/hero.png';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-deep-navy">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Animated gears background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 opacity-10">
          <Cog className="w-96 h-96 text-brass-gold animate-spin-slow" />
        </div>
        <div className="absolute top-1/4 right-[-100px] opacity-10">
          <Cog className="w-[32rem] h-[32rem] text-copper animate-spin-slow-reverse" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pt-40 px-4 sm:px-6 lg:px-8">
        {/* Title Container with Steampunk styling - centered at top */}
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-b from-brass-gold/30 to-copper/30 p-1 rounded-lg shadow-2xl">
            <div className="relative bg-deep-navy/30 backdrop-blur-sm px-8 py-8 rounded-md">
              {/* Corner bolts */}
              <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-gray-300 border-2 border-gray-400 shadow-inner"></div>
              <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-gray-300 border-2 border-gray-400 shadow-inner"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 rounded-full bg-gray-300 border-2 border-gray-400 shadow-inner"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-gray-300 border-2 border-gray-400 shadow-inner"></div>
              
              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-burgundy leading-tight mb-4 text-center">
                <span className="whitespace-nowrap">Where Victorian Engineering Meets AI Design</span>
              </h1>
              <p className="text-xl md:text-2xl font-bold text-burgundy opacity-90 max-w-4xl mx-auto leading-relaxed text-center">
                Timeless style, machine-made. Explore the future of fashion, forged in the past.
              </p>
            </div>
          </div>
        </div>
        
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-brass-gold via-warm-brown to-brass-gold opacity-50"></div>
    </div>
  );
};

export default Hero;