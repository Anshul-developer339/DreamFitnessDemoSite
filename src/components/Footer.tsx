import React from 'react';
import { Flame, Phone, MapPin, Clock, MessageSquare, ArrowUp, Instagram, Facebook, Youtube } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080b] border-t border-white/10 text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand & Mission */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="p-1.5 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg text-white">
                <Flame className="w-5 h-5 fill-current" />
              </span>
              <span className="text-xl font-black font-display text-white uppercase tracking-tight">
                Dream Fitness<span className="text-orange-500">.</span>
              </span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed mb-6">
              Muradnagar's premier gym destination featuring imported biomechanical machines,
              certified humble coaches, female trainer availability, and a clean, high-energy atmosphere.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-orange-500/20 hover:text-orange-400 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-orange-500/20 hover:text-orange-400 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-orange-500/20 hover:text-orange-400 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${GYM_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-green-500/20 hover:text-green-400 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#about" className="hover:text-orange-400 transition-colors">
                  Why Choose Us (About)
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-orange-400 transition-colors">
                  Imported Equipment & Cardio
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-orange-400 transition-colors">
                  Gym Photo Gallery
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-orange-400 transition-colors">
                  Affordable Membership Fees
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-orange-400 transition-colors">
                  Google Member Reviews (4.8★)
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-orange-400 transition-colors">
                  Directions & Operating Hours
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-400 transition-colors">
                  Book a Free 1-Day Trial
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-white mb-4">
              Visit or Contact
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Metro Pillar No. 870, 179/2, GT Rd, New Defence Colony, Muradnagar, UP 201206
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <a href={`tel:${GYM_INFO.phone}`} className="hover:text-white transition-colors">
                  {GYM_INFO.displayPhone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Open Daily till 11:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Local Area Note & Hours */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-white mb-4">
              Muradnagar Service Area
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed mb-4">
              Proudly serving members from Muradnagar, Mohammadpur Dwedha, New Defence Colony,
              Modinagar, and surrounding GT Road communities.
            </p>
            <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-xs text-neutral-300">
              <span className="text-orange-400 font-semibold block">Need immediate assistance?</span>
              <span>Front desk is active all morning and evening hours.</span>
            </div>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="text-center md:text-left space-y-1">
            <p>© {new Date().getFullYear()} Dream Fitness Gym Muradnagar. All rights reserved.</p>
            <p className="text-[11px] text-neutral-600">
              Disclaimer: Fitness outcomes depend on individual workout consistency, nutrition, and recovery.
              Consult our certified trainers before initiating any intensive exercise routine.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 py-2 px-3 bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white rounded-lg transition-colors cursor-pointer text-xs"
            aria-label="Scroll to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
