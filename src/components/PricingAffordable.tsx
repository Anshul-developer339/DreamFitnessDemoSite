import React from 'react';
import { Check, ShieldCheck, Zap } from 'lucide-react';
import { MEMBERSHIP_PLANS } from '../data/gymData';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingAffordable: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-24 bg-[#090a0f] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest font-bold text-orange-500 mb-2">
            Affordable & Transparent Plans
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white uppercase tracking-tight">
            Premium Fitness. Honest Pricing.
          </h2>
          <p className="mt-4 text-base text-neutral-400">
            One of the top highlights praised by our 45+ Google reviews: luxury imported gym equipment
            without exorbitant club price tags. No hidden maintenance charges.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-200 relative ${
                plan.popular
                  ? 'bg-[#141724] border-2 border-orange-500/70 shadow-2xl shadow-orange-500/10 scale-102 z-10'
                  : 'bg-[#10121b] border border-white/10 hover:border-white/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-600 text-white text-[11px] font-extrabold uppercase tracking-widest py-1 px-4 rounded-full shadow-md">
                  Most Popular Choice
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold font-display text-white">{plan.name}</h3>
                  <span className="text-xs font-semibold text-orange-400 uppercase tracking-wide">
                    {plan.badge}
                  </span>
                </div>
                <p className="text-xs text-neutral-400 mb-6 min-h-[32px]">{plan.description}</p>

                <div className="flex items-baseline gap-1 mb-8 pb-6 border-b border-white/10">
                  <span className="text-4xl sm:text-5xl font-black font-display text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm font-semibold text-neutral-400">{plan.period}</span>
                </div>

                <div className="space-y-3.5 mb-8">
                  <div className="text-xs uppercase font-bold tracking-wider text-neutral-400">
                    What's Included:
                  </div>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                      <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider font-extrabold transition-all duration-150 cursor-pointer ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700 shadow-lg shadow-orange-500/25 active:scale-95'
                      : 'bg-white/10 hover:bg-white/15 text-white active:scale-95'
                  }`}
                >
                  Join With {plan.name}
                </button>
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-500 mt-3">
                  <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Includes free induction & fitness assessment</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="mt-12 p-6 bg-[#12141c] border border-white/10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-orange-500/10 rounded-xl text-orange-400 shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Looking for Personal Coaching or Couple Discounts?</div>
              <div className="text-xs text-neutral-400">We offer custom packages for students, couples, and dedicated 1-on-1 personal training.</div>
            </div>
          </div>
          <button
            onClick={() => onSelectPlan('Custom Package')}
            className="py-2.5 px-5 text-xs uppercase font-bold text-white bg-white/10 hover:bg-white/20 rounded-lg whitespace-nowrap transition-colors cursor-pointer"
          >
            Inquire Special Rates
          </button>
        </div>
      </div>
    </section>
  );
};
