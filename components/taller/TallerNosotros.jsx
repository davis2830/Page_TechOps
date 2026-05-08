import React from 'react';
import { Award, Users, Clock, ThumbsUp } from 'lucide-react';
import { useReveal, useCounter } from '../useReveal';

function StatItem({ value, suffix, label, visible }) {
  const count = useCounter(value, 1800, 0, visible);
  return (
    <div className="text-center">
      <div className="text-3xl lg:text-4xl font-extrabold gradient-text-amber mb-1">
        {count}{suffix}
      </div>
      <div className="text-sm text-slate-500 font-medium">{label}</div>
    </div>
  );
}

export default function TallerNosotros() {
  const [ref, visible] = useReveal(0.1);

  const highlights = [
    { icon: Award, label: 'Tcnicos Certificados', desc: 'Personal capacitado y con experiencia comprobada' },
    { icon: Users, label: 'Atencin Personalizada', desc: 'Cada cliente recibe seguimiento detallado de su vehculo' },
    { icon: Clock, label: 'Tiempos de Entrega', desc: 'Cumplimos con los plazos acordados sin excusas' },
    { icon: ThumbsUp, label: 'Garanta de Servicio', desc: 'Respaldamos cada trabajo realizado en nuestro taller' },
  ];

  return (
    <section id="nosotros" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/5 via-amber-950/5 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`glass-card rounded-3xl p-10 lg:p-16 relative overflow-hidden transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-amber-600/10 to-orange-500/10 rounded-full blur-[100px]" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 mb-4">
              <span className="w-8 h-px bg-amber-500" /> SOBRE NOSOTROS
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text-amber mb-6">
              Confianza y Calidad
            </h2>

            <div className="space-y-4 text-lg text-slate-300 leading-relaxed max-w-2xl mb-10">
              <p>
                Somos un taller mecnico comprometido con la{' '}
                <span className="text-amber-400 font-semibold">excelencia y la transparencia</span>.
                Cada vehculo que entra a nuestro taller recibe un diagnstico honesto y un servicio de primera.
              </p>
              <p>
                Utilizamos{' '}
                <span className="text-orange-400 font-semibold">herramientas profesionales y tecnologa de diagntico avanzada</span>{' '}
                para garantizar reparaciones precisas y duraderas.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {highlights.map((h) => (
                <div key={h.label} className="flex items-start gap-4 bg-slate-800/40 border border-slate-700/50 rounded-xl p-5">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <h.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{h.label}</h4>
                    <p className="text-slate-500 text-sm">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <StatItem value={500} suffix="+" label="Vehculos Atendidos" visible={visible} />
              <StatItem value={98} suffix="%" label="Satisfaccin" visible={visible} />
              <StatItem value={10} suffix="+" label="Aos de Experiencia" visible={visible} />
              <StatItem value={24} suffix="h" label="Soporte" visible={visible} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
