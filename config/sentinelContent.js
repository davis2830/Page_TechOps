import { Globe, Bell, LockKeyhole, Users } from 'lucide-react';
export const capabilities = [
  [Globe, 'Disponibilidad', 'Supervisa sitios y endpoints HTTP para conocer cuándo dejan de responder.'],
  [LockKeyhole, 'Certificados TLS', 'Ten a la vista los vencimientos y planifica las renovaciones.'],
  [Bell, 'Alertas e incidentes', 'Recibe señales y consulta el historial para seguir la evolución del problema.'],
  [Users, 'Equipos y organizaciones', 'Organiza el monitoreo por empresa y comparte visibilidad con tu equipo.'],
];
export const faqs = [
  ['¿Sentinel ya está disponible?', 'Todavía no. Estamos preparando el lanzamiento y aún no hemos anunciado una fecha. Puedes dejarnos tus datos para recibir novedades.'],
  ['¿Qué planean que pueda monitorear?', 'Sitios web, endpoints HTTP y certificados TLS. El alcance final se confirmará antes del lanzamiento.'],
  ['¿Necesitaré instalar un agente?', 'Las comprobaciones HTTP y TLS de servicios públicos están planteadas sin agente. Los servicios internos o privados requerirán una evaluación aparte.'],
  ['¿Sentinel reemplaza a Grafana?', 'Son complementarios. Sentinel se enfoca en comprobaciones y alertas de servicios; un stack de Grafana puede aportar métricas, logs y trazas para profundizar en el diagnóstico.'],
  ['¿Hay planes o precios anunciados?', 'Aún no. Dejar tus datos para recibir novedades no tiene costo ni crea una cuenta o suscripción.'],
  ['¿Pueden ayudarme con observabilidad mientras tanto?', 'Sí. GCTechOps ofrece servicios de observabilidad y automatización por separado, con un alcance acordado para cada proyecto.'],
];

