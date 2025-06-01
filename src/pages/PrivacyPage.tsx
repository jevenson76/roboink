import React, { useEffect } from 'react';
import RobustNavbar from '../components/RobustNavbar';
import FooterPRD from '../components/FooterPRD';
import OrnamentalDivider from '../components/OrnamentalDivider';

const PrivacyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#efece9] animate-fade-in-from-top">
      <RobustNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy/10 to-transparent py-12 text-center">
        <h1 className="text-5xl font-slab font-bold text-navy drop-shadow-lg mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Privacy Policy</h1>
        <p className="text-xl text-[#800020] font-body font-bold max-w-2xl mx-auto">
          Your privacy is important to us. Last updated: {new Date().toLocaleDateString()}
        </p>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white border-2 border-navy rounded-lg p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-slab font-bold text-navy mb-4">Introduction</h2>
            <p className="text-navy/80 leading-relaxed">
              RoboInkTees ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your information when you visit our website 
              or make a purchase from us.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-slab font-bold text-navy mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-navy mb-2">Personal Information</h3>
                <ul className="space-y-2 text-navy/80 ml-6">
                  <li>• Name and contact information (email, phone, address)</li>
                  <li>• Billing and shipping addresses</li>
                  <li>• Payment information (processed securely through our payment providers)</li>
                  <li>• Order history and preferences</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-navy mb-2">Automatically Collected Information</h3>
                <ul className="space-y-2 text-navy/80 ml-6">
                  <li>• IP address and browser information</li>
                  <li>• Device type and operating system</li>
                  <li>• Cookies and usage data</li>
                  <li>• Pages visited and time spent on site</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-2xl font-slab font-bold text-navy mb-4">How We Use Your Information</h2>
            <p className="text-navy/80 mb-4">We use the information we collect to:</p>
            <ul className="space-y-2 text-navy/80 ml-6">
              <li>• Process and fulfill your orders</li>
              <li>• Communicate with you about your orders</li>
              <li>• Send promotional emails (with your consent)</li>
              <li>• Improve our website and customer service</li>
              <li>• Prevent fraud and enhance security</li>
              <li>• Comply with legal obligations</li>
              <li>• Personalize your shopping experience</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="text-2xl font-slab font-bold text-navy mb-4">Information Sharing</h2>
            <p className="text-navy/80 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your 
              information with:
            </p>
            <ul className="space-y-2 text-navy/80 ml-6">
              <li>• Service providers (shipping companies, payment processors)</li>
              <li>• Legal authorities when required by law</li>
              <li>• Business partners for order fulfillment</li>
              <li>• Analytics providers to improve our services</li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-slab font-bold text-navy mb-4">Data Security</h2>
            <p className="text-navy/80">
              We implement appropriate technical and organizational security measures to protect your personal 
              information against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, 
              or access. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-slab font-bold text-navy mb-4">Cookies</h2>
            <p className="text-navy/80 mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website. 
              You can control cookies through your browser settings. Types of cookies we use:
            </p>
            <ul className="space-y-2 text-navy/80 ml-6">
              <li>• Essential cookies for site functionality</li>
              <li>• Analytics cookies to understand usage</li>
              <li>• Marketing cookies (with consent) for relevant ads</li>
              <li>• Preference cookies to remember your settings</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-slab font-bold text-navy mb-4">Your Rights</h2>
            <p className="text-navy/80 mb-4">You have the right to:</p>
            <ul className="space-y-2 text-navy/80 ml-6">
              <li>• Access your personal information</li>
              <li>• Correct inaccurate information</li>
              <li>• Request deletion of your information</li>
              <li>• Opt-out of marketing communications</li>
              <li>• Data portability</li>
              <li>• Lodge a complaint with supervisory authorities</li>
            </ul>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-slab font-bold text-navy mb-4">Children's Privacy</h2>
            <p className="text-navy/80">
              Our website is not intended for children under 13 years of age. We do not knowingly collect 
              personal information from children under 13. If you believe we have collected information from 
              a child under 13, please contact us immediately.
            </p>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-2xl font-slab font-bold text-navy mb-4">Changes to This Policy</h2>
            <p className="text-navy/80">
              We may update this Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          {/* Contact Us */}
          <section className="bg-[#f2d19e] border border-navy rounded-lg p-6">
            <h2 className="text-2xl font-slab font-bold text-navy mb-4">Contact Us</h2>
            <p className="text-navy/80 mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="space-y-2 text-navy">
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:privacy@roboinktees.com" className="underline hover:text-[#B8860B]">
                  privacy@roboinktees.com
                </a></p>
            </div>
          </section>
        </div>
      </main>

      <OrnamentalDivider className="mb-12 mt-12" bgColor="bg-[#efece9]" />
      <div className="h-1 bg-navy"></div>
      <FooterPRD />
    </div>
  );
};

export default PrivacyPage;