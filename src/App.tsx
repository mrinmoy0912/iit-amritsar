import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Admissions } from './components/Admissions';
import { Placements } from './components/Placements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Admissions />
        <Placements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;