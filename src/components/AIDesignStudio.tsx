import React, { useState, useRef } from 'react';
import { Wand2, Palette, Upload, Download, Settings, Info, ChevronRight, Check } from 'lucide-react';
import LoadingGear from './LoadingGear';
import RippleButton from './RippleButton';

interface AIDesignStudioProps {
  productType: 'tshirt' | 'hoodie' | 'mug' | 'poster';
  basePrice: number;
}

interface StepData {
  prompt: string;
  style: string;
  colors: string[];
  variations: number;
  customText: string;
  hasCustomText: boolean;
}

const AIDesignStudio: React.FC<AIDesignStudioProps> = ({ basePrice }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedDesigns, setGeneratedDesigns] = useState<string[]>([]);
  const [selectedDesign, setSelectedDesign] = useState<number | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form data
  const [stepData, setStepData] = useState<StepData>({
    prompt: '',
    style: 'robots',
    colors: ['#CD7F32', '#B87333'],
    variations: 1,
    customText: '',
    hasCustomText: false
  });

  // Steps configuration
  const steps = [
    { id: 'prompt', title: 'Design Brief', icon: Wand2 },
    { id: 'style', title: 'Style & Colors', icon: Palette },
    { id: 'options', title: 'Customization', icon: Settings },
    { id: 'generate', title: 'Generate', icon: Download }
  ];

  // Professional color palette
  const colorPalette = [
    { name: 'Brass', hex: '#CD7F32' },
    { name: 'Copper', hex: '#B87333' },
    { name: 'Bronze', hex: '#B8860B' },
    { name: 'Navy', hex: '#1A2634' },
    { name: 'Gunmetal', hex: '#5D5D5D' },
    { name: 'Iron', hex: '#434B4D' },
    { name: 'Silver', hex: '#C0C0C0' },
    { name: 'Parchment', hex: '#F8F5F0' }
  ];

  // Style categories
  const styleCategories = [
    { id: 'robots', name: 'Robots', description: 'Mechanical beings and automatons' },
    { id: 'vehicles', name: 'Vehicles', description: 'Steam-powered transportation' },
    { id: 'clockwork', name: 'Clockwork', description: 'Gears, cogs, and mechanisms' },
    { id: 'victorian', name: 'Victorian', description: 'Elegant vintage designs' },
    { id: 'skulls', name: 'Skulls', description: 'Gothic and macabre themes' },
    { id: 'typography', name: 'Typography', description: 'Vintage lettering and text' }
  ];

  // Pricing calculation
  const calculatePrice = () => {
    const AI_FEE = 5.00;
    const VARIATION_FEE = 3.00;
    const TEXT_FEE = 5.00;
    
    let total = basePrice + AI_FEE;
    if (stepData.variations > 1) {
      total += (stepData.variations - 1) * VARIATION_FEE;
    }
    if (stepData.hasCustomText && stepData.customText.trim()) {
      total += TEXT_FEE;
    }
    
    return total.toFixed(2);
  };

  // Validation
  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};
    
    switch (step) {
      case 0:
        if (!stepData.prompt.trim()) {
          newErrors.prompt = 'Please describe your design vision';
        }
        break;
      case 1:
        if (stepData.colors.length === 0) {
          newErrors.colors = 'Please select at least one color';
        }
        break;
      case 2:
        if (stepData.hasCustomText && !stepData.customText.trim()) {
          newErrors.customText = 'Please enter custom text or uncheck the option';
        }
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Navigation
  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep === steps.length - 1) {
        generateDesigns();
      } else {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Generate designs
  const generateDesigns = async () => {
    setIsGenerating(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Mock designs
    const mockDesigns = [
      'https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg',
      'https://images.pexels.com/photos/6045028/pexels-photo-6045028.jpeg',
      'https://images.pexels.com/photos/6045031/pexels-photo-6045031.jpeg',
      'https://images.pexels.com/photos/6045215/pexels-photo-6045215.jpeg'
    ];
    
    setGeneratedDesigns(mockDesigns);
    setIsGenerating(false);
  };

  // File upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log('File uploaded:', file.name);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-brass to-copper p-6">
        <h2 className="text-3xl font-head text-white">AI Design Studio</h2>
        <p className="text-parchment/90 mt-1">Create custom steampunk designs with AI</p>
      </div>

      {/* Progress Steps */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between px-6 py-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === currentStep;
            const isCompleted = index < currentStep || (index === currentStep && generatedDesigns.length > 0);
            
            return (
              <div key={step.id} className="flex items-center">
                <button
                  onClick={() => index < currentStep && setCurrentStep(index)}
                  disabled={index > currentStep}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    isActive
                      ? 'bg-brass text-white shadow-md'
                      : isCompleted
                      ? 'bg-green-100 text-green-700 cursor-pointer hover:bg-green-200'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {isCompleted && !isActive ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <Icon className="w-5 h-5" />
                  )}
                  <span className="font-medium">{step.title}</span>
                </button>
                {index < steps.length - 1 && (
                  <ChevronRight className="w-5 h-5 text-gray-400 mx-2" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {isGenerating ? (
          <div className="py-12 text-center">
            <LoadingGear size="lg" text="Creating your design..." variant="triple" />
          </div>
        ) : generatedDesigns.length > 0 ? (
          // Results view
          <div className="space-y-6">
            <h3 className="text-2xl font-head text-navy">Your Generated Designs</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {generatedDesigns.map((design, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedDesign(index)}
                  className={`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                    selectedDesign === index
                      ? 'border-brass shadow-lg scale-105'
                      : 'border-gray-300 hover:border-brass/50'
                  }`}
                >
                  <img src={design} alt={`Design ${index + 1}`} className="w-full h-48 object-cover" />
                  {selectedDesign === index && (
                    <div className="absolute inset-0 bg-brass/20 flex items-center justify-center">
                      <div className="bg-brass text-white px-3 py-1 rounded-full font-medium">
                        Selected
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <RippleButton
                onClick={() => {
                  setGeneratedDesigns([]);
                  setCurrentStep(0);
                }}
                variant="secondary"
                className="flex-1"
              >
                Start Over
              </RippleButton>
              <RippleButton
                onClick={() => console.log('Apply design')}
                variant="primary"
                className="flex-1"
                disabled={selectedDesign === null}
              >
                Apply Selected Design
              </RippleButton>
            </div>
          </div>
        ) : (
          // Step forms
          <div className="space-y-6">
            {/* Step 1: Design Brief */}
            {currentStep === 0 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-lg font-medium text-navy mb-2">
                    Describe Your Vision
                    <span className="text-sm text-gray-500 ml-2 font-normal">
                      Be specific about elements, style, and mood
                    </span>
                  </label>
                  <textarea
                    value={stepData.prompt}
                    onChange={(e) => setStepData({ ...stepData, prompt: e.target.value })}
                    placeholder="E.g., A majestic clockwork dragon with brass scales and steam exhaust..."
                    className={`w-full p-4 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-brass/50 ${
                      errors.prompt ? 'border-red-500' : 'border-gray-300'
                    }`}
                    rows={4}
                  />
                  {errors.prompt && (
                    <p className="text-red-500 text-sm mt-1">{errors.prompt}</p>
                  )}
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-navy mb-2 flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    Prompt Tips
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Include specific steampunk elements (gears, brass, steam, etc.)</li>
                    <li>• Mention preferred art style (realistic, vintage, mechanical)</li>
                    <li>• Describe the mood or atmosphere you want</li>
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-brass transition-colors"
                  >
                    <Upload className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                    <p className="text-gray-600">Or upload an image for AI enhancement</p>
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                </div>
              </div>
            )}

            {/* Step 2: Style & Colors */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-navy mb-4">Choose a Style Category</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {styleCategories.map((style) => (
                      <button
                        key={style.id}
                        onClick={() => setStepData({ ...stepData, style: style.id })}
                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                          stepData.style === style.id
                            ? 'border-brass bg-brass/10'
                            : 'border-gray-300 hover:border-brass/50'
                        }`}
                      >
                        <h4 className="font-medium text-navy">{style.name}</h4>
                        <p className="text-sm text-gray-600 mt-1">{style.description}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-navy mb-4">
                    Select Colors
                    {errors.colors && (
                      <span className="text-red-500 text-sm ml-2">{errors.colors}</span>
                    )}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {colorPalette.map((color) => (
                      <button
                        key={color.hex}
                        onClick={() => {
                          const colors = stepData.colors.includes(color.hex)
                            ? stepData.colors.filter(c => c !== color.hex)
                            : [...stepData.colors, color.hex];
                          setStepData({ ...stepData, colors });
                        }}
                        className={`group relative p-1 rounded-lg transition-all ${
                          stepData.colors.includes(color.hex)
                            ? 'ring-2 ring-brass ring-offset-2'
                            : 'hover:scale-110'
                        }`}
                      >
                        <div
                          className="w-16 h-16 rounded-lg shadow-md"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                          {color.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Customization */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-lg font-medium text-navy mb-4">
                    Number of Design Variations
                  </label>
                  <div className="flex items-center gap-4">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button
                        key={num}
                        onClick={() => setStepData({ ...stepData, variations: num })}
                        className={`w-12 h-12 rounded-lg border-2 font-medium transition-all ${
                          stepData.variations === num
                            ? 'border-brass bg-brass text-white'
                            : 'border-gray-300 hover:border-brass/50'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                  {stepData.variations > 1 && (
                    <p className="text-sm text-gray-600 mt-2">
                      +${((stepData.variations - 1) * 3).toFixed(2)} for {stepData.variations - 1} additional variations
                    </p>
                  )}
                </div>

                <div>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={stepData.hasCustomText}
                      onChange={(e) => setStepData({ ...stepData, hasCustomText: e.target.checked })}
                      className="w-5 h-5 text-brass rounded focus:ring-brass"
                    />
                    <span className="text-lg font-medium text-navy">Add Custom Text</span>
                    <span className="text-sm text-gray-600">(+$5.00)</span>
                  </label>
                  
                  {stepData.hasCustomText && (
                    <input
                      type="text"
                      value={stepData.customText}
                      onChange={(e) => setStepData({ ...stepData, customText: e.target.value })}
                      placeholder="Enter your custom text..."
                      className={`mt-3 w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-brass/50 ${
                        errors.customText ? 'border-red-500' : 'border-gray-300'
                      }`}
                      maxLength={50}
                    />
                  )}
                  {errors.customText && (
                    <p className="text-red-500 text-sm mt-1">{errors.customText}</p>
                  )}
                </div>
              </div>
            )}

            {/* Step 4: Review & Generate */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-navy">Review Your Design Request</h3>
                
                <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-700">Design Brief:</h4>
                    <p className="text-gray-600 mt-1">{stepData.prompt}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-700">Style:</h4>
                    <p className="text-gray-600 mt-1">
                      {styleCategories.find(s => s.id === stepData.style)?.name}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-700">Colors:</h4>
                    <div className="flex gap-2 mt-1">
                      {stepData.colors.map((hex) => (
                        <div
                          key={hex}
                          className="w-8 h-8 rounded border-2 border-gray-300"
                          style={{ backgroundColor: hex }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-700">Options:</h4>
                    <ul className="text-gray-600 mt-1">
                      <li>• {stepData.variations} design variation{stepData.variations > 1 ? 's' : ''}</li>
                      {stepData.hasCustomText && stepData.customText && (
                        <li>• Custom text: "{stepData.customText}"</li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Pricing breakdown */}
                <div className="border-t pt-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-gray-600">
                      <span>Base Price:</span>
                      <span>${basePrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>AI Design Creation:</span>
                      <span>$5.00</span>
                    </div>
                    {stepData.variations > 1 && (
                      <div className="flex justify-between text-gray-600">
                        <span>{stepData.variations - 1} Additional Variations:</span>
                        <span>${((stepData.variations - 1) * 3).toFixed(2)}</span>
                      </div>
                    )}
                    {stepData.hasCustomText && stepData.customText && (
                      <div className="flex justify-between text-gray-600">
                        <span>Custom Text:</span>
                        <span>$5.00</span>
                      </div>
                    )}
                    <div className="flex justify-between text-xl font-bold text-navy border-t pt-2">
                      <span>Total:</span>
                      <span className="text-brass">${calculatePrice()}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 pt-4 border-t">
              {currentStep > 0 && (
                <button
                  onClick={handleBack}
                  className="px-6 py-3 border-2 border-gray-300 rounded-lg hover:border-brass transition-colors"
                >
                  Back
                </button>
              )}
              <RippleButton
                onClick={handleNext}
                variant="primary"
                className="flex-1"
              >
                {currentStep === steps.length - 1 ? 'Generate Designs' : 'Next'}
              </RippleButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIDesignStudio;