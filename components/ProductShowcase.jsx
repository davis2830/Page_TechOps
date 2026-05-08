import React from 'react';
import { ArrowRight, Wrench, Calendar, BarChart3, Package, ClipboardList, Users } from 'lucide-react';
import { useReveal } from './useReveal';

const features = [
  { icon: Calendar, label: 'Gestión de Citas' },
  { icon: ClipboardList, label: 'Tablero Kanban' },
  { icon: Package, label: 'Inventario Inteligente' },
  { icon: BarChart3, label: 'Reportes y Métricas' },
  { icon: Users, label: 'Multi-usuario y Roles' },
  { icon: Wrench, label: 'Órdenes de Trabajo' },
];

export default function ProductShowcase() {
  const [ref, visible] = useReveal(0.1);

  return (
    <section id="productos" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 mb-4">
              <span className="w-8 h-px bg-amber-500" /> PRODUCTO ESTRELLA
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text-amber">Torque</span>
            </h2>
            <p className="text-slate-400 text-lg">
              El ERP integral para talleres mecánicos. Gestión de citas, inventario, órdenes de trabajo y facturación — todo en una sola plataforma.
            </p>
          </div>

          {/* Main card */}
          <div className="glass-card rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left: info */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-6 w-fit">
                  <Wrench className="w-3.5 h-3.5" />
                  SISTEMA DE GESTIÓN INTEGRAL
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Digitaliza tu taller. <br />
                  <span className="text-amber-400">Automatiza tu éxito.</span>
                </h3>

                <p className="text-slate-400 mb-8 leading-relaxed">
                  Torque transforma la operación de tu taller mecánico con un sistema completo de citas, tablero Kanban, inventario inteligente, facturación electrónica y reportes en tiempo real.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  {features.map((f) => (
                    <div key={f.label} className="flex items-center gap-2 text-sm text-slate-400 bg-slate-800/40 rounded-lg px-3 py-2.5 border border-slate-700/40">
                      <f.icon className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>{f.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="#precios" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-amber-900/20 hover:-translate-y-0.5">
                    Ver Planes y Precios
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="#contacto" className="btn-outline !border-amber-500/30 !text-amber-400 hover:!border-amber-400/50">
                    Solicitar Demo
                  </a>
                </div>
              </div>

              {/* Right: visual mockup */}
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 p-8 lg:p-12 flex items-center justify-center min-h-[350px]">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-orange-600/5" />
                <div className="relative w-full max-w-sm">
                  {/* Mockup UI */}
                  <div className="bg-slate-900/90 rounded-xl border border-amber-500/20 overflow-hidden shadow-2xl">
                    <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-800/60 border-b border-slate-700/50">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      <span className="ml-2 text-xs text-slate-500 font-mono">torque-dashboard</span>
                    </div>
                    <div className="p-5 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-white">Órdenes Hoy</span>
                        <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">+12%</span>
                      </div>
                      <div className="text-3xl font-bold text-amber-400">24</div>
                      {/* Mini kanban */}
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { label: 'Pendiente', count: 8, color: 'bg-amber-500/20 text-amber-400' },
                          { label: 'En Proceso', count: 12, color: 'bg-blue-500/20 text-blue-400' },
                          { label: 'Completado', count: 4, color: 'bg-green-500/20 text-green-400' },
                        ].map(col => (
                          <div key={col.label} className="text-center">
                            <div className={`text-lg font-bold rounded-lg py-2 ${col.color}`}>{col.count}</div>
                            <span className="text-[10px] text-slate-500 mt-1 block">{col.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
