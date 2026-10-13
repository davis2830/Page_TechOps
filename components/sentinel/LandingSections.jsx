import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { trackEvent } from '../Analytics';
import HeroDashboard from './HeroDashboard';
import ProductGallery from './ProductGallery';
import { capabilities, faqs } from '../../config/sentinelContent';

export function SentinelHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10"><div className="hero-grid absolute inset-0" aria-hidden="true" /><div className="section-shell sentinel-hero relative grid"><div><p className="font-mono text-xs uppercase tracking-[.18em] text-cyan-300">Una señal a tiempo cambia todo</p><h1 className="mt-7 text-5xl font-semibold leading-[1.06] tracking-[-.055em] sm:text-6xl lg:text-7xl">Detecta problemas <span className="text-emerald-400">antes que tus clientes.</span></h1><p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">Supervisa sitios, APIs y certificados. Consulta su disponibilidad, identifica fallos y planifica renovaciones desde un solo lugar.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#beta" className="btn-primary justify-center px-6 py-3.5" onClick={() => trackEvent('Sentinel CTA Clicked', { placement: 'hero' })}>Solicitar acceso <ArrowRight size={17} /></a><a href="#producto" className="btn-secondary justify-center px-6 py-3.5">Explorar Sentinel</a></div><p className="mt-6 text-xs leading-6 text-slate-500">Acceso anticipado · Configuración acompañada · Un producto de <Link to="/" className="text-slate-300 hover:text-emerald-300">GCTechOps</Link></p></div><HeroDashboard /></div></section>
  );
}

export function SentinelCapabilities() {
  return (
    <section id="producto" className="section-shell"><p className="text-xs uppercase tracking-[.2em] text-emerald-400">Visibilidad operativa</p><div className="mt-5 grid gap-6 lg:grid-cols-2"><h2 className="section-title">De comprobar a mano a tener una señal clara.</h2><p className="section-copy mt-0">Una caída, una respuesta inesperada o un certificado por vencer. Reúne el estado de tus servicios para saber dónde poner atención.</p></div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{capabilities.map(([Icon, title, text]) => <article key={title} className="trust-card p-6"><Icon className="text-cyan-300" size={25} /><h3 className="mt-7 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{text}</p></article>)}</div></section>
  );
}

export function SentinelScreens() {
  return (
    <section id="pantallas" className="border-b border-white/10 bg-[#0c1410]"><div className="section-shell"><div className="mb-9 grid gap-5 lg:grid-cols-2"><div><p className="text-xs uppercase tracking-[.2em] text-cyan-300">Explora el producto</p><h2 className="section-title mt-5">Del estado general al detalle.</h2></div><p className="section-copy">Recorre las vistas de Sentinel. Elige una pantalla y amplía la captura para explorar la interfaz completa.</p></div><div className="mx-auto max-w-6xl"><ProductGallery /></div></div></section>
  );
}

export function SentinelCases() {
  return (
    <section id="casos" className="section-shell"><p className="text-xs uppercase tracking-[.2em] text-emerald-400">Para quienes responden por el servicio</p><h2 className="section-title mt-5 max-w-3xl">Tu equipo necesita enterarse primero.</h2><div className="mt-10 grid gap-8 md:grid-cols-3">{[['Agencias y proveedores', 'Ten a la vista los sitios de tus clientes y detecta qué requiere atención.'], ['Equipos de desarrollo', 'Comprueba endpoints y sigue el estado de los servicios que entregas.'], ['Empresas digitales', 'Supervisa portales y servicios de los que depende tu operación diaria.']].map(([title, text]) => <article key={title} className="border-l border-emerald-400/40 pl-6"><h3 className="text-xl font-semibold">{title}</h3><p className="mt-4 text-sm leading-7 text-slate-400">{text}</p></article>)}</div></section>
  );
}

export function SentinelFAQ() {
  return (
    <section className="section-shell"><h2 className="section-title">Antes de comenzar.</h2><div className="mt-9 max-w-4xl space-y-3">{faqs.map(([q, a]) => <details key={q} className="group trust-card p-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">{q}<ChevronDown className="shrink-0 text-slate-400 group-open:rotate-180" size={18} /></summary><p className="mt-4 text-sm leading-7 text-slate-400">{a}</p></details>)}</div></section>
  );
}


