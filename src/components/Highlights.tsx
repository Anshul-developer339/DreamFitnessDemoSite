import React from 'react';
import { Dumbbell, Users, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';
import { HIGHLIGHTS_DATA } from '../data/gymData';

export const Highlights: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    'imported-equipment': <Dumbbell className="w-6 h-6 text-orange-400" />,
    'certified-trainers': <Users className="w-6 h-6 text-orange-400" />,
    'female-trainer': <HeartHandshake className="w-6 h-6 text-orange-400" />,
    'clean-aura': <Sparkles className="w-6 h-6 text-orange-400" />,
  };

  return (
    <section id="about" className="py-24 bg-[#090a0f] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest font-bold text-orange-500 mb-2">
            Why Muradnagar Chooses Us
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white uppercase tracking-tight">
            Built Different. Trained Smarter.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
            Dream Fitness Gym was designed to bring genuine world-class training standards to Muradnagar.
            From imported heavy machinery to polite certified mentorship, we create an environment where
            men and women can train with pride and confidence.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS_DATA.map((item, idx) => (
            <div
              key={item.id}
              className="bg-[#12141c] hover:bg-[#161924] border border-white/10 hover:border-orange-500/30 rounded-2xl p-7 transition-all duration-200 flex flex-col justify-between group shadow-sm hover:shadow-orange-500/5"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-white/5 group-hover:bg-orange-500/10 rounded-xl transition-colors">
                    {iconMap[item.id]}
                  </div>
                  <span className="text-xs font-mono font-semibold text-neutral-500 group-hover:text-orange-400 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-orange-400/90 mb-2">
                  {item.highlightKey}
                </div>

                <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-orange-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>{item.stat}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Key stats row */}
        <div className="mt-16 p-8 bg-gradient-to-r from-[#12141c] via-[#171a26] to-[#12141c] border border-white/10 rounded-2xl grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-black font-display text-white">4.8★</div>
            <div className="text-xs uppercase tracking-wider text-neutral-400 mt-1">Google Rating (45+ Reviews)</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black font-display text-orange-400">11:00 PM</div>
            <div className="text-xs uppercase tracking-wider text-neutral-400 mt-1">Daily Extended Hours</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black font-display text-white">Pillar 870</div>
            <div className="text-xs uppercase tracking-wider text-neutral-400 mt-1">Prime GT Road Location</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black font-display text-orange-400">100%</div>
            <div className="text-xs uppercase tracking-wider text-neutral-400 mt-1">Affordable Membership</div>
          </div>
        </div>
      </div>
    </section>
  );
};
