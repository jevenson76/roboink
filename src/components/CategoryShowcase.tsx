import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data/categories';
import BrassButton from './BrassButton';

const CategoryShowcase: React.FC = () => {
  const [customText, setCustomText] = useState('');
  const navigate = useNavigate();

  return (
    <div className="bg-deep-navy py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-creamy-ivory text-center mb-12">
          Explore Our Collections
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="bg-gradient-to-b from-warm-brown/20 to-brass-gold/10 rounded-lg p-6 border-2 border-brass-gold hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-brass-gold mb-3">
                {category.name}
              </h3>
              
              {category.description && (
                <p className="text-creamy-ivory/80 mb-4">
                  {category.description}
                </p>
              )}
              
              {category.subcategories && (
                <ul className="space-y-2 mb-4">
                  {category.subcategories.map((sub) => (
                    <li key={sub.id} className="text-creamy-ivory/70 flex items-start">
                      <span className="text-brass-gold mr-2">•</span>
                      <div>
                        <span className="font-semibold">{sub.name}</span>
                        {sub.description && (
                          <span className="text-sm block text-creamy-ivory/60">
                            {sub.description}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              
              {category.isCustom ? (
                <div className="space-y-4">
                  <textarea
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    placeholder="Enter your custom design request..."
                    className="w-full p-3 bg-deep-navy/50 border-2 border-brass-gold/50 rounded-lg text-creamy-ivory placeholder-creamy-ivory/50 focus:border-brass-gold focus:outline-none resize-none h-24"
                  />
                  <BrassButton 
                    onClick={() => {
                      navigate('/custom-requests');
                    }}
                    className="w-full"
                  >
                    Add Custom Design
                  </BrassButton>
                </div>
              ) : (
                <BrassButton 
                  onClick={() => {
                    navigate(`/collections?category=${category.id}`);
                  }}
                  variant="secondary"
                  className="w-full"
                >
                  Browse Collection
                </BrassButton>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryShowcase;