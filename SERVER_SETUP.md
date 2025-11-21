# Server Setup Anleitung

## Voraussetzungen
- Node.js (Version 18 oder höher)
- npm

## Installation auf dem Server

1. **Repository klonen:**
```bash
git clone https://github.com/Exit95/bauunternehmen.git
cd bauunternehmen
```

2. **Dependencies installieren:**
```bash
npm install
```

3. **Projekt bauen:**
```bash
npm run build
```

4. **Server starten:**
```bash
npm start
```

Der Server läuft standardmäßig auf Port 3000.

## Mit PM2 (empfohlen für Produktion)

PM2 ist ein Process Manager für Node.js Anwendungen.

1. **PM2 installieren:**
```bash
npm install -g pm2
```

2. **App mit PM2 starten:**
```bash
pm2 start build/index.js --name bauunternehmen
```

3. **PM2 beim Systemstart automatisch starten:**
```bash
pm2 startup
pm2 save
```

4. **Nützliche PM2 Befehle:**
```bash
pm2 status              # Status anzeigen
pm2 logs bauunternehmen # Logs anzeigen
pm2 restart bauunternehmen # App neu starten
pm2 stop bauunternehmen    # App stoppen
pm2 delete bauunternehmen  # App entfernen
```

## Umgebungsvariablen

Erstelle eine `.env` Datei im Projektverzeichnis:

```
PORT=3000
HOST=0.0.0.0
ORIGIN=http://deine-domain.de
```

## Mit Nginx (Reverse Proxy)

Beispiel Nginx-Konfiguration:

```nginx
server {
    listen 80;
    server_name deine-domain.de;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## Updates deployen

```bash
git pull
npm install
npm run build
pm2 restart bauunternehmen
```

