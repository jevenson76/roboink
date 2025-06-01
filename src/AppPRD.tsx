import React, { useEffect } from 'react';
import RobustNavbar from './components/RobustNavbar';
import HeroPRD from './components/HeroPRD';
import CollectionsSection from './components/CollectionsSection';
import FeaturedSection from './components/FeaturedSection';
import FooterPRD from './components/FooterPRD';
import SteamBackground from './components/SteamBackground';
import OrnamentalDivider from './components/OrnamentalDivider';
import CustomSection from './components/CustomSection';
import ValueSection from './components/ValueSection';
import ProductTypesSection from './components/ProductTypesSection';
import SteampunkLayout from './components/SteampunkLayout';
import EnhancedGearDivider from './components/EnhancedGearDivider';

// STEAMPUNK MODE TOGGLE - Set to false to revert to original design
const ENABLE_STEAMPUNK_MODE = true;

function AppPRD() {
  useEffect(() => {
    // Ensure page starts at top on load
    window.scrollTo(0, 0);
  }, []);
  const content = (
    <div className={ENABLE_STEAMPUNK_MODE ? "" : "min-h-screen bg-parchment relative"}>
      {!ENABLE_STEAMPUNK_MODE && <SteamBackground />}
      <div className="relative z-10 animate-fade-in-from-top">
        <RobustNavbar />
        <main>
          <HeroPRD enableSteampunk={ENABLE_STEAMPUNK_MODE} />
          <div className="py-8"></div>
          <FeaturedSection enableSteampunk={ENABLE_STEAMPUNK_MODE} />
          {ENABLE_STEAMPUNK_MODE ? (
            <EnhancedGearDivider className="my-8" />
          ) : (
            <OrnamentalDivider className="my-2" bgColor="bg-parchment" />
          )}
          <ValueSection enableSteampunk={ENABLE_STEAMPUNK_MODE} />
          {ENABLE_STEAMPUNK_MODE ? (
            <EnhancedGearDivider className="my-8" />
          ) : (
            <OrnamentalDivider className="my-2" bgColor="bg-parchment" />
          )}
          <CollectionsSection enableSteampunk={ENABLE_STEAMPUNK_MODE} />
          {ENABLE_STEAMPUNK_MODE ? (
            <EnhancedGearDivider className="my-8" />
          ) : (
            <OrnamentalDivider className="my-2" bgColor="bg-parchment" />
          )}
          <ProductTypesSection enableSteampunk={ENABLE_STEAMPUNK_MODE} />
          {ENABLE_STEAMPUNK_MODE ? (
            <EnhancedGearDivider className="my-8" />
          ) : (
            <OrnamentalDivider className="my-2" bgColor="bg-parchment" />
          )}
          <CustomSection enableSteampunk={ENABLE_STEAMPUNK_MODE} />
        </main>
        {ENABLE_STEAMPUNK_MODE ? (
          <EnhancedGearDivider className="my-16" />
        ) : (
          <OrnamentalDivider className="my-8" bgColor="bg-parchment" />
        )}
        <div className="h-1 bg-navy"></div>
        <FooterPRD />
      </div>
    </div>
  );

  return ENABLE_STEAMPUNK_MODE ? (
    <SteampunkLayout>{content}</SteampunkLayout>
  ) : (
    content
  );
}

export default AppPRD;