import { ArrowRight } from 'lucide-react';

export default function HeroDashboard({ exploreHref = '#pantallas' }) {
  return <figure className="min-w-0 overflow-hidden rounded-2xl border border-emerald-400/25 bg-[#0d1713] shadow-2xl shadow-black/30">
    <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4"><span className="font-mono text-[10px] uppercase tracking-widest text-cyan-200">Una vista. Las señales que importan.</span><span className="shrink-0 rounded-full border border-emerald-400/20 px-2 py-1 text-[10px] text-emerald-300">Vista previa</span></div>
    <div className="sentinel-dashboard-crop"><img src="/sentinel/dashboard.png" width="1440" height="900" alt="Indicadores de salud, disponibilidad y latencia, con gráficas de rendimiento y estado de recursos de Sentinel" fetchPriority="high" /></div>
    <figcaption className="border-t border-white/10 p-5"><p className="text-base font-semibold text-white">Identifica qué necesita atención.</p><p className="mt-2 text-sm leading-6 text-slate-400">Una vista previa de cómo Sentinel reúne disponibilidad, latencia y estado de tus servicios.</p><a href={exploreHref} className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-emerald-300 hover:text-emerald-200">Explorar las pantallas <ArrowRight size={15} /></a><p className="mt-3 text-[10px] leading-5 text-slate-500">Captura de un entorno de prueba. Sentinel aún no está disponible públicamente.</p></figcaption>
  </figure>;
}
