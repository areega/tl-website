import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import SessionInfo from './components/SessionInfo';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import EmergencyResources from './components/EmergencyResources';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-primary text-neutral-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <SessionInfo />
        {/* <Testimonials /> */}
        <FAQ />
        <Contact />
        <EmergencyResources />
      </main>
      <Footer />
    </div>
  );
}

export default App;