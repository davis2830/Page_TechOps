import React, { useState, useEffect, useRef, useCallback } from 'react';

const mockLogs = [
  () => `[INFO] ${new Date().toISOString()} [Grafana Alloy] Scraping endpoints on namespace: core-banking`,
  () => `[OK] ${new Date().toISOString()} [Prometheus Remote Write] Sent 250 metrics to central stack`,
  () => `[INFO] ${new Date().toISOString()} [Temenos T24] Processing transactional queue block ID: T24-${Math.floor(Math.random()*900000+100000)}`,
  () => `[OK] ${new Date().toISOString()} [VISA Channel] Visa Gateway handshake successful - Response 200 OK`,
  () => `[WARN] ${new Date().toISOString()} [Kubernetes Pod Autoscaler] Scaling t24-middleware replicas: 3 -> 5 (CPU utilization > 80%)`,
  () => `[INFO] ${new Date().toISOString()} [Tempo Exporter] Exporting Trace ID: trace_id_${Math.floor(Math.random()*1000000)} - Spans: 4`,
  () => `[OK] ${new Date().toISOString()} [k6 Agent] Execution pulse: 5,000 VU active - 0% transaction failure rate`,
];

function TelemetryCanvas({ active, onLatencyUpdate }) {
  const canvasRef = useRef(null);
  const pointsRef = useRef(Array.from({ length: 30 }, () => 10 + Math.random() * 8));
  const rafRef = useRef(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !active) return;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    const w = rect.width;
    const h = rect.height;
    ctx.clearRect(0, 0, w, h);

    ctx.strokeStyle = 'rgba(255,255,255,0.02)';
    ctx.lineWidth = 1;
    for (let i = 0; i < w; i += 30) { ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, h); ctx.stroke(); }
    for (let i = 0; i < h; i += 20) { ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(w, i); ctx.stroke(); }

    const pts = pointsRef.current;
    pts.push(9 + Math.random() * 5 + Math.sin(Date.now() / 1000) * 1.5);
    if (pts.length > 40) pts.shift();
    const stepX = w / (pts.length - 1);

    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, 'rgba(62,207,142,0.2)');
    grad.addColorStop(1, 'rgba(62,207,142,0.0)');
    ctx.beginPath();
    ctx.moveTo(0, h);
    pts.forEach((p, i) => ctx.lineTo(i * stepX, h - p * (h / 40)));
    ctx.lineTo(w, h);
    ctx.fillStyle = grad;
    ctx.fill();

    ctx.beginPath();
    pts.forEach((p, i) => {
      const x = i * stepX, y = h - p * (h / 40);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.strokeStyle = '#3ECF8E';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    onLatencyUpdate(pts[pts.length - 1].toFixed(1));
    rafRef.current = requestAnimationFrame(draw);
  }, [active, onLatencyUpdate]);

  useEffect(() => {
    if (active) { rafRef.current = requestAnimationFrame(draw); }
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [active, draw]);

  return <canvas ref={canvasRef} className="w-full h-48 block rounded-lg" />;
}

export default function ObservabilityDeck() {
  const [activeTab, setActiveTab] = useState('Prometheus');
  const [latency, setLatency] = useState('12');
  const [logs, setLogs] = useState([`// Alloy service init successfully at ${new Date().toISOString()}`]);
  const lokiRef = useRef(null);

  useEffect(() => {
    if (activeTab !== 'Loki Logs') return;
    const iv = setInterval(() => {
      const log = mockLogs[Math.floor(Math.random() * mockLogs.length)]();
      setLogs(prev => {
        const next = [...prev, log];
        return next.length > 50 ? next.slice(-50) : next;
      });
    }, 1500);
    return () => clearInterval(iv);
  }, [activeTab]);

  useEffect(() => {
    if (lokiRef.current) lokiRef.current.scrollTop = lokiRef.current.scrollHeight;
  }, [logs]);

  const tabs = [
    { name: 'Prometheus', label: 'Prometheus', value: `${latency} ms`, valueColor: 'text-[#FAFAFA]' },
    { name: 'Loki Logs', label: 'Loki Logs', value: 'Alloy streaming...', valueColor: 'text-indigo-400' },
    { name: 'Tempo Traces', label: 'Tempo Traces', value: '4 Spans Activos', valueColor: 'text-yellow-400' },
    { name: 'K6 Stress', label: 'K6 Stress', value: '99.98% OK', valueColor: 'text-[#3ECF8E]' },
  ];

  return (
    <section id="observability-deck" className="py-12 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-[#121216]/50 border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-1 bg-emerald-500/10 text-[#3ECF8E] text-[10px] font-mono-custom px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold">
              <i className="fa-solid fa-chart-line" /> Grafana Observability Deck
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-[#FAFAFA]">Panel de Telemetría Interactiva</h3>
            <p className="text-sm text-[#8E8E9F] leading-relaxed">
              Explora las diferentes facetas del stack de observabilidad moderno integrado directamente. Interactúa con los selectores de arriba de la consola para simular la recolección de métricas corporativas.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {tabs.map(t => (
              <button
                key={t.name}
                onClick={() => setActiveTab(t.name)}
                className={`text-left bg-[#0A0A0C] border ${activeTab === t.name ? 'border-[#3ECF8E]/30' : 'border-white/5'} p-3 rounded-xl transition-all hover:bg-[#121216] focus:outline-none flex flex-col justify-between`}
              >
                <span className={`text-[9px] font-mono-custom uppercase tracking-wider font-semibold ${activeTab === t.name ? 'text-emerald-400' : 'text-[#8E8E9F]'}`}>{t.label}</span>
                <span className={`text-[11px] font-mono-custom mt-1 ${t.name === 'Prometheus' ? 'text-sm font-bold text-[#FAFAFA]' : t.valueColor} ${t.name === 'K6 Stress' ? 'font-semibold' : ''} truncate`}>
                  {t.name === 'Prometheus' ? `${latency} ms` : t.value}
                </span>
              </button>
            ))}
          </div>

          <div className="bg-[#0A0A0C] p-4 rounded-xl border border-white/5">
            <p className="text-[11px] text-[#8E8E9F] leading-relaxed">
              * Este panel interactivo replica el comportamiento de las métricas raspadas de los nodos transaccionales de Kubernetes por medio de configuraciones personalizadas de <strong>Grafana Alloy</strong>.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 bg-[#0A0A0C] rounded-xl border border-white/10 p-5 flex flex-col justify-between min-h-[340px] relative overflow-hidden">
          {activeTab === 'Prometheus' && (
            <div className="space-y-4 w-full h-full flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-xs font-mono-custom text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Prometheus: t24_transaction_duration_seconds
                </span>
                <span className="text-[10px] text-gray-400 font-mono-custom">{'Filtro: {env="production", api="visa"}'}</span>
              </div>
              <div className="relative flex-grow">
                <TelemetryCanvas active={activeTab === 'Prometheus'} onLatencyUpdate={setLatency} />
              </div>
            </div>
          )}

          {activeTab === 'Loki Logs' && (
            <div className="space-y-4 w-full h-full flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-xs font-mono-custom text-indigo-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" /> Loki Stream: alloy-syslog-pipeline
                </span>
                <button onClick={() => setLogs([`// Loki terminal limpia. Esperando nuevos registros de Alloy...`])} className="text-[9px] font-mono-custom bg-white/5 px-2 py-1 rounded hover:bg-white/10 text-gray-300">Limpiar Logs</button>
              </div>
              <div ref={lokiRef} className="bg-[#050508] border border-white/5 rounded-lg p-4 font-mono-custom text-[10px] text-gray-300 space-y-1.5 h-48 overflow-y-auto no-scrollbar">
                {logs.map((log, i) => (
                  <p key={i} className="hover:bg-white/5 py-0.5 border-b border-white/5 transition-all">
                    <span className={log.includes('[OK]') ? 'text-emerald-400' : log.includes('[WARN]') ? 'text-yellow-400' : 'text-gray-400'}>{log}</span>
                  </p>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Tempo Traces' && (
            <div className="space-y-4 w-full h-full flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-xs font-mono-custom text-yellow-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-yellow-400" /> Tempo Distributed Tracing: trace_id_f489b0
                </span>
                <span className="text-[10px] text-gray-400 font-mono-custom">Total Duration: 24ms</span>
              </div>
              <div className="space-y-3 py-2 flex-grow flex flex-col justify-center">
                {[
                  { label: 'visa_gateway_ingress (Nginx)', ms: '24ms', w: '100%', ml: '0%', color: 'bg-emerald-400' },
                  { label: 'core_banking_t24_router (JBoss)', ms: '16ms', w: '66%', ml: '34%', color: 'bg-indigo-400', indent: 'pl-6' },
                  { label: 'hsm_visa_auth_handshake', ms: '6ms', w: '25%', ml: '75%', color: 'bg-yellow-400', indent: 'pl-12' },
                ].map(s => (
                  <div key={s.label} className={`space-y-1.5 ${s.indent || ''}`}>
                    <div className="flex justify-between text-[9px] font-mono-custom text-gray-400">
                      <span>{s.label}</span><span>{s.ms}</span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                      <div className={`${s.color} h-full rounded-full`} style={{ width: s.w, marginLeft: s.ml }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'K6 Stress' && (
            <div className="space-y-4 w-full h-full flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-xs font-mono-custom text-pink-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-pink-400 animate-ping" /> k6 Automated Performance Run
                </span>
                <span className="text-[10px] text-gray-400 font-mono-custom">Escenario: visa_peak_load.js</span>
              </div>
              <div className="grid grid-cols-3 gap-3 py-4 flex-grow items-center">
                {[
                  { label: 'Usuarios Activos', value: '5,000 VU', color: 'text-pink-400' },
                  { label: 'TPS Procesados', value: '12,450 /s', color: 'text-[#3ECF8E]' },
                  { label: 'Tasa de Error', value: '0.00%', color: 'text-emerald-400' },
                ].map(m => (
                  <div key={m.label} className="bg-white/5 border border-white/5 p-3 rounded-xl text-center">
                    <span className="text-[9px] font-mono-custom text-gray-400 uppercase tracking-wider block">{m.label}</span>
                    <span className={`text-xl font-bold font-mono-custom ${m.color} mt-1 block`}>{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between border-t border-white/5 pt-3 mt-2 text-[9px] font-mono-custom text-[#8E8E9F]">
            <span>Conexión: Secure TLS Tunnel</span>
            <span className="flex items-center gap-1"><i className="fa-solid fa-server text-[#3ECF8E]" /> techops-k8s-prod-cluster</span>
          </div>
        </div>
      </div>
    </section>
  );
}
