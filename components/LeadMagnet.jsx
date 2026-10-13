import React, { useState } from 'react';
import { CheckCircle2, Download, FileCheck2, Loader2, Mail } from 'lucide-react';
import config from '../config/contacto';
import { trackEvent } from './Analytics';

const initialData = { name: '', company: '', email: '' };

export default function LeadMagnet() {
  const [form, setForm] = useState(initialData);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const [started, setStarted] = useState(false);
  const configured = Boolean(config.web3formsKey);

  const onFocus = () => {
    if (started) return;
    setStarted(true);
    trackEvent('Checklist Form Started', { form: 'resilience_checklist' });
  };

  const setField = (field) => (event) => setForm({ ...form, [field]: event.target.value });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    if (!configured) {
      setStatus('config');
      setMessage('La descarga todavía no está habilitada. Escríbenos y te enviaremos el checklist cuando esté disponible.');
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
          subject: 'Descarga checklist de resiliencia TechOPS',
          from_name: form.name,
          nombre: form.name,
          empresa: form.company,
          email: form.email,
          recurso: 'Checklist de resiliencia para CTOs',
          botcheck: '',
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success === false) throw new Error('submission_failed');
      setStatus('sent');
      setForm(initialData);
      trackEvent('Checklist Form Completed', { form: 'resilience_checklist' });
    } catch {
      setStatus('error');
      setMessage('No pudimos procesar la solicitud. Intenta nuevamente o solicita el checklist por correo.');
    }
  };

  return (
    <section id="checklist" className="border-y border-white/10 bg-white/[0.015]">
      <div className="section-shell grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300"><span className="h-px w-8 bg-cyan-300/70" /> Recurso para CTOs</div>
          <h2 className="section-title">Evalúa la resiliencia de tu operación en 30 controles.</h2>
          <p className="section-copy">Un checklist práctico para revisar observabilidad, respuesta a incidentes, plataforma, capacidad y continuidad sin depender de una herramienta específica.</p>
          <div className="mt-7 flex items-center gap-3 text-sm text-slate-300"><FileCheck2 size={20} className="text-cyan-300" /> PDF listo para trabajar con tu equipo</div>
        </div>

        {!configured ? (
          <div className="trust-card p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Solicitud directa</p>
            <h3 className="mt-4 text-xl font-semibold text-white">Pide el checklist por correo.</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">Te compartiré el PDF de 30 controles para que lo revises con tu equipo.</p>
            <a href={`mailto:${config.email}?subject=${encodeURIComponent('Checklist de resiliencia TechOPS')}`} className="btn-primary mt-6 justify-center px-6 py-3.5"><Mail size={17} /> Solicitar checklist</a>
          </div>
        ) : status === 'sent' ? (
          <div className="trust-card p-8 text-center">
            <CheckCircle2 size={34} className="mx-auto text-emerald-400" />
            <h3 className="mt-4 text-xl font-semibold text-white">Checklist disponible</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">Gracias. Ya puedes descargar el recurso y utilizarlo con tu equipo.</p>
            <a href={config.leadMagnetUrl} download onClick={() => trackEvent('Checklist Downloaded', { asset: 'resilience_checklist' })} className="btn-primary mt-6 justify-center px-6 py-3.5"><Download size={17} /> Descargar checklist</a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} onFocus={onFocus} className="trust-card p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nombre" value={form.name} onChange={setField('name')} placeholder="Tu nombre" required />
              <Field label="Empresa" value={form.company} onChange={setField('company')} placeholder="Organización" required />
            </div>
            <div className="mt-5"><Field label="Correo corporativo" type="email" value={form.email} onChange={setField('email')} placeholder="nombre@empresa.com" required /></div>
            {message && <div role="alert" className={`mt-5 rounded-xl border px-4 py-3 text-sm ${status === 'error' ? 'border-red-400/20 bg-red-400/5 text-red-300' : 'border-amber-400/20 bg-amber-400/5 text-amber-200'}`}>{message}</div>}
            <button type="submit" disabled={status === 'sending'} className="btn-primary mt-6 w-full justify-center px-6 py-3.5 disabled:cursor-not-allowed disabled:opacity-60">{status === 'sending' ? <><Loader2 size={17} className="animate-spin" /> Preparando…</> : <><Download size={17} /> Obtener checklist</>}</button>
            <p className="mt-4 text-center text-[11px] leading-5 text-slate-600">Usaremos tus datos únicamente para entregar el recurso y responder consultas relacionadas.</p>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({ label, type = 'text', ...props }) {
  return <label className="block"><span className="form-label">{label}</span><input type={type} className="form-control" {...props} /></label>;
}
