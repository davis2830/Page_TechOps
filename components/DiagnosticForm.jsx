import React, { useState } from 'react';
import { ArrowRight, CalendarDays, CheckCircle2, Loader2, Mail, MessageCircle, Send } from 'lucide-react';
import config from '../config/contacto';
import { trackEvent } from './Analytics';

const initialData = { name: '', company: '', email: '', challenge: '', scale: '', timeline: '' };

export default function DiagnosticForm() {
  const [form, setForm] = useState(initialData);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const [started, setStarted] = useState(false);
  const configured = Boolean(config.web3formsKey);

  const setField = (field) => (event) => setForm({ ...form, [field]: event.target.value });

  const handleFocus = () => {
    if (started) return;
    setStarted(true);
    trackEvent('Diagnostic Form Started', { form: 'diagnostic' });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    if (!configured) {
      setStatus('config');
      setMessage('El formulario todavía no está habilitado. Puedes escribirnos directamente por correo.');
      return;
    }

    setStatus('sending');
    setMessage('');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: config.web3formsKey,
          subject: 'Solicitud de diagnóstico técnico TechOPS',
          from_name: form.name,
          nombre: form.name,
          empresa: form.company,
          email: form.email,
          desafio: form.challenge,
          escala: form.scale,
          plazo: form.timeline,
          botcheck: '',
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success === false) throw new Error('submission_failed');
      setStatus('sent');
      setForm(initialData);
      trackEvent('Diagnostic Form Completed', { form: 'diagnostic' });
    } catch {
      setStatus('error');
      setMessage('No pudimos enviar la solicitud. Intenta nuevamente o utiliza el correo de contacto.');
    }
  };

  return (
    <section id="diagnostico" className="border-t border-white/10 bg-[#0a0f0c]">
      <div className="section-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400"><span className="h-px w-8 bg-emerald-400/70" /> Diagnóstico inicial</div>
          <h2 className="section-title">Conversemos sobre el punto que hoy limita tu operación.</h2>
          <p className="section-copy">{configured ? 'Comparte el contexto esencial. Revisaremos la solicitud antes de la llamada para dedicar el tiempo a decisiones útiles.' : 'Cuéntame el desafío principal de tu plataforma. Revisaré el contexto contigo y acordaremos un siguiente paso concreto.'}</p>
          <div className="mt-8 space-y-4 text-sm text-slate-400">
            {['Revisión inicial del contexto', 'Conversación técnica enfocada', 'Siguiente paso claro y sin compromiso'].map(item => <div key={item} className="flex items-center gap-3"><CheckCircle2 size={17} className="text-emerald-400" />{item}</div>)}
          </div>
        </div>

        {!configured ? (
          <div className="trust-card flex flex-col justify-center p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">Contacto directo</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Hablemos de tu operación.</h3>
            <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">Escríbeme con una descripción breve del problema. Podemos comenzar por correo o WhatsApp.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row"><a href={`mailto:${config.email}?subject=${encodeURIComponent('Diagnóstico técnico TechOPS')}`} className="btn-primary justify-center px-6 py-3.5"><Mail size={17} /> Escribir por correo</a><a href={config.whatsappUrl} target="_blank" rel="noreferrer" onClick={() => trackEvent('WhatsApp Clicked', { placement: 'diagnostic' })} className="btn-secondary justify-center px-6 py-3.5"><MessageCircle size={17} /> WhatsApp</a></div>
            <p className="mt-6 break-all text-xs text-slate-500">{config.email}</p>
          </div>
        ) : status === 'sent' ? (
          <div className="trust-card flex min-h-[440px] flex-col items-center justify-center p-8 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-400"><CheckCircle2 size={28} /></div>
            <h3 className="mt-6 text-2xl font-semibold text-white">Solicitud recibida</h3>
            <p className="mt-3 max-w-md leading-7 text-slate-400">Gracias. Ahora puedes elegir el horario que mejor te convenga para la conversación técnica.</p>
            {config.calUrl ? <a href={config.calUrl} target="_blank" rel="noreferrer" onClick={() => trackEvent('Cal Clicked', { placement: 'diagnostic_success' })} className="btn-primary mt-7 px-6 py-3.5"><CalendarDays size={18} /> Elegir horario <ArrowRight size={16} /></a> : <a href={`mailto:${config.email}`} className="btn-secondary mt-7 px-6 py-3.5"><Mail size={18} /> Coordinar por correo</a>}
            {!config.calUrl && <p className="mt-4 text-xs text-slate-500">Coordinaremos un horario por correo.</p>}
          </div>
        ) : (
          <form onSubmit={handleSubmit} onFocus={handleFocus} className="trust-card p-6 sm:p-8" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nombre" value={form.name} onChange={setField('name')} placeholder="Tu nombre" required />
              <Field label="Empresa" value={form.company} onChange={setField('company')} placeholder="Organización" required />
            </div>
            <div className="mt-5"><Field label="Correo corporativo" type="email" value={form.email} onChange={setField('email')} placeholder="nombre@empresa.com" required /></div>
            <div className="mt-5"><Select label="Desafío principal" value={form.challenge} onChange={setField('challenge')} required options={[['', 'Selecciona una opción'], ['observabilidad', 'Observabilidad e incidentes'], ['kubernetes', 'Kubernetes y plataforma'], ['rendimiento', 'Rendimiento y capacidad'], ['automatizacion', 'Automatización operativa'], ['otro', 'Otro desafío']]} /></div>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <Select label="Escala aproximada" value={form.scale} onChange={setField('scale')} required options={[['', 'Selecciona'], ['small', 'Hasta 50 recursos'], ['medium', '50–200 recursos'], ['large', 'Más de 200 recursos'], ['transactional', 'Entorno transaccional']]} />
              <Select label="Plazo esperado" value={form.timeline} onChange={setField('timeline')} required options={[['', 'Selecciona'], ['urgent', 'Este mes'], ['quarter', 'Este trimestre'], ['exploring', 'Estoy explorando']]} />
            </div>
            {message && <div role="alert" className={`mt-5 rounded-xl border px-4 py-3 text-sm ${status === 'error' ? 'border-red-400/20 bg-red-400/5 text-red-300' : 'border-amber-400/20 bg-amber-400/5 text-amber-200'}`}>{message}</div>}
            <button type="submit" disabled={status === 'sending'} className="btn-primary mt-7 w-full justify-center px-6 py-3.5 disabled:cursor-not-allowed disabled:opacity-60">{status === 'sending' ? <><Loader2 size={17} className="animate-spin" /> Enviando…</> : <><Send size={17} /> Continuar para agendar</>}</button>
            <p className="mt-4 text-center text-[11px] leading-5 text-slate-600">Al enviar aceptas que usemos estos datos para responder tu solicitud. <a href="/privacidad" className="underline hover:text-slate-400">Consulta nuestro aviso de privacidad.</a></p>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({ label, type = 'text', ...props }) {
  return <label className="block"><span className="form-label">{label}</span><input type={type} className="form-control" {...props} /></label>;
}

function Select({ label, options, ...props }) {
  return <label className="block"><span className="form-label">{label}</span><select className="form-control" {...props}>{options.map(([value, text]) => <option key={value} value={value}>{text}</option>)}</select></label>;
}
