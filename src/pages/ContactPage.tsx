import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import NavbarPRD from '../components/NavbarPRD';
import FooterPRD from '../components/FooterPRD';
import OrnamentalDivider from '../components/OrnamentalDivider';
import { Mail, Clock, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchParams] = useSearchParams();
  const isCustomRequest = searchParams.get('type') === 'custom';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: isCustomRequest ? 'custom' : '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - in Shopify this would integrate with their contact form
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#efece9] animate-fade-in-from-top">
      <NavbarPRD />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy/10 to-transparent py-8 text-center">
        <h1 className="text-5xl font-slab font-bold text-navy drop-shadow-lg mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Get in Touch</h1>
        <p className="text-xl text-[#800020] font-slab font-bold max-w-2xl mx-auto">
          We'd love to hear from you about your steampunk dreams
        </p>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Contact Information */}
          <div className="lg:col-span-1 flex flex-col">
            {/* Quick Response Time - Moved to top */}
            <div className="bg-white border-2 border-navy rounded-lg p-6 mb-8">
              <h3 className="font-slab font-bold text-navy mb-3">Quick Response Time</h3>
              <p className="text-[#800020]">
                We typically respond to all inquiries within 24 business hours. For urgent matters, 
                please call our customer service line.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-slab font-bold text-navy mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#f2d19e] border-2 border-navy rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#800020]" />
                  </div>
                  <div>
                    <h3 className="font-slab font-semibold text-navy mb-1">Email</h3>
                    <p className="text-navy/80">support@roboinktees.com</p>
                    <p className="text-navy/80">orders@roboinktees.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#f2d19e] border-2 border-navy rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#800020]" />
                  </div>
                  <div>
                    <h3 className="font-slab font-semibold text-navy mb-1">Response Time</h3>
                    <p className="text-navy/80">We typically respond within</p>
                    <p className="text-navy/80">24-48 business hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#f2d19e] border-2 border-navy rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#800020]" />
                  </div>
                  <div>
                    <h3 className="font-slab font-semibold text-navy mb-1">Business Hours</h3>
                    <p className="text-navy/80">Monday - Friday: 9AM - 6PM EST</p>
                    <p className="text-navy/80">Saturday: 10AM - 4PM EST</p>
                    <p className="text-navy/80">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border-2 border-navy rounded-lg p-8">
              <h2 className="text-2xl font-slab font-bold text-navy mb-6">
                {isCustomRequest ? 'Submit Your Custom Design Request' : 'Send Us a Message'}
              </h2>
              
              {isCustomRequest && (
                <div className="mb-6 p-4 bg-[#f2d19e] border border-navy/20 rounded-lg">
                  <p className="text-navy/80 text-sm">
                    <strong>Custom Design Request:</strong> Please describe your vision in detail below. 
                    Include any reference images, specific elements, or style preferences you have in mind.
                  </p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-navy font-semibold mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-navy/30 rounded-lg focus:border-navy focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-navy font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-navy/30 rounded-lg focus:border-navy focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-navy font-semibold mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-navy/30 rounded-lg focus:border-navy focus:outline-none transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="order">Order Inquiry</option>
                    <option value="custom">Custom Design Request</option>
                    <option value="wholesale">Wholesale/Bulk Orders</option>
                    <option value="return">Returns & Exchanges</option>
                    <option value="general">General Question</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-navy font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-navy/30 rounded-lg focus:border-navy focus:outline-none transition-colors resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-parchment font-slab font-bold text-lg rounded-full hover:from-[#DAA520] hover:to-[#FFD700] transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div className="bg-[#f2d19e] border-2 border-navy rounded-lg p-6">
                <h3 className="font-slab font-bold text-navy mb-3">Custom Orders</h3>
                <p className="text-navy/80">
                  Have a unique steampunk vision? We'd love to bring it to life! Include your design 
                  ideas in your message and we'll get back to you with a custom quote.
                </p>
              </div>
              
              <div className="bg-[#f2d19e] border-2 border-navy rounded-lg p-6">
                <h3 className="font-slab font-bold text-navy mb-3">Wholesale Inquiries</h3>
                <p className="text-navy/80">
                  Interested in carrying RoboInkTees in your store? We offer competitive wholesale 
                  rates for qualified retailers. Let's discuss!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <OrnamentalDivider className="mb-12 mt-12" bgColor="bg-[#efece9]" />
      <div className="h-1 bg-navy"></div>
      <FooterPRD />
    </div>
  );
};

export default ContactPage;