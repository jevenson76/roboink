import React, { useEffect } from 'react';
import NavbarPRD from './components/NavbarPRD';
import HeroPRD from './components/HeroPRD';
import CollectionsSection from './components/CollectionsSection';
import FeaturedSection from './components/FeaturedSection';
import FooterPRD from './components/FooterPRD';
import SteamBackground from './components/SteamBackground';
import OrnamentalDivider from './components/OrnamentalDivider';
import CustomSection from './components/CustomSection';
import ValueSection from './components/ValueSection';
import ProductTypesSection from './components/ProductTypesSection';

function AppPRD() {
  useEffect(() => {
    // Ensure page starts at top on load
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-parchment relative">
      <SteamBackground />
      <div className="relative z-10 animate-fade-in-from-top">
        <NavbarPRD />
        <main>
          <HeroPRD />
          <div className="py-8"></div>
          <FeaturedSection />
          <OrnamentalDivider className="my-2" bgColor="bg-parchment" />
          <ValueSection />
          <OrnamentalDivider className="my-2" bgColor="bg-parchment" />
          <CollectionsSection />
          <OrnamentalDivider className="my-2" bgColor="bg-parchment" />
          <ProductTypesSection />
          <OrnamentalDivider className="my-2" bgColor="bg-parchment" />
          <CustomSection />
        </main>
        <OrnamentalDivider className="my-8" bgColor="bg-parchment" />
        <div className="h-1 bg-navy"></div>
        <FooterPRD />
      </div>
    </div>
  );
}

export default AppPRD;