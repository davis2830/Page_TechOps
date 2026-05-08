import React from 'react';
import { Code, Zap, Eye, Check } from 'lucide-react';
import { useReveal } from './useReveal';

const services = [
  {
    icon: Code,
    color: 'from-blue-500 to-blue-700',
    title: '💻 Desarrollo de Software y Plataformas B2B',
    desc: 'Creamos el cerebro digital de tu negocio con arquitecturas web modernas, rápidas y seguras.',
    items: [
      'ERPs y Sistemas de Gestión a la medida (inventarios, flujos, agendas)',
      'Facturación Electrónica en Línea (FEL) integrada de forma nativa',
      'Plataformas de Fidelización FinTech con NFC y gestión digital',
    ],
  },
  {
    icon: Zap,
    color: 'from-cyan-500 to-cyan-700',
    title: '⚙️ Automatización de Infraestructura y SRE',
    desc: 'Eliminamos el error humano y garantizamos que tus sistemas estén siempre disponibles.',
    items: [
      'Infraestructura como Código: aprovisionamiento automático de servidores',
      'Orquestación y Alta Disponibilidad con contenedores y balanceo de carga',
      'Hardening y Redes Seguras: servidores blindados sin IPs públicas',
    ],
  },
  {
    icon: Eye,
    color: 'from-indigo-500 to-purple-600',
    title: '📊 Observabilidad y Monitoreo Proactivo (NOC)',
    desc: 'Vemos los problemas antes de que afecten a tus clientes.',
    items: [
      'Tableros Transaccionales en Tiempo Real con métricas, logs y trazas',
      'Migraciones Críticas Seguras con cero tiempo de inactividad',
      'Alertas Tempranas para cuellos de botella y anomalías',
    ],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />
        <div className="space-y-6 mt-14">
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} index={i} />
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
      <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-cyan-400 mb-4">
        <span className="w-8 h-px bg-cyan-500" /> SERVICIOS
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
        Nuestros Servicios
      </h2>
      <p className="text-slate-400 text-lg">Tres pilares para transformar tu operación</p>
    </div>
  );
}

function ServiceCard({ service, index }) {
  const [ref, visible] = useReveal(0.1);
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`glass-card rounded-2xl p-8 lg:p-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex flex-col lg:flex-row items-start gap-6">
        <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
          <p className="text-slate-400 mb-5">{service.desc}</p>
          <ul className="space-y-2.5">
            {service.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
