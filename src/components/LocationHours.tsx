import React, { useState } from 'react';
import { MapPin, Clock, Navigation, Copy, Check, Phone, Car, Shield } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const LocationHours: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(GYM_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-24 bg-[#090a0f] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest font-bold text-orange-500 mb-2">
            Prime Location & Hours
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white uppercase tracking-tight">
            Conveniently Located On GT Road
          </h2>
          <p className="mt-4 text-base text-neutral-400">
            Right next to Metro Pillar No. 870 in Muradnagar. Easy access, ample two-wheeler and
            four-wheeler parking, open early morning to late night.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address, Hours, Contact Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Address Card */}
            <div className="bg-[#12141c] border border-white/10 rounded-2xl p-7 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-orange-500/10 rounded-xl text-orange-400 shrink-0 mt-0.5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-display">Gym Address</h3>
                  <div className="text-xs font-semibold text-orange-400 mt-0.5">
                    Landmark: Near Metro Pillar No. 870
                  </div>
                </div>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed pl-13 mb-4">
                {GYM_INFO.address}
              </p>

              <div className="pl-13 flex flex-wrap items-center gap-3">
                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 py-1.5 px-3 text-xs font-medium text-neutral-300 bg-white/5 hover:bg-white/10 rounded-lg transition-colors cursor-pointer border border-white/10"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-green-400">Address Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-neutral-400" />
                      <span>Copy Full Address</span>
                    </>
                  )}
                </button>

                <a
                  href={GYM_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 py-1.5 px-3 text-xs font-medium text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-[#12141c] border border-white/10 rounded-2xl p-7 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-orange-500/10 rounded-xl text-orange-400 shrink-0 mt-0.5">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-display">Operating Hours</h3>
                  <div className="text-xs font-semibold text-emerald-400 mt-0.5">
                    Open Daily Till 11:00 PM
                  </div>
                </div>
              </div>

              <div className="pl-13 space-y-2.5 text-xs sm:text-sm">
                <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                  <span className="text-neutral-400">Morning Slot:</span>
                  <span className="text-white font-semibold tabular-nums">{GYM_INFO.timingDetailed.morning}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                  <span className="text-neutral-400">Evening Slot:</span>
                  <span className="text-white font-semibold tabular-nums">{GYM_INFO.timingDetailed.evening}</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-neutral-400">Sunday Special:</span>
                  <span className="text-white font-semibold tabular-nums">{GYM_INFO.timingDetailed.sunday}</span>
                </div>
              </div>
            </div>

            {/* Parking & Accessibility note */}
            <div className="bg-[#12141c] border border-white/10 rounded-2xl p-5 flex items-center gap-4 text-xs text-neutral-300">
              <div className="p-2.5 bg-white/5 rounded-lg text-neutral-400 shrink-0">
                <Car className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <span className="font-bold text-white block">Dedicated Parking Available</span>
                <span>Spacious roadside and front parking for two-wheelers and cars.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Map & Landmarks Card (7 cols) */}
          <div className="lg:col-span-7 bg-[#12141c] border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm">
            {/* Map Header / Location visual */}
            <div className="p-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                  Muradnagar Metro Corridor
                </div>
                <div className="text-lg font-bold text-white font-display">
                  Metro Pillar No. 870, GT Road
                </div>
              </div>

              <a
                href={GYM_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 text-xs uppercase tracking-wider font-bold text-white bg-gradient-to-r from-orange-500 to-red-600 rounded-lg hover:from-orange-600 hover:to-red-700 transition-all flex items-center gap-2"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>

            {/* Stylized Interactive Map Container */}
            <div className="relative aspect-[16/10] bg-[#161925] flex items-center justify-center p-6 text-center overflow-hidden">
              {/* Subtle road grid pattern representing GT Road */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  {/* Diagonal line representing GT Road highway */}
                  <line x1="0" y1="20%" x2="100%" y2="80%" stroke="#f97316" strokeWidth="8" strokeOpacity="0.4" />
                  <line x1="0" y1="20%" x2="100%" y2="80%" stroke="#fff" strokeWidth="2" strokeDasharray="8 6" strokeOpacity="0.6" />
                </svg>
              </div>

              {/* Central Pillar Pin Box */}
              <div className="relative z-10 max-w-md bg-[#0e1017]/95 border border-white/20 p-6 rounded-2xl backdrop-blur-md shadow-2xl">
                <div className="w-12 h-12 bg-gradient-to-tr from-orange-500 to-red-600 rounded-2xl mx-auto flex items-center justify-center text-white mb-3 shadow-lg shadow-orange-500/30">
                  <MapPin className="w-6 h-6 animate-bounce" />
                </div>
                <div className="text-base font-extrabold text-white font-display">
                  DREAM FITNESS GYM
                </div>
                <div className="text-xs font-semibold text-orange-400 mt-1">
                  At Metro Pillar No. 870, 179/2 GT Road
                </div>
                <p className="text-xs text-neutral-400 mt-2">
                  New Defence Colony, Muradnagar, Mohammadpur Dwedha, UP 201206
                </p>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-center gap-4 text-[11px] text-neutral-300">
                  <span>🚗 2 Mins from Bus Stand</span>
                  <span>·</span>
                  <span>🚇 Rapid Rail Access</span>
                </div>
              </div>
            </div>

            {/* Travel Guide Summary */}
            <div className="p-6 bg-[#0f111a] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <div className="font-bold text-white mb-1">From Muradnagar Town</div>
                <div className="text-neutral-400">Head toward GT Road; located 400m before Defence Colony cut.</div>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <div className="font-bold text-white mb-1">From Modinagar / Ghaziabad</div>
                <div className="text-neutral-400">Directly accessible via Delhi-Meerut GT Road beside Pillar 870.</div>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <div className="font-bold text-white mb-1">Need Directions?</div>
                <div className="text-neutral-400">Call our desk directly at {GYM_INFO.displayPhone} for help.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
