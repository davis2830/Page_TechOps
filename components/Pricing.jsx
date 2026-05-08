import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { useReveal } from './useReveal';

const plans = [
  {
    name: 'Starter',
    price: 'Q ---',
    period: '/mes',
    desc: 'Ideal para talleres pequeños que inician su digitalización.',
    features: [
      'Hasta 3 usuarios',
      'Gestión de citas',
      'Órdenes de trabajo',
      'Inventario básico',
      'Soporte por email',
    ],
    cta: 'Comenzar',
    accent: false,
  },
  {
    name: 'Profesional',
    price: 'Q ---',
    period: '/mes',
    desc: 'Para talleres en crecimiento que necesitan control total.',
    features: [
      'Hasta 10 usuarios',
      'Todo de Starter',
      'Tablero Kanban avanzado',
      'Facturación electrónica FEL',
      'Reportes y métricas',
      'Inventario inteligente',
      'Soporte prioritario',
    ],
    cta: 'Elegir Plan',
    accent: true,
    badge: 'Más Popular',
  },
  {
    name: 'Enterprise',
    price: 'Q ---',
    period: '/mes',
    desc: 'Para cadenas de talleres con operaciones complejas.',
    features: [
      'Usuarios ilimitados',
      'Todo de Profesional',
      'Multi-sucursal',
      'API & integraciones',
      'Dashboard ejecutivo',
      'Gerente de cuenta dedicado',
      'SLA garantizado',
    ],
    cta: 'Contactar Ventas',
    accent: false,
  },
];

export default function Pricing() {
  const [ref, visible] = useReveal(0.1);

  return (
    <section id="precios" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 mb-4">
            <span className="w-8 h-px bg-amber-500" /> PLANES TORQUE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text-amber mb-4">
            Planes y Precios
          </h2>
          <p className="text-slate-400 text-lg">
            Elige el plan perfecto para tu taller. Precios próximamente.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        {/* Demo CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-500 mb-4">¿No estás seguro? Prueba antes de decidir.</p>
          <a href="#contacto" className="btn-outline !text-amber-400 !border-amber-500/30 hover:!border-amber-400">
            Solicitar Demo Gratuita
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan, index }) {
  const [ref, visible] = useReveal(0.15);

  return (
    <div
      ref={ref}
      className={`relative glass-card rounded-2xl p-8 flex flex-col transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${plan.accent ? 'border-amber-500/30 ring-1 ring-amber-500/10' : ''}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {plan.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
          {plan.badge}
        </div>
      )}

      <div className="mb-6">
        <h3 className={`text-xl font-bold mb-1 ${plan.accent ? 'text-amber-400' : 'text-white'}`}>
          {plan.name}
        </h3>
        <p className="text-sm text-slate-500">{plan.desc}</p>
      </div>

      <div className="mb-6">
        <span className={`text-4xl font-extrabold ${plan.accent ? 'text-amber-400' : 'text-white'}`}>
          {plan.price}
        </span>
        <span className="text-slate-500 text-sm">{plan.period}</span>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-slate-400">
            <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.accent ? 'text-amber-400' : 'text-cyan-400'}`} />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
          plan.accent
            ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-900/20 hover:from-amber-400 hover:to-orange-500 hover:-translate-y-0.5'
            : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
        }`}
      >
        {plan.cta}
      </button>
    </div>
  );
}
