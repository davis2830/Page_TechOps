import React, { useState } from 'react';
import { ChevronRight, Send, Loader2 } from 'lucide-react';
import { useReveal } from './useReveal';
import config from '../config/contacto';

export default function Contact() {
  const [ref, visible] = useReveal(0.1);
  const [formData, setFormData] = useState({ nombre: '', empresa: '', email: '', telefono: '', servicio: '', mensaje: '' });
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
          subject: `Consultoría TechOps - ${formData.servicio || 'General'}`,
          from_name: formData.nombre,
          nombre: formData.nombre,
          empresa: formData.empresa,
          email: formData.email,
          telefono: formData.telefono,
          servicio: formData.servicio,
          mensaje: formData.mensaje,
        }),
      });

      if (res.ok) {
        setStatus('sent');
        setFormData({ nombre: '', empresa: '', email: '', telefono: '', servicio: '', mensaje: '' });
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

  return (
    <section id="contacto" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-cyan-400 mb-4">
              <span className="w-8 h-px bg-cyan-500" /> CONTACTO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
              ¿Listo para modernizar tu operación?
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Déjanos un mensaje y analizaremos la arquitectura de tu empresa para encontrar oportunidades de optimización.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Input label="Nombre" value={formData.nombre} onChange={(v) => setFormData({ ...formData, nombre: v })} placeholder="Tu nombre" required />
              <Input label="Empresa" value={formData.empresa} onChange={(v) => setFormData({ ...formData, empresa: v })} placeholder="Tu empresa" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Input label="Email" type="email" value={formData.email} onChange={(v) => setFormData({ ...formData, email: v })} placeholder="tu@email.com" required />
              <Input label="Teléfono" type="tel" value={formData.telefono} onChange={(v) => setFormData({ ...formData, telefono: v })} placeholder="+502 1234-5678" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">¿En qué podemos ayudarte?</label>
              <select
                required
                value={formData.servicio}
                onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700/60 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all text-sm"
              >
                <option value="">Selecciona un servicio</option>
                <option value="desarrollo">Desarrollo a medida</option>
                <option value="automatizacion">Automatización de Infraestructura</option>
                <option value="monitoreo">Monitoreo NOC</option>
                <option value="torque">Demo Torque (ERP Taller)</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Mensaje</label>
              <textarea
                rows={4}
                value={formData.mensaje}
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700/60 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all text-sm resize-none"
                placeholder="Cuéntanos sobre tu proyecto..."
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

            <button type="submit" disabled={status === 'sending'} className="w-full btn-primary justify-center group disabled:opacity-70">
              {status === 'sending' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              {status === 'sending' ? 'Enviando...' : 'Enviar Solicitud'}
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Input({ label, type = 'text', value, onChange, placeholder, required }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-300 mb-2">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700/60 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all text-sm"
      />
    </div>
  );
}
