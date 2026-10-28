import React from 'react';
import { BookOpen, Coffee, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-stone-800 bg-[#080706] text-stone-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <BookOpen className="w-5 h-5 text-amber-500" />
          <span className="font-serif text-sm font-bold text-white">The Reader's Cafe</span>
          <span>//</span>
          <span>Indirapuram Habitat Centre, Ghaziabad</span>
        </div>

        <p className="text-center text-stone-500">
          Independent Digital Concept & Web Architecture by Sahil Singh for Future Interns FS Track (Task 03).
        </p>

        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-400 hover:text-amber-400 hover:border-amber-700 transition-colors flex items-center gap-1.5"
          aria-label="Back to top"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>TOP</span>
        </button>
      </div>
    </footer>
  );
}
