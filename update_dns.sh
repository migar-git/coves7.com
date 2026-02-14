#!/bin/bash

# Load GoDaddy API credentials from .env
source /home/aresmaxbot/.openclaw/.env

# GoDaddy API endpoint
API_URL="https://api.godaddy.com/v1/domains/coves7.com/records"

# Set A records for apex domain to GitHub Pages IPs
curl -X PUT "$API_URL/A/@" \
  -H "Authorization: sso-key $GODADDY_API_KEY:$GODADDY_API_SECRET" \
  -H "Content-Type: application/json" \
  -d '[{"data": "185.199.108.153", "ttl": 3600}, {"data": "185.199.109.153", "ttl": 3600}, {"data": "185.199.110.153", "ttl": 3600}, {"data": "185.199.111.153", "ttl": 3600}]'

# Set CNAME record for www to GitHub Pages
curl -X PUT "$API_URL/CNAME/www" \
  -H "Authorization: sso-key $GODADDY_API_KEY:$GODADDY_API_SECRET" \
  -H "Content-Type: application/json" \
  -d '[{"data": "migar-git.github.io.", "ttl": 3600}]'

echo "DNS records updated for coves7.com"
