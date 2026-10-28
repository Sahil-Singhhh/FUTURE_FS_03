import React from 'react';
import { BookOpen, Sparkles, Feather, Users, Wifi, Coffee } from 'lucide-react';

export default function BookLounge() {
  const libraryGenres = [
    { genre: 'Classic & Modern Fiction', count: '650+ Volumes', desc: 'From Dostoevsky and Orwell to Murakami and Donna Tartt.' },
    { genre: 'Philosophy & Psychology', count: '400+ Volumes', desc: 'Marcus Aurelius, Nietzsche, Kahneman, and modern mindfulness.' },
    { genre: 'Art, Architecture & Design', count: '320+ Hardcovers', desc: 'Large-format photography, Scandinavian interiors, visual art.' },
    { genre: 'Technology & Biographies', count: '450+ Volumes', desc: 'Silicon Valley memoirs, algorithmic history, leadership.' },
  ];

  return (
    <section id="library" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-stone-800/80 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs text-amber-500 uppercase tracking-widest block">
              // THE LITERARY RETREAT
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-100 tracking-tight leading-tight">
              A Living Library Built for Quiet Contemplation.
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
              We believe a cafe should nourish the mind as well as the palate. Our reading lounge features floor-to-ceiling wooden bookshelves housing over 2,000 hand-selected volumes. Pick any book while you sip your cortado, or exchange a book from your personal shelf via our community exchange initiative.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-950/60 text-amber-400 border border-amber-800/50 shrink-0">
                  <Wifi className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase font-mono">Creator Co-Working Nooks</h4>
                  <p className="text-xs text-stone-400">High-speed Wi-Fi, ergonomic banquette seating, and individual wall sockets for quiet deep work.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-950/60 text-amber-400 border border-amber-800/50 shrink-0">
                  <Feather className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase font-mono">Monthly Book Club & Open Mics</h4>
                  <p className="text-xs text-stone-400">Join passionate readers and local NCR poets on the last Sunday of each month for intimate gatherings.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Library Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {libraryGenres.map((lib, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-stone-900/80 border border-stone-800 hover:border-amber-700/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <BookOpen className="w-5 h-5 text-amber-500" />
                    <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/60 border border-amber-800/50 px-2 py-0.5 rounded">
                      {lib.count}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-base text-stone-100 mb-2">
                    {lib.genre}
                  </h3>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    {lib.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-800/80 text-[11px] font-mono text-stone-500">
                  Open Shelf Access
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
