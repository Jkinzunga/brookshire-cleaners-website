import { useState, useEffect } from 'react';
import Icon from './Icon';

const links = ['Services', 'How It Works', 'Reviews', 'Visit Us'];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500
        ${scrolled ? 'nav-blur shadow-card py-3' : 'bg-transparent py-5'}`}
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        <a href="#" className="flex items-center gap-3 flex-shrink-0">
          <div className="w-10 h-10 rounded-xl border-2 border-ink flex items-center justify-center flex-shrink-0">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1C1C1E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 18.5h18L12 10 3 18.5z"/>
              <path d="M12 10V6.5"/>
              <path d="M10 6.5a2 2 0 1 1 4 0"/>
            </svg>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display font-semibold text-ink text-base tracking-wide">Brookshire</span>
            <span className="font-body text-stone text-[10px] tracking-[0.18em] uppercase">Cleaners · Charlotte, NC</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g, '-')}`}
               className="ulink font-body text-sm text-stone hover:text-ink transition-colors duration-200">
              {l}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+17043930088"
             className="flex items-center gap-2 font-body text-sm text-stone hover:text-sage transition-colors">
            <Icon n="phone" size={13} />(704) 393-0088
          </a>
          <a href="tel:+17043930088"
             className="btn bg-sage text-white font-body font-medium text-sm px-5 py-3 rounded-full">
            Call to Schedule
          </a>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {[0, 1, 2].map((i) => (
            <div key={i} className={`w-5 h-0.5 bg-ink mb-1 last:mb-0 transition-all duration-300
              ${open && i === 0 ? 'rotate-45 translate-y-1.5' : ''}
              ${open && i === 1 ? 'opacity-0' : ''}
              ${open && i === 2 ? '-rotate-45 -translate-y-1.5' : ''}`}
            />
          ))}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="md:hidden nav-blur border-t border-cream px-6 pt-4 pb-6 mt-1">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g, '-')}`}
               className="block font-body text-ink py-3 border-b border-cream/50 text-sm"
               onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
          <a href="tel:+17043930088"
             className="mt-5 block text-center bg-sage text-white font-body font-medium text-sm py-3 rounded-full"
             onClick={() => setOpen(false)}>
            Call (704) 393-0088
          </a>
        </div>
      )}
    </nav>
  );
}
