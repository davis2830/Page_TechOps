import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import Seo from '../components/Seo';
import SectionNav from '../components/SectionNav';
import Analytics, { trackEvent } from '../components/Analytics';
import { SentinelHero, SentinelCapabilities, SentinelScreens, SentinelCases, SentinelFAQ } from '../components/sentinel/LandingSections';
import BetaForm from '../components/sentinel/BetaForm';
import Footer from '../components/shared/Footer';


function Header() {
  const [open, setOpen] = useState(false);
  const links = [['#producto', 'Producto'], ['#casos', 'Casos de uso'], ['#beta', 'Lanzamiento']];
  return <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080b0a]/95 backdrop-blur-xl"><nav aria-label="Navegación de Sentinel" className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4"><div className="flex items-center gap-3"><Link to="/sentinel" onClick={() => window.scrollTo(0, 0)} aria-label="Sentinel, inicio"><img src="/sentinel/icon.png" alt="" width="34" height="41" className="h-10 w-auto shrink-0 object-contain" /></Link><div><Link to="/sentinel" className="block text-xl font-semibold tracking-tight">Sentinel</Link><Link to="/" className="block text-[9px] uppercase tracking-[.18em] text-slate-400 hover:text-emerald-300">by GCTechOps</Link></div></div><div className="hidden items-center gap-2 lg:flex"><SectionNav links={links} /><span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">Próximamente</span><a href="#beta" className="btn-primary" onClick={() => trackEvent('Sentinel CTA Clicked', { placement: 'header' })}>Recibir novedades <ArrowRight size={15} /></a></div><button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="sentinel-menu" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} className="rounded-lg border border-white/10 p-2 lg:hidden">{open ? <X /> : <Menu />}</button></nav>{open && <nav id="sentinel-menu" aria-label="Navegación móvil" className="flex flex-col gap-5 border-t border-white/10 px-6 py-5"><SectionNav links={links} onNavigate={() => setOpen(false)} /><span className="text-xs font-semibold uppercase tracking-widest text-emerald-300">Próximamente</span><a href="#beta" className="btn-primary justify-center" onClick={() => { setOpen(false); trackEvent('Sentinel CTA Clicked', { placement: 'mobile_menu' }); }}>Recibir novedades</a></nav>}</header>;
}

export default function SentinelPage() {
  useEffect(() => { if (!window.location.hash) window.scrollTo(0, 0); }, []);
  return <div className="sentinel-page min-h-screen overflow-x-hidden bg-[#080b0a] text-slate-100"><Seo title="Sentinel by GCTechOps | Próximamente" description="Sentinel, plataforma de monitoreo de sitios, APIs y certificados TLS, se estrenará próximamente. Conoce una vista previa y recibe novedades del lanzamiento." path="/sentinel" /><Analytics /><Header /><main>
    <SentinelHero />
    <SentinelCapabilities />
    <SentinelScreens />
    <SentinelCases />
    <BetaForm />
    <SentinelFAQ />
  </main><Footer sentinel /></div>;
}
