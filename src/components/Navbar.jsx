import React, { useState, useEffect } from 'react';
import { BookOpen, Coffee, Menu, X, Phone, Calendar, Clock, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'Menu', href: '#menu' },
    { name: 'The Library', href: '#library' },
    { name: 'Reserve a Table', href: '#reserve' },
    { name: 'Visit Us', href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0c0a09]/95 backdrop-blur-md border-b border-amber-900/40 py-3 shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center text-white shadow-md shadow-amber-600/30 group-hover:scale-105 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-lg font-bold text-stone-100 tracking-tight block">
                The Reader's Cafe
              </span>
              <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest block">
                Books • Brews • Bites
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-stone-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-amber-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+911204550333"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-stone-300 hover:text-white border border-stone-800 hover:border-amber-700 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>Call Us</span>
            </a>
            <a
              href="#reserve"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-amber-600 hover:bg-amber-500 text-stone-950 transition-all shadow-md shadow-amber-600/30 active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve Table</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-stone-400 hover:text-white hover:bg-stone-900"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#14110f]/95 backdrop-blur-xl border-b border-amber-900/30 px-4 pt-3 pb-6 space-y-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 text-sm text-stone-300 hover:text-amber-400 hover:bg-stone-900/60 rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-800 flex flex-col gap-2">
            <a
              href="#reserve"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2.5 rounded-lg text-xs font-semibold bg-amber-600 hover:bg-amber-500 text-stone-950"
            >
              Reserve a Table
            </a>
            <a
              href="tel:+911204550333"
              className="w-full text-center py-2 rounded-lg text-xs font-mono text-stone-300 border border-stone-800 flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              +91 120 455 0333
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
