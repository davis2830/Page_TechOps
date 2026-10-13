import { Link } from 'react-router-dom';
import config from '../../config/contacto';

export default function Footer({ sentinel = false }) {
  return <footer className="border-t border-white/10 bg-[#060807]"><div className="site-footer-main mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-[1fr_auto] md:items-end"><div><img src="/techops-logo.svg" alt="TechOPS" className="h-8 w-auto" /><p className="mt-3 max-w-md text-sm leading-6 text-slate-500">Observabilidad e infraestructura para operaciones críticas. Una iniciativa de {config.companyName}.</p></div><nav aria-label="Enlaces legales" className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500"><Link to="/sentinel" className="hover:text-white">Sentinel</Link><Link to="/privacidad" className="hover:text-white">Privacidad</Link><Link to={sentinel ? "/sentinel/terminos" : "/terminos"} className="hover:text-white">Términos</Link><Link to="/seguridad" className="hover:text-white">Seguridad</Link></nav></div><div className="border-t border-white/10"><div className="site-footer-bottom mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-slate-600 sm:flex-row sm:justify-between"><span>© 2026 TechOPS · {config.companyName}. Guatemala y Latinoamérica.</span><a href={`mailto:${config.email}`} className="hover:text-slate-300">{config.email}</a></div></div></footer>;
}

