import React, { useState, useEffect } from 'react';
import { Menu, X, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import config from '../../config/contacto';

export default function TallerNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const links = [
    { href: '#servicios-taller', label: 'Módulos' },
    { href: '#nosotros', label: 'Producto' },
    { href: '#proceso', label: 'Implementación' },
    { href: '#contacto-taller', label: 'Contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass shadow-2xl shadow-black/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/taller" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-shadow">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold gradient-text-amber leading-tight">{config.businessName}</span>
              <span className="text-[10px] text-slate-500 tracking-widest">ERP PARA TALLERES</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-slate-400 hover:text-amber-400 transition-colors font-medium tracking-wide">
                {l.label}
              </a>
            ))}
            <Link to="/" className="text-sm text-slate-500 hover:text-cyan-400 transition-colors font-medium">
              TechOps
            </Link>
            <a href="#contacto-taller" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-semibold rounded-xl transition-all text-sm shadow-lg shadow-amber-900/20 hover:-translate-y-0.5">
              Solicitar Demo
            </a>
          </div>

          <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-slate-800/50 animate-slide-up">
          <div className="px-6 py-5 space-y-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-slate-300 hover:text-amber-400 transition-colors font-medium">
                {l.label}
              </a>
            ))}
            <Link to="/" onClick={() => setOpen(false)} className="block py-2 text-slate-500 hover:text-cyan-400 transition-colors font-medium">
              TechOps
            </Link>
            <a href="#contacto-taller" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-xl text-sm mt-3">
              Solicitar Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
