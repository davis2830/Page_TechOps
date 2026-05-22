import React, { useState } from 'react';
import { Check, X, Star, Shield, Loader2 } from 'lucide-react';
import { useReveal } from '../useReveal';
import config from '../../config/contacto';

const plans = [
  {
    name: 'Arranque',
    tag: 'Taller Único',
    tagStyle: 'bg-slate-700/40 text-slate-300 border border-slate-600/30',
    nameColor: 'text-slate-300',
    desc: 'Esencial para mecánicos independientes o pequeños talleres de garaje en GT.',
    priceMonthly: 'Q199',
    priceYearly: 'Q159',
    features: [
      { text: '1 Taller / Sucursal', included: true },
      { text: 'Hasta 3 Mecánicos Activos', included: true },
      { text: 'Órdenes de Trabajo Básicas', included: true },
      { text: 'Inventario de Piezas Manual', included: true },
      { text: 'Envío Automático por WhatsApp', included: false },
      { text: 'Consultor TechOps Dedicado', included: false },
    ],
    btnStyle: 'bg-slate-800 hover:bg-slate-700 border border-slate-600/40 hover:border-amber-500/40 text-white',
    btnText: 'Seleccionar Plan',
    cardBorder: 'border border-slate-700/40',
    featured: false,
  },
  {
    name: 'Acelerado',
    tag: 'Talleres en Crecimiento',
    tagStyle: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
    nameColor: 'text-amber-400',
    desc: 'Recomendado para talleres con flujo dinámico y múltiples bahías de trabajo.',
    priceMonthly: 'Q549',
    priceYearly: 'Q439',
    features: [
      { text: 'Hasta 3 Talleres / Sucursales', included: true },
      { text: 'Mecánicos Ilimitados', included: true },
      { text: 'Diagnósticos Digitales Avanzados', included: true },
      { text: 'Alertas de Stock & Compras', included: true },
      { text: 'Envío Directo por WhatsApp (Incluido)', included: true },
      { text: 'Servidor Cloud Exclusivo Aislado', included: false },
    ],
    btnStyle: 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white shadow-lg shadow-amber-900/20',
    btnText: 'Comenzar Prueba Gratis',
    cardBorder: 'border-2 border-amber-500/40',
    featured: true,
  },
  {
    name: 'Torque Máximo',
    tag: 'Franquicias & Multi-sede',
    tagStyle: 'bg-orange-500/10 text-orange-400 border border-orange-500/20',
    nameColor: 'text-orange-400',
    desc: 'La joya de la corona. Software aislado en servidores dedicados TechOps para máxima potencia y seguridad en GT.',
    priceMonthly: 'Q1,399',
    priceYearly: 'Q1,119',
    features: [
      { text: 'Sucursales Ilimitadas', included: true },
      { text: 'Servidor Cloud Exclusivo (TechOps Isolated)', included: true },
      { text: 'API para Integración de Contabilidad', included: true },
      { text: 'Módulo de Facturación Electrónica Nativo (FEL)', included: true },
      { text: 'Gestión de Comisiones de Mecánicos', included: true },
      { text: 'Soporte Directo Prioritario 24/7', included: true },
    ],
    btnStyle: 'bg-slate-800 hover:bg-slate-700 border border-slate-600/40 hover:border-orange-500/40 text-orange-300',
    btnText: 'Contactar Ventas Enterprise',
    cardBorder: 'border border-slate-700/40',
    featured: false,
  },
];

export default function TallerPrecios() {
  const [ref, visible] = useReveal(0.1);
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
          subject: 'GCTorque ERP - Plan ' + planName + ' seleccionado (desde Taller)',
          from_name: 'Solicitud de Plan GCTorque (Taller)',
          plan_seleccionado: planName,
          ciclo_facturacion: billing === 'monthly' ? 'Mensual' : 'Anual',
          mensaje: 'Un visitante desde la página de Taller ha seleccionado el plan "' + planName + '" con facturación ' + (billing === 'monthly' ? 'mensual' : 'anual') + '.',
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
    document.getElementById('contacto-taller')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="precios-taller" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 mb-4">
              <Star className="w-3.5 h-3.5" /> PLANES Y PRECIOS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text-amber mb-4">
              Elige tu Plan GCTorque
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Planes diseñados para talleres mecánicos de todo tamaño. Facturación en Quetzales, sin sorpresas.
            </p>
          </div>

          {/* Billing toggle */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-1 bg-slate-800/60 border border-slate-700/50 p-1.5 rounded-xl">
              <button
                onClick={() => setBilling('monthly')}
                className={'px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ' + (billing === 'monthly' ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg' : 'text-slate-400 hover:text-white')}
              >
                Mensual
              </button>
              <button
                onClick={() => setBilling('yearly')}
                className={'px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ' + (billing === 'yearly' ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg' : 'text-slate-400 hover:text-white')}
              >
                Anual (-20%)
              </button>
            </div>
          </div>

          {/* Plans grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, i) => (
              <div
                key={plan.name}
                className={'glass-card rounded-2xl p-8 flex flex-col justify-between relative transition-all duration-500 ' + plan.cardBorder + (visible ? ' opacity-100 translate-y-0' : ' opacity-0 translate-y-10')}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-amber-900/30">
                    Más Vendido
                  </div>
                )}
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className={'text-sm font-bold uppercase ' + plan.nameColor}>{plan.name}</span>
                    <span className={'text-[10px] px-2.5 py-1 rounded-full font-medium ' + plan.tagStyle}>{plan.tag}</span>
                  </div>
                  <p className="text-xs text-slate-400">{plan.desc}</p>
                  <div className="py-4 border-t border-b border-slate-700/40 space-y-1">
                    <span className="text-4xl font-extrabold text-white">
                      {billing === 'monthly' ? plan.priceMonthly : plan.priceYearly}
                    </span>
                    <span className="text-xs text-slate-500 block">
                      {billing === 'monthly' ? '/ mes facturado mensualmente' : '/ mes facturado anualmente'}
                    </span>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-300">
                    {plan.features.map(f => (
                      <li key={f.text} className={'flex items-center gap-2 ' + (!f.included ? 'text-slate-600 line-through' : '')}>
                        {f.included
                          ? <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                          : <X className="w-4 h-4 text-slate-600 flex-shrink-0" />
                        }
                        {f.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-8">
                  <button
                    onClick={() => handlePlanSelect(plan.name)}
                    className={'w-full text-sm font-bold py-3.5 rounded-xl transition-all uppercase tracking-wider ' + plan.btnStyle}
                  >
                    {plan.btnText}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Security badge */}
          <div className="mt-12 glass-card p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 border border-amber-500/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h5 className="text-sm font-bold text-white">Seguridad y Resiliencia Certificada por TechOps</h5>
                <p className="text-xs text-slate-400">Todos los datos de tu taller están encriptados AES-256 en reposo, con copias de seguridad automáticas cada 10 minutos.</p>
              </div>
            </div>
            <span className="text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full uppercase shrink-0 font-bold tracking-wider">Infraestructura Boutique</span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modal && modal.type !== 'loading' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-700/60 max-w-md w-full rounded-2xl p-6 shadow-2xl space-y-4 relative">
            <div className="flex items-center space-x-3">
              {modal.type === 'success' ? (
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-amber-500/10 text-amber-400">
                  <Check className="w-6 h-6" />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-red-500/10 text-red-500">
                  <X className="w-6 h-6" />
                </div>
              )}
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                {modal.type === 'success' ? 'Solicitud de Demo GCTorque' : 'Error al Enviar'}
              </h3>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {modal.type === 'success'
                ? 'Has seleccionado el plan "' + modal.plan + '". Complete el formulario de contacto para configurar su entorno de pruebas del ERP.'
                : 'Hubo un problema al enviar la solicitud. Por favor intente nuevamente o complete el formulario de contacto.'}
            </p>
            <button onClick={() => setModal(null)} className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold py-3 rounded-xl transition-all text-sm uppercase tracking-wider">
              Entendido
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
