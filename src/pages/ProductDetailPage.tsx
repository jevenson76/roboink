import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavbarPRD from '../components/NavbarPRD';
import FooterPRD from '../components/FooterPRD';
import OrnamentalDivider from '../components/OrnamentalDivider';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find(p => p.id === parseInt(id || '0'));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!product) {
      navigate('/collections');
    }
  }, [product, navigate]);

  if (!product) {
    return null;
  }

  const productImages = [
    product.image,
    product.image, // Placeholder - in real app would have multiple images
    product.image
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL'];
  const features = [
    "Handmade with premium 100% cotton fabric",
    "Hand-printed vintage-inspired steampunk design",
    "Comfortable classic fit",
    "Machine washable (cold, inside out)",
    "Ethically sourced materials",
    "Each piece uniquely crafted by hand"
  ];

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      size: selectedSize
    }, quantity);
  };

  return (
    <div className="min-h-screen bg-[#efece9] animate-fade-in-from-top">
      <NavbarPRD />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden border-2 border-navy">
              <img 
                src={productImages[selectedImage]} 
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-navy' : 'border-navy/30 hover:border-navy/60'
                  }`}
                >
                  <img src={image} alt={`${product.title} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-slab font-bold text-navy mb-2">{product.title}</h1>
              <p className="text-3xl font-bold text-navy">${product.price}</p>
            </div>

            <p className="text-navy/80 text-lg leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-slab font-bold text-navy mb-3">Size</h3>
              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 border-2 rounded-lg font-semibold transition-all ${
                      selectedSize === size
                        ? 'border-navy bg-navy text-parchment'
                        : 'border-navy text-navy hover:bg-navy/10'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-slab font-bold text-navy mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border-2 border-navy rounded-lg hover:bg-navy hover:text-parchment transition-all"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="text-xl font-bold text-navy w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border-2 border-navy rounded-lg hover:bg-navy hover:text-parchment transition-all"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button 
              onClick={handleAddToCart}
              className="w-full py-4 bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-parchment font-slab font-bold text-xl rounded-full hover:from-[#DAA520] hover:to-[#FFD700] transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg"
            >
              <ShoppingCart className="w-6 h-6" />
              <span>Add to Cart</span>
            </button>

            {/* Features */}
            <div className="border-t border-navy/20 pt-6">
              <h3 className="text-lg font-slab font-bold text-navy mb-4">Product Features</h3>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start text-navy/80">
                    <span className="text-[#800020] mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <OrnamentalDivider className="my-16" bgColor="bg-[#efece9]" />

        {/* Related Products */}
        <section>
          <h2 className="text-3xl font-slab font-bold text-navy text-center mb-8">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Placeholder for related products */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border-2 border-navy rounded-lg overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-square bg-white"></div>
                <div className="p-4 bg-[#f2d19e]">
                  <h3 className="font-slab font-bold text-navy mb-2">Related Product {i}</h3>
                  <p className="text-navy">$39.99</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <div className="h-1 bg-navy mt-16"></div>
      <FooterPRD />
    </div>
  );
};

export default ProductDetailPage;