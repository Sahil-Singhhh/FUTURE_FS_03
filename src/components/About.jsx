import React from 'react';
import { BookMarked, Coffee, Heart, Compass, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="story" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-stone-800/80 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-amber-500 uppercase tracking-widest block mb-2">
            // OUR PHILOSOPHY & STORY
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-100 tracking-tight mb-6">
            A Haven for Booklovers and Coffee Aficionados
          </h2>
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-light">
            Located on the first floor of Indirapuram Habitat Centre in Ghaziabad, <strong className="text-white font-medium">The Reader's Cafe</strong> was founded on a simple yet profound premise: good ideas and meaningful conversations flourish where exceptional coffee meets great literature.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="p-8 rounded-2xl bg-stone-900/60 border border-stone-800 hover:border-amber-700/60 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-950/60 border border-amber-800/60 text-amber-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-100 mb-3">
                Third-Wave Bean Curation
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                We source our single-origin and custom estate blends from certified shade-grown plantations across Chikmagalur and Coorg, roasted to accentuate natural notes of cocoa, caramel, and wild berry.
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 rounded-2xl bg-stone-900/60 border border-stone-800 hover:border-amber-700/60 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-950/60 border border-amber-800/60 text-amber-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookMarked className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-100 mb-3">
                Curated Physical Library
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                With bookshelves spanning wall to wall, our guests are welcome to pick, read, and immerse themselves in classics, contemporary fiction, biographies, and essays while enjoying their meals.
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-8 rounded-2xl bg-stone-900/60 border border-stone-800 hover:border-amber-700/60 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-950/60 border border-amber-800/60 text-amber-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-100 mb-3">
                Slow Living & Community
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                Whether you're finishing your next manuscript, studying for engineering exams, or catching up with old friends over a wood-fired pizza, our space is designed for thoughtful connection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
