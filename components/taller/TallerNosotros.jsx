import React from 'react';
import { Database, LockKeyhole, SlidersHorizontal, Users } from 'lucide-react';
import { useReveal } from '../useReveal';
import config from '../../config/contacto';

export default function TallerNosotros() {
  const [ref, visible] = useReveal(0.1);
  const highlights = [
    { icon: Database, label: 'Una sola fuente de información', desc: 'Clientes, vehículos, órdenes y repuestos conectados en un mismo flujo.' },
    { icon: Users, label: 'Responsabilidades visibles', desc: 'Asigna trabajo y consulta el avance sin depender de papel o mensajes dispersos.' },
    { icon: SlidersHorizontal, label: 'Configurado para tu operación', desc: 'La implementación considera los procesos y el tamaño real de cada taller.' },
    { icon: LockKeyhole, label: 'Acceso controlado', desc: 'Usuarios, roles y permisos para separar las responsabilidades del equipo.' },
  ];

  return (
    <section id="nosotros" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/5 via-amber-950/5 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`glass-card rounded-3xl p-8 lg:p-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 mb-4"><span className="w-8 h-px bg-amber-500" /> EL PRODUCTO</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text-amber mb-6">Diseñado alrededor del trabajo diario</h2>
          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mb-10">{config.businessName} es software para administrar un taller mecánico. No reemplaza el criterio de tu equipo: organiza la información y hace visible lo que necesita atención.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item) => <div key={item.label} className="flex items-start gap-4 bg-slate-800/40 border border-slate-700/50 rounded-xl p-5"><div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0"><item.icon className="w-5 h-5 text-amber-400" /></div><div><h3 className="text-white font-semibold mb-1">{item.label}</h3><p className="text-slate-500 text-sm leading-6">{item.desc}</p></div></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
