# FUTURE_FS_03: Local Business Website & Live Pitch Platform (The Reader's Cafe)

![React](https://img.shields.io/badge/React-18.3.1-61dafb.svg)
![Vite](https://img.shields.io/badge/Vite-6.1.0-646cff.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-38bdf8.svg)
![License](https://img.shields.io/badge/license-MIT-amber.svg)

A production-ready website and business pitch package built for **The Reader's Cafe** (Indirapuram Habitat Centre, Ghaziabad) as part of the **Future Interns Full Stack Web Development Internship (Track Code: FS, Task 3)**.

---

## 📌 Project Overview

This project delivers a complete digital storefront and growth strategy tailored for **The Reader's Cafe**, an authentic specialty book cafe located on the 1st Floor of Indirapuram Habitat Centre in Ghaziabad, Uttar Pradesh.

The web platform enables direct table reservations, showcases artisan coffee extraction techniques and wood-fired Italian dining, highlights an on-site library of 2,000+ curated volumes, provides one-click click-to-call and WhatsApp communication, and embeds local SEO structured Schema.org markup.

Accompanying the application is a comprehensive **`PITCH.md`** containing a business overview, problem statement, solution architecture, live demonstration script, and a professional pitch for presenting the platform to the cafe's ownership.

---

## 🌟 Target Business Information (Verified Public Data)

- **Business Name**: The Reader's Cafe
- **Category**: Specialty Coffee Shop, Italian & Continental Bistro, Book Lounge
- **Physical Address**: Shop 20-21, 1st Floor, Indirapuram Habitat Centre, Ahinsa Khand 1, Indirapuram, Ghaziabad, Uttar Pradesh 201014
- **Coordinates**: Lat 28.6366° N, Lon 77.3732° E
- **Operating Hours**: Monday — Sunday: 11:00 AM – 11:00 PM
- **Contact Number**: +91 120 455 0333 / +91 99997 00333

---

## 🚀 Key Features

1. **Artisan Literary Brand Design**:
   - Palette inspired by roasted espresso, parchment, and warm amber tones with classic Playfair Display serif typography.
2. **Direct Table Reservation System**:
   - Functional reservation engine capturing guest name, contact info, date, time slot, party size, and seating preference (Quiet Reading Nook, Window Booth, Group Table).
   - Generates reservation tokens (`TRC-XXXXXX`) with real-time feedback.
3. **Categorized Culinary Showcase**:
   - Interactive category tabs (Specialty Coffee & Teas, Wood-Fired Pizzas & Pastas, Continental Bites & Mains, Artisan Bakery).
   - Transparent pricing in INR (₹) and dietary indicators (Veg / Non-Veg / Chef's Special).
4. **The Living Library Experience**:
   - Highlights the 2,000+ volume collection across fiction, philosophy, design, and memoirs.
   - Promotes slow living, book exchange initiatives, and creator co-working facilities.
5. **Direct NCR Connectivity**:
   - Click-to-call direct dialer (`tel:+911204550333`).
   - WhatsApp direct chat link (`https://wa.me/919999700333`).
   - One-click Google Maps GPS navigation to Indirapuram Habitat Centre.
6. **Local SEO & Schema.org JSON-LD**:
   - Structured `CafeOrCoffeeShop` JSON-LD schema embedding geo-coordinates, cuisine categories, price range, and opening schedules for Google Search and Maps rich snippet indexing.

---

## 📂 Project Structure

```text
FUTURE_FS_03/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Brand header & mobile drawer
│   │   ├── Hero.jsx              # Hero introduction & action CTAs
│   │   ├── About.jsx             # The Story of The Reader's Cafe
│   │   ├── MenuSection.jsx       # Categorized interactive menu
│   │   ├── BookLounge.jsx        # 2,000+ library and co-working features
│   │   ├── ReservationForm.jsx   # Direct table & event reservation engine
│   │   ├── LocationContact.jsx   # IHC address, hours, call & WhatsApp links
│   │   └── Footer.jsx            # Footer navigation & copyright
│   ├── App.jsx                   # Root application layout
│   ├── index.css                 # Custom styling & subtle coffee patterns
│   └── main.jsx                  # Application entry point
├── index.html                    # HTML5 entry with Schema.org JSON-LD
├── package.json                  # Dependencies and build scripts
├── postcss.config.js             # PostCSS configuration
├── tailwind.config.js            # Custom warm palette
├── vite.config.js                # Vite build configuration
├── PITCH.md                      # Comprehensive business pitch & demo plan
└── README.md                     # Project documentation
```

---

## 💻 Prerequisites & Local Setup

Ensure **Node.js (v18+)** and **npm** are installed.

### 1. Clone the repository
```bash
git clone https://github.com/Sahil-Singhhh/FUTURE_FS_03.git
cd FUTURE_FS_03
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open `http://localhost:3001` in your web browser.

### 4. Build for production
```bash
npm run build
```
Optimized static production build generated in `dist/`.

### 5. Preview production build
```bash
npm run preview
```

---

## 📋 Pitch Document Location

The comprehensive business pitch, live demonstration script, problem analysis, and suggested next steps can be reviewed in:
- **[`PITCH.md`](./PITCH.md)**

---

## 📄 License & Attribution

MIT License. Designed and engineered independently by **Sahil Singh** for the **Future Interns Full Stack Web Development Internship**.
