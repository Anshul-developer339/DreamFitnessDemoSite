import React, { useState, useEffect, useCallback } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles, Dumbbell, Users } from 'lucide-react';

// Imported visual assets
import gymInterior from '../assets/images/hero_gym_interior_1791182282144.jpg';
import weightTraining from '../assets/images/facility_weight_training_1791182297067.jpg';
import cardioZone from '../assets/images/facility_cardio_zone_1791182308755.jpg';
import functionalTurf from '../assets/images/facility_personal_training_1791182319323.jpg';
import trainerCoaching from '../assets/images/gallery_trainer_coaching_1791182841806.jpg';
import cableCrossover from '../assets/images/gallery_cable_crossover_1791182861740.jpg';
import femaleFitness from '../assets/images/gallery_female_fitness_1791182873511.jpg';
import legPressMachine from '../assets/images/gallery_plate_loaded_machine_1791182887390.jpg';

interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'equipment' | 'training';
  categoryLabel: string;
  aspectClass: string;
  image: string;
  caption: string;
}

export const GymGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'interior' | 'equipment' | 'training'>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'g-interior-main',
      title: 'Spacious Main Workout Arena',
      category: 'interior',
      categoryLabel: 'Interior Atmosphere',
      aspectClass: 'aspect-[16/10]',
      image: gymInterior,
      caption: 'High-energy ambient crimson lighting, shock-absorbing rubber flooring, and clean layout open till 11:00 PM.',
    },
    {
      id: 'g-training-coach',
      title: '1-on-1 Form & Posture Mentorship',
      category: 'training',
      categoryLabel: 'Training Sessions',
      aspectClass: 'aspect-[3/4]',
      image: trainerCoaching,
      caption: 'Our certified humble trainers actively assist members with dumbbell spotting and biomechanical form checks.',
    },
    {
      id: 'g-equipment-cables',
      title: 'Imported Dual Cable Crossover',
      category: 'equipment',
      categoryLabel: 'Imported Equipment',
      aspectClass: 'aspect-[4/3]',
      image: cableCrossover,
      caption: 'Ultra-smooth sealed bearing pulleys with multi-angle adjustments for precise chest and shoulder isolation.',
    },
    {
      id: 'g-training-female',
      title: 'Safe & Empowering Women Training',
      category: 'training',
      categoryLabel: 'Training Sessions',
      aspectClass: 'aspect-[3/4]',
      image: femaleFitness,
      caption: 'Dedicated certified female trainer guidance in a respectful, comfortable, and positive training environment.',
    },
    {
      id: 'g-equipment-legpress',
      title: 'Heavy Duty 45° Plate-Loaded Leg Press',
      category: 'equipment',
      categoryLabel: 'Imported Equipment',
      aspectClass: 'aspect-[4/3]',
      image: legPressMachine,
      caption: 'Precision engineered angle supporting quad loading with zero lower spine compression.',
    },
    {
      id: 'g-equipment-weights',
      title: 'Calibrated Olympic Free Weights & Racks',
      category: 'equipment',
      categoryLabel: 'Imported Equipment',
      aspectClass: 'aspect-[4/3]',
      image: weightTraining,
      caption: 'Olympic standard bars, full dumbbell pairs up to 50 kg, and heavy duty power cages with safety spotters.',
    },
    {
      id: 'g-interior-cardio',
      title: 'Digital Commercial Cardio Studio',
      category: 'interior',
      categoryLabel: 'Interior Atmosphere',
      aspectClass: 'aspect-[4/3]',
      image: cardioZone,
      caption: 'Top-tier treadmills with speed presets, shock-absorbing track surfaces, and heart-rate monitoring.',
    },
    {
      id: 'g-training-turf',
      title: 'Functional Sled Turf & Calisthenics Zone',
      category: 'training',
      categoryLabel: 'Training Sessions',
      aspectClass: 'aspect-[16/10]',
      image: functionalTurf,
      caption: 'Dedicated open floor space for battle ropes, medicine balls, kettlebells, and dynamic mobility work.',
    },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'unset';
  }, []);

  const navigateLightbox = useCallback(
    (direction: 'next' | 'prev') => {
      if (selectedImageIndex === null) return;
      if (direction === 'next') {
        setSelectedImageIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : 0
        );
      } else {
        setSelectedImageIndex((prev) =>
          prev !== null
            ? (prev - 1 + filteredItems.length) % filteredItems.length
            : 0
        );
      }
    },
    [selectedImageIndex, filteredItems.length]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateLightbox('next');
      if (e.key === 'ArrowLeft') navigateLightbox('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, closeLightbox, navigateLightbox]);

  return (
    <section id="gallery" className="py-24 bg-[#090a0f] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest font-bold text-orange-500 mb-2">
              Inside Dream Fitness
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display text-white uppercase tracking-tight">
              Gym Gallery & Real Atmosphere
            </h2>
            <p className="mt-4 text-base text-neutral-400">
              Take an unfiltered visual tour of our facility near Metro Pillar 870. From imported
              biomechanical equipment to vibrant workout sessions, see what sets us apart in Muradnagar.
            </p>
          </div>

          {/* Interactive Filter Tabs (Zero-Pill compliant button bar) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#12141c] rounded-xl border border-white/10 self-start md:self-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              All Photos ({galleryItems.length})
            </button>
            <button
              onClick={() => setActiveCategory('interior')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === 'interior'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Interior
            </button>
            <button
              onClick={() => setActiveCategory('equipment')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === 'equipment'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Imported Equipment
            </button>
            <button
              onClick={() => setActiveCategory('training')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === 'training'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Training Sessions
            </button>
          </div>
        </div>

        {/* Masonry-Style Multi-Column Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance] space-y-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden bg-[#12141c] border border-white/10 hover:border-orange-500/50 shadow-sm transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
              aria-label={`View ${item.title}`}
            >
              {/* Image Frame with Fallback */}
              <div className="relative overflow-hidden bg-neutral-900">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="flex items-center justify-between text-xs text-orange-400 font-semibold uppercase tracking-wider mb-1.5">
                    <span>{item.categoryLabel}</span>
                    <span className="p-1.5 bg-black/60 rounded-lg text-white">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <h3 className="text-base font-bold font-display text-white mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>

                {/* Quiet Permanent Caption on Mobile / Small viewports */}
                <div className="p-4 bg-[#12141c] border-t border-white/5 sm:hidden">
                  <div className="text-[11px] font-semibold text-orange-400 uppercase tracking-wider">
                    {item.categoryLabel}
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">{item.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Trust Footnote */}
        <div className="mt-12 p-6 bg-[#12141c] border border-white/10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-500/10 rounded-lg text-orange-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <span>
              Real facility photography taken on-site at Metro Pillar No. 870, GT Road, Muradnagar.
            </span>
          </div>
          <div className="flex items-center gap-2 text-neutral-300">
            <span className="font-semibold text-white">Walk-in tours welcomed:</span>
            <span>Open daily till 11:00 PM</span>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-5xl w-full bg-[#12141c] border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-[#0e1017]">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-orange-400">
                  {filteredItems[selectedImageIndex].categoryLabel}
                </span>
                <h3 className="text-base sm:text-lg font-bold font-display text-white">
                  {filteredItems[selectedImageIndex].title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-neutral-400 font-mono pr-2">
                  {selectedImageIndex + 1} / {filteredItems.length}
                </span>
                <button
                  onClick={closeLightbox}
                  className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close image viewer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Viewport */}
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] overflow-hidden">
              <img
                src={filteredItems[selectedImageIndex].image}
                alt={filteredItems[selectedImageIndex].title}
                referrerPolicy="no-referrer"
                className="max-h-[60vh] sm:max-h-[68vh] w-auto max-w-full object-contain mx-auto"
              />

              {/* Prev / Next Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox('prev');
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-orange-600 text-white transition-colors cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox('next');
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-orange-600 text-white transition-colors cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Bottom Caption */}
            <div className="p-4 sm:p-5 bg-[#0e1017] border-t border-white/10 text-xs sm:text-sm text-neutral-300 flex items-center justify-between">
              <p>{filteredItems[selectedImageIndex].caption}</p>
              <span className="text-neutral-500 text-xs hidden sm:inline whitespace-nowrap pl-4">
                Use ← → arrows to navigate
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
