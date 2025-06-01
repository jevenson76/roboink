import React from 'react';

interface SteampunkGearDividerProps {
  className?: string;
}

const SteampunkGearDivider: React.FC<SteampunkGearDividerProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center min-h-[160px] relative overflow-hidden ${className}`}>
      {/* Background pipes effect - will need actual image */}
      <div className="absolute inset-0 opacity-5">
        {/* Placeholder for pipes background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brass/10 to-transparent"></div>
      </div>
      
      {/* Multiple rotating gears */}
      <div className="relative flex items-center justify-center">
        {/* Large central gear */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          className="absolute animate-spin-slow opacity-20"
          style={{ animationDuration: '20s' }}
        >
          <defs>
            <linearGradient id="gear1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#B87333" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#DAA520" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#B87333" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <circle cx="60" cy="60" r="45" stroke="url(#gear1)" strokeWidth="2" fill="none" />
          <circle cx="60" cy="60" r="35" stroke="url(#gear1)" strokeWidth="1.5" fill="none" />
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 22.5) * Math.PI / 180;
            const x1 = 60 + 40 * Math.cos(angle);
            const y1 = 60 + 40 * Math.sin(angle);
            const x2 = 60 + 50 * Math.cos(angle);
            const y2 = 60 + 50 * Math.sin(angle);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="url(#gear1)"
                strokeWidth="4"
              />
            );
          })}
          <circle cx="60" cy="60" r="8" fill="url(#gear1)" />
        </svg>

        {/* Medium gear - top right */}
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          className="absolute -top-10 -right-20 animate-spin-slow-reverse opacity-15"
          style={{ animationDuration: '15s' }}
        >
          <defs>
            <linearGradient id="gear2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#CD7F32" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#B87333" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <circle cx="40" cy="40" r="30" stroke="url(#gear2)" strokeWidth="1.5" fill="none" />
          <circle cx="40" cy="40" r="22" stroke="url(#gear2)" strokeWidth="1" fill="none" />
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30) * Math.PI / 180;
            const x1 = 40 + 26 * Math.cos(angle);
            const y1 = 40 + 26 * Math.sin(angle);
            const x2 = 40 + 34 * Math.cos(angle);
            const y2 = 40 + 34 * Math.sin(angle);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="url(#gear2)"
                strokeWidth="3"
              />
            );
          })}
          <circle cx="40" cy="40" r="6" fill="url(#gear2)" />
        </svg>

        {/* Small gear - bottom left */}
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          className="absolute -bottom-8 -left-16 animate-spin-slow opacity-10"
          style={{ animationDuration: '10s' }}
        >
          <defs>
            <linearGradient id="gear3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DAA520" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFD700" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <circle cx="30" cy="30" r="20" stroke="url(#gear3)" strokeWidth="1.5" fill="none" />
          <circle cx="30" cy="30" r="15" stroke="url(#gear3)" strokeWidth="1" fill="none" />
          {Array.from({ length: 10 }).map((_, i) => {
            const angle = (i * 36) * Math.PI / 180;
            const x1 = 30 + 17 * Math.cos(angle);
            const y1 = 30 + 17 * Math.sin(angle);
            const x2 = 30 + 23 * Math.cos(angle);
            const y2 = 30 + 23 * Math.sin(angle);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="url(#gear3)"
                strokeWidth="2.5"
              />
            );
          })}
          <circle cx="30" cy="30" r="4" fill="url(#gear3)" />
        </svg>
      </div>
    </div>
  );
};

export default SteampunkGearDivider;