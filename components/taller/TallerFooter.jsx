import React from 'react';
import { Wrench, Phone, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

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
              <span className="text-xl font-bold gradient-text-amber">GC Torque</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Taller mecánico profesional. Tu vehículo en las mejores manos.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Servicios</h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li><a href="#servicios-taller" className="hover:text-amber-400 transition-colors">Mecánica General</a></li>
              <li><a href="#servicios-taller" className="hover:text-amber-400 transition-colors">Frenos y Suspensión</a></li>
              <li><a href="#servicios-taller" className="hover:text-amber-400 transition-colors">Diagnóstico Electrónico</a></li>
              <li><a href="#servicios-taller" className="hover:text-amber-400 transition-colors">Servicio Preventivo</a></li>
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
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a href="tel:+50254649404" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  5464-9404
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/50254649404?text=Hola%2C%20me%20interesa%20agendar%20una%20cita%20en%20el%20taller"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-green-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:steed.galvez@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  steed.galvez@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800/50 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">&copy; {new Date().getFullYear()} GC Torque. Todos los derechos reservados.</p>
          <p className="text-xs text-slate-700">
            Powered by <Link to="/" className="text-cyan-500 hover:text-cyan-400 transition-colors">TechOps</Link> &bull; gctorque.com
          </p>
        </div>
      </div>
    </footer>
  );
}
