import React from 'react';
import { Star, Phone, ArrowRight, ShieldCheck, Clock, MapPin, Sparkles } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import heroBg from '../assets/images/hero_gym_interior_1791182282144.jpg';

interface HeroProps {
  onOpenFreeTrial: () => void;
  onScrollToContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenFreeTrial, onScrollToContact }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#090a0f]">
      {/* Background Hero Image with Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Dream Fitness Gym Muradnagar Interior with imported heavy machines"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-110"
        />
        {/* Measured dark scrim gradient to ensure 4.5:1 text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/80 to-[#090a0f]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/15 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Unboxed Metadata with Typographic Separator (Zero-Pill Discipline) */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-orange-400 uppercase mb-4">
            <span className="flex items-center gap-1.5 text-neutral-200">
              <span className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </span>
              <span className="font-bold text-white">{GYM_INFO.rating} Stars</span>
            </span>
            <span aria-hidden="true" className="text-neutral-500">·</span>
            <span>45+ Google Reviews</span>
            <span aria-hidden="true" className="text-neutral-500">·</span>
            <span className="text-neutral-300">Muradnagar, Uttar Pradesh</span>
          </div>

          {/* Marquee Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight text-white uppercase leading-[1.08] mb-6">
            The Best Gym in{' '}
            <span className="text-gradient-fire">Muradnagar</span>
          </h1>

          {/* Subtext highlighting key features */}
          <p className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl mb-8">
            Engineered for genuine transformations. Train on premium imported biomechanical machines,
            guided by humble, certified coaches—with a dedicated certified female trainer available.
            Experience a clean, energetic atmosphere open every day until 11:00 PM.
          </p>

          {/* Primary & Secondary Action Triggers */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <button
              onClick={onOpenFreeTrial}
              className="py-4 px-8 text-sm uppercase tracking-wider font-extrabold text-white bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 rounded-xl hover:from-orange-600 hover:to-red-700 shadow-xl shadow-orange-500/30 active:scale-95 transition-all duration-150 flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>Book a Free 1-Day Trial</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={`tel:${GYM_INFO.phone}`}
              className="py-4 px-6 text-sm uppercase tracking-wider font-bold text-neutral-200 hover:text-white bg-[#141622]/90 hover:bg-[#1a1e2d] border border-white/15 hover:border-orange-500/40 rounded-xl shadow-sm transition-all duration-150 flex items-center justify-center gap-3 text-center"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>Call Us: {GYM_INFO.displayPhone}</span>
            </a>
          </div>

          {/* Quick Real-Time Trust Matrix (Unboxed Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 text-neutral-400 text-xs sm:text-sm">
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-orange-400 shrink-0" />
              <span>Open Daily till <strong>11:00 PM</strong></span>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
              <span>Metro Pillar No. 870, GT Rd</span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
              <span>Female Trainer Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
