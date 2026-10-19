import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { DefinitionSEO, TrustStrip } from "@/components/TrustStrip";
import FeaturesGrid from "@/components/FeaturesGrid";
import { HowItWorks, SecurityModel } from "@/components/SecurityModel";
import { ConvictionSection, ComparisonSection } from "@/components/ComparisonSection";
import ToolsSection from "@/components/ToolsSection";
import LatestGuidesSection from "@/components/LatestGuidesSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-indigo-500/20 selection:text-indigo-900">
      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {/* Hero Section with Interactive 5x5 Pattern Lock Phone Mockup */}
        <Hero />

        {/* AI & GEO Citability Semantic Paragraph */}
        <DefinitionSEO />

        {/* Trust Badges Strip */}
        <TrustStrip />

        {/* Core Features Hub Grid (10+ Security Pillars) */}
        <FeaturesGrid />

        {/* 3-Step How It Works Timeline */}
        <HowItWorks />

        {/* Cryptographic Architecture & Security Specs */}
        <SecurityModel />

        {/* The Core Pitch: Someone takes your phone. Now what? */}
        <ConvictionSection />

        {/* Competitor Comparison Matrix (vs Apple, Keepsafe, Calculator) */}
        <ComparisonSection />

        {/* Free In-Browser Lead-Magnet Privacy Tools */}
        <ToolsSection />

        {/* Latest Security Research & Teardown Articles */}
        <LatestGuidesSection />

        {/* Frequently Asked Questions Accordion */}
        <FAQSection />
      </main>

      {/* Footer with 32-Language Directory Grid & Legal */}
      <Footer />
    </div>
  );
}
