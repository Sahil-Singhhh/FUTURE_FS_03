import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuSection from './components/MenuSection';
import BookLounge from './components/BookLounge';
import ReservationForm from './components/ReservationForm';
import LocationContact from './components/LocationContact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0c0a09] text-stone-100 font-sans selection:bg-amber-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <BookLounge />
        <ReservationForm />
        <LocationContact />
      </main>
      <Footer />
    </div>
  );
}
