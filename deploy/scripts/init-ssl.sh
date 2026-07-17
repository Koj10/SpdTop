#!/usr/bin/env bash
# Issue Let's Encrypt certificate for spd-top.ru and enable HTTPS nginx config.
#
# Run on the VPS as root (or with sudo):
#   CERTBOT_EMAIL=you@example.com bash deploy/scripts/init-ssl.sh
#
# Prerequisites:
#   - DNS A records: spd-top.ru and www.spd-top.ru → server IP
#   - Docker app listening on 127.0.0.1:3000 (see deploy/docker-compose.prod.yml)
#   - Ports 80 and 443 open in firewall

set -euo pipefail

DOMAIN="spd-top.ru"
EMAIL="${CERTBOT_EMAIL:-}"

if [[ -z "$EMAIL" ]]; then
  echo "Set CERTBOT_EMAIL, e.g.: CERTBOT_EMAIL=admin@spd-top.ru bash $0"
  exit 1
fi

if [[ $EUID -ne 0 ]]; then
  echo "Run as root or with sudo."
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/../.." && pwd)"
WEBROOT="/var/www/certbot"
NGINX_AVAILABLE="/etc/nginx/sites-available/spd-top.ru"
NGINX_ENABLED="/etc/nginx/sites-enabled/spd-top.ru"

echo "==> Installing nginx and certbot (Debian/Ubuntu)..."
export DEBIAN_FRONTEND=noninteractive
apt-get update -qq
apt-get install -y -qq nginx certbot python3-certbot-nginx

echo "==> Preparing webroot for ACME challenge..."
mkdir -p "$WEBROOT"
chown -R www-data:www-data "$WEBROOT"

echo "==> Installing temporary HTTP nginx config..."
cp "$PROJECT_DIR/deploy/nginx/spd-top.ru.http.conf" "$NGINX_AVAILABLE"
ln -sf "$NGINX_AVAILABLE" "$NGINX_ENABLED"
rm -f /etc/nginx/sites-enabled/default

nginx -t
systemctl enable nginx
systemctl reload nginx

echo "==> Requesting certificate for $DOMAIN and www.$DOMAIN..."
certbot certonly \
  --webroot \
  -w "$WEBROOT" \
  -d "$DOMAIN" \
  -d "www.$DOMAIN" \
  --email "$EMAIL" \
  --agree-tos \
  --no-eff-email \
  --non-interactive

echo "==> Installing production HTTPS nginx config..."
cp "$PROJECT_DIR/deploy/nginx/spd-top.ru.conf" "$NGINX_AVAILABLE"
nginx -t
systemctl reload nginx

echo "==> Enabling automatic certificate renewal..."
systemctl enable certbot.timer
systemctl start certbot.timer

echo ""
echo "Done. Certificate installed:"
echo "  https://$DOMAIN"
echo ""
echo "Renewal dry-run:"
certbot renew --dry-run
