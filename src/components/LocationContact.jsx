import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Navigation, ExternalLink, Mail } from 'lucide-react';

export default function LocationContact() {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=The+Reader's+Cafe+Indirapuram+Habitat+Centre+Ghaziabad";

  return (
    <section id="location" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-stone-800/80 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-mono text-xs text-amber-500 uppercase tracking-widest block mb-2">
            // FIND OUR CAFE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-100 tracking-tight mb-4">
            Visit Us in Indirapuram
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Conveniently situated on the first floor of Indirapuram Habitat Centre with ample parking and direct elevator access.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact and Timings Cards */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            <div className="p-6 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-5">
              <h3 className="font-serif text-lg font-bold text-white">Verified Address & Access</h3>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-amber-950/60 text-amber-400 border border-amber-800/50 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-stone-400 mb-0.5">LOCATION</div>
                  <p className="text-sm font-medium text-white leading-relaxed">
                    Shop 20-21, 1st Floor, Indirapuram Habitat Centre, Ahinsa Khand 1, Indirapuram, Ghaziabad, Uttar Pradesh 201014
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-amber-950/60 text-amber-400 border border-amber-800/50 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-stone-400 mb-0.5">OPERATING HOURS</div>
                  <p className="text-sm font-medium text-white">
                    Monday — Sunday: 11:00 AM – 11:00 PM
                  </p>
                  <span className="text-[11px] font-mono text-emerald-400">Open 7 Days a Week</span>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="tel:+911204550333"
                  className="p-3 rounded-xl bg-stone-950 border border-stone-800 hover:border-amber-700 transition-all flex items-center gap-2.5 text-xs font-mono text-stone-200"
                >
                  <Phone className="w-4 h-4 text-amber-500" />
                  <span>+91 120 455 0333</span>
                </a>

                <a
                  href="https://wa.me/919999700333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/50 hover:border-emerald-600 transition-all flex items-center gap-2.5 text-xs font-mono text-emerald-300"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 p-4 rounded-2xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold text-xs tracking-wider uppercase font-mono shadow-xl shadow-amber-600/20 transition-all"
            >
              <Navigation className="w-4 h-4" />
              Get Driving Directions on Google Maps
            </a>
          </div>

          {/* Interactive Map Visualizer */}
          <div className="lg:col-span-7 rounded-2xl bg-stone-900/80 border border-stone-800 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-stone-400 uppercase tracking-wider">
                  NCR CONNECTIVITY // IHC INDIRAPURAM
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-stone-950 border border-stone-800 text-[11px] font-mono text-amber-400">
                  <MapPin className="w-3 h-3" /> Lat: 28.6366° N, Lon: 77.3732° E
                </span>
              </div>

              {/* Map embed / simulated GPS card */}
              <div className="w-full h-64 sm:h-80 rounded-xl bg-stone-950 border border-stone-800 relative overflow-hidden flex items-center justify-center text-center p-6 group">
                {/* Background grid */}
                <div className="absolute inset-0 bg-cafe-pattern opacity-40"></div>

                <div className="relative z-10 max-w-sm space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-600 text-stone-950 flex items-center justify-center mx-auto shadow-xl shadow-amber-600/40">
                    <Navigation className="w-6 h-6 animate-pulse" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-white">
                    The Reader's Cafe @ Habitat Centre
                  </h4>
                  <p className="text-xs text-stone-400 font-mono leading-relaxed">
                    Accessible via Swarna Jayanti Park road & Mohan Nagar link. 10 mins from Vaishali & Electronic City Metro stations.
                  </p>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono font-semibold bg-stone-800 hover:bg-stone-700 text-amber-400 border border-stone-700 transition-colors"
                  >
                    Open Live GPS Coordinates
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400 font-mono">
              <span>Ample Basement Parking Available</span>
              <span>Wheelchair & Elevator Accessible</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
