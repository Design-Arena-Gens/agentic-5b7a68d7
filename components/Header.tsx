'use client';

import { useState } from 'react';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' }
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((open) => !open);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-lg shadow-orange-100/40">
      <div className="bg-primary-500 text-white text-sm">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-2 sm:flex-row">
          <p className="font-medium">Complimentary blueberry facials with every full groom this month!</p>
          <div className="flex items-center gap-4 text-white/90">
            <a href="tel:5551234567" className="flex items-center gap-1 font-semibold">
              <span aria-hidden className="text-lg">📞</span>
              (555) 123-4567
            </a>
            <a href="https://maps.app.goo.gl/" target="_blank" rel="noreferrer" className="flex items-center gap-1">
              <span aria-hidden className="text-lg">📍</span>
              42 Tailwag Trail, Riverview
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <span className="rounded-full bg-primary-500 p-2 text-2xl leading-none text-white shadow-glow">🐾</span>
          <div>
            <p className="font-display text-xl font-semibold tracking-tight">Pampered Paws</p>
            <p className="text-sm text-slate-500">Boutique Grooming Studio</p>
          </div>
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-600 transition hover:text-primary-500"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <span className="text-sm text-slate-500">Fear-Free Certified Groomers</span>
          <a
            href="#booking"
            className="rounded-full bg-primary-500 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-orange-200/50 transition hover:bg-primary-600"
          >
            Book Now
          </a>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-2xl text-primary-500 shadow-sm lg:hidden"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
      {isOpen ? (
        <nav className="border-t border-slate-200 bg-white/80 px-6 pb-6 pt-2 lg:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base font-semibold uppercase tracking-[0.28em] text-slate-600 transition hover:text-primary-500"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#booking"
              className="rounded-full bg-primary-500 px-6 py-3 text-center text-base font-semibold uppercase tracking-[0.28em] text-white shadow-lg shadow-orange-200/60"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
};
