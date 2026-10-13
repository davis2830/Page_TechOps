import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowDownRight, ArrowRight, Check, ChevronDown, Clock3, ExternalLink,
  Linkedin, Menu, MessageCircle, ShieldCheck, X,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Analytics, { trackEvent } from './components/Analytics';
import DiagnosticForm from './components/DiagnosticForm';
import LeadMagnet from './components/LeadMagnet';
import Seo from './components/Seo';
import SectionNav from './components/SectionNav';
import HeroDashboard from './components/sentinel/HeroDashboard';
import Footer from './components/shared/Footer';
import config from './config/contacto';
import { additionalAchievements, caseStudies, faqs, founderHighlights, methodology, painPoints, servicePackages, technologies } from './config/siteContent';

function SectionLabel({ children, dark = false }) {
  return <p className={`mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] ${dark ? 'text-emerald-700' : 'text-emerald-400'}`}><span className={`h-px w-8 ${dark ? 'bg-emerald-700' : 'bg-emerald-400/70'}`} />{children}</p>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const progressRef = useRef(null);
  useEffect(() => {
    let frame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const available = document.documentElement.scrollHeight - window.innerHeight;
        const progress = available > 0 ? Math.min(window.scrollY / available, 1) : 0;
        if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
      });
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);
  const links = [['#experiencia', 'Experiencia'], ['#proyectos', 'Proyectos'], ['#ofertas', 'Soluciones'], ['/sentinel', 'Sentinel'], ['#metodo', 'Método']];
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080b0a]/95 backdrop-blur-xl">
      <nav aria-label="Navegación principal" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#inicio" aria-label="TechOPS, inicio"><img src="/techops-logo.svg" alt="TechOPS" className="h-9 w-auto" /></a>
        <div className="hidden items-center gap-1 lg:flex">
          <SectionNav links={links} />
          <a href="#diagnostico" onClick={() => trackEvent('Diagnostic CTA Clicked', { placement: 'header' })} className="btn-primary">Agendar diagnóstico <ArrowRight size={15} /></a>
        </div>
        <button type="button" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} onClick={() => setOpen(!open)} className="rounded-lg border border-white/10 p-2 text-slate-300 lg:hidden">{open ? <X size={22} /> : <Menu size={22} />}</button>
      </nav>
      {open && <div className="border-t border-white/10 bg-[#0b100e] px-6 py-5 lg:hidden"><div className="mx-auto flex max-w-7xl flex-col gap-4"><SectionNav links={links} onNavigate={() => setOpen(false)} /><a href="#diagnostico" onClick={() => { setOpen(false); trackEvent('Diagnostic CTA Clicked', { placement: 'mobile_menu' }); }} className="btn-primary mt-2 justify-center">Agendar diagnóstico <ArrowRight size={15} /></a></div></div>}
      <span ref={progressRef} aria-hidden="true" className="scroll-progress" />
    </header>
  );
}

function OperationalBrief() {
  const rows = [
    ['01', 'Señal', 'Métricas, logs y trazas del servicio'],
    ['02', 'Contexto', 'Dependencias y cambios recientes'],
    ['03', 'Decisión', 'Prioridad, responsable y siguiente acción'],
  ];
  return (
    <div className="operational-brief brief-enter relative overflow-hidden rounded-[28px] border border-emerald-400/20 bg-[#101a15] p-5 shadow-2xl shadow-black/40 sm:p-7">
      <div className="absolute -right-24 -top-28 h-64 w-64 rounded-full bg-emerald-400/10 blur-[70px]" aria-hidden="true" />
      <div className="relative flex items-start justify-between gap-5 border-b border-white/10 pb-6"><div><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300">Muestra de enfoque</p><h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">Del síntoma a la acción</h2></div><span className="shrink-0 rounded-full border border-cyan-300/20 px-2.5 py-1 text-[10px] text-cyan-200">TechOPS / 01</span></div>
      <div className="operational-steps relative mt-6 space-y-2.5">{rows.map(([number, title, detail], index) => <div key={number} className={`operational-row relative grid grid-cols-[34px_1fr] gap-3 rounded-xl border p-4 sm:grid-cols-[34px_90px_1fr] ${index === 2 ? 'border-emerald-400/30 bg-emerald-400/[0.08]' : 'border-white/10 bg-black/10'}`} style={{ animationDelay: `${700 + index * 160}ms` }}><span className="font-mono text-xs text-emerald-300">{number}</span><strong className="text-sm font-semibold text-white">{title}</strong><span className="col-start-2 text-xs leading-5 text-slate-400 sm:col-start-auto">{detail}</span></div>)}</div>
      <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5"><div className="telemetry-indicator h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,.55)]" /><p className="text-xs leading-5 text-slate-400">Esquema ilustrativo del método. No contiene datos de clientes.</p></div>
    </div>
  );
}

function Hero() {
  const whatsapp = `${config.whatsappUrl}?text=${encodeURIComponent('Hola, quiero conversar sobre un diagnóstico técnico con TechOPS.')}`;
  return (
    <section id="inicio" className="relative overflow-hidden border-b border-white/10">
      <div className="hero-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:gap-16 lg:py-28">
        <div>
          <div className="hero-enter hero-enter-1 mb-7 inline-flex items-center gap-2 border-l-2 border-emerald-400 pl-3 text-xs font-semibold uppercase tracking-[0.15em] text-emerald-300">Observabilidad e infraestructura · Guatemala</div>
          <h1 className="hero-enter hero-enter-2 max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] text-white sm:text-6xl lg:text-[4.65rem]">Infraestructura crítica <span className="hero-highlight text-emerald-400">bajo control.</span></h1>
          <p className="hero-enter hero-enter-3 mt-7 max-w-xl text-lg leading-8 text-slate-300">Diseño observabilidad, automatización y alta disponibilidad para que los equipos entiendan sus sistemas y actúen con evidencia cuando más importa.</p>
          <p className="hero-enter hero-enter-4 mt-5 max-w-xl text-sm leading-7 text-slate-500">Trabajo directo de Davis Galvez, ingeniero de observabilidad e infraestructura con experiencia en plataformas transaccionales del sector financiero.</p>
          <div className="hero-enter hero-enter-5 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"><a href="#diagnostico" onClick={() => trackEvent('Diagnostic CTA Clicked', { placement: 'hero' })} className="btn-primary justify-center px-6 py-3.5">Agendar diagnóstico <ArrowRight size={17} /></a><a href="#proyectos" className="btn-secondary justify-center px-6 py-3.5">Ver experiencia <ArrowDownRight size={17} /></a></div>
          <div className="hero-enter hero-enter-5 mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-500"><span className="flex items-center gap-2"><ShieldCheck size={14} className="text-emerald-400" /> Alcance definido por escrito</span><a href={whatsapp} target="_blank" rel="noreferrer" onClick={() => trackEvent('WhatsApp Clicked', { placement: 'hero' })} className="flex items-center gap-2 hover:text-white"><MessageCircle size={14} /> Consultar por WhatsApp</a></div>
        </div>
        <OperationalBrief />
      </div>
    </section>
  );
}

function Founder() {
  if (!config.hasFounderProfile) return null;
  return (
    <section id="experiencia" className="bg-[#eff4f0] text-slate-900">
      <div className="section-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-16">
        <div className="relative mx-auto w-full max-w-[410px]">
          {config.founder.photo ? <img src={config.founder.photo} alt={`Retrato de ${config.founder.name}`} className="aspect-[4/5] w-full rounded-[28px] object-cover" /> : <div aria-label={`Identidad de ${config.founder.name}`} className="flex aspect-[4/5] items-end rounded-[28px] bg-[#10221a] p-9"><span className="select-none text-[7rem] font-semibold leading-none tracking-[-0.1em] text-emerald-300 sm:text-[9rem]">DG<span className="text-cyan-300">.</span></span></div>}
          <div className="absolute -bottom-5 -right-3 max-w-[245px] rounded-xl border border-emerald-900/10 bg-white p-4 shadow-xl shadow-emerald-950/10 sm:right-[-18px]"><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-700">Responsabilidad directa</p><p className="mt-1 text-sm font-semibold leading-5 text-slate-900">Diagnóstico, diseño y transferencia técnica.</p></div>
        </div>
        <div className="pt-8 lg:pt-0"><SectionLabel dark>Quién responde por el trabajo</SectionLabel><h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Davis Galvez</h2><p className="mt-3 text-lg font-medium text-emerald-800">{config.founder.role}</p><p className="mt-7 max-w-2xl text-base leading-8 text-slate-700">Mi trayectoria se ha desarrollado en infraestructura tecnológica del sector financiero, con foco en disponibilidad, escalabilidad y resiliencia operativa bajo exigencias de cumplimiento. He modernizado arquitecturas cloud y on-premise mediante observabilidad avanzada, automatización y orquestación de contenedores.</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{founderHighlights.map(item => <div key={item} className="flex gap-3 border-t border-slate-900/15 pt-4 text-sm leading-6 text-slate-700"><Check size={17} className="mt-1 shrink-0 text-emerald-700" />{item}</div>)}</div>{config.founder.linkedin && <a href={config.founder.linkedin} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-emerald-900 hover:text-emerald-700"><Linkedin size={17} /> Ver trayectoria profesional <ExternalLink size={14} /></a>}</div>
      </div>
    </section>
  );
}

function Problems() {
  return <section id="problemas" className="section-shell"><SectionLabel>Problemas que atendemos</SectionLabel><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]"><h2 className="section-title">Cuando faltan señales, cada incidente cuesta más entenderlo.</h2><div className="grid gap-0">{painPoints.map((item, index) => <article key={item.title} className="problem-row grid gap-3 border-t border-white/10 py-6 sm:grid-cols-[42px_1fr]"><span className="font-mono text-xs text-emerald-400">0{index + 1}</span><div><h3 className="text-lg font-semibold text-white">{item.title}</h3><p className="mt-2 max-w-xl text-sm leading-7 text-slate-400">{item.description}</p></div></article>)}</div></div></section>;
}

function Cases() {
  return (
    <section id="proyectos" className="border-y border-white/10 bg-[#0c120f]">
      <div className="section-shell">
        <SectionLabel>Logros profesionales</SectionLabel>
        <div className="grid gap-6 lg:grid-cols-[1fr_.75fr] lg:items-end">
          <h2 className="section-title">Observabilidad, automatización y continuidad en producción.</h2>
          <p className="text-sm leading-7 text-slate-400">Selección de implementaciones realizadas por Davis Galvez durante su trayectoria profesional. Se omiten los nombres de las organizaciones.</p>
        </div>
        <div className="mt-12 border-t border-white/15">
          {caseStudies.map((item, index) => (
            <article key={item.title} className="case-row grid gap-5 border-b border-white/15 py-9 lg:grid-cols-[70px_1.1fr_1.1fr] lg:gap-8">
              <span className="font-mono text-sm text-emerald-400">0{index + 1} / 03</span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300">{item.eyebrow}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">{item.title}</h3>
                <p className="mt-4 font-mono text-[11px] leading-6 text-slate-500">{item.tools}</p>
              </div>
              <dl className="space-y-4 text-sm leading-7">
                <div><dt className="font-semibold text-slate-200">Desafío</dt><dd className="mt-1 text-slate-400">{item.problem}</dd></div>
                <div><dt className="font-semibold text-slate-200">Lo que implementé</dt><dd className="mt-1 text-slate-400">{item.intervention}</dd></div>
                <div><dt className="font-semibold text-emerald-300">Resultado</dt><dd className="mt-1 text-slate-300">{item.outcome}</dd></div>
              </dl>
            </article>
          ))}
        </div>
        <div className="mt-14 grid gap-6 border-t border-white/15 pt-10 lg:grid-cols-[.75fr_1.25fr]">
          <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">Otras implementaciones</p><h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">Ingeniería que conecta plataforma, software e innovación.</h3></div>
          <div className="grid gap-5 sm:grid-cols-2">{additionalAchievements.map(item => <article key={item.title} className="border-l border-cyan-300/30 pl-5"><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-300">{item.eyebrow}</p><h4 className="mt-3 text-lg font-semibold text-white">{item.title}</h4><p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p><p className="mt-4 font-mono text-[11px] leading-5 text-slate-500">{item.tools}</p></article>)}</div>
        </div>
      </div>
    </section>
  );
}

function DashboardEvidence() {
  const stages = [74, 62, 51, 43, 30];
  return (
    <section id="tablero" className="border-b border-white/10 bg-[#0b1914]">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[1fr_.7fr] lg:items-end">
          <div><SectionLabel>Artefacto de operación</SectionLabel><h2 className="section-title">Un tablero para entender el cierre operativo.</h2></div>
          <p className="text-sm leading-7 text-slate-300">Basado en un dashboard que desarrollé para observar servicios, procesos batch y dependencias en un entorno bancario.</p>
        </div>
        <div className="dashboard-preview mt-10 overflow-hidden rounded-2xl border border-cyan-300/15 bg-[#111b2d] p-4 shadow-2xl shadow-black/30 sm:p-6" aria-label="Recreación anonimizada de un dashboard de observabilidad de procesos batch">
          <div className="flex flex-col gap-2 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-cyan-200">Vista pública / Proceso de cierre</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-slate-400">Recreación anonimizada · Sin datos de producción</span>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {[
              ['Estado del servicio', 'Visibilidad continua', 'emerald'],
              ['Evolución del ciclo', 'Eventos correlacionados', 'cyan'],
              ['Agentes y dependencias', 'Cobertura visible', 'blue'],
            ].map(([label, title, tone]) => <div key={label} className="rounded-xl border border-white/10 bg-[#0e1728] p-4"><p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">{label}</p><p className="mt-4 text-lg font-semibold text-white">{title}</p><div className={`dashboard-signal dashboard-signal-${tone} mt-3 h-1 w-20 rounded-full`} /></div>)}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[
              ['Recolección', 'Señales'], ['Estado global', 'Contexto'], ['Etapas', 'Seguimiento'], ['Alertas', 'Priorización'],
            ].map(([label, title]) => <div key={label} className="rounded-xl border border-white/10 bg-[#192844] p-4"><p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">{label}</p><p className="mt-3 text-base font-medium text-slate-100">{title}</p></div>)}
          </div>
          <div className="mt-3 grid gap-3 lg:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-[#0e1728] p-4"><p className="text-sm font-medium text-slate-100">Matriz de estados por grupo</p><div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">{Array.from({ length: 8 }, (_, index) => <div key={index} className="dashboard-tile rounded-lg bg-[#245682] p-3"><p className="font-mono text-[9px] uppercase text-cyan-100">Grupo</p><p className="mt-1 text-xs text-white">Seguimiento</p></div>)}</div></div>
            <div className="rounded-xl border border-white/10 bg-[#0e1728] p-4"><p className="text-sm font-medium text-slate-100">Distribución visual del trabajo</p><div className="mt-5 space-y-3">{stages.map((width, index) => <div key={index} className="flex items-center gap-3"><span className="w-10 shrink-0 font-mono text-[9px] uppercase text-slate-400">Etapa</span><div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-700/70"><div className="dashboard-bar h-full rounded-full" style={{ width: `${width}%`, backgroundColor: ['#46c893', '#e6c84b', '#67a8df', '#ef9d62', '#ba7cbd'][index] }} /></div></div>)}</div></div>
          </div>
        </div>
        <p className="mt-4 max-w-3xl text-xs leading-6 text-slate-400">Recreación basada en un dashboard real de Davis Galvez. Los nombres, estados, cifras y topología originales no se muestran. Es una muestra de diseño, no telemetría en vivo.</p>
      </div>
    </section>
  );
}

function Offers() {
  return <section id="ofertas" className="section-shell"><SectionLabel>Soluciones TechOPS</SectionLabel><div className="grid gap-6 lg:grid-cols-[1fr_.7fr] lg:items-end"><h2 className="section-title">Un resultado y un alcance claros desde el inicio.</h2><p className="text-sm leading-7 text-slate-400">Cada paquete define duración y entregables. La propuesta final se ajusta al entorno después de la conversación inicial.</p></div><div className="mt-12 grid gap-5 lg:grid-cols-3">{servicePackages.map(item => <article key={item.slug} className={`offer-card flex flex-col rounded-2xl border p-6 ${item.featured ? 'border-emerald-400/40 bg-[#13241b]' : 'border-white/10 bg-white/[0.025]'}`}><div className="flex items-center justify-between gap-3"><span className="flex items-center gap-2 text-xs text-slate-300"><Clock3 size={15} className="text-cyan-300" />{item.duration}</span>{item.featured && <span className="text-[10px] font-semibold uppercase tracking-widest text-emerald-300">Punto de partida</span>}</div><h3 className="mt-7 text-xl font-semibold text-white">{item.title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{item.result}</p><div className="mt-6 border-t border-white/10 pt-5"><p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-slate-500">Recibes</p><ul className="space-y-3">{item.deliverables.map(deliverable => <li key={deliverable} className="flex gap-3 text-sm leading-6 text-slate-300"><Check size={16} className="mt-1 shrink-0 text-emerald-400" />{deliverable}</li>)}</ul></div>{item.priceFrom && <p className="mt-6 text-sm text-slate-400">Desde <strong className="text-lg text-white">{item.currency} {item.priceFrom}</strong></p>}<a href="#diagnostico" onClick={() => trackEvent('Package Interacted', { package: item.slug, action: 'diagnostic' })} className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-emerald-300 hover:text-emerald-200">Hablar de este alcance <ArrowRight size={15} /></a></article>)}</div><div className="mt-12 border-y border-white/10 py-6"><p className="mb-4 text-[10px] uppercase tracking-[0.18em] text-slate-500">Herramientas utilizadas en la trayectoria profesional</p><div className="flex flex-wrap gap-x-7 gap-y-3">{technologies.map(item => <span key={item} className="text-sm text-slate-400">{item}</span>)}</div></div></section>;
}

function Method() {
  return <section id="metodo" className="border-y border-white/10 bg-white/[0.015]"><div className="section-shell grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center"><div><SectionLabel>Método y entregables</SectionLabel><h2 className="section-title">El trabajo termina con algo que tu equipo puede usar.</h2><p className="section-copy">Además de implementar, documento decisiones, riesgos y operación para que el conocimiento permanezca en el equipo.</p><ol className="mt-8 space-y-4">{methodology.map(({ step, title, text }) => <li key={step} className="flex gap-4 border-l border-emerald-400/50 pl-4"><span className="font-mono text-xs text-emerald-400">{step}</span><div><h3 className="font-semibold text-white">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-400">{text}</p></div></li>)}</ol></div><div className="rounded-2xl bg-[#eff4f0] p-5 text-slate-900 shadow-2xl shadow-black/20 sm:p-8"><div className="flex items-start justify-between gap-4 border-b border-slate-900/15 pb-5"><div><p className="font-mono text-[10px] uppercase tracking-widest text-emerald-700">Muestra de entregable</p><h3 className="mt-2 text-2xl font-semibold tracking-tight">Mapa de riesgo operativo</h3></div><span className="rounded border border-slate-900/10 px-2 py-1 font-mono text-[10px]">01 / 03</span></div><div className="mt-5 grid grid-cols-[1fr_95px] gap-3 text-[10px] font-semibold uppercase tracking-widest text-slate-500 sm:grid-cols-[1fr_100px_1.2fr]"><span>Hallazgo</span><span>Prioridad</span><span className="hidden sm:block">Siguiente paso</span></div><div className="mt-2 grid grid-cols-[1fr_95px] gap-3 border-t border-slate-900/10 py-4 text-sm sm:grid-cols-[1fr_100px_1.2fr]"><span>Alertas sin responsable definido</span><span className="font-semibold text-amber-700">A revisar</span><span className="col-span-2 text-slate-600 sm:col-span-1">Asignar propietario y ruta de escalamiento</span></div><div className="grid grid-cols-[1fr_95px] gap-3 border-t border-slate-900/10 py-4 text-sm sm:grid-cols-[1fr_100px_1.2fr]"><span>Despliegues con pasos manuales</span><span className="font-semibold text-amber-700">A revisar</span><span className="col-span-2 text-slate-600 sm:col-span-1">Documentar y automatizar la secuencia</span></div><p className="border-t border-slate-900/10 pt-4 text-xs leading-5 text-slate-500">Ejemplo ilustrativo de formato. Los hallazgos reales se determinan durante el diagnóstico.</p></div></div></section>;
}

function FAQ() {
  return <section id="preguntas" className="section-shell"><SectionLabel>Preguntas frecuentes</SectionLabel><div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]"><div><h2 className="section-title">Lo esencial antes de comenzar.</h2><p className="section-copy">El alcance, los accesos y los entregables quedan por escrito antes de intervenir la plataforma.</p></div><div className="space-y-3">{faqs.map(([question, answer]) => <details key={question} className="group trust-card px-5 py-4"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-white">{question}<ChevronDown size={18} className="shrink-0 text-slate-500 transition group-open:rotate-180" /></summary><p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">{answer}</p></details>)}</div></div></section>;
}


function SentinelFeature() {
  return <section id="sentinel" className="border-y border-emerald-400/20 bg-[#0c1812]"><div className="section-shell grid items-center gap-12 lg:grid-cols-2"><div><SectionLabel>Producto de GCTechOps · Acceso anticipado</SectionLabel><h2 className="section-title">Sentinel.<br /><span className="text-emerald-400">Una señal antes del impacto.</span></h2><p className="section-copy">Supervisa sitios, APIs y certificados desde una plataforma enfocada en la salud de tus servicios. Conoce dónde poner atención y actúa con contexto.</p><div className="mt-8 flex flex-wrap gap-3"><Link to="/sentinel" className="btn-primary" onClick={() => trackEvent('Sentinel Product Clicked', { placement: 'homepage' })}>Conocer Sentinel <ArrowRight size={16} /></Link><a href="/sentinel#beta" onClick={() => trackEvent('Sentinel CTA Clicked', { placement: 'homepage' })} className="btn-secondary">Solicitar acceso</a></div></div><HeroDashboard exploreHref="/sentinel#pantallas" /></div></section>;
}

export default function LandingPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page || !window.IntersectionObserver || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const sections = page.querySelectorAll('main > section:not(#inicio)');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.06, rootMargin: '0px 0px 40px 0px' });
    page.classList.add('motion-ready');
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return <div ref={pageRef} className="landing-page min-h-screen overflow-x-hidden bg-[#080b0a] text-slate-100"><Seo title="TechOPS | Observabilidad e infraestructura crítica" description="Davis Galvez aporta experiencia en observabilidad, automatización y alta disponibilidad para operaciones críticas del sector financiero." /><Analytics /><Header /><main><Hero /><SentinelFeature /><Founder /><Problems /><Cases /><DashboardEvidence /><Offers /><Method /><LeadMagnet /><FAQ /><DiagnosticForm /></main><Footer /></div>;
}
