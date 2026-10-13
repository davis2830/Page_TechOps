import { useState } from 'react';
import { CheckCircle2, Mail, ArrowRight } from 'lucide-react';
import config from '../../config/contacto';
import { trackEvent } from '../Analytics';

export default function BetaForm() {
  const [status, setStatus] = useState('idle');
  const [started, setStarted] = useState(false);
  async function submit(event) {
    event.preventDefault();
    if (status === 'sending') return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const fields = Object.fromEntries(new FormData(form));
    if (fields.botcheck) return;
    setStatus('sending');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, access_key: config.web3formsKey, subject: 'Solicitud de beta Sentinel', from_name: 'Sentinel · GCTechOps', origen: 'sentinel_beta' }),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error('submission_failed');
      setStatus('sent');
      trackEvent('Sentinel Beta Completed', { source: 'sentinel_landing' });
    } catch { setStatus('error'); }
  }
  return <section id="beta" className="border-y border-emerald-400/15 bg-[#102019]"><div className="section-shell grid gap-12 lg:grid-cols-2"><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-emerald-300">Cómo comenzar · Acceso anticipado</p><h2 className="section-title mt-5">Tus primeros monitores, con acompañamiento.</h2><p className="section-copy">El equipo de GCTechOps revisa tu solicitud y te ayuda a configurar los servicios que necesitas supervisar.</p>
      <ol className="mt-7 space-y-5">{[['01', 'Comparte tu objetivo', 'Cuéntanos qué sitios o servicios quieres monitorear.'], ['02', 'Acordamos el acceso', 'Confirmamos disponibilidad, límites y condiciones de la beta.'], ['03', 'Configuramos contigo', 'Agregamos tus primeros monitores y revisamos las notificaciones.']].map(([number, title, text]) => <li key={number} className="flex gap-4 border-l border-emerald-400/30 pl-4"><span className="font-mono text-xs text-emerald-300">{number}</span><div><h3 className="text-sm font-semibold">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-400">{text}</p></div></li>)}</ol>
      <div id="confianza" className="mt-7 border-t border-white/10 pt-5"><p className="text-sm leading-7 text-slate-400">La solicitud no implica un cobro ni activa una suscripción. Sentinel es un producto de GCTechOps, liderado por Davis Galvez.</p><div className="mt-4 flex flex-wrap gap-4 text-xs text-emerald-300"><a href="/seguridad">Seguridad y confianza</a><a href="/#diagnostico">¿Necesitas implementar tu stack? Agendar diagnóstico →</a></div></div></div>
    <div className="trust-card p-6 sm:p-8">{!config.web3formsKey ? <><h3 className="text-2xl font-semibold">Conversemos sobre Sentinel.</h3><p className="mt-4 text-sm leading-7 text-slate-400">Envíanos tu nombre, empresa y qué servicios necesitas monitorear. Te responderemos con los próximos pasos.</p><a className="btn-primary mt-7" href={`mailto:${config.email}?subject=${encodeURIComponent('Acceso a la beta de Sentinel')}`} onClick={() => { trackEvent('Sentinel CTA Clicked', { placement: 'beta_email' }); trackEvent('Sentinel Beta Email Clicked', { placement: 'beta_email' }); }}><Mail size={17} /> Solicitar acceso por correo</a><p className="mt-5 break-all text-xs text-slate-400">{config.email}</p></> : status === 'sent' ? <div role="status" className="py-14 text-center"><CheckCircle2 size={36} className="mx-auto text-emerald-400" /><h3 className="mt-5 text-2xl font-semibold">Solicitud recibida</h3><p className="mt-3 text-sm leading-7 text-slate-400">Te contactaremos por correo para coordinar los siguientes pasos.</p></div> : <form onSubmit={submit} onFocus={() => { if (!started) { setStarted(true); trackEvent('Sentinel Beta Started'); } }}>
      <div className="grid gap-5 sm:grid-cols-2">{[['name', 'Nombre', 'text'], ['company', 'Empresa', 'text'], ['email', 'Correo de trabajo', 'email']].map(([name, label, type]) => <label key={name} className={name === 'email' ? 'sm:col-span-2' : ''}><span className="form-label">{label}</span><input className="form-control" name={name} type={type} autoComplete={name === 'company' ? 'organization' : name} required maxLength={200} /></label>)}</div>
      <label className="mt-5 block"><span className="form-label">¿Qué necesitas monitorear?</span><textarea name="context" className="form-control" rows={3} required maxLength={2000} placeholder="Sitios, APIs, certificados…" /></label>
      <input name="botcheck" type="text" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <label className="mt-5 flex items-start gap-3 text-xs leading-6 text-slate-400"><input type="checkbox" required name="consent" className="mt-1" /> <span>Acepto que GCTechOps use estos datos para responder mi solicitud. <a href="/privacidad" className="text-emerald-300 underline">Aviso de privacidad</a>.</span></label>
      {status === 'error' && <p role="alert" className="mt-4 text-sm text-amber-200">No pudimos enviar tu solicitud. Intenta nuevamente o escribe a <a className="underline" href={`mailto:${config.email}`}>{config.email}</a>.</p>}
      <button className="btn-primary mt-6 w-full justify-center disabled:opacity-60" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Enviando…' : 'Solicitar acceso a la beta'}<ArrowRight size={16} /></button>
    </form>}</div></div></section>;
}
