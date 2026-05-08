import React from 'react';
import { Phone, ClipboardList, Wrench, CheckCircle } from 'lucide-react';
import { useReveal } from '../useReveal';

const pasos = [
  {
    icon: Phone,
    step: '01',
    title: 'Contacto',
    desc: 'Comunícate con nosotros por teléfono, WhatsApp o llena el formulario. Te atenderemos de inmediato.',
  },
  {
    icon: ClipboardList,
    step: '02',
    title: 'Diagnóstico',
    desc: 'Realizamos una inspección completa con equipo computarizado para identificar la falla con precisión.',
  },
  {
    icon: Wrench,
    step: '03',
    title: 'Reparación',
    desc: 'Ejecutamos el trabajo con piezas de calidad. Te mantenemos informado del avance en todo momento.',
  },
  {
    icon: CheckCircle,
    step: '04',
    title: 'Entrega',
    desc: 'Pruebas de calidad finales y entrega puntual. Tu vehículo sale listo y con garantía de servicio.',
  },
];

export default function TallerProceso() {
  return (
    <section id="proceso" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {pasos.map((p, i) => (
            <PasoCard key={i} paso={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Header() {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`text-center max-w-2xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 mb-4">
        <span className="w-8 h-px bg-amber-500" /> CÓMO TRABAJAMOS
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text-amber mb-4">
        Nuestro Proceso
      </h2>
      <p className="text-slate-400 text-lg">Cuatro pasos simples para dejar tu vehículo en óptimas condiciones</p>
    </div>
  );
}

function PasoCard({ paso, index }) {
  const [ref, visible] = useReveal(0.15);
  const Icon = paso.icon;

  return (
    <div
      ref={ref}
      className={`glass-card rounded-2xl p-7 text-center relative transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
        {paso.step}
      </div>
      <div className="w-14 h-14 bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-xl flex items-center justify-center mx-auto mt-4 mb-5">
        <Icon className="w-7 h-7 text-amber-400" />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{paso.title}</h3>
      <p className="text-slate-400 text-sm">{paso.desc}</p>
    </div>
  );
}
