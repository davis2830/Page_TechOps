#!/bin/bash
# Deploy script para Page_TechOps en www.gctorque.com
# Ejecutar desde la VM de Google Cloud como usuario con sudo
#
# Uso: sudo bash deploy/deploy.sh
#
set -euo pipefail

DEPLOY_DIR="/srv/page-techops"
REPO_URL="https://github.com/davis2830/Page_TechOps.git"
NGINX_CONF_SRC="deploy/nginx/www-gctorque.conf"
NGINX_AVAILABLE="/etc/nginx/sites-available/www-gctorque.conf"
NGINX_ENABLED="/etc/nginx/sites-enabled/www-gctorque.conf"

echo "===================================="
echo "Deploy Page_TechOps -> www.gctorque.com"
echo "===================================="

# 1. Clonar o actualizar el repo
if [ -d "$DEPLOY_DIR" ]; then
    echo "[1/5] Actualizando repo existente..."
    cd "$DEPLOY_DIR"
    git pull origin main
else
    echo "[1/5] Clonando repo..."
    git clone "$REPO_URL" "$DEPLOY_DIR"
    cd "$DEPLOY_DIR"
fi

# 2. Instalar dependencias
echo "[2/5] Instalando dependencias..."
npm install --production=false

# 3. Build de producción
echo "[3/5] Generando build de producción..."
npm run build
echo "    Build generado en $DEPLOY_DIR/dist/"

# 4. Configurar nginx
echo "[4/5] Configurando nginx..."
if [ ! -f "$NGINX_AVAILABLE" ]; then
    cp "$DEPLOY_DIR/$NGINX_CONF_SRC" "$NGINX_AVAILABLE"
    echo "    Config copiada a $NGINX_AVAILABLE"
else
    echo "    Config ya existe en $NGINX_AVAILABLE (no se sobreescribe)"
fi

if [ ! -L "$NGINX_ENABLED" ]; then
    ln -s "$NGINX_AVAILABLE" "$NGINX_ENABLED"
    echo "    Enlace simbólico creado en $NGINX_ENABLED"
else
    echo "    Enlace simbólico ya existe"
fi

# 5. Verificar y recargar nginx
echo "[5/5] Verificando y recargando nginx..."
nginx -t
systemctl reload nginx
echo ""
echo "Deploy completado exitosamente!"
echo "Tu landing page está disponible en: https://www.gctorque.com"
echo ""
echo "NOTA: Si es la primera vez, verifica que tu wildcard cert"
echo "(*.gctorque.com) cubra www. Si no, ejecuta:"
echo "  sudo certbot certonly --nginx -d www.gctorque.com"
