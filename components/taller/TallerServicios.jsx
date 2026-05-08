import React from 'react';
import { Wrench, Gauge, Zap, Droplets, Shield, Settings, Check } from 'lucide-react';
import { useReveal } from '../useReveal';

const servicios = [
  {
    icon: Wrench,
    color: 'from-amber-500 to-amber-700',
    title: 'Mecánica General',
    desc: 'Reparación y mantenimiento completo de motores, transmisiones y sistemas mecánicos.',
    items: [
      'Reparación de motor y culata',
      'Cambio de clutch y transmisión',
      'Ajuste y calibración de motor',
    ],
  },
  {
    icon: Gauge,
    color: 'from-orange-500 to-orange-700',
    title: 'Frenos y Suspensión',
    desc: 'Tu seguridad es prioridad. Revisamos y reparamos todo el sistema de frenado y suspensión.',
    items: [
      'Cambio de pastillas y discos de freno',
      'Reparación de amortiguadores',
      'Alineación y balanceo',
    ],
  },
  {
    icon: Zap,
    color: 'from-yellow-500 to-yellow-700',
    title: 'Sistema Eléctrico y Diagnóstico',
    desc: 'Diagnóstico computarizado y reparación de sistemas eléctricos y electrónicos.',
    items: [
      'Escaneo computarizado OBD-II',
      'Reparación de alternador y motor de arranque',
      'Diagnóstico de sensores y ECU',
    ],
  },
  {
    icon: Droplets,
    color: 'from-red-500 to-red-700',
    title: 'Cambio de Aceite y Fluidos',
    desc: 'Mantenimiento preventivo para prolongar la vida de tu vehículo.',
    items: [
      'Cambio de aceite y filtros',
      'Líquido de frenos y dirección hidráulica',
      'Refrigerante y líquido de transmisión',
    ],
  },
  {
    icon: Shield,
    color: 'from-emerald-500 to-emerald-700',
    title: 'Servicio Preventivo',
    desc: 'Programa de mantenimiento para evitar reparaciones costosas.',
    items: [
      'Servicio menor y mayor',
      'Inspección de 21 puntos',
      'Cambio de bandas y mangueras',
    ],
  },
  {
    icon: Settings,
    color: 'from-blue-500 to-blue-700',
    title: 'Servicios Especializados',
    desc: 'Trabajos técnicos avanzados con equipo profesional.',
    items: [
      'Reparación de aire acondicionado automotriz',
      'Rectificación de discos y tambores',
      'Cambio de kit de distribución',
    ],
  },
];

export default function TallerServicios() {
  return (
    <section id="servicios-taller" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {servicios.map((s, i) => (
            <ServicioCard key={i} servicio={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader() {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`text-center max-w-2xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 mb-4">
        <span className="w-8 h-px bg-amber-500" /> NUESTROS SERVICIOS
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text-amber mb-4">
        Servicios del Taller
      </h2>
      <p className="text-slate-400 text-lg">Soluciones completas para tu vehículo con técnicos certificados</p>
    </div>
  );
}

function ServicioCard({ servicio, index }) {
  const [ref, visible] = useReveal(0.1);
  const Icon = servicio.icon;

  return (
    <div
      ref={ref}
      className={`glass-card rounded-2xl p-7 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`w-12 h-12 bg-gradient-to-br ${servicio.color} rounded-xl flex items-center justify-center mb-5 shadow-lg`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{servicio.title}</h3>
      <p className="text-slate-400 text-sm mb-4">{servicio.desc}</p>
      <ul className="space-y-2">
        {servicio.items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
            <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
