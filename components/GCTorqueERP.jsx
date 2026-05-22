import React, { useState } from 'react';
import config from '../config/contacto';

const plans = [
  {
    name: 'Arranque',
    tag: 'Taller \u00danico',
    tagStyle: 'bg-white/5 text-gray-300',
    nameColor: 'text-gray-400',
    desc: 'Esencial para mec\u00e1nicos independientes o peque\u00f1os talleres de garaje en GT.',
    priceMonthly: 'Q199',
    priceYearly: 'Q159',
    features: [
      { text: '1 Taller / Sucursal', included: true },
      { text: 'Hasta 3 Mec\u00e1nicos Activos', included: true },
      { text: '\u00d3rdenes de Trabajo B\u00e1sicas', included: true },
      { text: 'Inventario de Piezas Manual', included: true },
      { text: 'Env\u00edo Autom\u00e1tico por WhatsApp', included: false },
      { text: 'Consultor TechOps Dedicado', included: false },
    ],
    btnStyle: 'bg-[#121216] hover:bg-[#181822] border border-white/5 hover:border-[#3ECF8E]/30 text-white',
    btnText: 'Seleccionar Plan',
    cardBorder: 'border border-white/5',
    featured: false,
  },
  {
    name: 'Acelerado',
    tag: 'Talleres en Crecimiento',
    tagStyle: 'bg-[#3ECF8E]/10 text-[#3ECF8E] border border-[#3ECF8E]/20',
    nameColor: 'text-[#3ECF8E]',
    desc: 'Recomendado para talleres con flujo din\u00e1mico y m\u00faltiples bah\u00edas de trabajo.',
    priceMonthly: 'Q549',
    priceYearly: 'Q439',
    features: [
      { text: 'Hasta 3 Talleres / Sucursales', included: true },
      { text: 'Mec\u00e1nicos Ilimitados', included: true },
      { text: 'Diagn\u00f3sticos Digitales Avanzados', included: true },
      { text: 'Alertas de Stock & Compras', included: true },
      { text: 'Env\u00edo Directo por WhatsApp (Incluido)', included: true },
      { text: 'Servidor Cloud Exclusivo Aislado', included: false },
    ],
    btnStyle: 'bg-gradient-to-r from-[#3ECF8E] to-emerald-500 hover:from-emerald-400 hover:to-emerald-600 text-[#0A0A0C] shadow-lg shadow-emerald-500/10',
    btnText: 'Comenzar Prueba Gratis',
    cardBorder: 'border-2 border-[#3ECF8E]/40 bg-emerald-950/5',
    featured: true,
  },
  {
    name: 'Torque M\u00e1ximo',
    tag: 'Franquicias & Multi-sede',
    tagStyle: 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20',
    nameColor: 'text-indigo-400',
    desc: 'La joya de la corona. Software aislado en servidores dedicados TechOps para m\u00e1xima potencia y seguridad en GT.',
    priceMonthly: 'Q1,399',
    priceYearly: 'Q1,119',
    features: [
      { text: 'Sucursales Ilimitadas', included: true },
      { text: 'Servidor Cloud Exclusivo (TechOps Isolated)', included: true },
      { text: 'API para Integraci\u00f3n de Contabilidad', included: true },
      { text: 'M\u00f3dulo de Facturaci\u00f3n Electr\u00f3nica Nativo (FEL)', included: true },
      { text: 'Gesti\u00f3n de Comisiones de Mec\u00e1nicos', included: true },
      { text: 'Soporte Directo Prioritario 24/7', included: true },
    ],
    btnStyle: 'bg-[#121216] hover:bg-[#181822] border border-white/5 hover:border-indigo-400/30 text-indigo-300',
    btnText: 'Contactar Ventas Enterprise',
    cardBorder: 'border border-white/5',
    featured: false,
  },
];

export default function GCTorqueERP() {
  const [billing, setBilling] = useState('monthly');
  const [modal, setModal] = useState(null);

  const handlePlanSelect = async (planName) => {
    setModal({ type: 'loading', plan: planName });
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: config.web3formsKey,
          subject: 'GCTorque ERP - Plan ' + planName + ' seleccionado',
          from_name: 'Solicitud de Plan GCTorque',
          plan_seleccionado: planName,
          ciclo_facturacion: billing === 'monthly' ? 'Mensual' : 'Anual',
          mensaje: 'Un visitante ha seleccionado el plan "' + planName + '" con facturaci\u00f3n ' + (billing === 'monthly' ? 'mensual' : 'anual') + '.',
        }),
      });
      if (res.ok) {
        setModal({ type: 'success', plan: planName });
      } else {
        setModal({ type: 'error', plan: planName });
      }
    } catch (e) {
      setModal({ type: 'error', plan: planName });
    }
    document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="gctorque" className="py-24 bg-gradient-to-b from-[#0A0A0C] via-[#121216]/40 to-[#0A0A0C] border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-[#3ECF8E]/10 border border-[#3ECF8E]/20 text-[#3ECF8E] text-[10px] font-mono-custom px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
            <i className="fa-solid fa-star" /> Soluci&oacute;n SaaS Destacada en Guatemala
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#FAFAFA]">GCTorque ERP</h2>
          <p className="text-base text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400 font-semibold font-mono-custom">
            El Software de Gesti&oacute;n Definitivo para Talleres de Mec&aacute;nica Inteligentes
          </p>
          <p className="text-[#8E8E9F] text-sm md:text-base max-w-2xl mx-auto">
            &iquest;Por qu&eacute; confiar en un software convencional cuando puedes usar un ERP dise&ntilde;ado con ingenier&iacute;a de nube de alta disponibilidad? GCTorque optimiza tus operaciones, controla el stock de piezas y retiene clientes con velocidad instant&aacute;nea.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: 'fa-car-wrench', colorBg: 'bg-[#3ECF8E]/10', colorText: 'text-[#3ECF8E]', title: '\u00d3rdenes de Trabajo Digitales', desc: 'Elimina el papel. Crea presupuestos, toma fotos de recepci\u00f3n del veh\u00edculo, asigna mec\u00e1nicos a bah\u00edas de servicio y notifica de inmediato a tus clientes.' },
            { icon: 'fa-boxes-stacked', colorBg: 'bg-indigo-500/10', colorText: 'text-indigo-400', title: 'Inventario Automatizado', desc: 'Alertas de stock m\u00ednimo para refacciones habituales, control de proveedores en tiempo real e historiales de uso de piezas por marca de veh\u00edculo en Guatemala.' },
            { icon: 'fa-mobile-screen-button', colorBg: 'bg-blue-500/10', colorText: 'text-blue-400', title: 'Notificaciones v\u00eda WhatsApp', desc: 'Env\u00eda avisos de reparaci\u00f3n completada, presupuestos en PDF con aprobaci\u00f3n digital de un toque y recordatorios autom\u00e1ticos de mantenimiento peri\u00f3dico.' },
          ].map(f => (
            <div key={f.title} className="glassmorphic-card p-6 rounded-2xl space-y-4 border border-white/5">
              <div className={'w-12 h-12 rounded-xl flex items-center justify-center text-xl ' + f.colorBg + ' ' + f.colorText}>
                <i className={'fa-solid ' + f.icon} />
              </div>
              <h4 className="text-base font-bold text-[#FAFAFA]">{f.title}</h4>
              <p className="text-xs text-[#8E8E9F] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          <div className="flex flex-col sm:flex-row justify-between items-center bg-[#121216]/80 p-6 rounded-2xl border border-white/5 gap-4">
            <div className="text-left">
              <h4 className="text-sm font-bold text-[#FAFAFA] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Planes de Suscripci&oacute;n GCTorque (GTQ)
              </h4>
              <p className="text-[11px] text-[#8E8E9F]">Facturaci&oacute;n en Quetzales. Selecciona la modalidad de pago para tu taller. &iexcl;Ahorra m&aacute;s del 20% en planes anuales!</p>
            </div>
            <div className="flex items-center space-x-3 bg-[#0A0A0C] border border-white/10 p-1.5 rounded-xl">
              <button
                onClick={() => setBilling('monthly')}
                className={'px-4 py-2 rounded-lg text-xs font-semibold font-mono-custom transition-all ' + (billing === 'monthly' ? 'bg-[#3ECF8E] text-[#0A0A0C]' : 'text-[#8E8E9F] hover:text-[#FAFAFA]')}
              >
                Mensual
              </button>
              <button
                onClick={() => setBilling('yearly')}
                className={'px-4 py-2 rounded-lg text-xs font-semibold font-mono-custom transition-all ' + (billing === 'yearly' ? 'bg-[#3ECF8E] text-[#0A0A0C]' : 'text-[#8E8E9F] hover:text-[#FAFAFA]')}
              >
                Anual (-20%)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {plans.map(plan => (
              <div key={plan.name} className={'glassmorphic-card rounded-2xl p-8 flex flex-col justify-between relative ' + plan.cardBorder}>
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#3ECF8E] to-emerald-500 text-[#0A0A0C] text-[9px] font-bold font-mono-custom px-4 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-emerald-500/20">
                    M&aacute;s Vendido
                  </div>
                )}
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className={'text-xs font-mono-custom uppercase font-bold ' + plan.nameColor}>{plan.name}</span>
                    <span className={'text-[10px] font-mono-custom px-2.5 py-1 rounded-full ' + plan.tagStyle}>{plan.tag}</span>
                  </div>
                  <p className="text-[11px] text-[#8E8E9F]">{plan.desc}</p>
                  <div className="py-4 border-t border-b border-white/5 space-y-1">
                    <span className="text-4xl font-extrabold text-[#FAFAFA] font-mono-custom">
                      {billing === 'monthly' ? plan.priceMonthly : plan.priceYearly}
                    </span>
                    <span className="text-xs text-[#8E8E9F] block">
                      {billing === 'monthly' ? '/ mes facturado mensualmente' : '/ mes facturado anualmente'}
                    </span>
                  </div>
                  <ul className="space-y-3 text-xs text-gray-300">
                    {plan.features.map(f => (
                      <li key={f.text} className={'flex items-center gap-2 ' + (!f.included ? 'text-gray-500 line-through' : '')}>
                        <i className={'fa-solid ' + (f.included ? 'fa-check text-[#3ECF8E]' : 'fa-xmark')} /> {f.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-8">
                  <button
                    onClick={() => handlePlanSelect(plan.name)}
                    className={'w-full text-xs font-bold font-mono-custom py-3.5 rounded-xl transition-all uppercase tracking-wider ' + plan.btnStyle}
                  >
                    {plan.btnText}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#121216] border border-[#3ECF8E]/10 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#3ECF8E]/10 text-[#3ECF8E] flex items-center justify-center text-lg shrink-0">
                <i className="fa-solid fa-shield-halved" />
              </div>
              <div className="text-left">
                <h5 className="text-xs font-bold text-[#FAFAFA] font-mono-custom">Seguridad y Resiliencia Certificada por TechOps</h5>
                <p className="text-[11px] text-[#8E8E9F]">Todos los datos de tu taller est&aacute;n encriptados AES-256 en reposo, con copias de seguridad autom&aacute;ticas cada 10 minutos gestionadas mediante nuestros pipelines de infraestructura.</p>
              </div>
            </div>
            <span className="text-[9px] font-mono-custom bg-emerald-500/10 text-[#3ECF8E] border border-[#3ECF8E]/20 px-3 py-1 rounded-full uppercase shrink-0 font-bold">Infraestructura Boutique</span>
          </div>
        </div>
      </div>

      {modal && modal.type !== 'loading' && (
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
              <h3 className="text-sm font-bold font-mono-custom uppercase tracking-wider text-[#FAFAFA]">
                {modal.type === 'success' ? 'Solicitud de Demo GCTorque' : 'Error al Enviar'}
              </h3>
            </div>
            <p className="text-xs text-[#8E8E9F] leading-relaxed">
              {modal.type === 'success'
                ? 'Has seleccionado el plan "' + modal.plan + '". Complete el formulario de diagn\u00f3stico para configurar su entorno de pruebas del ERP.'
                : 'Hubo un problema al enviar la solicitud. Por favor intente nuevamente o complete el formulario de diagn\u00f3stico.'}
            </p>
            <button onClick={() => setModal(null)} className="w-full bg-[#3ECF8E] hover:bg-[#00C573] text-[#0A0A0C] font-bold py-3 rounded-xl transition-all duration-200 text-xs font-mono-custom uppercase tracking-wider">
              Entendido
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
