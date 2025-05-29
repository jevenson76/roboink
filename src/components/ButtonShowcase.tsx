import React from 'react';
import MechanicalSwitchButton from './MechanicalSwitchButton';
import BrassButton from './BrassButton';
import SteampunkNavButton from './SteampunkNavButton';

const ButtonShowcase: React.FC = () => {
  return (
    <div className="bg-deep-navy py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-creamy-ivory text-center mb-12">
          Steampunk Button Collection
        </h2>
        
        <div className="space-y-12">
          {/* Photorealistic Steampunk Navigation Buttons */}
          <div className="bg-warm-brown/20 rounded-lg p-8 border-2 border-brass-gold">
            <h3 className="text-2xl font-bold text-brass-gold mb-6">Photorealistic Navigation Buttons</h3>
            
            <div className="flex flex-wrap gap-8 justify-center">
              <SteampunkNavButton href="#home">
                Home
              </SteampunkNavButton>
              <SteampunkNavButton href="#shop">
                Shop
              </SteampunkNavButton>
              <SteampunkNavButton href="#about">
                About
              </SteampunkNavButton>
              <SteampunkNavButton href="#contact">
                Contact
              </SteampunkNavButton>
            </div>
          </div>
          {/* Mechanical Switch Buttons */}
          <div className="bg-warm-brown/20 rounded-lg p-8 border-2 border-brass-gold">
            <h3 className="text-2xl font-bold text-brass-gold mb-6">Mechanical Switch Buttons</h3>
            
            <div className="space-y-6">
              {/* Toggle Switches */}
              <div className="flex flex-wrap gap-4">
                <MechanicalSwitchButton variant="toggle">
                  Enable Steam
                </MechanicalSwitchButton>
                <MechanicalSwitchButton variant="toggle">
                  Power Mode
                </MechanicalSwitchButton>
                <MechanicalSwitchButton variant="toggle">
                  Auto Pilot
                </MechanicalSwitchButton>
              </div>
              
              {/* Lever Switches */}
              <div className="flex flex-wrap gap-4">
                <MechanicalSwitchButton variant="lever">
                  Emergency Stop
                </MechanicalSwitchButton>
                <MechanicalSwitchButton variant="lever">
                  Main Power
                </MechanicalSwitchButton>
              </div>
              
              {/* Valve Controls */}
              <div className="flex flex-wrap gap-4">
                <MechanicalSwitchButton variant="valve">
                  Pressure Release
                </MechanicalSwitchButton>
                <MechanicalSwitchButton variant="valve">
                  Steam Control
                </MechanicalSwitchButton>
              </div>
            </div>
          </div>
          
          {/* Brass Buttons */}
          <div className="bg-warm-brown/20 rounded-lg p-8 border-2 border-brass-gold">
            <h3 className="text-2xl font-bold text-brass-gold mb-6">Brass Action Buttons</h3>
            
            <div className="flex flex-wrap gap-4">
              <BrassButton>
                Purchase Now
              </BrassButton>
              <BrassButton variant="secondary">
                View Details
              </BrassButton>
              <BrassButton>
                Add to Cart
              </BrassButton>
              <BrassButton variant="secondary">
                Learn More
              </BrassButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonShowcase;