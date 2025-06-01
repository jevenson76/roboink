import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, Share2, ZoomIn, ChevronLeft, ChevronRight, Package, Shield, Truck, Star } from 'lucide-react';
import RobustNavbar from '../components/RobustNavbar';
import FooterPRD from '../components/FooterPRD';
import SteampunkGearDivider from '../components/SteampunkGearDivider';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import steampunkBg from '../assets/steampunkgeardivider.png';

const PremiumProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const product = products.find(p => p.id === parseInt(id || '0'));
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <div>Product not found</div>;
  }

  // Mock multiple images for gallery
  const productImages = [product.image, product.image, product.image, product.image];
  
  const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL'];
  
  const handleAddToCart = () => {
    addToCart({
      id: product.id.toString(),
      title: product.title,
      price: product.price,
      image: product.image,
      size: selectedSize,
      quantity: quantity
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div className="min-h-screen bg-[#f8f5f0] relative overflow-hidden">
      {/* Textured Background */}
      <div 
        className="fixed inset-0 opacity-5 z-0"
        style={{
          backgroundImage: `url(${steampunkBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply'
        }}
      />
      
      {/* Subtle Pattern Overlay */}
      <div className="fixed inset-0 opacity-10 z-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(184, 134, 11, 0.03) 10px,
              rgba(184, 134, 11, 0.03) 20px
            )`
          }}
        />
      </div>

      <RobustNavbar />
      
      {/* Breadcrumb - Luxury Style */}
      <nav className="relative z-10 max-w-7xl mx-auto px-6 py-6">
        <ol className="flex items-center space-x-2 text-sm">
          <li><a href="/" className="text-brass hover:text-copper transition-colors">Home</a></li>
          <li className="text-brass/50">/</li>
          <li><a href="/collections" className="text-brass hover:text-copper transition-colors">Collections</a></li>
          <li className="text-brass/50">/</li>
          <li className="text-navy font-medium">{product.title}</li>
        </ol>
      </nav>

      {/* Main Product Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Image Gallery - Left Side */}
          <div className="space-y-6">
            {/* Main Image with Zoom */}
            <div 
              className="relative bg-white rounded-2xl shadow-2xl overflow-hidden group cursor-zoom-in"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={productImages[selectedImageIndex]}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300"
                  style={{
                    transform: isZoomed ? 'scale(2)' : 'scale(1)',
                    transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`
                  }}
                />
                
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-5 h-5 text-navy" />
                </div>
              </div>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="flex gap-4 justify-center">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all ${
                    selectedImageIndex === index 
                      ? 'ring-2 ring-brass shadow-lg scale-110' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info - Right Side */}
          <div className="space-y-8">
            {/* Title Section */}
            <div>
              <h1 
                className="text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-brass via-copper to-brass bg-clip-text text-transparent"
                style={{ fontFamily: 'Sylpheed, serif' }}
              >
                {product.title}
              </h1>
              
              {/* Rating */}
              {product.rating && (
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star}
                        className={`w-5 h-5 ${
                          star <= Math.round(product.rating!) 
                            ? 'text-brass fill-brass' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-navy/70">({product.reviewCount} reviews)</span>
                </div>
              )}
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-4">
              <span 
                className="text-6xl font-bold text-navy"
                style={{ fontFamily: 'Sylpheed, serif' }}
              >
                ${product.price}
              </span>
              <span className="text-lg text-navy/50 line-through">$49.99</span>
              <span className="px-3 py-1 bg-brass/20 text-brass rounded-full text-sm font-medium">
                Save 30%
              </span>
            </div>

            {/* Ornamental Divider */}
            <div className="relative py-4">
              <svg width="100%" height="2" className="text-brass/30">
                <line x1="0" y1="1" x2="100%" y2="1" stroke="currentColor" strokeWidth="1" />
              </svg>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f8f5f0] px-4">
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-brass">
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                  {Array.from({ length: 8 }).map((_, i) => {
                    const angle = (i * 45) * Math.PI / 180;
                    const x1 = 12 + 6 * Math.cos(angle);
                    const y1 = 12 + 6 * Math.sin(angle);
                    const x2 = 12 + 9 * Math.cos(angle);
                    const y2 = 12 + 9 * Math.sin(angle);
                    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1.5" />;
                  })}
                </svg>
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-lg text-navy/80">
              <p>{product.description || 'A masterpiece of steampunk design, this unique piece combines Victorian elegance with industrial innovation. Each item is carefully crafted to bring the aesthetic of brass gears, copper pipes, and mechanical wonder to your wardrobe.'}</p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-navy mb-4">Select Size</h3>
              <div className="grid grid-cols-6 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 rounded-lg border-2 font-medium transition-all ${
                      selectedSize === size
                        ? 'border-brass bg-brass text-white shadow-lg scale-105'
                        : 'border-gray-300 hover:border-brass/50 text-navy'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <a href="/size-guide" className="inline-block mt-3 text-sm text-brass hover:text-copper underline">
                Size Guide
              </a>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold text-navy mb-4">Quantity</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 rounded-full border-2 border-gray-300 hover:border-brass flex items-center justify-center transition-colors"
                >
                  -
                </button>
                <span className="text-2xl font-medium text-navy w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 rounded-full border-2 border-gray-300 hover:border-brass flex items-center justify-center transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                className="w-full py-6 bg-gradient-to-r from-brass to-copper text-white font-bold text-xl rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group"
                style={{ fontFamily: 'Sylpheed, serif' }}
              >
                <ShoppingCart className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Add to Cart
              </button>
              
              <div className="flex gap-4">
                <button className="flex-1 py-4 border-2 border-brass text-brass rounded-xl hover:bg-brass/5 transition-colors flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5" />
                  Save to Wishlist
                </button>
                <button className="flex-1 py-4 border-2 border-brass text-brass rounded-xl hover:bg-brass/5 transition-colors flex items-center justify-center gap-2">
                  <Share2 className="w-5 h-5" />
                  Share
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-brass/20">
              <div className="text-center">
                <Package className="w-8 h-8 mx-auto mb-2 text-brass" />
                <p className="text-sm font-medium text-navy">Free Shipping</p>
                <p className="text-xs text-navy/60">On orders over $50</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-2 text-brass" />
                <p className="text-sm font-medium text-navy">Secure Payment</p>
                <p className="text-xs text-navy/60">100% Protected</p>
              </div>
              <div className="text-center">
                <Truck className="w-8 h-8 mx-auto mb-2 text-brass" />
                <p className="text-sm font-medium text-navy">Easy Returns</p>
                <p className="text-xs text-navy/60">30 Day Policy</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Product Details Tabs */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div>
              <h3 
                className="text-2xl font-bold text-navy mb-4"
                style={{ fontFamily: 'Sylpheed, serif' }}
              >
                Features
              </h3>
              <ul className="space-y-3 text-navy/80">
                <li className="flex items-start gap-3">
                  <span className="text-brass mt-1">•</span>
                  <span>Premium ring-spun cotton fabric</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brass mt-1">•</span>
                  <span>Direct-to-garment printing for lasting quality</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brass mt-1">•</span>
                  <span>Ethically sourced and sustainably made</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brass mt-1">•</span>
                  <span>Machine washable with colorfast technology</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 
                className="text-2xl font-bold text-navy mb-4"
                style={{ fontFamily: 'Sylpheed, serif' }}
              >
                Materials
              </h3>
              <div className="space-y-4 text-navy/80">
                <div>
                  <p className="font-medium">Fabric Composition:</p>
                  <p>100% Premium Ring-Spun Cotton</p>
                </div>
                <div>
                  <p className="font-medium">Weight:</p>
                  <p>5.3 oz/yd² (180 g/m²)</p>
                </div>
                <div>
                  <p className="font-medium">Fit:</p>
                  <p>Classic unisex fit, true to size</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 
                className="text-2xl font-bold text-navy mb-4"
                style={{ fontFamily: 'Sylpheed, serif' }}
              >
                Care Instructions
              </h3>
              <ul className="space-y-3 text-navy/80">
                <li className="flex items-start gap-3">
                  <span className="text-brass mt-1">•</span>
                  <span>Machine wash cold, inside out</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brass mt-1">•</span>
                  <span>Tumble dry low or hang to dry</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brass mt-1">•</span>
                  <span>Do not iron directly on print</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brass mt-1">•</span>
                  <span>Do not dry clean</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SteampunkGearDivider className="my-16" />

      {/* Related Products Carousel */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <h2 
          className="text-4xl lg:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-brass via-copper to-brass bg-clip-text text-transparent"
          style={{ fontFamily: 'Sylpheed, serif' }}
        >
          You Might Also Like
        </h2>
        
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
            {products.filter(p => p.id !== product.id).slice(0, 4).map((relatedProduct) => (
              <div 
                key={relatedProduct.id}
                className="flex-none w-80 group"
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-navy mb-2 line-clamp-2">
                      {relatedProduct.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-brass">${relatedProduct.price}</span>
                      <button 
                        onClick={() => navigate(`/product/${relatedProduct.id}`)}
                        className="px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Carousel Navigation */}
          <button className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors">
            <ChevronLeft className="w-6 h-6 text-navy" />
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors">
            <ChevronRight className="w-6 h-6 text-navy" />
          </button>
        </div>
      </section>

      <FooterPRD />
    </div>
  );
};

export default PremiumProductDetailPage;