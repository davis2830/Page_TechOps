import React, { useState } from 'react';
import config from '../config/contacto';

const step1Options = [
  { value: 'observability', title: 'Falta de Observabilidad (M\u00e9tricas/Logs)', desc: 'Falta de visualizaci\u00f3n unificada de m\u00e9tricas, trazas distributed tracing o logs.' },
  { value: 'k8s', title: 'Orquestaci\u00f3n de Contenedores Compleja', desc: 'Dificultad o falta de control para configurar y estabilizar cl\u00fasteres de Kubernetes.' },
  { value: 'banking', title: 'Estabilidad de Core Bancario / Transaccional', desc: 'Problemas de cuello de botella en sistemas transaccionales cr\u00edticos (Visa / T24).' },
  { value: 'failures', title: 'Falta de Pruebas de Carga Realistas', desc: 'El sistema falla en picos de demanda por no realizar simulaciones previas de carga.' },
];

const step2Options = [
  { value: 'small', title: '< 50 Servidores/Contenedores', desc: 'Equipos en fases iniciales con arquitecturas monol\u00edticas o microservicios b\u00e1sicos.' },
  { value: 'medium', title: '50 a 200 Servidores/Contenedores', desc: 'Ecosistemas en pleno crecimiento con clusters Kubernetes distribuidos.' },
  { value: 'large', title: '> 200 Servidores/Contenedores', desc: 'Estructuras Multi-Cloud de alta complejidad y tr\u00e1fico global masivo.' },
  { value: 'none', title: 'Sistemas Core Bancarios / Transaccionales', desc: 'Entornos bancarios cr\u00edticos o integraciones complejas de pasarelas de pago.' },
];

export default function DiagnosticForm() {
  const [step, setStep] = useState(1);
  const [bottleneck, setBottleneck] = useState('observability');
  const [scale, setScale] = useState('small');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [modal, setModal] = useState(null);

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim()) {
      setModal({ type: 'error', title: 'Campos requeridos', msg: 'Por favor, complete todos los campos de contacto del paso 3 para poder procesar la auditor\u00eda preliminar de su arquitectura.' });
      return;
    }
    setSending(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: config.web3formsKey,
          subject: 'Diagn\u00f3stico T\u00e9cnico TechOps - Nueva Solicitud',
          from_name: name,
          email: email,
          desafio_principal: bottleneck,
          volumen_infraestructura: scale,
          nombre_completo: name,
          correo_corporativo: email,
        }),
      });
      if (res.ok) {
        setModal({ type: 'success', title: '\u00a1Diagn\u00f3stico T\u00e9cnico Iniciado!', msg: '\u00a1Excelente ' + name + '! Su solicitud fue registrada exitosamente. Un Ingeniero de Soluciones Principal se pondr\u00e1 en contacto con usted a trav\u00e9s de ' + email + ' en los pr\u00f3ximos 15 minutos para guiarle.' });
      } else {
        setModal({ type: 'error', title: 'Error al enviar', msg: 'Hubo un problema al enviar su solicitud. Por favor intente nuevamente.' });
      }
    } catch (e) {
      setModal({ type: 'error', title: 'Error al enviar', msg: 'Hubo un problema al enviar su solicitud. Por favor intente nuevamente.' });
    }
    setSending(false);
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const RadioGroup = ({ options, value, onChange }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {options.map(opt => (
        <label key={opt.value} className={'cursor-pointer border ' + (value === opt.value ? 'border-[#3ECF8E]/30 bg-[#3ECF8E]/5' : 'border-white/5 hover:border-[#3ECF8E]/30') + ' bg-[#0A0A0C] p-5 rounded-xl flex items-start space-x-3 transition-colors'}>
          <input type="radio" name={'radio_' + options[0].value} value={opt.value} checked={value === opt.value} onChange={() => onChange(opt.value)} className="mt-1 accent-[#3ECF8E]" />
          <div>
            <span className="block text-xs font-bold text-[#FAFAFA]">{opt.title}</span>
            <span className="block text-[11px] text-[#8E8E9F] mt-1">{opt.desc}</span>
          </div>
        </label>
      ))}
    </div>
  );

  return (
    <section id="diagnostico" className="py-24 bg-[#121216]/20 border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center space-y-4 mb-12">
          <span className="text-xs font-mono-custom uppercase tracking-widest text-indigo-400">Automatizaci&oacute;n de Diagn&oacute;stico</span>
          <h2 className="text-3xl font-bold tracking-tight text-[#FAFAFA]">Auditor&iacute;a de Sistemas Prematuros</h2>
          <p className="text-[#8E8E9F] text-sm max-w-lg mx-auto">
            Complete este r&aacute;pido cuestionario t&eacute;cnico para recibir un informe preliminar de su arquitectura e infraestructura de IT.
          </p>
        </div>

        <div className="bg-[#121216] border border-white/5 rounded-2xl overflow-hidden shadow-2xl relative">
          <div className="bg-[#0A0A0C] border-b border-white/5 px-8 py-4 flex justify-between items-center">
            <span className="text-xs font-mono-custom text-[#8E8E9F]">Paso <span className="text-[#3ECF8E] font-bold">{step}</span> de 3</span>
            <div className="w-32 bg-[#121216] rounded-full h-1.5 overflow-hidden border border-white/5">
              <div className="bg-[#3ECF8E] h-full transition-all duration-300" style={{ width: (step / 3 * 100) + '%' }} />
            </div>
          </div>

          <div className="p-8 md:p-12 space-y-8">
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-[#FAFAFA] flex items-center gap-2">
                  <i className="fa-solid fa-circle-question text-[#3ECF8E]" /> &iquest;Cu&aacute;l es su mayor desaf&iacute;o operativo en la actualidad?
                </h3>
                <RadioGroup options={step1Options} value={bottleneck} onChange={setBottleneck} />
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-[#FAFAFA] flex items-center gap-2">
                  <i className="fa-solid fa-server text-indigo-400" /> &iquest;Qu&eacute; volumen de infraestructura gestiona actualmente?
                </h3>
                <RadioGroup options={step2Options} value={scale} onChange={setScale} />
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-[#FAFAFA] flex items-center gap-2">
                  <i className="fa-solid fa-address-card text-[#3ECF8E]" /> Complete sus datos de contacto
                </h3>
                <p className="text-xs text-[#8E8E9F]">Un Consultor Principal revisar&aacute; sus respuestas previas antes de programar su sesi&oacute;n.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-[10px] font-mono-custom uppercase tracking-wider text-[#8E8E9F]">Nombre Completo</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Ej. Carlos Mendoza" className="w-full bg-[#0A0A0C] border border-white/5 focus:border-[#3ECF8E] rounded-xl px-4 py-3 text-sm text-[#FAFAFA] outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] font-mono-custom uppercase tracking-wider text-[#8E8E9F]">Correo Corporativo</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Ej. carlos@empresa.com" className="w-full bg-[#0A0A0C] border border-white/5 focus:border-[#3ECF8E] rounded-xl px-4 py-3 text-sm text-[#FAFAFA] outline-none transition-all" />
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-6 border-t border-white/5">
              {step > 1 ? (
                <button type="button" onClick={() => setStep(step - 1)} className="text-xs font-mono-custom uppercase tracking-wider text-[#8E8E9F] hover:text-[#FAFAFA] transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-arrow-left" /> Atr&aacute;s
                </button>
              ) : <div />}
              <button
                type="button"
                onClick={handleNext}
                disabled={sending}
                className="bg-gradient-to-r from-[#3ECF8E] to-emerald-500 hover:from-emerald-400 hover:to-emerald-600 text-[#0A0A0C] font-bold px-6 py-3.5 rounded-xl transition-all duration-300 text-xs font-mono-custom uppercase tracking-wider shadow-lg shadow-emerald-500/10 disabled:opacity-50"
              >
                {sending ? 'Enviando...' : step < 3 ? (<>Siguiente Paso <i className="fa-solid fa-arrow-right ml-1" /></>) : (<>Registrar y Agendar <i className="fa-solid fa-calendar-check ml-1" /></>)}
              </button>
            </div>
          </div>
        </div>
      </div>

      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0A0C]/90 backdrop-blur-md">
          <div className="bg-[#121216] border border-white/10 max-w-md w-full rounded-2xl p-6 shadow-2xl space-y-4 relative">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#3ECF8E]/10 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center space-x-3">
              {modal.type === 'success' ? (
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-500/10 text-[#3ECF8E]">
                  <i className="fa-solid fa-circle-check text-xl" />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-red-500/10 text-red-500">
                  <i className="fa-solid fa-circle-exclamation text-xl" />
                </div>
              )}
              <h3 className="text-sm font-bold font-mono-custom uppercase tracking-wider text-[#FAFAFA]">{modal.title}</h3>
            </div>
            <p className="text-xs text-[#8E8E9F] leading-relaxed">{modal.msg}</p>
            <button onClick={() => setModal(null)} className="w-full bg-[#3ECF8E] hover:bg-[#00C573] text-[#0A0A0C] font-bold py-3 rounded-xl transition-all duration-200 text-xs font-mono-custom uppercase tracking-wider">
              Entendido
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
