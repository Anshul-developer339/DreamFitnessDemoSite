import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { Facilities } from './components/Facilities';
import { GymGallery } from './components/GymGallery';
import { PricingAffordable } from './components/PricingAffordable';
import { Testimonials } from './components/Testimonials';
import { LocationHours } from './components/LocationHours';
import { LeadForm } from './components/LeadForm';
import { Footer } from './components/Footer';
import { FreeTrialModal } from './components/FreeTrialModal';
import { MessageSquare, Phone } from 'lucide-react';
import { GYM_INFO } from './data/gymData';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);

  const handleOpenFreeTrial = (planName?: string) => {
    setSelectedPlan(planName);
    setModalOpen(true);
  };

  const handleScrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-neutral-100 selection:bg-orange-500 selection:text-white flex flex-col font-sans">
      {/* 1. Header / Navigation Bar */}
      <Navbar onOpenFreeTrial={() => handleOpenFreeTrial()} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onOpenFreeTrial={() => handleOpenFreeTrial()}
          onScrollToContact={handleScrollToContact}
        />

        {/* 3. About Us / Highlights Grid */}
        <Highlights />

        {/* 4. Facilities / Equipment Section */}
        <Facilities />

        {/* 5. Gym Gallery (Masonry Grid) */}
        <GymGallery />

        {/* Membership & Affordable Pricing (Key highlight from verified reviews) */}
        <PricingAffordable onSelectPlan={(plan) => handleOpenFreeTrial(plan)} />

        {/* 5. Social Proof / Testimonials Section */}
        <Testimonials />

        {/* 6. Location & Operating Hours Section */}
        <LocationHours />

        {/* 7. Lead Generation / Contact Form */}
        <LeadForm />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* Interactive Free 1-Day Trial Modal */}
      <FreeTrialModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultPlan={selectedPlan}
      />

      {/* Floating Fast Action Connect for Mobile & Quick Inquiries */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        <a
          href={`https://wa.me/${GYM_INFO.whatsappNumber}?text=${encodeURIComponent(
            'Hi Dream Fitness Gym! I want to inquire about membership and gym timings in Muradnagar.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl shadow-green-600/30 hover:scale-105 active:scale-95 transition-transform"
          aria-label="Chat on WhatsApp with Dream Fitness Gym"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
