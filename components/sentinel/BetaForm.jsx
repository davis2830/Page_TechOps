import { useState } from 'react';
import { CheckCircle2, Mail, ArrowRight, MessageCircle, Radio } from 'lucide-react';
import config from '../../config/contacto';
import { trackEvent } from '../Analytics';

export default function BetaForm() {
  const [status, setStatus] = useState('idle');
  const [started, setStarted] = useState(false);
  const configured = Boolean(config.web3formsKey);
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
        body: JSON.stringify({ ...fields, access_key: config.web3formsKey, subject: 'Interés en el lanzamiento de Sentinel', from_name: 'Sentinel · GCTechOps', origen: 'sentinel_lanzamiento' }),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error('submission_failed');
      setStatus('sent');
      trackEvent('Sentinel Interest Completed', { source: 'sentinel_landing' });
    } catch { setStatus('error'); }
  }
  return <section id="beta" className="border-y border-emerald-400/15 bg-[#102019]"><div className="section-shell grid gap-12 lg:grid-cols-2"><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-emerald-300">Próximamente · Mantente al tanto</p><h2 className="section-title mt-5">Entérate cuando Sentinel esté listo.</h2><p className="section-copy">{configured ? 'Déjanos tus datos si te interesa conocer las novedades del producto y su futuro lanzamiento.' : 'Si Sentinel puede aportar visibilidad a tu operación, cuéntanos qué te gustaría monitorear. Podemos conversar sobre el producto mientras preparamos su lanzamiento.'} Aún no hay una fecha anunciada.</p>
      <ol className="mt-7 space-y-5">{[['01', 'Cuéntanos tu interés', 'Comparte qué servicios te gustaría monitorear.'], ['02', 'Seguimos construyendo', 'Usaremos tus comentarios para entender qué es importante para tu equipo.'], ['03', 'Te avisaremos', 'Te escribiremos cuando haya novedades relevantes sobre el lanzamiento.']].map(([number, title, text]) => <li key={number} className="flex gap-4 border-l border-emerald-400/30 pl-4"><span className="font-mono text-xs text-emerald-300">{number}</span><div><h3 className="text-sm font-semibold">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-400">{text}</p></div></li>)}</ol>
      <div id="confianza" className="mt-7 border-t border-white/10 pt-5"><p className="text-sm leading-7 text-slate-400">Dejar tus datos no crea una cuenta, no activa una suscripción ni implica un cobro. Sentinel es un producto de GCTechOps, liderado por Davis Galvez.</p><div className="mt-4 flex flex-wrap gap-4 text-xs text-emerald-300"><a href="/seguridad">Seguridad y confianza</a><a href="/#diagnostico">¿Necesitas implementar tu stack? Agendar diagnóstico →</a></div></div></div>
    <div className="trust-card overflow-hidden p-6 sm:p-8">{!configured ? <div className="relative"><div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300"><Radio size={23} aria-hidden="true" /></div><p className="text-xs font-semibold uppercase tracking-[.18em] text-emerald-300">Canal directo</p><h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Hablemos de lo que necesitas monitorear.</h3><p className="mt-4 max-w-md text-sm leading-7 text-slate-400">Cuéntanos tu caso y te compartiremos información de Sentinel cuando haya novedades.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a className="btn-primary justify-center" href={`mailto:${config.email}?subject=${encodeURIComponent('Interés en Sentinel')}`} onClick={() => { trackEvent('Sentinel CTA Clicked', { placement: 'interest_email' }); trackEvent('Sentinel Interest Email Clicked', { placement: 'interest_email' }); }}><Mail size={17} /> Escribir por correo <ArrowRight size={16} /></a><a className="btn-secondary justify-center" href={`${config.whatsappUrl}?text=${encodeURIComponent('Hola, me interesa conocer Sentinel y su próximo lanzamiento.')}`} target="_blank" rel="noreferrer" onClick={() => trackEvent('WhatsApp Clicked', { placement: 'sentinel_interest' })}><MessageCircle size={17} /> WhatsApp</a></div><p className="mt-7 border-t border-white/10 pt-5 text-xs leading-6 text-slate-500">El contacto por correo o WhatsApp no registra una cuenta ni da acceso al producto.</p></div> : status === 'sent' ? <div role="status" className="py-14 text-center"><CheckCircle2 size={36} className="mx-auto text-emerald-400" /><h3 className="mt-5 text-2xl font-semibold">Interés registrado</h3><p className="mt-3 text-sm leading-7 text-slate-400">Te escribiremos cuando haya novedades relevantes sobre Sentinel. Aún no hay fecha de lanzamiento.</p></div> : <form onSubmit={submit} onFocus={() => { if (!started) { setStarted(true); trackEvent('Sentinel Interest Started'); } }}>
      <div className="grid gap-5 sm:grid-cols-2">{[['name', 'Nombre', 'text'], ['company', 'Empresa', 'text'], ['email', 'Correo de trabajo', 'email']].map(([name, label, type]) => <label key={name} className={name === 'email' ? 'sm:col-span-2' : ''}><span className="form-label">{label}</span><input className="form-control" name={name} type={type} autoComplete={name === 'company' ? 'organization' : name} required maxLength={200} /></label>)}</div>
      <label className="mt-5 block"><span className="form-label">¿Qué te gustaría monitorear? (opcional)</span><textarea name="context" className="form-control" rows={3} maxLength={2000} placeholder="Sitios, APIs, certificados…" /></label>
      <input name="botcheck" type="text" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <label className="mt-5 flex items-start gap-3 text-xs leading-6 text-slate-400"><input type="checkbox" required name="consent" className="mt-1" /> <span>Acepto que GCTechOps use estos datos para enviarme novedades de Sentinel y responder mi consulta. <a href="/privacidad" className="text-emerald-300 underline">Aviso de privacidad</a>.</span></label>
      {status === 'error' && <p role="alert" className="mt-4 text-sm text-amber-200">No pudimos registrar tu interés. Intenta nuevamente o escribe a <a className="underline" href={`mailto:${config.email}`}>{config.email}</a>.</p>}
      <button className="btn-primary mt-6 w-full justify-center disabled:opacity-60" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Enviando…' : 'Quiero recibir novedades'}<ArrowRight size={16} /></button>
    </form>}</div></div></section>;
}
