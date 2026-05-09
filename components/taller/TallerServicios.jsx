import React from 'react';
import { Wrench, ClipboardList, Zap, BarChart3, Shield, Settings, Check } from 'lucide-react';
import { useReveal } from '../useReveal';

const servicios = [
  {
    icon: ClipboardList,
    color: 'from-amber-500 to-amber-700',
    title: 'Órdenes de Trabajo',
    desc: 'Gestión completa de órdenes de trabajo desde la recepción hasta la entrega del vehículo.',
    items: [
      'Creación y seguimiento de OT',
      'Asignación de técnicos',
      'Historial completo por vehículo',
    ],
  },
  {
    icon: Wrench,
    color: 'from-orange-500 to-orange-700',
    title: 'Inventario y Repuestos',
    desc: 'Control de inventario en tiempo real con alertas de stock mínimo y gestión de proveedores.',
    items: [
      'Kardex de repuestos automatizado',
      'Alertas de reorden',
      'Gestión de proveedores',
    ],
  },
  {
    icon: Zap,
    color: 'from-yellow-500 to-yellow-700',
    title: 'Facturación Electrónica',
    desc: 'Genera facturas electrónicas, cotizaciones y reportes financieros desde el sistema.',
    items: [
      'Facturación FEL integrada',
      'Cotizaciones automáticas',
      'Reportes de ingresos y gastos',
    ],
  },
  {
    icon: BarChart3,
    color: 'from-red-500 to-red-700',
    title: 'Reportes y Analítica',
    desc: 'Dashboards en tiempo real con métricas clave para tomar mejores decisiones.',
    items: [
      'Dashboard de rendimiento',
      'Reportes de productividad',
      'Análisis de rentabilidad',
    ],
  },
  {
    icon: Shield,
    color: 'from-emerald-500 to-emerald-700',
    title: 'Multi-Tenancy',
    desc: 'Cada taller tiene su propio espacio aislado y seguro dentro de la plataforma.',
    items: [
      'Datos aislados por taller',
      'Subdominio personalizado',
      'Roles y permisos granulares',
    ],
  },
  {
    icon: Settings,
    color: 'from-blue-500 to-blue-700',
    title: 'Integraciones',
    desc: 'Conecta el ERP con tus herramientas existentes y expande la funcionalidad.',
    items: [
      'API REST completa',
      'Integración con WhatsApp',
      'Notificaciones automáticas',
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
        Módulos del Sistema
      </h2>
      <p className="text-slate-400 text-lg">Todo lo que necesitas para gestionar tu taller mecánico de forma profesional</p>
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
