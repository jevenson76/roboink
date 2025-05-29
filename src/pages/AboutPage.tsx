import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavbarPRD from '../components/NavbarPRD';
import FooterPRD from '../components/FooterPRD';
import OrnamentalDivider from '../components/OrnamentalDivider';

const AboutPage: React.FC = () => {
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
            About RoboInkTees
          </h1>
          <p className="text-xl text-[#800020] font-slab font-bold leading-relaxed">
            Where Victorian aesthetics meet modern innovation in every thread
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-slab font-bold text-navy mb-6">Our Story</h2>
          <div className="prose prose-lg text-navy/80 space-y-4">
            <p>
              Founded in 2020, RoboInkTees emerged from a passion for the intricate beauty of steampunk aesthetics 
              and the timeless appeal of Victorian engineering. What started as a small collection of hand-drawn 
              designs has evolved into a celebration of mechanical artistry and imaginative fashion. Every single 
              piece is handmade with meticulous attention to detail.
            </p>
            <p>
              Our journey began when our founder, a mechanical engineer with an artist's soul, discovered the 
              captivating world of steampunk at a Victorian-themed maker faire. The fusion of brass gears, 
              copper pipes, and steam-powered dreams sparked an idea: why not bring these magnificent visions 
              to everyday fashion?
            </p>
            <p>
              Today, RoboInkTees stands as a testament to the enduring appeal of craftsmanship, innovation, 
              and the belief that fashion can be both whimsical and sophisticated. Each design in our collection 
              tells a story of an alternate timeline where steam power reigns supreme and mechanical marvels 
              walk among us.
            </p>
          </div>
        </section>

        <OrnamentalDivider bgColor="bg-[#efece9]" />

        {/* Our Mission */}
        <section className="mb-16">
          <h2 className="text-3xl font-slab font-bold text-navy mb-6">Our Mission</h2>
          <div className="bg-white border-2 border-navy rounded-lg p-8">
            <p className="text-xl font-slab text-navy/80 leading-relaxed italic">
              "To inspire wonder and creativity by bringing the mechanical dreams of yesterday into the 
              fashion of today, one extraordinary design at a time."
            </p>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-slab font-bold text-navy mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-[#f2d19e] border-2 border-navy rounded-full flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 40 40" className="text-[#800020]">
                  <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="20" cy="20" r="6" fill="currentColor" />
                  {Array.from({ length: 8 }).map((_, i) => {
                    const angle = (i * 45) * Math.PI / 180;
                    const x1 = 20 + 12 * Math.cos(angle);
                    const y1 = 20 + 12 * Math.sin(angle);
                    const x2 = 20 + 18 * Math.cos(angle);
                    const y2 = 20 + 18 * Math.sin(angle);
                    return (
                      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2" />
                    );
                  })}
                </svg>
              </div>
              <h3 className="text-xl font-slab font-bold text-navy mb-2">Handmade Quality</h3>
              <p className="text-navy/80">
                Every design is meticulously handcrafted with attention to detail that would make Victorian engineers proud.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-[#f2d19e] border-2 border-navy rounded-full flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 40 40" className="text-[#800020]">
                  <path d="M20 5 L30 15 L25 35 L15 35 L10 15 Z" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="20" cy="20" r="4" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-xl font-slab font-bold text-navy mb-2">Sustainable Practice</h3>
              <p className="text-navy/80">
                Committed to eco-friendly printing and ethically sourced materials for a better tomorrow.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-[#f2d19e] border-2 border-navy rounded-full flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 40 40" className="text-[#800020]">
                  <rect x="10" y="10" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="20" cy="20" r="3" fill="currentColor" />
                  <line x1="20" y1="10" x2="20" y2="5" stroke="currentColor" strokeWidth="2" />
                  <line x1="20" y1="30" x2="20" y2="35" stroke="currentColor" strokeWidth="2" />
                  <line x1="10" y1="20" x2="5" y2="20" stroke="currentColor" strokeWidth="2" />
                  <line x1="30" y1="20" x2="35" y2="20" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-slab font-bold text-navy mb-2">Creative Innovation</h3>
              <p className="text-navy/80">
                Constantly pushing the boundaries of steampunk design to bring you unique, wearable art.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-[#f2d19e] border-2 border-navy rounded-lg p-10">
            <h2 className="text-3xl font-slab font-bold text-navy mb-6">Join Our Steampunk Community</h2>
            <p className="text-xl text-[#800020] font-slab font-bold mb-8 max-w-2xl mx-auto">
              Become part of a growing community of steampunk enthusiasts, makers, and dreamers.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-parchment font-slab font-semibold rounded-full hover:from-[#DAA520] hover:to-[#FFD700] transition-all duration-300 shadow-lg"
            >
              Email Us
            </Link>
          </div>
        </section>
      </main>

      <OrnamentalDivider className="mb-12 mt-16" bgColor="bg-[#efece9]" />
      <div className="h-1 bg-navy"></div>
      <FooterPRD />
    </div>
  );
};

export default AboutPage;