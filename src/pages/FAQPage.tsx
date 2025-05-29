import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavbarPRD from '../components/NavbarPRD';
import FooterPRD from '../components/FooterPRD';
import OrnamentalDivider from '../components/OrnamentalDivider';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const location = useLocation();

  useEffect(() => {
    // Always start at top when page loads
    window.scrollTo(0, 0);
    
    // Check if we have a hash in the URL
    if (location.hash === '#process') {
      // Set the category to process
      setSelectedCategory('process');
    }
  }, []);
  
  useEffect(() => {
    // Handle hash changes after initial load
    if (location.hash === '#process') {
      setSelectedCategory('process');
    }
  }, [location.hash]);

  const faqs: FAQItem[] = [
    {
      question: "What sizes do you offer?",
      answer: "We offer a full range of sizes from XS to 3XL for most designs. Each product page includes a detailed size chart to help you find the perfect fit. Our shirts are true to size with a comfortable, classic fit.",
      category: "products"
    },
    {
      question: "What type of fabric do you use?",
      answer: "Our standard t-shirts are made from 100% premium ring-spun cotton for ultimate comfort and durability. Some specialty items may use cotton blends. All fabric details are listed on individual product pages.",
      category: "products"
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 5-7 business days within the US. International shipping usually takes 10-14 business days. Express shipping options are available at checkout for faster delivery.",
      category: "shipping"
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes! We ship to most countries worldwide. International shipping rates and delivery times vary by location. All customs and import duties are the responsibility of the customer.",
      category: "shipping"
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unworn items in original condition with tags attached. If you're not completely satisfied with your purchase, contact us for a return authorization and we'll make it right.",
      category: "returns"
    },
    {
      question: "Can I exchange an item for a different size?",
      answer: "Absolutely! We're happy to exchange items for a different size within 30 days of purchase. The item must be unworn with original tags. Contact our customer service team to arrange an exchange.",
      category: "returns"
    },
    {
      question: "How are your designs printed?",
      answer: "We use state-of-the-art direct-to-garment (DTG) printing technology for vibrant, long-lasting designs. This eco-friendly process ensures high-quality prints that won't crack, peel, or fade with proper care.",
      category: "products"
    },
    {
      question: "How do I care for my RoboInkTees shirt?",
      answer: "Machine wash cold, inside out, with like colors. Tumble dry low or hang to dry. Do not iron directly on the print. Following these care instructions will keep your shirt looking great for years.",
      category: "care"
    },
    {
      question: "Can I request a custom design?",
      answer: "Yes! We love bringing custom steampunk visions to life. Visit our Custom Requests section or contact us directly to discuss your ideas. Custom orders typically take 2-3 weeks.",
      category: "custom"
    },
    {
      question: "Do you offer bulk orders or wholesale?",
      answer: "We do offer bulk ordering for events, groups, and retailers. Contact us for wholesale pricing and minimum order quantities. Discounts are available for orders over 25 items.",
      category: "custom"
    },
    {
      question: "How does RoboInk Tees use AI in the creative process?",
      answer: "RoboInk Tees represents the future of creative commerce - we're a fully AI-driven company from concept to customer. Our proprietary AI generates unique steampunk designs by analyzing Victorian aesthetics, mechanical engineering patterns, and artistic trends. But it goes beyond just imagery - our entire business operates with AI autonomy: from website development and user experience design to marketing strategies and customer communications. This innovative approach allows us to offer truly unique designs at scale while maintaining the artistic integrity and quality our customers expect.",
      category: "process"
    },
    {
      question: "What makes your AI-generated designs special?",
      answer: "Our AI doesn't just randomly generate images - it's been trained on thousands of steampunk artworks, Victorian engineering diagrams, and mechanical illustrations. Each design goes through multiple AI review stages for quality, originality, and aesthetic appeal. The result is artwork that captures the essence of steampunk culture while introducing novel elements that human artists might not envision. Every piece is unique and can't be found anywhere else.",
      category: "process"
    },
    {
      question: "How does AI autonomy benefit customers?",
      answer: "Our AI-driven approach means faster turnaround times, consistent quality, and prices that reflect efficient operations. The AI handles everything from inventory predictions to personalized product recommendations, ensuring you find exactly what you're looking for. It also means we can quickly adapt to trends and customer feedback, creating new designs that match emerging interests in the steampunk community.",
      category: "process"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'products', name: 'Products' },
    { id: 'shipping', name: 'Shipping' },
    { id: 'returns', name: 'Returns & Exchanges' },
    { id: 'care', name: 'Care Instructions' },
    { id: 'custom', name: 'Custom Orders' },
    { id: 'process', name: 'Our AI Process' }
  ];

  const filteredFAQs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#efece9] animate-fade-in-from-top">
      <NavbarPRD />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy/10 to-transparent py-8 text-center">
        <h1 className="text-5xl font-slab font-bold text-navy drop-shadow-lg mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
          {selectedCategory === 'process' ? 'What Makes RoboInk Tees Different?' : 'Frequently Asked Questions'}
        </h1>
        <p className="text-xl text-[#800020] font-slab font-bold max-w-3xl mx-auto mb-4">
          {selectedCategory === 'process' 
            ? 'Discover our revolutionary AI-driven approach to steampunk design and commerce'
            : 'Find answers to common questions about our products, shipping, and more'}
        </p>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-8">
        {/* Category Filter */}
        <div className="flex justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-3 py-1.5 text-sm rounded-full border-2 transition-all whitespace-nowrap ${
                selectedCategory === category.id
                  ? 'border-navy bg-navy text-parchment'
                  : 'border-navy/30 text-navy hover:border-navy'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-2 border-navy rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#f2d19e] transition-colors"
              >
                <h3 className="text-lg font-slab font-semibold text-navy text-left">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-navy flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-navy flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 border-t border-navy/20 bg-[#f2d19e]">
                  <p className="text-navy/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <OrnamentalDivider className="my-16" bgColor="bg-[#efece9]" />

        {/* Contact Section */}
        <section className="text-center bg-white border-2 border-navy rounded-lg p-8">
          <h2 className="text-2xl font-slab font-bold text-navy mb-4">
            Still Have Questions?
          </h2>
          <p className="text-[#800020] mb-6">
            Our customer service team is here to help with any questions not covered above.
          </p>
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="px-6 py-3 bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-parchment font-slab font-semibold rounded-full hover:from-[#DAA520] hover:to-[#FFD700] transition-all duration-300"
            >
              Contact Support
            </Link>
          </div>
        </section>
      </main>

      <OrnamentalDivider className="mb-12 mt-12" bgColor="bg-[#efece9]" />
      <div className="h-1 bg-navy"></div>
      <FooterPRD />
    </div>
  );
};

export default FAQPage;