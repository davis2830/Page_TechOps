import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const links = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#productos', label: 'Productos' },
    { href: '#porque', label: '¿Por qué?' },
    { href: '#contacto', label: 'Contacto' },
  ];

  const tallerLink = { to: '/taller', label: 'Taller Mecánico' };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass shadow-2xl shadow-black/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">TechOps</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-slate-400 hover:text-cyan-400 transition-colors font-medium tracking-wide">
                {l.label}
              </a>
            ))}
            <Link to={tallerLink.to} className="text-sm text-amber-400/80 hover:text-amber-400 transition-colors font-medium tracking-wide">
              {tallerLink.label}
            </Link>
            <a href="#contacto" className="btn-primary text-sm !px-5 !py-2.5">
              Agendar Consultoría
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
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-slate-300 hover:text-cyan-400 transition-colors font-medium">
                {l.label}
              </a>
            ))}
            <Link to={tallerLink.to} onClick={() => setOpen(false)} className="block py-2 text-amber-400/80 hover:text-amber-400 transition-colors font-medium">
              {tallerLink.label}
            </Link>
            <a href="#contacto" onClick={() => setOpen(false)} className="btn-primary w-full justify-center text-sm mt-3">
              Agendar Consultoría
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
