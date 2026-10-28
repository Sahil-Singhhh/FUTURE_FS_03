import React from 'react';
import { BookOpen, Coffee, MapPin, Calendar, ArrowRight, Star, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-cafe-pattern overflow-hidden">
      {/* Ambient warm lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Verified location badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/90 border border-amber-800/40 backdrop-blur-md mb-8">
          <MapPin className="w-3.5 h-3.5 text-amber-500" />
          <span className="text-xs font-mono text-stone-300">
            INDIRAPURAM HABITAT CENTRE, GHAZIABAD // 11 AM - 11 PM
          </span>
        </div>

        {/* Serif Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-stone-100 mb-6 leading-tight">
          Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">Literature</span> Meets the Art of Coffee.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-stone-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Escape the city bustle into Indirapuram's premier literary haven. Savor handcrafted single-origin roasts, wood-fired artisan crusts, and a curated library of over 2,000 timeless volumes.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#reserve"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-amber-600 hover:bg-amber-500 text-stone-950 transition-all shadow-xl shadow-amber-600/25 active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            Reserve a Table
          </a>
          <a
            href="#menu"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-stone-200 bg-stone-900/80 hover:bg-stone-800 border border-stone-800 hover:border-amber-700 transition-all active:scale-95"
          >
            <Coffee className="w-4 h-4 text-amber-500" />
            Explore Menu
          </a>
        </div>

        {/* Quick Features Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto font-mono text-xs">
          <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800/80">
            <BookOpen className="w-5 h-5 text-amber-500 mx-auto mb-2" />
            <div className="font-bold text-stone-100">2,000+ Titles</div>
            <div className="text-[11px] text-stone-400 mt-0.5">Fiction & Philosophy</div>
          </div>

          <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800/80">
            <Coffee className="w-5 h-5 text-amber-500 mx-auto mb-2" />
            <div className="font-bold text-stone-100">Specialty Roasts</div>
            <div className="text-[11px] text-stone-400 mt-0.5">100% Arabica Beans</div>
          </div>

          <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800/80">
            <Star className="w-5 h-5 text-amber-500 mx-auto mb-2" />
            <div className="font-bold text-stone-100">Wood-Fired</div>
            <div className="text-[11px] text-stone-400 mt-0.5">Artisanal Italian Crusts</div>
          </div>

          <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800/80">
            <Clock className="w-5 h-5 text-amber-500 mx-auto mb-2" />
            <div className="font-bold text-stone-100">Co-Work Nooks</div>
            <div className="text-[11px] text-stone-400 mt-0.5">Quiet Wi-Fi Stations</div>
          </div>
        </div>
      </div>
    </section>
  );
}
