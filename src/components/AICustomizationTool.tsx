import React, { useState, useRef } from 'react';
import { Wand2, Palette, RefreshCw, Download, Upload, Layers } from 'lucide-react';

interface AICustomizationToolProps {
  productType: 'tshirt' | 'hoodie' | 'mug' | 'poster';
  basePrice: number;
}

const AICustomizationTool: React.FC<AICustomizationToolProps> = ({ basePrice }) => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedDesigns, setGeneratedDesigns] = useState<string[]>([]);
  const [selectedDesign, setSelectedDesign] = useState<number | null>(null);
  const [designStyle, setDesignStyle] = useState('robots');
  const [selectedColors, setSelectedColors] = useState<string[]>(['#B8860B', '#B87333']);
  const [numberOfLogos, setNumberOfLogos] = useState(1);
  const [includeCustomText, setIncludeCustomText] = useState(false);
  const [customText, setCustomText] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Safe base price parsing
  const safeBasePrice = Number(basePrice) || 0;

  // Simulated AI generation
  const generateDesign = async () => {
    setIsGenerating(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Generate mock designs
    const mockDesigns = [
      'https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg',
      'https://images.pexels.com/photos/6045028/pexels-photo-6045028.jpeg',
      'https://images.pexels.com/photos/6045031/pexels-photo-6045031.jpeg',
      'https://images.pexels.com/photos/6045215/pexels-photo-6045215.jpeg'
    ];
    
    setGeneratedDesigns(mockDesigns);
    setIsGenerating(false);
  };

  // Calculate dynamic pricing with safe number handling
  const calculatePrice = () => {
    const AI_CUSTOMIZATION_FEE = 5.00;
    const ADDITIONAL_LOGO_FEE = 3.00;
    const CUSTOM_TEXT_FEE = 5.00;
    
    // Safe calculation with proper number handling
    let totalPrice = safeBasePrice + AI_CUSTOMIZATION_FEE;
    
    // Add fees for additional logos (first one is included)
    if (numberOfLogos > 1) {
      totalPrice += (numberOfLogos - 1) * ADDITIONAL_LOGO_FEE;
    }
    
    // Add fee for custom text
    if (includeCustomText && customText.trim()) {
      totalPrice += CUSTOM_TEXT_FEE;
    }
    
    return totalPrice.toFixed(2);
  };

  // Style presets matching ALL site categories
  const stylePresets = [
    { 
      id: 'robots', 
      name: 'Robots',
      gradient: 'from-slate-700 via-zinc-600 to-slate-500'
    },
    { 
      id: 'vehicles', 
      name: 'Vehicles',
      gradient: 'from-amber-700 via-orange-600 to-amber-500'
    },
    { 
      id: 'clockwork-creatures', 
      name: 'Clockwork Creatures',
      gradient: 'from-emerald-700 via-teal-600 to-cyan-600'
    },
    { 
      id: 'gadgetry-gizmos', 
      name: 'Gadgetry & Gizmos',
      gradient: 'from-purple-700 via-fuchsia-600 to-pink-600'
    },
    {
      id: 'typographic-treasures',
      name: 'Typographic Treasures',
      gradient: 'from-indigo-700 via-blue-600 to-sky-600'
    },
    { 
      id: 'victorian-vanguard', 
      name: 'Victorian Vanguard',
      gradient: 'from-rose-800 via-rose-700 to-pink-600'
    },
    {
      id: 'retro-futurism',
      name: 'Retro Futurism',
      gradient: 'from-orange-700 via-red-600 to-orange-500'
    },
    {
      id: 'skulls',
      name: 'Skulls',
      gradient: 'from-gray-900 via-gray-700 to-gray-600'
    }
  ];

  // Steampunk color palette arranged by color spectrum
  const steampunkColors = [
    // Blacks & Grays (Neutrals)
    { name: 'Coal Black', hex: '#1A1A1A' },
    { name: 'Soot', hex: '#2B2B2B' },
    { name: 'Iron', hex: '#434B4D' },
    { name: 'Gunmetal', hex: '#5D5D5D' },
    { name: 'Steel', hex: '#71797E' },
    { name: 'Pewter', hex: '#899499' },
    { name: 'Silver', hex: '#C0C0C0' },
    
    // Browns (Warm Neutrals)
    { name: 'Dark Mahogany', hex: '#420C09' },
    { name: 'Walnut', hex: '#5D4E37' },
    { name: 'Sepia', hex: '#704214' },
    { name: 'Rust', hex: '#B7410E' },
    { name: 'Sienna', hex: '#A0522D' },
    
    // Oranges & Coppers
    { name: 'Burnt Orange', hex: '#CC5500' },
    { name: 'Copper', hex: '#B87333' },
    { name: 'Bright Copper', hex: '#DA8A67' },
    { name: 'Light Copper', hex: '#FAA76C' },
    
    // Yellows & Golds
    { name: 'Bronze', hex: '#CD7F32' },
    { name: 'Brass', hex: '#B8860B' },
    { name: 'Antique Brass', hex: '#CD9575' },
    { name: 'Gold', hex: '#FFD700' },
    { name: 'Champagne', hex: '#F7E7CE' },
    
    // Greens (Patina)
    { name: 'Dark Verdigris', hex: '#2F5050' },
    { name: 'Verdigris', hex: '#43B3AE' },
    { name: 'Jade', hex: '#00A86B' },
    { name: 'Sage', hex: '#87A96B' },
    
    // Blues (Rare in steampunk)
    { name: 'Midnight', hex: '#191970' },
    { name: 'Navy', hex: '#223344' },
    { name: 'Slate Blue', hex: '#4B5D7B' },
    
    // Creams & Whites
    { name: 'Parchment', hex: '#FCF5E5' },
    { name: 'Ivory', hex: '#FFFFF0' },
    { name: 'Pearl', hex: '#F8F6F0' }
  ];

  // Toggle color selection
  const toggleColor = (hex: string) => {
    if (selectedColors.includes(hex)) {
      setSelectedColors(selectedColors.filter(c => c !== hex));
    } else {
      setSelectedColors([...selectedColors, hex]);
    }
  };

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log('File selected:', file.name);
      // In production, handle file upload to your API
    }
  };

  return (
    <div className="bg-gradient-to-b from-stone-50 to-stone-100 rounded-lg border-2 border-amber-500 p-6 shadow-2xl">
      {/* Header with elegant mirrored gears and steampunk fonts */}
      <div className="relative mb-6">
        <h2 className="text-3xl font-bold text-slate-900 text-center flex items-center justify-center gap-4">
          {/* Left elegant gear icon */}
          <svg viewBox="0 0 48 48" className="w-12 h-12 animate-spin" style={{animationDuration: '12s'}}>
            <g>
              <path 
                d="M24 8 L26 2 L22 2 Z M24 40 L22 46 L26 46 Z M40 24 L46 22 L46 26 Z M8 24 L2 26 L2 22 Z M35.3 12.7 L39.9 6.1 L36.4 4.6 L33.9 8.1 Z M12.7 35.3 L8.1 39.9 L11.6 41.4 L14.1 37.9 Z M35.3 35.3 L37.9 38.9 L41.4 36.4 L39.9 33.9 Z M12.7 12.7 L10.1 9.1 L6.6 11.6 L8.1 14.1 Z" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1" 
                className="text-amber-600"
              />
              <circle cx="24" cy="24" r="16" fill="none" stroke="currentColor" strokeWidth="1" className="text-amber-500"/>
              <circle cx="24" cy="24" r="12" fill="none" stroke="currentColor" strokeWidth="1" className="text-amber-400"/>
              <circle cx="24" cy="24" r="6" fill="currentColor" className="text-amber-600" opacity="0.3"/>
            </g>
          </svg>
          
          <span style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.05em' }}>
            AI Design Studio
          </span>
          
          {/* Right elegant gear icon - with proper counter-rotation */}
          <svg viewBox="0 0 48 48" className="w-12 h-12 animate-spin-reverse" style={{animationDuration: '12s'}}>
            <g>
              <path 
                d="M24 8 L26 2 L22 2 Z M24 40 L22 46 L26 46 Z M40 24 L46 22 L46 26 Z M8 24 L2 26 L2 22 Z M35.3 12.7 L39.9 6.1 L36.4 4.6 L33.9 8.1 Z M12.7 35.3 L8.1 39.9 L11.6 41.4 L14.1 37.9 Z M35.3 35.3 L37.9 38.9 L41.4 36.4 L39.9 33.9 Z M12.7 12.7 L10.1 9.1 L6.6 11.6 L8.1 14.1 Z" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1" 
                className="text-amber-600"
              />
              <circle cx="24" cy="24" r="16" fill="none" stroke="currentColor" strokeWidth="1" className="text-amber-500"/>
              <circle cx="24" cy="24" r="12" fill="none" stroke="currentColor" strokeWidth="1" className="text-amber-400"/>
              <circle cx="24" cy="24" r="6" fill="currentColor" className="text-amber-600" opacity="0.3"/>
            </g>
          </svg>
        </h2>
        <p className="text-center text-amber-700 mt-2" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontStyle: 'italic' }}>
          Forge your mechanical masterpiece
        </p>
      </div>

      {/* Design Input Section */}
      <div className="space-y-6">
        {/* Prompt Input */}
        <div className="relative">
          <label className="block text-slate-900 font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem' }}>
            Describe Your Vision
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value.slice(0, 200))}
            placeholder="E.g., 'A majestic clockwork owl with brass wings perched on Victorian gears'"
            className="w-full p-4 border-2 border-amber-500 rounded-lg bg-white/80 backdrop-blur-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all resize-none"
            rows={3}
            style={{ fontFamily: "'Georgia', serif" }}
          />
          <div className="absolute bottom-2 right-2 text-xs text-slate-600">
            {prompt.length}/200
          </div>
        </div>

        {/* Collection Selection */}
        <div>
          <label className="block text-slate-900 font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem' }}>
            Choose Your Collection
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {stylePresets.map((style) => (
              <button
                key={style.id}
                onClick={() => setDesignStyle(style.id)}
                className={`relative overflow-hidden p-4 rounded-lg border-2 transition-all duration-300 ${
                  designStyle === style.id
                    ? 'border-slate-900 scale-105 shadow-xl'
                    : 'border-slate-300 hover:border-slate-500'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-90`}></div>
                <p className="relative z-10 text-base font-bold text-white text-center drop-shadow-lg" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.02em' }}>
                  {style.name}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Color Palette Selection */}
        <div>
          <label className="block text-slate-900 font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem' }}>
            Select Your Colors
            <span className="text-sm font-normal text-slate-600 ml-2" style={{ fontFamily: "'Georgia', serif" }}>
              (Choose any combination)
            </span>
          </label>
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-2 p-4 bg-white rounded-lg border-2 border-slate-200 min-w-fit">
              {steampunkColors.map((color) => (
                <button
                  key={color.hex}
                  onClick={() => toggleColor(color.hex)}
                  className={`group relative flex-shrink-0 transition-all duration-200 ${
                    selectedColors.includes(color.hex) 
                      ? 'scale-110' 
                      : 'hover:scale-105'
                  }`}
                  title={color.name}
                >
                  <div 
                    className={`w-14 h-14 rounded-lg shadow-md transition-all duration-200 ${
                      selectedColors.includes(color.hex)
                        ? 'ring-4 ring-slate-900 ring-offset-2'
                        : 'hover:shadow-lg'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {color.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
          {selectedColors.length > 0 && (
            <p className="text-sm text-slate-600 mt-2" style={{ fontFamily: "'Georgia', serif" }}>
              Selected: {selectedColors.length} color{selectedColors.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {/* Customization Options */}
        <div className="space-y-4">
          <div>
            <label className="block text-slate-900 font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem' }}>
              Number of Logo Variations
            </label>
            <div className="flex items-center gap-4">
              <input
                type="number"
                min="1"
                max="5"
                value={numberOfLogos}
                onChange={(e) => setNumberOfLogos(Math.min(5, Math.max(1, parseInt(e.target.value) || 1)))}
                className="w-20 px-3 py-2 border-2 border-amber-500 rounded-lg text-center font-semibold focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                style={{ fontFamily: "'Georgia', serif" }}
              />
              <span className="text-sm text-slate-600" style={{ fontFamily: "'Georgia', serif" }}>
                variations of your design
              </span>
            </div>
            {numberOfLogos > 1 && (
              <p className="text-xs text-amber-600 mt-1" style={{ fontFamily: "'Georgia', serif" }}>
                +${((numberOfLogos - 1) * 3).toFixed(2)} for additional variations
              </p>
            )}
          </div>

          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={includeCustomText}
                onChange={(e) => setIncludeCustomText(e.target.checked)}
                className="w-5 h-5 text-amber-600 border-2 border-amber-500 rounded focus:ring-amber-500"
              />
              <span className="text-slate-900 font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>Add Custom Text</span>
              <span className="text-sm text-amber-600" style={{ fontFamily: "'Georgia', serif" }}>+$5.00</span>
            </label>
            {includeCustomText && (
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Enter your custom text..."
                className="mt-2 w-full px-4 py-2 border-2 border-amber-500 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                maxLength={50}
                style={{ fontFamily: "'Georgia', serif" }}
              />
            )}
          </div>
        </div>

        {/* Upload Option */}
        <div className="border-t-2 border-amber-300 pt-4">
          <p className="text-sm text-slate-600 mb-3 text-center" style={{ fontFamily: "'Georgia', serif", fontStyle: 'italic' }}>
            Or transform your own image
          </p>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileUpload}
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-full p-3 border-2 border-dashed border-amber-500 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Upload className="w-5 h-5 text-amber-600" />
            <span className="text-slate-900 font-medium" style={{ fontFamily: "'Cinzel', serif" }}>Upload Image</span>
          </button>
        </div>

        {/* Generate Button */}
        <button
          onClick={generateDesign}
          disabled={!prompt || isGenerating}
          className={`w-full py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
            isGenerating || !prompt
              ? 'bg-gray-400 cursor-not-allowed text-gray-200'
              : 'bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:shadow-xl hover:scale-105 text-white'
          }`}
          style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.05em' }}
        >
          {isGenerating ? (
            <>
              <RefreshCw className="w-6 h-6 animate-spin" />
              Forging Your Design...
            </>
          ) : (
            <>
              <Wand2 className="w-6 h-6" />
              Generate Design (${calculatePrice()})
            </>
          )}
        </button>

        {/* Generated Designs Grid */}
        {generatedDesigns.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Your AI Creations</h3>
            <div className="grid grid-cols-2 gap-4">
              {generatedDesigns.map((design, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedDesign(index)}
                  className={`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    selectedDesign === index
                      ? 'border-orange-500 scale-105 shadow-xl'
                      : 'border-amber-300 hover:border-amber-500'
                  }`}
                >
                  <img
                    src={design}
                    alt={`Generated design ${index + 1}`}
                    className="w-full h-40 object-cover"
                  />
                  {selectedDesign === index && (
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end justify-center pb-2">
                      <span className="text-white font-bold text-sm" style={{ fontFamily: "'Cinzel', serif" }}>Selected</span>
                    </div>
                  )}
                  
                  {/* Design tools overlay */}
                  <div className="absolute top-2 right-2 flex gap-1">
                    <button className="p-1.5 bg-slate-900/70 backdrop-blur-sm rounded-full text-white hover:bg-slate-900/90 transition-all">
                      <Palette className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 bg-slate-900/70 backdrop-blur-sm rounded-full text-white hover:bg-slate-900/90 transition-all">
                      <Layers className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Action buttons */}
            <div className="flex gap-3 mt-4">
              <button
                onClick={generateDesign}
                className="flex-1 py-3 border-2 border-amber-500 rounded-full font-medium hover:bg-amber-50 transition-all duration-300 flex items-center justify-center gap-2 text-slate-900"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                <RefreshCw className="w-5 h-5" />
                Regenerate
              </button>
              <button
                disabled={selectedDesign === null}
                className="flex-1 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.03em' }}
              >
                <Download className="w-5 h-5" />
                Apply Design
              </button>
            </div>
          </div>
        )}

        {/* Price breakdown with safe calculations */}
        <div className="border-t-2 border-amber-300 pt-4 mt-6">
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-600" style={{ fontFamily: "'Georgia', serif" }}>Base Price:</span>
            <span className="font-medium" style={{ fontFamily: "'Georgia', serif" }}>${safeBasePrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center text-sm mt-1">
            <span className="text-slate-600" style={{ fontFamily: "'Georgia', serif" }}>AI Design Creation:</span>
            <span className="font-medium" style={{ fontFamily: "'Georgia', serif" }}>$5.00</span>
          </div>
          {numberOfLogos > 1 && (
            <div className="flex justify-between items-center text-sm mt-1">
              <span className="text-slate-600" style={{ fontFamily: "'Georgia', serif" }}>{numberOfLogos - 1} Additional Variations:</span>
              <span className="font-medium" style={{ fontFamily: "'Georgia', serif" }}>${((numberOfLogos - 1) * 3).toFixed(2)}</span>
            </div>
          )}
          {includeCustomText && customText.trim() && (
            <div className="flex justify-between items-center text-sm mt-1">
              <span className="text-slate-600" style={{ fontFamily: "'Georgia', serif" }}>Custom Text:</span>
              <span className="font-medium" style={{ fontFamily: "'Georgia', serif" }}>$5.00</span>
            </div>
          )}
          <div className="flex justify-between items-center text-lg font-bold mt-3 pt-2 border-t border-amber-300">
            <span className="text-slate-900" style={{ fontFamily: "'Playfair Display', serif" }}>Total:</span>
            <span className="text-orange-600" style={{ fontFamily: "'Cinzel', serif" }}>${calculatePrice()}</span>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 12s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AICustomizationTool;