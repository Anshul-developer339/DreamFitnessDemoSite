import React, { useState, useEffect } from 'react';
import { Menu, X, Flame, Phone } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface NavbarProps {
  onOpenFreeTrial: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenFreeTrial }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#090a0f]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40'
          : 'bg-gradient-to-b from-[#090a0f]/90 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Single Brand Wordmark Element */}
          <a
            href="#"
            className="flex items-center gap-2 group text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-sm"
          >
            <span className="p-2 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg text-white shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform duration-200">
              <Flame className="w-5 h-5 fill-current" />
            </span>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight font-display uppercase leading-tight">
                Dream Fitness<span className="text-orange-500">.</span>
              </span>
            </div>
          </a>

          {/* Zone 2: Clean Text Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-orange-400 transition-colors duration-150 py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-orange-500 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${GYM_INFO.phone}`}
              className="hidden lg:flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-white transition-colors py-2 px-3 rounded-lg border border-white/10 hover:border-white/20"
              title="Call Dream Fitness Gym Muradnagar"
            >
              <Phone className="w-3.5 h-3.5 text-orange-400" />
              <span>{GYM_INFO.displayPhone}</span>
            </a>
            <button
              onClick={onOpenFreeTrial}
              className="py-2.5 px-5 text-xs uppercase tracking-wider font-bold text-white bg-gradient-to-r from-orange-500 to-red-600 rounded-lg hover:from-orange-600 hover:to-red-700 shadow-md shadow-orange-500/25 active:scale-95 transition-all duration-150 whitespace-nowrap cursor-pointer"
            >
              Book Free Trial
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={onOpenFreeTrial}
              className="py-1.5 px-3 text-xs uppercase tracking-wider font-bold text-white bg-orange-600 rounded-md shadow-sm active:scale-95 transition-all"
            >
              Free Trial
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-md"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1017] border-b border-white/10 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-semibold text-neutral-200 hover:text-orange-400 hover:bg-white/5 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href={`tel:${GYM_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-neutral-200 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>Call: {GYM_INFO.displayPhone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFreeTrial();
              }}
              className="w-full py-3 px-4 text-sm uppercase tracking-wider font-bold text-white bg-gradient-to-r from-orange-500 to-red-600 rounded-lg shadow-md shadow-orange-500/25 active:scale-95 transition-all"
            >
              Book Free 1-Day Trial
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
