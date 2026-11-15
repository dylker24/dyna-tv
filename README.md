# Dyna TV

L'écran d'accueil maison pour la box Google TV : nos applis (Frigo Rosé TV, Frigo Rosé IPTV, Dynamusique), une barre de raccourcis (YouTube sans pub, Downloader, Tailscale, Paramètres) et rien d'autre.

- `app/src/main/assets/index.html` : tout l'écran (design, navigation à la télécommande).
- `app/src/main/java/tv/dyna/launcher/` : la partie Android (liste des applis installées, leurs logos, ouverture).
- `app/src/main/assets/enquetes.html` + `enquetes-data.js` : **Dyna Enquêtes**, les enquêtes à résoudre à deux à la télécommande (une enquête = un bloc dans enquetes-data.js).
- `youtube/` : **Dyna YouTube**, SmartTube habillé vert et beige, refait chaque lundi.
- L'APK est fabriqué automatiquement par GitHub à chaque modification.
- Installer sur la box avec Downloader : `github.com/dylker24/dyna-tv/releases/download/tv/dyna-tv.apk`
