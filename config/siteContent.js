import { Activity, Boxes, Gauge, GitBranch, Layers3, ShieldCheck } from 'lucide-react';

export const painPoints = [
  {
    title: 'Incidentes difíciles de diagnosticar',
    description: 'Las señales existen, pero están dispersas y no explican con rapidez qué está afectando al servicio.',
  },
  {
    title: 'Plataformas frágiles',
    description: 'Cambios manuales, conocimiento concentrado y configuraciones difíciles de reproducir elevan el riesgo operativo.',
  },
  {
    title: 'Capacidad desconocida',
    description: 'Sin pruebas ni límites operativos conocidos, cada pico de demanda se convierte en una apuesta.',
  },
];

export const servicePackages = [
  {
    slug: 'diagnostico-riesgo-operativo',
    title: 'Diagnóstico de Riesgo Operativo',
    result: 'Una visión priorizada de los riesgos que amenazan la continuidad y del orden correcto para resolverlos.',
    duration: '1–2 semanas',
    deliverables: ['Mapa de riesgos y dependencias', 'Brechas técnicas y operativas', 'Plan de prioridades ejecutable'],
    priceFrom: import.meta.env.VITE_PRICE_DIAGNOSTIC || '',
    currency: 'USD',
  },
  {
    slug: 'base-observabilidad',
    title: 'Base de Observabilidad',
    result: 'Señales útiles para detectar, entender y responder a degradaciones con menos incertidumbre.',
    duration: '3–5 semanas',
    deliverables: ['Métricas, logs y trazas esenciales', 'Dashboards y alertas accionables', 'Guía de operación y respuesta'],
    priceFrom: import.meta.env.VITE_PRICE_OBSERVABILITY || '',
    currency: 'USD',
    featured: true,
  },
  {
    slug: 'estabilizacion-plataforma',
    title: 'Estabilización de Plataforma',
    result: 'Una plataforma más predecible, automatizada y transferible al equipo que la opera.',
    duration: '4–8 semanas',
    deliverables: ['Revisión y mejoras en Kubernetes', 'Automatización y controles operativos', 'Validación de rendimiento y transferencia'],
    priceFrom: import.meta.env.VITE_PRICE_PLATFORM || '',
    currency: 'USD',
  },
];

export const faqs = [
  ['¿Qué incluye el diagnóstico inicial?', 'Una conversación técnica para entender el contexto, identificar el riesgo principal y acordar si una intervención de TechOPS es adecuada.'],
  ['¿Necesitan acceso a toda la infraestructura?', 'No necesariamente. El acceso se limita a lo indispensable para el alcance acordado y puede comenzar con documentación, entrevistas y evidencia sanitizada.'],
  ['¿Cómo protegen la confidencialidad?', 'El alcance puede incluir un acuerdo de confidencialidad. La información se usa únicamente para la intervención y no se publica sin autorización expresa.'],
  ['¿Trabajan de forma remota?', 'Sí. TechOPS trabaja de forma remota con equipos de Guatemala y Latinoamérica, coordinando sesiones y entregables según la zona horaria del cliente.'],
  ['¿Qué entregables recibiremos?', 'Cada paquete define entregables concretos: mapas de riesgo, decisiones de arquitectura, dashboards, alertas, automatización, documentación y transferencia, según corresponda.'],
  ['¿Existe soporte después de la intervención?', 'Puede acordarse una etapa posterior de acompañamiento o revisión. Su alcance y duración se definen por separado para evitar compromisos ambiguos.'],
];

export const capabilities = [
  {
    icon: Activity,
    title: 'Observabilidad que ayuda a decidir',
    description: 'Métricas, logs y trazas conectados con objetivos operativos para detectar degradaciones antes de que afecten al negocio.',
    tools: 'Grafana · Prometheus · Loki · Tempo · Alloy',
  },
  {
    icon: Boxes,
    title: 'Plataformas Kubernetes sostenibles',
    description: 'Diseño, estabilización y automatización de plataformas contenedorizadas con operación documentada y controles claros.',
    tools: 'Kubernetes · Ansible · Linux · Nginx',
  },
  {
    icon: Gauge,
    title: 'Rendimiento transaccional',
    description: 'Pruebas de carga y análisis de cuellos de botella para sistemas donde la latencia, capacidad y continuidad son críticas.',
    tools: 'k6 · APIs · Middleware · SQL',
  },
];

// Experiencia profesional de Davis Galvez. No atribuir estos proyectos a
// contratos o clientes de TechOPS. No publicar métricas ni nombres sin permiso.
export const caseStudies = [
  {
    eyebrow: 'Observabilidad · core bancario',
    title: 'Observabilidad unificada para el core T24',
    problem: 'La operación del core bancario requería visibilidad centralizada de aplicaciones e infraestructura para analizar el estado de los servicios críticos.',
    intervention: 'Diseñé e implementé Grafana Cloud, integrando métricas, logs y trazas distribuidas. Construí dashboards críticos para dar seguimiento a los servicios y sus dependencias.',
    outcome: 'El equipo dispone de telemetría unificada y visibilidad en tiempo real del comportamiento del core T24.',
    tools: 'Grafana Cloud · dashboards · métricas · logs · trazas',
  },
  {
    eyebrow: 'Automatización · infraestructura híbrida',
    title: 'Automatización integral con Ansible Tower',
    problem: 'El aprovisionamiento, la configuración y los despliegues en Windows y Linux dependían de intervenciones manuales propensas a inconsistencias.',
    intervention: 'Implementé Ansible Tower y desarrollé playbooks para JBoss, Nginx y Apache, así como para microservicios, agentes de telemetría y tareas de operación.',
    outcome: 'Los cambios pasaron a ejecutarse mediante procedimientos repetibles, eliminando fallas asociadas a la configuración manual.',
    tools: 'Ansible Tower · playbooks · Windows · Linux · JBoss · Nginx · Apache',
  },
  {
    eyebrow: 'Continuidad · sector bancario',
    title: 'Alta disponibilidad para una plataforma bancaria',
    problem: 'Una plataforma transaccional del sector bancario enfrentaba un problema importante de continuidad en un servicio soportado por JBoss.',
    intervention: 'Implementé la solución desde el balanceador hasta la configuración de dos servidores, con dos instancias JBoss en cada uno.',
    outcome: 'El servicio quedó desplegado en una arquitectura redundante que atendió el problema crítico de disponibilidad.',
    tools: 'Balanceador · JBoss · arquitectura HA',
  },
];

export const founderHighlights = [
  'Operación de servidores Windows y Linux para el core bancario T24 bajo controles del sector financiero.',
  'Modernización de arquitecturas Cloud y On-Premise con telemetría y automatización.',
  'Despliegue y administración de Kubernetes para plataformas de alta transaccionalidad.',
];

export const additionalAchievements = [
  {
    eyebrow: 'Innovación operativa',
    title: 'IA local aplicada a flujos de trabajo',
    description: 'Implementé Ollama y desplegué modelos de IA locales. Desarrollé automatizaciones impulsadas por IA para optimizar tareas operativas y reducir tiempos de respuesta.',
    tools: 'Ollama · modelos locales · automatización',
  },
  {
    eyebrow: 'Ingeniería de software',
    title: 'Backend para arquitecturas SaaS',
    description: 'Co-diseñé y desarrollé el backend de plataformas críticas con Python y Django, integrando RabbitMQ para mensajería y administrando PostgreSQL y SQL Server en entornos de alta concurrencia.',
    tools: 'Python · Django · RabbitMQ · PostgreSQL · SQL Server',
  },
];

export const methodology = [
  { icon: Layers3, step: '01', title: 'Entender', text: 'Contexto, riesgos, restricciones y resultado esperado.' },
  { icon: GitBranch, step: '02', title: 'Diseñar', text: 'Arquitectura y plan de trabajo con decisiones explícitas.' },
  { icon: ShieldCheck, step: '03', title: 'Implementar', text: 'Cambios controlados, validación y documentación transferible.' },
];

export const technologies = ['Grafana Cloud', 'Ansible Tower', 'Kubernetes', 'JBoss', 'Nginx', 'Apache', 'Windows', 'Linux', 'Ollama', 'Python', 'Django', 'RabbitMQ', 'PostgreSQL', 'SQL Server'];
