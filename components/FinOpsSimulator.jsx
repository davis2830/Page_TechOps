import React, { useState } from 'react';

export default function FinOpsSimulator() {
  const [instances, setInstances] = useState(150);
  const [databases, setDatabases] = useState(14);
  const [storage, setStorage] = useState(125);

  const costCompute = instances * 42 * 12;
  const costStorage = storage * 25 * 12;
  const costDatabases = databases * 95 * 12;
  const currentYearlyCost = costCompute + costStorage + costDatabases;
  const savingsRatio = 0.40;
  const calculatedSavings = currentYearlyCost * savingsRatio;
  const optimizedYearlyCost = currentYearlyCost - calculatedSavings;

  const fmt = (n) => '$' + Math.round(n).toLocaleString('en-US');

  return (
    <section id="simulador" className="py-24 max-w-7xl mx-auto px-6 border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
        <span className="text-xs font-mono-custom uppercase tracking-widest text-[#3ECF8E]">Transparencia Financiera</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#FAFAFA]">Simulador de Presupuestos FinOps</h2>
        <p className="text-[#8E8E9F] text-sm md:text-base leading-relaxed">
          Modifique los par&aacute;metros operativos de su infraestructura actual para proyectar matem&aacute;ticamente el impacto de ahorro neto aplicando metodolog&iacute;as de optimizaci&oacute;n y automatizaci&oacute;n de TechOps.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 bg-[#121216] border border-white/5 rounded-2xl p-8 space-y-8 shadow-xl">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold text-[#FAFAFA] flex items-center gap-2">
                <i className="fa-solid fa-server text-[#3ECF8E]" /> Instancias de C&oacute;mputo (vCPUs)
              </label>
              <span className="font-mono-custom text-xs bg-[#0A0A0C] px-3 py-1 rounded-lg border border-white/5 text-[#3ECF8E]">{instances}</span>
            </div>
            <input type="range" min="10" max="1000" value={instances} onChange={e => setInstances(Number(e.target.value))} className="w-full" />
            <p className="text-[11px] text-[#8E8E9F]">Recursos de procesamiento virtual asignados en Kubernetes, VMs y funciones autogestionadas.</p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold text-[#FAFAFA] flex items-center gap-2">
                <i className="fa-solid fa-database text-indigo-400" /> Bases de Datos Relacionales
              </label>
              <span className="font-mono-custom text-xs bg-[#0A0A0C] px-3 py-1 rounded-lg border border-white/5 text-[#3ECF8E]">{databases}</span>
            </div>
            <input type="range" min="2" max="100" value={databases} onChange={e => setDatabases(Number(e.target.value))} className="w-full" />
            <p className="text-[11px] text-[#8E8E9F]">Instancias de bases de datos persistentes que requieren alta disponibilidad y replicaci&oacute;n geogr&aacute;fica activa.</p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold text-[#FAFAFA] flex items-center gap-2">
                <i className="fa-solid fa-hard-drive text-blue-400" /> Capacidad de Almacenamiento (TB)
              </label>
              <span className="font-mono-custom text-xs bg-[#0A0A0C] px-3 py-1 rounded-lg border border-white/5 text-[#3ECF8E]">{storage} TB</span>
            </div>
            <input type="range" min="5" max="1000" value={storage} onChange={e => setStorage(Number(e.target.value))} className="w-full" />
            <p className="text-[11px] text-[#8E8E9F]">Volumen total de almacenamiento de bloques y objetos, incluyendo copias de respaldo automatizadas.</p>
          </div>
        </div>

        <div className="lg:col-span-5 glassmorphic-card rounded-2xl p-8 space-y-6 relative overflow-hidden">
          <div>
            <h3 className="text-sm font-mono-custom uppercase tracking-wider text-indigo-400 mb-1">Impacto de la Optimizaci&oacute;n</h3>
            <p className="text-xs text-[#8E8E9F]">Proyecci&oacute;n detallada de gastos operativos e ineficiencias financieras detectadas.</p>
          </div>

          <div className="space-y-4 pt-4 border-t border-white/5">
            <div className="flex justify-between text-sm">
              <span className="text-[#8E8E9F]">Gasto Anual Estimado Actual:</span>
              <span className="font-mono-custom text-[#FAFAFA] font-semibold">{fmt(currentYearlyCost)} / a&ntilde;o</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#8E8E9F]">Gasto con Arquitectura TechOps:</span>
              <span className="font-mono-custom text-[#3ECF8E] font-semibold">{fmt(optimizedYearlyCost)} / a&ntilde;o</span>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-white/5">
              <span className="text-sm font-bold text-[#FAFAFA]">Ahorro Neto Anual Proyectado:</span>
              <span className="font-mono-custom text-xl font-bold text-[#3ECF8E]">{fmt(calculatedSavings)}</span>
            </div>
          </div>

          <div className="bg-[#0A0A0C] p-4 rounded-xl border border-white/5">
            <p className="text-[11px] text-[#8E8E9F] leading-relaxed">
              * El modelo asume tarifas base est&aacute;ndares de proveedores de nube principales, con un descuento asegurado de hasta un 40% a trav&eacute;s de optimizaci&oacute;n de cargas de trabajo y auto-apagado programado.
            </p>
          </div>

          <a href="#diagnostico" className="block text-center w-full bg-gradient-to-r from-[#3ECF8E] to-emerald-500 hover:from-emerald-400 hover:to-emerald-600 text-[#0A0A0C] font-bold py-4 rounded-xl transition-all duration-300 text-xs uppercase tracking-wider font-mono-custom shadow-lg shadow-emerald-500/10">
            Iniciar Auditor&iacute;a
          </a>
        </div>
      </div>
    </section>
  );
}
