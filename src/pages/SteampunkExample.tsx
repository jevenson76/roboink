import React from 'react';
import SteampunkLayout from '../components/SteampunkLayout';
import EnhancedGearDivider from '../components/EnhancedGearDivider';

const SteampunkExample: React.FC = () => {
  return (
    <SteampunkLayout>
      {/* Hero Section with Steampunk Heading */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="steampunk-heading steampunk-heading-xl">
            Welcome to RoboInk
          </h1>
          <p className="steampunk-subtitle mt-4">
            Where Victorian Elegance Meets Industrial Innovation
          </p>
        </div>
      </section>

      {/* Enhanced Gear Divider */}
      <EnhancedGearDivider />

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="steampunk-container p-8">
            <h2 className="steampunk-heading steampunk-heading-lg text-center mb-8">
              Our Collection
            </h2>
            <p className="text-lg text-navy/80 mb-6">
              Discover our meticulously crafted steampunk designs, where every piece tells a story 
              of brass gears, copper pipes, and Victorian innovation.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <button className="steampunk-button">
                Shop Now
              </button>
              <button className="steampunk-button">
                View Gallery
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Another Gear Divider */}
      <EnhancedGearDivider className="my-8" />

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="steampunk-heading steampunk-heading-md text-center mb-12">
            Crafted with Precision
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="steampunk-container p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-brass to-copper flex items-center justify-center text-white text-3xl steampunk-glow">
                  ⚙
                </div>
                <h3 className="steampunk-heading steampunk-heading-sm">
                  Feature {item}
                </h3>
                <p className="text-navy/70 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Divider */}
      <EnhancedGearDivider />

      {/* Footer Example */}
      <footer className="py-12 px-4 bg-navy/5">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="steampunk-heading steampunk-heading-sm mb-4">
            Join Our Victorian Society
          </h3>
          <p className="steampunk-subtitle">
            Subscribe for exclusive steampunk designs and updates
          </p>
        </div>
      </footer>
    </SteampunkLayout>
  );
};

export default SteampunkExample;

/* 
  USAGE INSTRUCTIONS:
  
  1. Import the steampunk background image:
     import steampunkBg from '../assets/steampunkgeardivider.png';
  
  2. Apply background to any page/component:
     <SteampunkLayout>
       {your content}
     </SteampunkLayout>
  
  3. Use steampunk headings:
     <h1 className="steampunk-heading steampunk-heading-xl">Your Title</h1>
     <h2 className="steampunk-heading steampunk-heading-lg">Your Title</h2>
     <h3 className="steampunk-heading steampunk-heading-md">Your Title</h3>
     <h4 className="steampunk-heading steampunk-heading-sm">Your Title</h4>
  
  4. Add gear dividers between sections:
     <EnhancedGearDivider />
     <EnhancedGearDivider className="my-16" bgColor="#yourColor" />
  
  5. Create steampunk containers:
     <div className="steampunk-container p-8">
       {content}
     </div>
  
  6. Use steampunk buttons:
     <button className="steampunk-button">Click Me</button>
  
  7. Apply utility classes:
     <span className="steampunk-shadow-text">3D Text</span>
     <div className="steampunk-glow">Glowing Box</div>
*/