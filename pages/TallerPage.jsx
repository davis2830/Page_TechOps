import React, { useEffect } from 'react';
import TallerNavbar from '../components/taller/TallerNavbar';
import TallerHero from '../components/taller/TallerHero';
import TallerServicios from '../components/taller/TallerServicios';
import TallerNosotros from '../components/taller/TallerNosotros';
import TallerProceso from '../components/taller/TallerProceso';
import TallerContacto from '../components/taller/TallerContacto';
import TallerFooter from '../components/taller/TallerFooter';

export default function TallerPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'GC Torque | Sistema ERP para Talleres Mecánicos';
    document.querySelector('meta[name="description"]')?.setAttribute('content',
      'Sistema ERP profesional para talleres mecánicos. Gestiona órdenes de trabajo, inventario, facturación y clientes. Disponible en Guatemala y Latinoamérica.'
    );
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://www.gctorque.com/taller');
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 overflow-x-hidden">
      <TallerNavbar />
      <TallerHero />
      <TallerServicios />
      <TallerNosotros />
      <TallerProceso />
      <TallerContacto />
      <TallerFooter />
    </div>
  );
}
