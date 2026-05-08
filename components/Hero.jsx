import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden grid-bg">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-cyan-500/8 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] animate-float" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider animate-fade-in">
              <Shield className="w-3.5 h-3.5" />
              INFRAESTRUCTURA DE GRADO EMPRESARIAL
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight">
              <span className="gradient-text">Ingeniería de</span>
              <br />
              <span className="gradient-text">Software</span>
              <br />
              <span className="text-white">y Operaciones</span>
              <br />
              <span className="text-cyan-400">a Prueba de Fallos</span>
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
              Construimos sistemas a la medida, integramos facturación electrónica y automatizamos tu infraestructura para que tu empresa escale sin límites técnicos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="btn-primary group">
                Agendar Consultoría Gratuita
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#servicios" className="btn-outline">
                Ver Servicios
              </a>
            </div>
          </div>

          {/* Terminal card */}
          <div className="hidden lg:block relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-cyan-500/10 rounded-2xl blur-3xl" />
            <div className="relative glass-card rounded-2xl p-1 animate-glow-pulse">
              <div className="bg-slate-950/80 rounded-xl overflow-hidden">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800/80">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 text-xs text-slate-500 font-mono">techops-dashboard</span>
                </div>
                {/* Terminal content */}
                <div className="p-6 space-y-4 font-mono text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                    <span className="text-cyan-400">System Status:</span>
                    <span className="text-green-400 font-semibold">OPTIMAL</span>
                  </div>
                  <div className="space-y-2.5 text-slate-400">
                    {[
                      { label: 'Kubernetes Cluster', status: '✓ Running', color: 'text-green-400' },
                      { label: 'Load Balancer', status: '✓ Active', color: 'text-green-400' },
                      { label: 'Monitoring Stack', status: '✓ Healthy', color: 'text-green-400' },
                      { label: 'Auto-scaling', status: '⚡ Enabled', color: 'text-cyan-400' },
                      { label: 'SSL Certificates', status: '✓ Valid', color: 'text-green-400' },
                    ].map((item) => (
                      <div key={item.label} className="flex justify-between items-center py-1 border-b border-slate-800/40 last:border-0">
                        <span className="text-slate-500">{item.label}</span>
                        <span className={`${item.color} font-medium`}>{item.status}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-3 mt-2 border-t border-slate-800/60 flex items-center justify-between">
                    <span className="text-slate-600">Uptime</span>
                    <span className="text-2xl font-bold text-cyan-400">99.97%</span>
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
