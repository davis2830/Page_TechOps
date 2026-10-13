import React from 'react';
import { ArrowRight, Phone, Wrench, Shield, Clock, Monitor } from 'lucide-react';
import config from '../../config/contacto';

export default function TallerHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden grid-bg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-amber-600/8 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-orange-500/8 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-[100px] animate-float" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider animate-fade-in">
              <Wrench className="w-3.5 h-3.5" />
              SOFTWARE DE GESTIÓN PARA TALLERES
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight">
              <span className="text-white">Tu taller,</span>
              <br />
              <span className="gradient-text-amber">bajo control.</span>
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
              Centraliza órdenes de trabajo, inventario, clientes y seguimiento operativo en un ERP diseñado para talleres mecánicos.
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Monitor className="w-4 h-4 text-amber-400" />
                <span>Información centralizada</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-400" />
                <span>Roles y permisos</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Implementación guiada</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto-taller" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-amber-900/30 hover:-translate-y-0.5 group">
                Solicitar Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={`${config.whatsappUrl}?text=${encodeURIComponent('Hola, me interesa conocer más sobre el sistema ERP para talleres de GC Torque')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-green-500/40 hover:border-green-400/60 text-green-400 hover:text-green-300 font-semibold rounded-xl transition-all hover:bg-green-500/5"
              >
                <Phone className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Visual card */}
          <div className="hidden lg:block relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/10 to-orange-500/10 rounded-2xl blur-3xl" />
            <div className="relative glass-card rounded-2xl p-1 animate-glow-pulse" style={{ '--tw-shadow-color': 'rgba(245,158,11,0.3)', boxShadow: '0 0 20px rgba(245,158,11,0.15)' }}>
              <div className="bg-slate-950/80 rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800/80">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-3 text-xs text-slate-500 font-mono">vista de producto · orden de trabajo</span>
                </div>
                <div className="p-6 space-y-4 font-mono text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                    <span className="text-amber-400">Orden OT-1048</span>
                    <span className="text-green-400 font-semibold">EN PROCESO</span>
                  </div>
                  <div className="space-y-2.5 text-slate-400">
                    {[
                      { label: 'Recepción', status: 'Completa', color: 'text-green-400' },
                      { label: 'Diagnóstico', status: 'Completo', color: 'text-green-400' },
                      { label: 'Presupuesto', status: 'Aprobado', color: 'text-green-400' },
                      { label: 'Reparación', status: 'En curso', color: 'text-amber-400' },
                      { label: 'Entrega', status: 'Pendiente', color: 'text-slate-500' },
                    ].map((item) => (
                      <div key={item.label} className="flex justify-between items-center py-1 border-b border-slate-800/40 last:border-0">
                        <span className="text-slate-500">{item.label}</span>
                        <span className={`${item.color} font-medium`}>{item.status}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-3 mt-2 border-t border-slate-800/60 flex items-center justify-between">
                    <span className="text-slate-600">Vista ilustrativa</span>
                    <span className="text-sm font-bold text-amber-400">GC Torque ERP</span>
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
