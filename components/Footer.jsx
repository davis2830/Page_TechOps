import React from 'react';
import { Code, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import config from '../config/contacto';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">TechOps</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Ingeniería de Software y Operaciones a prueba de fallos.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Servicios</h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">Desarrollo de Software</a></li>
              <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">Automatización SRE</a></li>
              <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">Monitoreo NOC</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Productos</h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li><a href="#productos" className="hover:text-amber-400 transition-colors">Torque — ERP Taller</a></li>
              <li><a href="#precios" className="hover:text-amber-400 transition-colors">Planes y Precios</a></li>
              <li><a href="#contacto" className="hover:text-amber-400 transition-colors">Solicitar Demo</a></li>
              <li><Link to="/taller" className="hover:text-amber-400 transition-colors">Taller Mecánico</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li>
                <a href={`mailto:${config.email}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  {config.email}
                </a>
              </li>
              <li>
                <a href={`tel:${config.phoneFull}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  {config.phoneDisplay}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {config.location}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800/50 pt-8 text-center">
          <p className="text-xs text-slate-600">© {new Date().getFullYear()} TechOps. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
