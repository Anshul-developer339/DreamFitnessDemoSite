import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { TESTIMONIALS, GYM_INFO } from '../data/gymData';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#0d0f17] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Real Rating Adjacency */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest font-bold text-orange-500 mb-2">
              Member Experiences
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display text-white uppercase tracking-tight">
              Real Reviews. Real Results.
            </h2>
            <p className="mt-4 text-base text-neutral-400 max-w-2xl">
              Don't just take our word for it. Here is what members from Muradnagar, New Defence Colony,
              and Mohammadpur Dwedha say about training at Dream Fitness.
            </p>
          </div>

          {/* Social Proof Aggregate Card (No Pill Enclosures) */}
          <div className="bg-[#12141c] border border-white/10 rounded-2xl p-5 flex items-center gap-4 self-start md:self-auto">
            <div className="text-center pr-4 border-r border-white/10">
              <div className="text-3xl font-black font-display text-white tabular-nums">
                {GYM_INFO.rating}
              </div>
              <div className="flex text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-white">
                Google Verified Rating
              </div>
              <div className="text-xs text-neutral-400 mt-0.5">
                Based on {GYM_INFO.reviewCount}+ authentic member reviews
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-[#12141c] border border-white/10 hover:border-white/20 rounded-2xl p-7 flex flex-col justify-between transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  {/* Unboxed Metadata */}
                  <span className="text-xs text-neutral-500 font-medium">
                    {review.date}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-orange-500/20 mb-3" />

                <p className="text-neutral-200 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  "{review.quote}"
                </p>
              </div>

              {/* Attribution with Unboxed Separator */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{review.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-orange-400 inline" />
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    {review.role}
                  </div>
                </div>

                {/* Subtle highlight label (clean text, no pill) */}
                <span className="text-[11px] font-semibold tracking-wider uppercase text-orange-400/80">
                  {review.highlightTag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Community Proof Footer */}
        <div className="mt-12 text-center text-xs text-neutral-400">
          <span>Trusted by working professionals, collegiate athletes, and local residents across Muradnagar.</span>
        </div>
      </div>
    </section>
  );
};
