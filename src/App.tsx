import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BeforeAfter from './components/BeforeAfter';
import Services from './components/Services';
import TrustBadges from './components/TrustBadges';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyBookNow from './components/StickyBookNow';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <BeforeAfter />
      <Services />
      <TrustBadges />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <StickyBookNow />
    </div>
  );
}

export default App;