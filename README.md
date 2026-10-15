# TechOPS

## Sentinel

La landing comercial está en `/sentinel`. Sentinel aún no está desplegado públicamente: la portada y la landing lo presentan como «Próximamente» y no muestran acceso a la aplicación. `VITE_SENTINEL_APP_URL` queda reservado para cuando exista un destino público verificado. Ambas páginas comparten el footer y el estilo visual.

El formulario de interés en el lanzamiento usa `VITE_WEB3FORMS_KEY`. Sin una clave, muestra contacto por correo usando `VITE_CONTACT_EMAIL`; no simula un registro exitoso. Ambas páginas muestran una captura del producto en un entorno de prueba; Sentinel añade una galería manual de dashboard, uptime y certificados. Las capturas deben renovarse con una demo comercial limpia en la siguiente fase.

Sentinel organiza hero, capacidades (`#producto`), galería (`#pantallas`), casos (`#casos`), interés en el lanzamiento (`#beta`, conservando `#confianza`), FAQ y footer. El footer compartido enlaza `/sentinel/terminos` en el producto y `/terminos` en la web corporativa. Privacidad y seguridad son comunes; todos los textos legales siguen como borradores.

Pendientes del lanzamiento: capturas comerciales y móviles, políticas definitivas, metadatos sociales prerenderizados, correo corporativo y despliegue. No se han cambiado el SaaS, DNS ni pagos.

Para producción, configura `VITE_SITE_URL=https://gctechops.com` y `VITE_BUSINESS_DOMAIN=gctechops.com`. Los metadatos por ruta se actualizan en el cliente; para previews sociales específicas por página se necesita prerenderizado. El script Nginx existente conserva el despliegue anterior de gctorque.com y requiere migración explícita antes de usarse con el nuevo dominio. Este cambio no configura DNS ni publica el sitio.

Sitio comercial de TechOPS, construido con React, Vite y Tailwind CSS. La portada presenta consultoría y Sentinel; la ruta independiente `/taller` se mantiene separada.

## Desarrollo

1. Copia `.env.example` como `.env` y configura Web3Forms, Cal.com y, opcionalmente, Plausible.
2. Ejecuta `npm install`.
3. Inicia con `npm run dev` o genera producción con `npm run build`.

La sección de Davis Galvez ya aparece con su nombre y trayectoria. Si agregas una foto real en `public/davis-galvez.jpg`, configura `VITE_FOUNDER_PHOTO=/davis-galvez.jpg`; el enlace de LinkedIn es opcional. Todas las rutas usan fallback SPA; el despliegue debe servir `index.html` cuando no exista un archivo físico.

La marca comercial visible es TechOPS y el nombre empresarial previsto es GCTechops. El dominio y el correo corporativo deben configurarse cuando existan; no se presupone que un dominio nuevo ya esté registrado.

Los precios se muestran únicamente cuando existe un valor aprobado en `VITE_PRICE_DIAGNOSTIC`, `VITE_PRICE_OBSERVABILITY` o `VITE_PRICE_PLATFORM`. La analítica no se carga si `VITE_PLAUSIBLE_DOMAIN` está vacío.

## Checklist

El PDF fuente se genera con `scripts/create_brand_assets.py`. El archivo editorial queda en `output/pdf/` y la copia pública en `public/downloads/`.
