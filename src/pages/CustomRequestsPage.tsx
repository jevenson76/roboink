import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavbarPRD from '../components/NavbarPRD';
import FooterPRD from '../components/FooterPRD';
import OrnamentalDivider from '../components/OrnamentalDivider';

const CustomRequestsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#efece9] animate-fade-in-from-top">
      <NavbarPRD />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-navy/10 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-slab font-bold text-navy drop-shadow-lg mb-6" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
            Custom Design Requests
          </h1>
          <p className="text-xl text-[#800020] font-slab font-bold leading-relaxed">
            Bring your steampunk vision to life with our custom design service
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Introduction */}
        <section className="mb-16">
          <div className="bg-white border-2 border-navy rounded-lg p-8">
            <h2 className="text-3xl font-slab font-bold text-navy mb-6">Create Your Dream Design</h2>
            <p className="text-lg text-navy/80 leading-relaxed">
              At RoboInkTees, we understand that sometimes you have a specific vision that goes beyond our 
              current collection. That's why we offer custom design services to bring your unique steampunk 
              ideas to life. Whether it's a mechanical dragon, a clockwork portrait, or a Victorian-inspired 
              robot design, our talented artists are here to help.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-slab font-bold text-navy mb-8">How It Works</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#B8860B] border-2 border-navy rounded-full flex items-center justify-center">
                <span className="text-parchment font-slab font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-slab font-bold text-navy mb-2">Submit Your Request</h3>
                <p className="text-navy/80">
                  Send us your design idea with as much detail as possible. Include reference images, 
                  sketches, or detailed descriptions of what you envision.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#B8860B] border-2 border-navy rounded-full flex items-center justify-center">
                <span className="text-parchment font-slab font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-slab font-bold text-navy mb-2">Design Consultation</h3>
                <p className="text-navy/80">
                  We'll review your request and respond within 2-3 business days. We may ask for 
                  clarification or suggest modifications to ensure the best possible outcome.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#B8860B] border-2 border-navy rounded-full flex items-center justify-center">
                <span className="text-parchment font-slab font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-slab font-bold text-navy mb-2">Artwork Creation</h3>
                <p className="text-navy/80">
                  Once approved, our artists will create your custom design. This typically takes 
                  5-7 business days depending on complexity.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#B8860B] border-2 border-navy rounded-full flex items-center justify-center">
                <span className="text-parchment font-slab font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-slab font-bold text-navy mb-2">Review & Approval</h3>
                <p className="text-navy/80">
                  We'll send you a proof of your design for approval. You can request minor revisions 
                  at this stage.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#B8860B] border-2 border-navy rounded-full flex items-center justify-center">
                <span className="text-parchment font-slab font-bold">5</span>
              </div>
              <div>
                <h3 className="text-xl font-slab font-bold text-navy mb-2">Production & Delivery</h3>
                <p className="text-navy/80">
                  After approval, your custom t-shirt will be handmade and shipped within our standard 
                  production timeframe.
                </p>
              </div>
            </div>
          </div>
        </section>

        <OrnamentalDivider bgColor="bg-[#efece9]" />

        {/* Custom Steampunk Text Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-slab font-bold text-navy mb-8">Custom Steampunk Text Designs</h2>
          <div className="bg-gradient-to-r from-[#B8860B]/10 to-[#DAA520]/10 border-2 border-navy rounded-lg p-8">
            <p className="text-lg text-navy/80 mb-6">
              Transform your favorite quotes, names, or messages into stunning steampunk typography. 
              Our Typographic Treasures collection can be customized with your personal text.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-slab font-bold text-navy mb-4">Popular Text Options</h3>
                <ul className="space-y-2 text-navy/80">
                  <li className="flex items-start">
                    <span className="text-[#B8860B] mr-2">•</span>
                    Inspirational steampunk quotes
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B8860B] mr-2">•</span>
                    Victorian-era poetry excerpts
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B8860B] mr-2">•</span>
                    Personal mottos or family sayings
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B8860B] mr-2">•</span>
                    Names with decorative gear elements
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B8860B] mr-2">•</span>
                    Special dates in clockwork style
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-slab font-bold text-navy mb-4">Typography Styles</h3>
                <ul className="space-y-2 text-navy/80">
                  <li className="flex items-start">
                    <span className="text-[#B8860B] mr-2">•</span>
                    Ornate Victorian lettering
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B8860B] mr-2">•</span>
                    Mechanical blueprint fonts
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B8860B] mr-2">•</span>
                    Copper-etched appearance
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B8860B] mr-2">•</span>
                    Gear-integrated letters
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B8860B] mr-2">•</span>
                    Steam-powered animated text
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white border border-navy/20 rounded">
              <p className="text-sm text-navy/70 italic">
                <strong>Starting at just $20</strong> for custom text on existing typographic designs. 
                Perfect for gifts, special occasions, or personal expression.
              </p>
            </div>
          </div>
        </section>

        <OrnamentalDivider bgColor="bg-[#efece9]" />

        {/* What We Can Create */}
        <section className="mb-16">
          <h2 className="text-3xl font-slab font-bold text-navy mb-8">What We Can Create</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-navy rounded-lg p-6">
              <h3 className="text-xl font-slab font-bold text-navy mb-3">Design Styles We Excel At</h3>
              <ul className="space-y-2 text-navy/80">
                <li className="flex items-start">
                  <span className="text-[#B8860B] mr-2">•</span>
                  Mechanical creatures and robots
                </li>
                <li className="flex items-start">
                  <span className="text-[#B8860B] mr-2">•</span>
                  Clockwork and gear-based designs
                </li>
                <li className="flex items-start">
                  <span className="text-[#B8860B] mr-2">•</span>
                  Victorian-era inspired imagery
                </li>
                <li className="flex items-start">
                  <span className="text-[#B8860B] mr-2">•</span>
                  Steam-powered vehicles and machinery
                </li>
                <li className="flex items-start">
                  <span className="text-[#B8860B] mr-2">•</span>
                  Retro-futuristic concepts
                </li>
                <li className="flex items-start">
                  <span className="text-[#B8860B] mr-2">•</span>
                  Personalized steampunk portraits
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-navy rounded-lg p-6">
              <h3 className="text-xl font-slab font-bold text-navy mb-3">Customization Options</h3>
              <ul className="space-y-2 text-navy/80">
                <li className="flex items-start">
                  <span className="text-[#B8860B] mr-2">•</span>
                  Add names or dates to existing designs
                </li>
                <li className="flex items-start">
                  <span className="text-[#B8860B] mr-2">•</span>
                  Modify colors in our current collection
                </li>
                <li className="flex items-start">
                  <span className="text-[#B8860B] mr-2">•</span>
                  Combine elements from multiple designs
                </li>
                <li className="flex items-start">
                  <span className="text-[#B8860B] mr-2">•</span>
                  Create matching designs for groups
                </li>
                <li className="flex items-start">
                  <span className="text-[#B8860B] mr-2">•</span>
                  Special occasion commemorative designs
                </li>
                <li className="flex items-start">
                  <span className="text-[#B8860B] mr-2">•</span>
                  Business or organization logos in steampunk style
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing & Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-slab font-bold text-navy mb-8">Pricing & Timeline</h2>
          <div className="bg-[#f2d19e] border-2 border-navy rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-slab font-bold text-navy mb-4">Custom Design Pricing</h3>
                <ul className="space-y-3 text-navy/80">
                  <li className="flex justify-between">
                    <span>Custom text on typographic designs:</span>
                    <span className="font-semibold">$20-35</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Simple modifications to existing designs:</span>
                    <span className="font-semibold">$15-25</span>
                  </li>
                  <li className="flex justify-between">
                    <span>New design (simple complexity):</span>
                    <span className="font-semibold">$50-75</span>
                  </li>
                  <li className="flex justify-between">
                    <span>New design (moderate complexity):</span>
                    <span className="font-semibold">$75-150</span>
                  </li>
                  <li className="flex justify-between">
                    <span>New design (high complexity):</span>
                    <span className="font-semibold">$150+</span>
                  </li>
                </ul>
                <p className="text-sm text-navy/70 mt-4 italic">
                  * Final pricing depends on design complexity and requirements
                </p>
              </div>

              <div>
                <h3 className="text-xl font-slab font-bold text-navy mb-4">Timeline</h3>
                <ul className="space-y-3 text-navy/80">
                  <li className="flex justify-between">
                    <span>Initial response:</span>
                    <span className="font-semibold">2-3 business days</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Design creation:</span>
                    <span className="font-semibold">5-7 business days</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Revision turnaround:</span>
                    <span className="font-semibold">2-3 business days</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Production after approval:</span>
                    <span className="font-semibold">3-5 business days</span>
                  </li>
                </ul>
                <p className="text-sm text-navy/70 mt-4 italic">
                  * Rush orders available for an additional fee
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-slab font-bold text-navy mb-8">Important Information</h2>
          <div className="bg-white border-2 border-navy rounded-lg p-8 space-y-6">
            <div>
              <h3 className="text-xl font-slab font-bold text-navy mb-3">Design Rights</h3>
              <p className="text-navy/80">
                All custom designs created by RoboInkTees remain the intellectual property of RoboInkTees. 
                By purchasing a custom design, you receive the right to use it for personal purposes on 
                products purchased from us. Commercial use requires separate licensing agreement.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-slab font-bold text-navy mb-3">What We Cannot Create</h3>
              <ul className="space-y-2 text-navy/80">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  Copyrighted characters or logos without permission
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  Offensive, discriminatory, or inappropriate content
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  Direct copies of other artists' work
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  Photo-realistic portraits (we specialize in artistic interpretations)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-slab font-bold text-navy mb-3">Payment Terms</h3>
              <p className="text-navy/80">
                A 50% deposit is required before we begin work on your custom design. The remaining 
                balance is due upon approval of the final design, before production begins. All custom 
                orders are final sale - no returns or exchanges.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-[#B8860B]/10 to-[#DAA520]/10 border-2 border-navy rounded-lg p-10">
            <h2 className="text-3xl font-slab font-bold text-navy mb-6">Ready to Create Something Amazing?</h2>
            <p className="text-xl text-navy/80 mb-8 max-w-2xl mx-auto">
              Start your custom design journey today. Send us your ideas and let's bring your 
              steampunk vision to life!
            </p>
            <Link
              to="/contact?type=custom"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-parchment font-slab font-semibold rounded-full hover:from-[#DAA520] hover:to-[#FFD700] transition-all duration-300 shadow-lg"
            >
              Submit Your Custom Request
            </Link>
            <p className="text-sm text-navy/70 mt-4">
              We'll respond within 2-3 business days to discuss your vision
            </p>
          </div>
        </section>
      </main>

      <OrnamentalDivider className="mb-12 mt-16" bgColor="bg-[#efece9]" />
      <div className="h-1 bg-navy"></div>
      <FooterPRD />
    </div>
  );
};

export default CustomRequestsPage;