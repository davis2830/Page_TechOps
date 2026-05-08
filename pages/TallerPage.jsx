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
