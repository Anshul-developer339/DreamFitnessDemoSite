import React, { useState } from 'react';
import { Dumbbell, Activity, Shield, Maximize2, Check } from 'lucide-react';
import weightImg from '../assets/images/facility_weight_training_1791182297067.jpg';
import cardioImg from '../assets/images/facility_cardio_zone_1791182308755.jpg';
import turfImg from '../assets/images/facility_personal_training_1791182319323.jpg';

export const Facilities: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'weights' | 'cardio' | 'machines' | 'floor'>('all');

  const facilities = [
    {
      id: 'weights',
      title: 'Free Weights & Heavy Lifting Zone',
      category: 'weights',
      image: weightImg,
      subtitle: 'Olympic bars & precision dumbbells',
      description:
        'Comprehensive free weight section equipped with calibrated Olympic barbells, multi-angle heavy incline/decline/flat benches, power cages, and complete dumbbell sets ranging from 2.5 kg up to 50 kg.',
      highlights: [
        'Solid Olympic standard 28mm & 30mm barbells',
        'Heavy duty power racks with safety spotter arms',
        'Rubberized drop zone flooring to absorb impact',
        'Full spectrum hexagonal and urethane dumbbells',
      ],
    },
    {
      id: 'cardio',
      title: 'Endurance & Cardio Studio',
      category: 'cardio',
      image: cardioImg,
      subtitle: 'High-speed motor treadmills & cross-trainers',
      description:
        'Dedicated cardiovascular zone with commercial grade motorized treadmills, spin bikes, elliptical cross-trainers, and stair climbers with real-time digital heart rate and calorie diagnostics.',
      highlights: [
        'Commercial shock-absorption running belts',
        'Custom interval program pre-sets',
        'Dedicated cardio viewing screens & high-energy music',
        'Low-impact cross-trainers for knee preservation',
      ],
    },
    {
      id: 'machines',
      title: 'Top-Notch Imported Biomechanical Machines',
      category: 'machines',
      image: weightImg,
      subtitle: 'Engineered for optimal muscle isolation',
      description:
        'Imported cable crossover towers, plate-loaded chest & shoulder presses, seated cable rows, hack squats, and leg extension/curl apparatus with ultra-smooth sealed bearing pulleys.',
      highlights: [
        'Top-grade imported pulleys with seamless cable tension',
        'Ergonomic contour pads for cervical & lumbar support',
        'Plate-loaded ISO-lateral levers for muscle symmetry',
        'Precise pin-select weight stacks for rapid dropsets',
      ],
    },
    {
      id: 'floor',
      title: 'Functional Turf & Stretching Floor',
      category: 'floor',
      image: turfImg,
      subtitle: 'Great capacity & open-space movement',
      description:
        'Spacious, non-congested functional workout space equipped with heavy battle ropes, kettlebells, slam balls, resistance loops, and dedicated warm-up/cool-down mats.',
      highlights: [
        'High-density turf track for sleds & calisthenics',
        'Full wall-mounted mirrors for strict form checks',
        'Separate stretching and core conditioning area',
        'Spacious enough for both men and women during peak hours',
      ],
    },
  ];

  const filteredFacilities =
    activeTab === 'all' ? facilities : facilities.filter((f) => f.category === activeTab);

  return (
    <section id="facilities" className="py-24 bg-[#0d0f17] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest font-bold text-orange-500 mb-2">
              World-Class Equipment
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display text-white uppercase tracking-tight">
              Designed For Real Performance
            </h2>
            <p className="mt-4 text-base text-neutral-400">
              No cramped quarters or broken cables. Dream Fitness Gym is fitted with imported heavy
              machines and extensive free weights designed to support your athletic ambitions.
            </p>
          </div>

          {/* Interactive Filter Tabs (Functional buttons as allowed by Zero-Pill rule) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#141622] rounded-xl border border-white/10 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              All Zones
            </button>
            <button
              onClick={() => setActiveTab('weights')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'weights'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Free Weights
            </button>
            <button
              onClick={() => setActiveTab('cardio')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'cardio'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Cardio
            </button>
            <button
              onClick={() => setActiveTab('machines')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'machines'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Imported Machines
            </button>
            <button
              onClick={() => setActiveTab('floor')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'floor'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Functional Floor
            </button>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-[#12141c] border border-white/10 hover:border-orange-500/30 rounded-2xl overflow-hidden transition-all duration-200 group flex flex-col"
            >
              {/* Image Container with Fallback */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                <img
                  src={facility.image}
                  alt={facility.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12141c] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-300">
                  <span className="font-semibold uppercase tracking-wider text-orange-400">
                    {facility.subtitle}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3">
                    {facility.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {facility.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <div className="text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-3">
                    Highlights & Capabilities:
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {facility.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
