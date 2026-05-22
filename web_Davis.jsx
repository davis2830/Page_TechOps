import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ObservabilityDeck from './components/ObservabilityDeck';
import GCTorqueERP from './components/GCTorqueERP';
import FinOpsSimulator from './components/FinOpsSimulator';
import DiagnosticForm from './components/DiagnosticForm';
import NewFooter from './components/NewFooter';

export default function LandingPage() {
  useEffect(() => {
    document.title = 'TechOps | Ingenier\u00eda de Infraestructura y Operaciones de Alta Disponibilidad';
    document.querySelector('meta[name="description"]')?.setAttribute('content',
      'TechOps - Ingenier\u00eda de Infraestructura, Observabilidad Avanzada, Kubernetes y GCTorque ERP para Talleres. Guatemala y Latinoam\u00e9rica.'
    );
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://www.gctorque.com/');
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#FAFAFA] overflow-x-hidden font-sans">
      <Navbar />
      <Hero />
      <Services />
      <ObservabilityDeck />
      <GCTorqueERP />
      <FinOpsSimulator />
      <DiagnosticForm />
      <NewFooter />
    </div>
  );
}
