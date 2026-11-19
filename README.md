# ApplyX Website
Dev: `npm install && npm run dev` · Build: `npm run build` (output in `dist/`).
Edit all content, contact info and pricing in `src/config.js`.
Before launch: replace YOURDOMAIN.com in `public/robots.txt`, `public/sitemap.xml`, `src/config.js`; verify the email; add `public/og.png` (1200x630); add real photography/logo; replace testimonial placeholders.
## Hostinger deploy
1. `npm run build`. 2. hPanel > Websites > File Manager > `public_html`: delete default files, upload everything inside `dist/` (including hidden `.htaccess`, which makes /about etc. work on refresh). 3. Domains: point DNS to Hostinger (nameservers or A record shown in hPanel), enable free SSL.
## v2 additions
Guides: edit `src/content.js`. Per-market notes/pricing: `marketNotes`, `marketPrice` there. Logo/hero photo, form service URL, booking link: last lines of `src/config.js`. Sitemap regenerates on every `npm run build` (set `C.domain` first).
