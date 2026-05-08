import React from 'react';
import { useReveal, useCounter } from './useReveal';

function StatCard({ value, suffix, label }) {
  const [ref, visible] = useReveal(0.3);
  const count = useCounter(value, 1800, 0, visible);

  return (
    <div ref={ref} className={`glass-card rounded-2xl p-6 text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="text-4xl font-extrabold gradient-text mb-1">
        {count}{suffix}
      </div>
      <div className="text-sm text-slate-500 font-medium">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-16 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard value={99} suffix="%" label="Disponibilidad" />
          <StatCard value={50} suffix="+" label="Proyectos Entregados" />
          <StatCard value={2} suffix="h" label="Tiempo de Respuesta" />
          <StatCard value={100} suffix="%" label="Clientes Satisfechos" />
        </div>
      </div>
    </section>
  );
}
