#!/bin/bash

# Deployment Script für Server

echo "🚀 Starte Deployment..."

# Stoppe laufende Instanz (falls PM2 verwendet wird)
pm2 stop bauunternehmen 2>/dev/null || true

# Lösche alte Build-Dateien
echo "🧹 Lösche alte Build-Dateien..."
rm -rf .svelte-kit build node_modules

# Hole neueste Änderungen
echo "📥 Hole neueste Änderungen von GitHub..."
git pull origin main

# Installiere Dependencies
echo "📦 Installiere Dependencies..."
npm install

# Baue das Projekt
echo "🔨 Baue das Projekt..."
npm run build

# Starte mit PM2 (oder verwende npm start für einfachen Start)
echo "▶️  Starte Server..."
if command -v pm2 &> /dev/null; then
    pm2 start build/index.js --name bauunternehmen
    pm2 save
    echo "✅ Server mit PM2 gestartet!"
else
    echo "⚠️  PM2 nicht gefunden. Starte mit 'npm start' manuell."
    echo "   Oder installiere PM2: npm install -g pm2"
fi

echo "✅ Deployment abgeschlossen!"

