import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import ProductShowcase from './components/ProductShowcase';
import Pricing from './components/Pricing';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function LandingPage() {
  useEffect(() => {
    document.title = 'TechOps | Ingeniería de Software y Operaciones';
    document.querySelector('meta[name="description"]')?.setAttribute('content',
      'TechOps - Ingeniería de Software, Automatización de Infraestructura y Monitoreo NOC. Desarrollo a medida, SRE y Observabilidad en Guatemala y Latinoamérica.'
    );
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://www.gctorque.com/');
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <ProductShowcase />
      <Pricing />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}
