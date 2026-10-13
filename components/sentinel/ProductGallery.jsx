import { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const slides = [
  ['Dashboard', 'Prioriza lo que necesita atención.', 'Consulta disponibilidad, latencia y estado de recursos para orientar la revisión de tu operación.', '/sentinel/dashboard.png'],
  ['Uptime', 'Encuentra el servicio afectado.', 'Identifica endpoints caídos o lentos y revisa sus últimas comprobaciones.', '/sentinel/uptime.png'],
  ['SSL / TLS', 'Evita vencimientos inesperados.', 'Identifica qué certificados requieren renovación y cuánto tiempo tienes para actuar.', '/sentinel/certificados.png'],
];

export default function ProductGallery() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const move = direction => setIndex(current => (current + direction + slides.length) % slides.length);
  return <div className="min-w-0" role="region" aria-roledescription="carrusel" aria-label="Capturas de Sentinel" onKeyDown={event => { if (event.key === 'ArrowRight') { event.preventDefault(); move(1); } if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); } }}>
    <div className="overflow-hidden rounded-2xl border border-emerald-400/25 bg-[#0d1713] shadow-2xl shadow-black/30">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3"><span className="font-mono text-[10px] uppercase tracking-widest text-cyan-200">Dentro de Sentinel</span><a href={slide[3]} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-lg p-2 text-xs text-slate-300 hover:bg-white/5" aria-label={`Ampliar ${slide[1]} en otra pestaña`}><Maximize2 size={15} />Ampliar</a></div>
      <div role="group" aria-roledescription="diapositiva" aria-label={`${index + 1} de ${slides.length}`}><div className={`sentinel-gallery-image sentinel-gallery-image-${index}`}><img src={slide[3]} alt={`Captura de Sentinel: ${slide[0]}, con datos de prueba`} width="1440" height="900" loading="lazy" decoding="async" /></div><div className="border-t border-white/10 p-4 sm:p-5" aria-live="polite"><h3 className="text-lg font-semibold text-white">{slide[1]}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{slide[2]}</p></div></div>
    </div>
    <div className="mt-4 flex items-center justify-between gap-2"><div className="flex flex-wrap gap-1.5">{slides.map((item, i) => <button key={item[0]} type="button" onClick={() => setIndex(i)} aria-pressed={index === i} aria-label={`Mostrar ${item[1]}`} className={`min-h-11 rounded-lg border px-2.5 text-xs transition ${index === i ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-200' : 'border-white/10 text-slate-400 hover:text-white'}`}>{item[0]}</button>)}</div><div className="flex shrink-0 gap-1"><button type="button" onClick={() => move(-1)} aria-label="Captura anterior" className="rounded-lg border border-white/10 p-3 text-slate-300 hover:bg-white/5"><ChevronLeft size={18} /></button><button type="button" onClick={() => move(1)} aria-label="Captura siguiente" className="rounded-lg border border-white/10 p-3 text-slate-300 hover:bg-white/5"><ChevronRight size={18} /></button></div></div>
    <p className="mt-3 text-[10px] leading-5 text-slate-500">Capturas reales de la aplicación en un entorno de pruebas. Los datos son de ejemplo.</p>
  </div>;
}
