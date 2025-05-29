import React from 'react';

const SteamBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Subtle Steam Puffs */}
      <div className="absolute bottom-0 left-1/4 opacity-10">
        <div className="w-32 h-32 bg-navy/10 rounded-full blur-3xl animate-steam" />
      </div>
      <div className="absolute bottom-0 right-1/3 opacity-10" style={{ animationDelay: '1s' }}>
        <div className="w-40 h-40 bg-navy/10 rounded-full blur-3xl animate-steam" />
      </div>
      <div className="absolute bottom-0 left-2/3 opacity-10" style={{ animationDelay: '2s' }}>
        <div className="w-36 h-36 bg-navy/10 rounded-full blur-3xl animate-steam" />
      </div>
      
      {/* Subtle Gear Shadows */}
      <div className="absolute top-1/4 right-1/4 opacity-5">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          className="animate-spin-slow"
        >
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" fill="none" className="text-navy" />
          <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1" fill="none" className="text-navy" />
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30) * Math.PI / 180;
            const x1 = 100 + 70 * Math.cos(angle);
            const y1 = 100 + 70 * Math.sin(angle);
            const x2 = 100 + 90 * Math.cos(angle);
            const y2 = 100 + 90 * Math.sin(angle);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="currentColor"
                strokeWidth="4"
                className="text-navy"
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default SteamBackground;