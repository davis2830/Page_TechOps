import { Globe, Bell, LockKeyhole, Users } from 'lucide-react';
export const capabilities = [
  [Globe, 'Disponibilidad', 'Supervisa sitios y endpoints HTTP para conocer cuándo dejan de responder.'],
  [LockKeyhole, 'Certificados TLS', 'Ten a la vista los vencimientos y planifica las renovaciones.'],
  [Bell, 'Alertas e incidentes', 'Recibe señales y consulta el historial para seguir la evolución del problema.'],
  [Users, 'Equipos y organizaciones', 'Organiza el monitoreo por empresa y comparte visibilidad con tu equipo.'],
];
export const faqs = [
  ['¿Qué puedo monitorear?', 'Sitios web, endpoints HTTP y certificados TLS. Durante el onboarding revisaremos qué servicios y accesos encajan con tu entorno.'],
  ['¿Necesito instalar un agente?', 'Para las comprobaciones HTTP y TLS de servicios accesibles desde el monitoreo no necesitas instalar un agente. Revisaremos por separado los servicios internos o privados.'],
  ['¿Sentinel reemplaza a Grafana?', 'Son complementarios. Sentinel se enfoca en comprobaciones y alertas de servicios; un stack de Grafana puede aportar métricas, logs y trazas para profundizar en el diagnóstico.'],
  ['¿Cuánto cuesta la beta?', 'Solicitar acceso no tiene costo. Antes de activar tu cuenta acordaremos las condiciones, los límites y cualquier precio aplicable.'],
  ['¿Pueden ayudarme a configurarlo?', 'Sí. El acceso anticipado incluye acompañamiento inicial. Para proyectos más amplios, GCTechOps ofrece implementación de observabilidad y automatización con alcance acordado.'],
];

