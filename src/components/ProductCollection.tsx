import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Sliders, ChevronDown, ChevronUp } from 'lucide-react';

const products = [
  {
    id: 1,
    title: "Clockwork Cogwheel Tee",
    price: 35.99,
    image: "https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "Steampunk Aviator Shirt",
    price: 42.99,
    image: "https://images.pexels.com/photos/6045028/pexels-photo-6045028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "Victorian Engineer Hoodie",
    price: 59.99,
    image: "https://images.pexels.com/photos/6045031/pexels-photo-6045031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    title: "Brass Gears Graphic Tee",
    price: 32.99,
    image: "https://images.pexels.com/photos/6045215/pexels-photo-6045215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 5,
    title: "Airship Captain Jacket",
    price: 89.99,
    image: "https://images.pexels.com/photos/6045020/pexels-photo-6045020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 6,
    title: "Time Traveler Vest",
    price: 64.99,
    image: "https://images.pexels.com/photos/6045242/pexels-photo-6045242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const ProductCollection: React.FC = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const toggleSize = (size: string) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter(s => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  const toggleColor = (color: string) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter(c => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  return (
    <div className="bg-deep-navy py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-creamy-ivory text-center">Featured Collection</h2>
        </div>
        <div className="flex justify-end mb-8">
          <button 
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex items-center text-brass-gold hover:text-copper transition-colors duration-300"
          >
            <Sliders className="h-5 w-5 mr-2" />
            <span>Filters</span>
            {filtersOpen ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
          </button>
        </div>

        {/* Filters */}
        {filtersOpen && (
          <div className="mb-8 p-6 bg-warm-brown/20 rounded-lg border-2 border-brass-gold shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Price Range */}
              <div>
                <h3 className="text-creamy-ivory font-bold mb-3">Price Range</h3>
                <div className="px-2">
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={priceRange[1]} 
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-warm-brown/40 rounded-lg appearance-none cursor-pointer accent-brass-gold"
                  />
                  <div className="flex justify-between text-creamy-ivory text-sm mt-2">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Sizes */}
              <div>
                <h3 className="text-creamy-ivory font-bold mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`px-3 py-1 rounded border ${
                        selectedSizes.includes(size) 
                          ? 'bg-brass-gold text-deep-navy border-brass-gold' 
                          : 'bg-transparent text-creamy-ivory border-warm-brown/40 hover:border-brass-gold'
                      } transition-colors duration-300`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div>
                <h3 className="text-creamy-ivory font-bold mb-3">Color</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'Brass', color: '#D4B483' },
                    { name: 'Copper', color: '#E7A977' },
                    { name: 'Teal', color: '#6DC6C4' },
                    { name: 'Navy', color: '#2C3A47' },
                    { name: 'Mint', color: '#B8E3D8' }
                  ].map(color => (
                    <button
                      key={color.name}
                      onClick={() => toggleColor(color.name)}
                      className={`w-8 h-8 rounded-full border-2 ${
                        selectedColors.includes(color.name) 
                          ? 'border-white ring-2 ring-brass-gold' 
                          : 'border-warm-brown/40'
                      } transition-all duration-300`}
                      style={{ backgroundColor: color.color }}
                      title={color.name}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load more button */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-transparent text-brass-gold rounded-md font-bold text-lg transition-all duration-300 hover:text-creamy-ivory border-2 border-brass-gold hover:border-creamy-ivory hover:shadow-[0_0_15px_rgba(212,180,131,0.4)]">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCollection;