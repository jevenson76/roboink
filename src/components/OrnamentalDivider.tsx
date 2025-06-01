import React from 'react';

interface OrnamentalDividerProps {
  className?: string;
  bgColor?: string;
}

const OrnamentalDivider: React.FC<OrnamentalDividerProps> = ({ className = '', bgColor = 'bg-transparent' }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`${bgColor} px-4`}>
        <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-navy"
          >
            {/* Central gear */}
            <circle cx="30" cy="30" r="18" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <circle cx="30" cy="30" r="14" stroke="currentColor" strokeWidth="1" fill="none" />
            
            {/* Gear teeth */}
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 30) * Math.PI / 180;
              const x1 = 30 + 16 * Math.cos(angle);
              const y1 = 30 + 16 * Math.sin(angle);
              const x2 = 30 + 20 * Math.cos(angle);
              const y2 = 30 + 20 * Math.sin(angle);
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
            
            {/* Central dot */}
            <circle cx="30" cy="30" r="3" fill="currentColor" />
            
            {/* Decorative flourishes */}
            <path
              d="M10 30 Q15 25, 20 30 T30 30"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M50 30 Q45 25, 40 30 T30 30"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
            />
          </svg>
      </div>
    </div>
  );
};

export default OrnamentalDivider;