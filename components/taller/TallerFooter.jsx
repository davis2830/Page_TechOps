import React from 'react';
import { Wrench, Phone, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import config from '../../config/contacto';

export default function TallerFooter() {
  return (
    <footer className="border-t border-slate-800/60 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text-amber">{config.businessName}</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Sistema ERP profesional para talleres mecánicos. Gestiona tu taller de forma eficiente.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Producto</h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li><a href="#servicios-taller" className="hover:text-amber-400 transition-colors">Órdenes de trabajo</a></li>
              <li><a href="#servicios-taller" className="hover:text-amber-400 transition-colors">Inventario</a></li>
              <li><a href="#precios-taller" className="hover:text-amber-400 transition-colors">Planes</a></li>
              <li><a href="#contacto-taller" className="hover:text-amber-400 transition-colors">Solicitar demo</a></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Enlaces</h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li><a href="#nosotros" className="hover:text-amber-400 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#proceso" className="hover:text-amber-400 transition-colors">Nuestro Proceso</a></li>
              <li><a href="#contacto-taller" className="hover:text-amber-400 transition-colors">Contacto</a></li>
              <li><Link to="/" className="hover:text-cyan-400 transition-colors">TechOps - IT</Link></li>
              <li><Link to="/privacidad" className="hover:text-amber-400 transition-colors">Privacidad</Link></li>
              <li><Link to="/terminos" className="hover:text-amber-400 transition-colors">Términos</Link></li>
              <li><Link to="/seguridad" className="hover:text-amber-400 transition-colors">Seguridad</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a href={`tel:${config.phoneFull}`} className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  {config.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`${config.whatsappUrl}?text=${encodeURIComponent('Hola, me interesa conocer más sobre el sistema ERP para talleres de GC Torque')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-green-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${config.email}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  {config.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800/50 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">&copy; {new Date().getFullYear()} {config.businessName}. Todos los derechos reservados.</p>
          <p className="text-xs text-slate-700">
            Powered by <Link to="/" className="text-cyan-500 hover:text-cyan-400 transition-colors">TechOps</Link> &bull; {config.domain}
          </p>
        </div>
      </div>
    </footer>
  );
}
