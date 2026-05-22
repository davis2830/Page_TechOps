import React from 'react';

export default function Hero() {
  return (
    <header className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="lg:col-span-7 space-y-8">
        <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-[#3ECF8E]/20 px-3 py-1.5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#00C573] animate-pulse" />
          <span className="text-[10px] text-[#3ECF8E] font-mono-custom tracking-wider uppercase font-semibold">Infraestructura Crítica y Observabilidad Financiera</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#FAFAFA] leading-[1.1]">
          Sistemas Resilientes, Observabilidad <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3ECF8E] via-emerald-400 to-[#6366f1]">
            y Alta Transaccionalidad
          </span>
        </h1>

        <p className="text-base md:text-lg text-[#8E8E9F] leading-relaxed max-w-2xl">
          Diseño y despliego arquitecturas corporativas desde cero. Especialista en la automatización de clústeres de <strong>Kubernetes</strong>, ingeniería de observabilidad avanzada con <strong>Grafana Stack</strong>, optimización de infraestructura bancaria <strong>T24 / Visa</strong> y pruebas de carga con <strong>k6</strong>.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <a href="#diagnostico" className="text-center bg-[#3ECF8E] hover:bg-[#00C573] text-[#0A0A0C] font-bold px-8 py-4 rounded-xl transition-all duration-300 text-sm shadow-xl shadow-emerald-500/10">
            Solicitar Diagnóstico Técnico
          </a>
          <a href="#gctorque" className="text-center bg-[#121216]/80 hover:bg-[#181822] border border-white/5 hover:border-white/10 text-[#FAFAFA] px-8 py-4 rounded-xl transition-all duration-300 text-sm flex items-center justify-center gap-2">
            Ver GCTorque ERP (GT) <i className="fa-solid fa-gears text-[#3ECF8E] animate-spin-slow" />
          </a>
        </div>

        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5 max-w-md">
          <div>
            <div className="text-xl md:text-2xl font-bold font-mono-custom text-[#FAFAFA]">&lt; 10ms</div>
            <div className="text-[10px] text-[#8E8E9F] uppercase tracking-wider font-semibold mt-1">Latencia Transaccional p99</div>
          </div>
          <div>
            <div className="text-xl md:text-2xl font-bold font-mono-custom text-[#3ECF8E]">K8s</div>
            <div className="text-[10px] text-[#8E8E9F] uppercase tracking-wider font-semibold mt-1">Orquestación Bare-Metal/Nube</div>
          </div>
          <div>
            <div className="text-xl md:text-2xl font-bold font-mono-custom text-indigo-400">100k+</div>
            <div className="text-[10px] text-[#8E8E9F] uppercase tracking-wider font-semibold mt-1">TPS Validados con k6</div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#3ECF8E]/10 to-[#6366f1]/10 blur-3xl -z-10 rounded-2xl" />
        <div className="bg-[#121216] border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-white/15">
          <div className="bg-[#0A0A0C] border-b border-white/5 px-4 py-3 flex items-center justify-between">
            <div className="flex space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            </div>
            <span className="text-[10px] font-mono-custom text-[#8E8E9F] flex items-center gap-1.5">
              <i className="fa-solid fa-terminal text-[8px] text-[#3ECF8E]" /> techops-observability.sh
            </span>
          </div>
          <div className="p-6 font-mono-custom text-[11px] space-y-3 text-[#FAFAFA] min-h-[220px] overflow-y-auto max-h-[300px]">
            <p className="text-[#3ECF8E]"><span className="text-gray-500">#</span> Cargando especificaciones del Agente Telemetría Alloy...</p>
            <div className="space-y-1">
              <p className="text-gray-400"><span className="text-emerald-500">$</span> alloy run /etc/alloy/config.alloy</p>
              <p className="text-emerald-400">[ALLOY] Agente activo. Capturando métricas e inyectando trazas a Tempo y Loki...</p>
              <p className="text-gray-400"><span className="text-emerald-500">$</span> kubectl get pods -n core-banking</p>
              <p className="text-gray-300">[K8S] t24-middleware-pod-84f9c5d774-abcde [Running] [99.99% Uptime]</p>
              <p className="text-indigo-400">[MIDDLEWARE] Balanceador de carga canalizando transacciones Visa.</p>
              <p className="text-yellow-400">[PROMETHEUS] Raspando métricas de rendimiento del Core Temenos T24.</p>
              <p className="text-[#3ECF8E] flex items-start gap-1">
                <i className="fa-solid fa-circle-check mt-0.5" />
                <span>[READY] Dashboards de Grafana sincronizados correctamente.</span>
              </p>
            </div>
            <div className="pt-2 border-t border-white/5">
              <p className="text-emerald-400"><span className="text-[#3ECF8E] font-bold">[OK]</span> Observabilidad unificada y balanceada lista para soportar tráfico financiero.</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
