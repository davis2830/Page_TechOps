import React from 'react';

const services = [
  {
    icon: 'fa-chart-line',
    color: 'emerald',
    title: 'Observabilidad Avanzada (Grafana Stack)',
    desc: 'Instalación e integración desde cero de Prometheus (métricas), Loki (logs), Tempo (trazas distributed tracing) y el agente Alloy para auditorías en tiempo real y dashboards predictivos de alta precisión.',
  },
  {
    icon: 'fa-cubes',
    color: 'indigo',
    title: 'Orquestación de Kubernetes (K8s)',
    desc: 'Despliegue y administración de clústeres desde cero (bare-metal o multi-cloud). Configuración avanzada de políticas de red, pods de microservicios autoescalables y almacenamiento persistente seguro.',
  },
  {
    icon: 'fa-landmark',
    color: 'blue',
    title: 'Core Bancario Temenos T24 e Interfaces',
    desc: 'Soporte y tuning especializado a la arquitectura de Temenos T24, middleware corporativo, colas de mensajes y capas intermedias para garantizar la continuidad del negocio financiero.',
  },
  {
    icon: 'fa-credit-card',
    color: 'red',
    title: 'Transaccionalidad Segura y Canales Visa',
    desc: 'Control de flujos de pago, procesamiento de transacciones financieras bajo estándares Visa y mantenimiento seguro de servidores web como Nginx, Apache y JBoss.',
  },
  {
    icon: 'fa-gauge',
    color: 'yellow',
    title: 'Pruebas de Estrés con Grafana K6',
    desc: 'Automatización de pruebas de carga masivas con k6. Identificación de cuellos de botella en bases de datos relacionales, consumo de CPU/Memoria y límites de tráfico transaccional.',
  },
  {
    icon: 'fa-gears',
    color: 'brand',
    title: 'Infraestructura Boutique como Código',
    desc: 'Diseño e implementación de automatizaciones fluidas con Ansible y scripts inteligentes en Python para provisionar entornos limpios, robustos y libres de fallos manuales.',
    featured: true,
  },
];

const colorMap = {
  emerald: { bg: 'bg-emerald-500/10', text: 'text-[#3ECF8E]', hover: 'hover:border-emerald-500/20' },
  indigo: { bg: 'bg-indigo-500/10', text: 'text-indigo-400', hover: 'hover:border-indigo-500/20' },
  blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', hover: 'hover:border-blue-500/20' },
  red: { bg: 'bg-red-500/10', text: 'text-red-400', hover: 'hover:border-red-500/20' },
  yellow: { bg: 'bg-yellow-500/10', text: 'text-yellow-400', hover: 'hover:border-yellow-500/20' },
  brand: { bg: 'bg-[#3ECF8E]/10', text: 'text-[#3ECF8E]', hover: 'hover:border-[#3ECF8E]/40' },
};

export default function Services() {
  return (
    <section id="servicios" className="py-20 max-w-7xl mx-auto px-6 border-t border-white/5">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center space-x-1 bg-indigo-500/10 text-indigo-400 text-[10px] font-mono-custom px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
          <i className="fa-solid fa-microchip" /> Portafolio de Soluciones Técnicas
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#FAFAFA]">Servicios de Ingeniería de Alta Complejidad</h2>
        <p className="text-sm text-[#8E8E9F]">
          Soporte técnico avanzado y diseño de arquitecturas robustas ejecutadas directamente por un especialista. Experiencia probada en entornos bancarios y sistemas de alta transaccionalidad.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => {
          const c = colorMap[s.color];
          return (
            <div
              key={s.title}
              className={`${s.featured ? 'bg-[#3ECF8E]/5 border-[#3ECF8E]/20' : 'bg-[#121216]/60 border-white/5'} border p-6 rounded-2xl space-y-4 ${c.hover} transition-all duration-300`}
            >
              <div className={`w-10 h-10 rounded-xl ${c.bg} ${c.text} flex items-center justify-center text-lg`}>
                <i className={`fa-solid ${s.icon}`} />
              </div>
              <h4 className="text-base font-bold text-[#FAFAFA]">{s.title}</h4>
              <p className="text-xs text-[#8E8E9F] leading-relaxed">{s.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
