import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, MessageCircle, ChevronRight } from 'lucide-react';
import { useReveal } from '../useReveal';

export default function TallerContacto() {
  const [ref, visible] = useReveal(0.1);
  const [formData, setFormData] = useState({ nombre: '', telefono: '', email: '', vehiculo: '', servicio: '', mensaje: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    const subject = encodeURIComponent(`Solicitud de Servicio - ${formData.servicio || 'General'}`);
    const body = encodeURIComponent(
      `Nombre: ${formData.nombre}\n` +
      `Telfono: ${formData.telefono}\n` +
      `Email: ${formData.email}\n` +
      `Vehculo: ${formData.vehiculo}\n` +
      `Servicio: ${formData.servicio}\n` +
      `Mensaje: ${formData.mensaje}`
    );

    window.location.href = `mailto:steed.galvez@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => setSending(false), 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Telfono',
      value: '5464-9404',
      href: 'tel:+50254649404',
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '5464-9404',
      href: 'https://wa.me/50254649404?text=Hola%2C%20me%20interesa%20agendar%20una%20cita%20en%20el%20taller',
      color: 'from-green-500 to-green-700',
      external: true,
    },
    {
      icon: Mail,
      label: 'Correo',
      value: 'steed.galvez@gmail.com',
      href: 'mailto:steed.galvez@gmail.com',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: MapPin,
      label: 'Ubicacin',
      value: 'Guatemala',
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
              Agenda tu Cita
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Contctanos por el medio que prefieras. Estamos listos para atender tu vehculo.
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
                href="https://wa.me/50254649404?text=Hola%2C%20me%20interesa%20agendar%20una%20cita%20en%20el%20taller"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-green-900/20 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                Escrbenos por WhatsApp
              </a>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-3 glass-card rounded-2xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <FormInput label="Nombre" value={formData.nombre} onChange={(v) => setFormData({ ...formData, nombre: v })} placeholder="Tu nombre" required />
                <FormInput label="Telfono" type="tel" value={formData.telefono} onChange={(v) => setFormData({ ...formData, telefono: v })} placeholder="+502 5464-9404" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <FormInput label="Email" type="email" value={formData.email} onChange={(v) => setFormData({ ...formData, email: v })} placeholder="tu@email.com" />
                <FormInput label="Vehculo" value={formData.vehiculo} onChange={(v) => setFormData({ ...formData, vehiculo: v })} placeholder="Ej: Toyota Corolla 2020" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Servicio que necesitas</label>
                <select
                  required
                  value={formData.servicio}
                  onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700/60 rounded-xl text-white focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all text-sm"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="mecanica-general">Mecnica General</option>
                  <option value="frenos-suspension">Frenos y Suspensin</option>
                  <option value="diagnostico">Diagntico Electrnico</option>
                  <option value="cambio-aceite">Cambio de Aceite y Fluidos</option>
                  <option value="servicio-preventivo">Servicio Preventivo</option>
                  <option value="aire-acondicionado">Aire Acondicionado</option>
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
                  placeholder="Describe el problema o servicio que necesitas..."
                />
              </div>

              <button type="submit" disabled={sending} className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-amber-900/20 hover:-translate-y-0.5 group disabled:opacity-70">
                <Send className="w-4 h-4" />
                {sending ? 'Abriendo correo...' : 'Enviar Solicitud'}
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
