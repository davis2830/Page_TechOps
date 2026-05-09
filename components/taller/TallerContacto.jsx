import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, MessageCircle, ChevronRight, Loader2 } from 'lucide-react';
import { useReveal } from '../useReveal';
import config from '../../config/contacto';

export default function TallerContacto() {
  const [ref, visible] = useReveal(0.1);
  const [formData, setFormData] = useState({ nombre: '', telefono: '', email: '', vehiculo: '', servicio: '', mensaje: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: config.web3formsKey,
          subject: `Solicitud de Información - Sistema ERP ${formData.servicio || 'General'}`,
          from_name: formData.nombre,
          nombre: formData.nombre,
          telefono: formData.telefono,
          email: formData.email,
          taller_negocio: formData.vehiculo,
          modulo_interes: formData.servicio,
          mensaje: formData.mensaje,
        }),
      });

      if (res.ok) {
        setStatus('sent');
        setFormData({ nombre: '', telefono: '', email: '', vehiculo: '', servicio: '', mensaje: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Teléfono',
      value: config.phoneDisplay,
      href: `tel:${config.phoneFull}`,
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: config.phoneDisplay,
      href: `${config.whatsappUrl}?text=${encodeURIComponent('Hola, me interesa conocer más sobre el sistema ERP para talleres de GC Torque')}`,
      color: 'from-green-500 to-green-700',
      external: true,
    },
    {
      icon: Mail,
      label: 'Correo',
      value: config.email,
      href: `mailto:${config.email}`,
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: config.location,
      href: null,
      color: 'from-red-500 to-red-700',
    },
  ];

  return (
    <section id="contacto-taller" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 mb-4">
              <span className="w-8 h-px bg-amber-500" /> CONTACTO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text-amber mb-4">
              Solicita tu Demo
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Contáctanos para conocer nuestro sistema ERP para talleres mecánicos. Agenda una demostración sin compromiso.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact info cards */}
            <div className="lg:col-span-2 space-y-4">
              {contactInfo.map((c) => {
                const Icon = c.icon;
                const content = (
                  <div className="glass-card rounded-xl p-5 flex items-center gap-4 group cursor-pointer">
                    <div className={`w-11 h-11 bg-gradient-to-br ${c.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium mb-0.5">{c.label}</div>
                      <div className="text-white font-semibold text-sm">{c.value}</div>
                    </div>
                  </div>
                );

                if (c.href) {
                  return (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.external ? '_blank' : undefined}
                      rel={c.external ? 'noopener noreferrer' : undefined}
                    >
                      {content}
                    </a>
                  );
                }
                return <div key={c.label}>{content}</div>;
              })}

              {/* WhatsApp CTA */}
              <a
                href={`${config.whatsappUrl}?text=${encodeURIComponent('Hola, me interesa conocer más sobre el sistema ERP para talleres de GC Torque')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-green-900/20 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                Escríbenos por WhatsApp
              </a>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-3 glass-card rounded-2xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <FormInput label="Nombre" value={formData.nombre} onChange={(v) => setFormData({ ...formData, nombre: v })} placeholder="Tu nombre" required />
                <FormInput label="Teléfono" type="tel" value={formData.telefono} onChange={(v) => setFormData({ ...formData, telefono: v })} placeholder="+502 5464-9404" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <FormInput label="Email" type="email" value={formData.email} onChange={(v) => setFormData({ ...formData, email: v })} placeholder="tu@email.com" />
                <FormInput label="Taller / Negocio" value={formData.vehiculo} onChange={(v) => setFormData({ ...formData, vehiculo: v })} placeholder="Ej: Taller Mi Taller S.A." />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">¿Qué te interesa?</label>
                <select
                  required
                  value={formData.servicio}
                  onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700/60 rounded-xl text-white focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all text-sm"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="demo-erp">Demo del Sistema ERP</option>
                  <option value="cotizacion">Cotización del Sistema</option>
                  <option value="soporte-tecnico">Soporte Técnico</option>
                  <option value="implementacion">Implementación y Puesta en Marcha</option>
                  <option value="capacitacion">Capacitación</option>
                  <option value="integraciones">Integraciones y Personalización</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Mensaje</label>
                <textarea
                  rows={4}
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700/60 rounded-xl text-white focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all text-sm resize-none"
                  placeholder="Cuéntanos sobre tu taller y qué necesitas del sistema ERP..."
                />
              </div>

              {status === 'sent' && (
                <div className="flex items-center gap-2 text-green-400 text-sm bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-3">
                  ¡Mensaje enviado! Te contactaremos pronto.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                  Error al enviar. Intenta de nuevo o escríbenos a {config.email}
                </div>
              )}

              <button type="submit" disabled={status === 'sending'} className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-amber-900/20 hover:-translate-y-0.5 group disabled:opacity-70">
                {status === 'sending' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                {status === 'sending' ? 'Enviando...' : 'Solicitar Información'}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormInput({ label, type = 'text', value, onChange, placeholder, required }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-300 mb-2">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700/60 rounded-xl text-white focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all text-sm"
      />
    </div>
  );
}
