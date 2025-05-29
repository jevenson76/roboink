import React, { useEffect } from 'react';
import NavbarPRD from '../components/NavbarPRD';
import FooterPRD from '../components/FooterPRD';
import OrnamentalDivider from '../components/OrnamentalDivider';

const TermsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#efece9] animate-fade-in-from-top">
      <NavbarPRD />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy/10 to-transparent py-12 text-center">
        <h1 className="text-5xl font-slab font-bold text-navy drop-shadow-lg mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Terms of Service</h1>
        <p className="text-xl text-[#800020] font-slab font-bold max-w-2xl mx-auto">
          Please read these terms carefully before using our services
        </p>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white border-2 border-navy rounded-lg p-8 space-y-8">
          {/* Agreement to Terms */}
          <section>
            <h2 className="text-2xl font-slab font-bold text-navy mb-4">1. Agreement to Terms</h2>
            <p className="text-navy/80 leading-relaxed">
              By accessing and using the RoboInkTees website and purchasing our products, you agree to be 
              bound by these Terms of Service and all applicable laws and regulations. If you do not agree 
              with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          {/* Use License */}
          <section>
            <h2 className="text-2xl font-slab font-bold text-navy mb-4">2. Use License</h2>
            <p className="text-navy/80 mb-4">
              Permission is granted to temporarily download one copy of the materials on RoboInkTees 
              for personal, non-commercial transitory viewing only. This is the grant of a license, 
              not a transfer of title, and under this license you may not:
            </p>
            <ul className="space-y-2 text-navy/80 ml-6">
              <li>• Modify or copy the materials</li>
              <li>• Use the materials for commercial purposes or public display</li>
              <li>• Attempt to reverse engineer any software on our website</li>
              <li>• Remove any copyright or proprietary notations from the materials</li>
            </ul>
          </section>

          {/* Product Information */}
          <section>
            <h2 className="text-2xl font-slab font-bold text-navy mb-4">3. Product Information</h2>
            <p className="text-navy/80">
              We strive to display our products as accurately as possible. However, we cannot guarantee that 
              your computer monitor's display of any color will be accurate. We reserve the right to limit 
              the quantities of any products or services that we offer. All descriptions of products are 
              subject to change at any time without notice.
            </p>
          </section>

          {/* Pricing and Payment */}
          <section>
            <h2 className="text-2xl font-slab font-bold text-navy mb-4">4. Pricing and Payment</h2>
            <p className="text-navy/80 mb-4">
              All prices are listed in US dollars and are subject to change without notice. We reserve the 
              right to refuse any order you place with us. Payment must be received prior to the shipment 
              of products. We accept:
            </p>
            <ul className="space-y-2 text-navy/80 ml-6">
              <li>• Major credit cards (Visa, MasterCard, American Express)</li>
              <li>• PayPal</li>
              <li>• Shop Pay</li>
              <li>• Apple Pay and Google Pay</li>
            </ul>
          </section>

          {/* Order Cancellation */}
          <section>
            <h2 className="text-2xl font-slab font-bold text-navy mb-4">5. Order Cancellation</h2>
            <p className="text-navy/80">
              Orders may be cancelled within 24 hours of placement. After this time, orders enter production 
              and cannot be cancelled. Custom or personalized orders cannot be cancelled once production begins. 
              We reserve the right to cancel any order for any reason, including but not limited to product 
              availability or errors in pricing.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-slab font-bold text-navy mb-4">6. Intellectual Property</h2>
            <p className="text-navy/80">
              All content on this website, including but not limited to text, graphics, logos, images, and 
              software, is the property of RoboInkTees or its content suppliers and is protected by 
              international copyright laws. Our handmade designs are original works of art and may not be 
              reproduced without explicit written permission.
            </p>
          </section>

          {/* User Accounts */}
          <section>
            <h2 className="text-2xl font-slab font-bold text-navy mb-4">7. User Accounts</h2>
            <p className="text-navy/80">
              When you create an account with us, you must provide information that is accurate, complete, 
              and current at all times. You are responsible for safeguarding the password and for all 
              activities that occur under your account. You must notify us immediately upon becoming aware 
              of any breach of security or unauthorized use of your account.
            </p>
          </section>

          {/* Prohibited Uses */}
          <section>
            <h2 className="text-2xl font-slab font-bold text-navy mb-4">8. Prohibited Uses</h2>
            <p className="text-navy/80 mb-4">You may not use our site:</p>
            <ul className="space-y-2 text-navy/80 ml-6">
              <li>• For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>• To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>• To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>• To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>• To submit false or misleading information</li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-slab font-bold text-navy mb-4">9. Limitation of Liability</h2>
            <p className="text-navy/80">
              In no event shall RoboInkTees or its suppliers be liable for any damages (including, without 
              limitation, damages for loss of data or profit, or due to business interruption) arising out 
              of the use or inability to use materials on our website, even if RoboInkTees or an authorized 
              representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-2xl font-slab font-bold text-navy mb-4">10. Indemnification</h2>
            <p className="text-navy/80">
              You agree to defend, indemnify, and hold harmless RoboInkTees and its affiliates, licensors, 
              and service providers from and against any claims, liabilities, damages, judgments, awards, 
              losses, costs, expenses, or fees arising out of or relating to your violation of these Terms 
              of Service or your use of the website.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-slab font-bold text-navy mb-4">11. Governing Law</h2>
            <p className="text-navy/80">
              These Terms of Service and any separate agreements whereby we provide you services shall be 
              governed by and construed in accordance with the laws of the United States and the state in 
              which RoboInkTees operates.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-slab font-bold text-navy mb-4">12. Changes to Terms</h2>
            <p className="text-navy/80">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
              If a revision is material, we will provide at least 30 days notice prior to any new terms 
              taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-[#f2d19e] border border-navy rounded-lg p-6">
            <h2 className="text-2xl font-slab font-bold text-navy mb-4">Contact Information</h2>
            <p className="text-navy/80 mb-4">
              Questions about the Terms of Service should be sent to us at:
            </p>
            <div className="space-y-2 text-navy">
              <p><strong>Email:</strong> legal@roboinktees.com</p>
            </div>
            <p className="text-navy/80 text-sm mt-4">
              Effective Date: {new Date().toLocaleDateString()}
            </p>
          </section>
        </div>
      </main>

      <OrnamentalDivider className="mb-12 mt-12" bgColor="bg-[#efece9]" />
      <div className="h-1 bg-navy"></div>
      <FooterPRD />
    </div>
  );
};

export default TermsPage;