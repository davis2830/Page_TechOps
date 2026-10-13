import React, { useEffect } from 'react';
import TallerNavbar from '../components/taller/TallerNavbar';
import TallerHero from '../components/taller/TallerHero';
import TallerServicios from '../components/taller/TallerServicios';
import TallerNosotros from '../components/taller/TallerNosotros';
import TallerProceso from '../components/taller/TallerProceso';
import TallerPrecios from '../components/taller/TallerPrecios';
import TallerContacto from '../components/taller/TallerContacto';
import TallerFooter from '../components/taller/TallerFooter';
import Seo from '../components/Seo';

export default function TallerPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-slate-100 overflow-x-hidden">
      <Seo title="GC Torque | ERP para talleres mecánicos" description="Administra órdenes de trabajo, inventario, clientes y facturación con GC Torque, un ERP para talleres mecánicos en Guatemala." path="/taller" type="product" />
      <TallerNavbar />
      <TallerHero />
      <TallerServicios />
      <TallerNosotros />
      <TallerProceso />
      <TallerPrecios />
      <TallerContacto />
      <TallerFooter />
    </div>
  );
}
