import React from 'react';
import { useReveal } from './useReveal';

export default function WhyUs() {
  const [ref, visible] = useReveal(0.1);

  const stats = [
    { value: '99.97%', label: 'Disponibilidad' },
    { value: '< 2h', label: 'Tiempo de Respuesta' },
    { value: '100%', label: 'Automatización' },
    { value: '5/5', label: 'Satisfacción' },
  ];

  return (
    <section id="porque" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/5 via-indigo-950/10 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`glass-card rounded-3xl p-10 lg:p-16 relative overflow-hidden transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-600/10 to-cyan-500/10 rounded-full blur-[100px]" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-cyan-400 mb-4">
              <span className="w-8 h-px bg-cyan-500" /> ¿POR QUÉ ELEGIRNOS?
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-8">
              ¿Por qué elegirnos?
            </h2>

            <div className="space-y-5 text-lg text-slate-300 leading-relaxed max-w-2xl">
              <p>
                A diferencia de las agencias tradicionales que solo escriben código o solo administran servidores,{' '}
                <span className="text-cyan-400 font-semibold">nosotros dominamos ambos mundos</span>.
              </p>
              <p>
                Sabemos cómo el código impacta la red y cómo la infraestructura acelera el software.{' '}
                <span className="text-blue-400 font-semibold">Entregamos soluciones End-to-End</span>.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 text-center">
                  <div className="text-2xl lg:text-3xl font-bold gradient-text mb-1">{s.value}</div>
                  <div className="text-xs text-slate-500 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
