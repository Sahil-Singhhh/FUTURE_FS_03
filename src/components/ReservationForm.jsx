import React, { useState } from 'react';
import { Calendar, Clock, Users, CheckCircle2, AlertCircle, Sparkles, BookOpen } from 'lucide-react';

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    timeSlot: '19:00',
    guests: '2 Guests',
    seatingPreference: 'Quiet Reading Nook',
    notes: '',
  });

  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.date) {
      setError('Please provide your name, email, phone number, and reservation date.');
      return;
    }

    setLoading(true);
    setError('');

    setTimeout(() => {
      const reservationId = 'TRC-' + Math.floor(100000 + Math.random() * 900000);
      setConfirmation({
        id: reservationId,
        name: formData.name,
        date: formData.date,
        time: formData.timeSlot,
        guests: formData.guests,
        seating: formData.seatingPreference,
      });
      setLoading(false);
    }, 600);
  };

  return (
    <section id="reserve" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-stone-800/80 bg-stone-950/40 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-mono text-xs text-amber-500 uppercase tracking-widest block mb-2">
            // TABLE & BOOK CLUB RESERVATIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-100 tracking-tight mb-4">
            Reserve Your Experience
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Book a serene reading corner, an intimate dinner table, or an event space at Indirapuram Habitat Centre with zero booking fees.
          </p>
        </div>

        <div className="p-6 sm:p-10 rounded-3xl bg-stone-900/90 border border-stone-800 shadow-2xl relative">
          {confirmation ? (
            <div className="p-8 rounded-2xl bg-amber-950/40 border border-amber-800/60 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-amber-500 mx-auto" />
              <h3 className="font-serif text-2xl font-bold text-white">Table Reserved Successfully!</h3>
              <p className="text-xs font-mono text-amber-400">
                CONFIRMATION TOKEN: {confirmation.id}
              </p>
              <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 text-xs font-mono text-stone-300 max-w-md mx-auto space-y-1.5 text-left">
                <div><strong>GUEST:</strong> {confirmation.name}</div>
                <div><strong>DATE & TIME:</strong> {confirmation.date} at {confirmation.time}</div>
                <div><strong>PARTY SIZE:</strong> {confirmation.guests}</div>
                <div><strong>SEATING PREFERENCE:</strong> {confirmation.seating}</div>
                <div><strong>VENUE:</strong> The Reader's Cafe, 1st Floor, IHC, Ghaziabad</div>
              </div>
              <p className="text-xs text-stone-400 max-w-md mx-auto">
                We have registered your table request. A confirmation SMS/WhatsApp prompt has been simulated for your visit.
              </p>
              <button
                onClick={() => setConfirmation(null)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold bg-amber-600 hover:bg-amber-500 text-stone-950 transition-colors"
              >
                Make Another Reservation
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3.5 rounded-xl bg-rose-950/70 border border-rose-800 text-rose-300 flex items-start gap-2.5 text-xs">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono text-stone-300 mb-1.5">FULL NAME *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sahil Singh"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-stone-300 mb-1.5">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="sahil@example.com"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-stone-300 mb-1.5">CONTACT NUMBER *</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91-9876543210"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono text-stone-300 mb-1.5">RESERVATION DATE *</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-stone-300 mb-1.5">TIME SLOT</label>
                  <select
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-sm text-white focus:outline-none focus:border-amber-500 font-mono text-xs"
                  >
                    <option value="12:00">12:00 PM (Lunch)</option>
                    <option value="14:00">02:00 PM (Afternoon Brew)</option>
                    <option value="16:30">04:30 PM (High Tea & Reading)</option>
                    <option value="19:00">07:00 PM (Early Dinner)</option>
                    <option value="20:30">08:30 PM (Late Dinner)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-stone-300 mb-1.5">PARTY SIZE</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-sm text-white focus:outline-none focus:border-amber-500 font-mono text-xs"
                  >
                    <option value="1 Guest (Solo Reader)">1 Guest (Solo Reader)</option>
                    <option value="2 Guests">2 Guests (Table for Two)</option>
                    <option value="3-4 Guests">3-4 Guests (Small Group)</option>
                    <option value="5-8 Guests">5-8 Guests (Book Club / Celebration)</option>
                    <option value="8+ Guests (Event Booking)">8+ Guests (Event Booking)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-stone-300 mb-1.5">SEATING PREFERENCE</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    'Quiet Reading Nook',
                    'Window View Booth',
                    'Main Hall Dining Table',
                  ].map((seat) => (
                    <label
                      key={seat}
                      className={`p-3 rounded-xl border text-xs font-mono flex items-center gap-2 cursor-pointer transition-all ${
                        formData.seatingPreference === seat
                          ? 'bg-amber-950/60 border-amber-600 text-amber-300 font-semibold'
                          : 'bg-stone-950 border-stone-800 text-stone-400 hover:border-stone-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name="seatingPreference"
                        value={seat}
                        checked={formData.seatingPreference === seat}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <span>{seat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-stone-300 mb-1.5">SPECIAL REQUESTS / OCCASIONS</label>
                <textarea
                  name="notes"
                  rows="2"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Anniversary, book discussion club, dietary preferences, or quiet corner request..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-sm text-white focus:outline-none focus:border-amber-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold bg-amber-600 hover:bg-amber-500 text-stone-950 transition-all shadow-xl shadow-amber-600/30 active:scale-95 disabled:opacity-50"
              >
                {loading ? 'CONFIRMING TABLE ALLOCATION...' : 'CONFIRM TABLE RESERVATION'}
                <Calendar className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
