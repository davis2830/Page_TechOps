import React from 'react';
import { ArrowLeft, LockKeyhole } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import config from '../config/contacto';

const content = {
  sentinel: {
    title: 'Términos de Sentinel',
    description: 'Borrador de condiciones futuras de Sentinel, producto de GCTechOps aún no disponible públicamente.',
    sections: [
      ['Prestador', 'Sentinel es un producto de GCTechOps, cuyo titular operará inicialmente como persona individual. La identidad legal del prestador está pendiente de incorporación.'],
      ['Lanzamiento pendiente', 'Sentinel aún no está disponible públicamente. Registrar interés en su lanzamiento no activa una cuenta ni implica un cobro. Las condiciones de uso se definirán antes de ofrecer el servicio.'],
      ['Cuentas y autorización', 'Cada organización debe administrar sus usuarios y proteger sus credenciales. Solo deben registrarse recursos propios o que el cliente esté autorizado a monitorear. Las reglas de recuperación de cuentas y tratamiento de usos abusivos deben definirse.'],
      ['Alcance del monitoreo', 'Las señales reflejan observaciones desde el entorno de monitoreo; no garantizan detectar todos los fallos ni sustituyen la respuesta del equipo. Frecuencia, cobertura y canales dependen del alcance acordado. Este borrador no ofrece un SLA contractual.'],
      ['Planes y cobros', 'Precios, moneda, impuestos, renovación, proveedor de cobro, cancelación y reembolsos están pendientes de aprobación. Deben presentarse antes de aceptar una suscripción; no se presupone renovación automática.'],
      ['Datos y cierre', 'El aviso común de privacidad contempla Sentinel. Deben definirse exportación, retención, eliminación y expiración de backups al cerrar una cuenta, así como acuerdos de tratamiento cuando correspondan.'],
      ['Soporte y continuidad', 'Horarios, tiempos de respuesta, mantenimiento, suspensión y comunicaciones deben confirmarse antes de activar el servicio. No se promete soporte permanente ni plazos de recuperación aún no establecidos.'],
      ['Pendientes contractuales', 'Identidad del titular, licencias, responsabilidades, avisos de cambios, ley aplicable y resolución de controversias requieren definición y revisión antes de utilizar estas condiciones como contrato.'],
      ['Contacto', `Consultas sobre acceso y condiciones: ${config.email}.`],
    ],
  },
  privacidad: {
    title: 'Aviso de privacidad',
    description: 'Borrador común de privacidad para GCTechOps, sus servicios y Sentinel.',
    sections: [
      ['Responsable pendiente', 'GCTechOps es la marca comercial y Sentinel su producto. El titular operará inicialmente como persona individual; su identidad y domicilio de contacto están pendientes de incorporación.'],
      ['Datos de contacto', 'Los formularios solicitan nombre, empresa, correo y contexto de la consulta o interés en el lanzamiento de Sentinel. No envíes contraseñas, claves API, datos de tarjetas o información confidencial de terceros.'],
      ['Datos de Sentinel', 'Según las funciones utilizadas, la plataforma puede tratar cuentas y organizaciones, configuración de monitores, dominios, endpoints, resultados, incidentes y preferencias de notificación. Debe completarse el inventario de registros técnicos, credenciales y datos recogidos automáticamente.'],
      ['Roles y finalidades', 'La gestión de cuentas y relación comercial debe distinguirse del monitoreo tratado por cuenta del cliente. Deben documentarse sus instrucciones y responsabilidades. El formulario de Sentinel solicita consentimiento específico para enviar novedades de su lanzamiento.'],
      ['Para qué los usamos', 'Utilizamos estos datos para responder tu consulta, evaluar el diagnóstico solicitado, coordinar una conversación y, si lo aceptas en el formulario de Sentinel, enviarte novedades de ese producto. No vendemos información personal.'],
      ['Proveedores', 'La web integra opcionalmente Web3Forms, Cal.com y Plausible, cuando están configurados. Deben confirmarse hosting, correo, pagos y proveedores de Sentinel, ubicación del tratamiento y posibles transferencias internacionales.'],
      ['Conservación', 'Los plazos de conservación de consultas, cuentas, resultados y registros están pendientes. Deben definirse exportación, eliminación y expiración de backups. No se promete eliminación inmediata sin verificar su implementación.'],
      ['Cookies y analítica', 'Plausible se activa según configuración. Deben verificarse cookies, almacenamiento local y servicios externos de la web y aplicación para describir su uso real y las opciones correspondientes.'],
      ['Tus opciones', `Puedes solicitar acceso, corrección o eliminación de tus datos escribiendo a ${config.email}.`],
    ],
  },
  terminos: {
    title: 'Términos de GCTechOps',
    description: 'Condiciones generales de uso del sitio informativo de TechOPS.',
    sections: [
      ['Uso informativo', 'El contenido del sitio describe capacidades y servicios de forma general. Una propuesta, alcance y compromiso comercial solo existen cuando se acuerdan por escrito.'],
      ['Titular pendiente', 'El prestador operará como persona individual bajo la marca GCTechOps. Su identificación legal debe incorporarse antes de usar estas condiciones como documento contractual.'],
      ['Servicios profesionales', 'Cada proyecto requiere un acuerdo de alcance, entregables, calendario, precio, impuestos, pagos, accesos y aceptación. Los cambios de alcance se acuerdan por escrito.'],
      ['Accesos y entregables', 'El cliente debe autorizar las intervenciones y tener derecho a proporcionar accesos. Manejo de credenciales, titularidad y licencias de entregables se definen en el acuerdo del proyecto.'],
      ['Sentinel', 'La plataforma tiene condiciones específicas. Contratar consultoría no incluye automáticamente una suscripción a Sentinel.'],
      ['Condiciones por completar', 'Cancelación, reembolsos, garantías, responsabilidades, ley aplicable y controversias deben definirse y revisarse antes de contratar.'],
      ['Propiedad del contenido', 'Los textos, interfaces y materiales propios del sitio no pueden reproducirse con fines comerciales sin autorización. Las marcas de terceros pertenecen a sus respectivos propietarios.'],
      ['Disponibilidad', 'Procuramos mantener información correcta y el sitio disponible, pero no garantizamos funcionamiento ininterrumpido ni que todo contenido sea aplicable a cada entorno.'],
      ['Contacto', `Para consultas sobre estas condiciones, escribe a ${config.email}.`],
    ],
  },
  seguridad: {
    title: 'Seguridad y confianza',
    description: 'Principios aplicados por TechOPS al diseñar y operar soluciones técnicas.',
    sections: [
      ['Enfoque propuesto', 'Mínimo privilegio, autorización de cambios, manejo acordado de credenciales y documentación técnica son principios de trabajo. Los controles concretos deben documentarse en cada proyecto.'],
      ['Sentinel: verificación pendiente', 'Antes de publicar afirmaciones definitivas deben verificarse aislamiento entre organizaciones, permisos, autenticación, protección de secretos, HTTPS de producción y registros de actividad. Una función en desarrollo no confirma su operación en producción.'],
      ['Backups y recuperación', 'Deben confirmar frecuencia, ubicación, retención, permisos y pruebas de restauración. No hay objetivos de recuperación definidos en este borrador.'],
      ['Incidentes', 'Debe establecerse el procedimiento de evaluación, contención y comunicación de incidentes con responsables confirmados. No se publican tiempos de respuesta sin validación operativa.'],
      ['Datos del formulario', 'Este sitio no solicita contraseñas, información financiera ni secretos de infraestructura. No envíes credenciales o datos sensibles mediante el formulario.'],
      ['Divulgación responsable', `Si detectas un problema de seguridad relacionado con este sitio, repórtalo de forma privada a ${config.email}.`],
      ['Alcance real', 'Los controles concretos dependen del servicio contratado y se documentan en su alcance. Este sitio no presenta certificaciones que no hayan sido verificadas.'],
    ],
  },
};

export default function LegalPage({ page }) {
  const data = content[page];
  const path = page === 'sentinel' ? '/sentinel/terminos' : `/${page}`;
  return (
    <div className="min-h-screen bg-[#080b0a] text-slate-100">
      <Seo title={`${data.title} | GCTechOps`} description={data.description} path={path} />
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link to="/" aria-label="TechOPS, inicio"><img src="/techops-logo.svg" alt="TechOPS" className="h-8 w-auto" /></Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"><ArrowLeft size={16} /> Volver</Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-20">
        <LockKeyhole className="mb-6 text-emerald-400" size={32} />
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">Información del sitio</p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{data.title}</h1>
        <p className="mt-5 text-lg leading-8 text-slate-400">{data.description}</p>
        <aside className="mt-7 rounded-xl border border-amber-300/25 bg-amber-300/5 p-5 text-sm leading-7 text-amber-100"><strong>Borrador para revisión — no definitivo.</strong> Identidad del titular legal pendiente. Completar las decisiones operativas y la revisión legal antes de publicar estas condiciones como vigentes o solicitar su aceptación.</aside>
        <nav aria-label="Documentos relacionados" className="mt-6 flex flex-wrap gap-3 text-sm text-emerald-300"><Link to="/privacidad">Privacidad</Link><Link to="/terminos">Términos de GCTechOps</Link><Link to="/sentinel/terminos">Términos de Sentinel</Link><Link to="/seguridad">Seguridad</Link></nav>
        <div className="mt-12 space-y-10 border-t border-white/10 pt-10">
          {data.sections.map(([title, text]) => (
            <section key={title}>
              <h2 className="text-xl font-semibold text-white">{title}</h2>
              <p className="mt-3 leading-7 text-slate-400">{text}</p>
            </section>
          ))}
        </div>
        <p className="mt-14 text-xs text-slate-500">Versión de trabajo: 12 de octubre de 2026. Pendiente de definición operativa y revisión legal.</p>
      </main>
    </div>
  );
}
