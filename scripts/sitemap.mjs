import {writeFileSync} from 'fs';import {C,services,markets} from '../src/config.js';import {guides,slug} from '../src/content.js';
const p=['','about','services','pricing','guides','contact','privacy','terms',...services.map(s=>'services/'+slug(s[1])),...markets.map(m=>'markets/'+slug(m)),...guides.map(g=>'guides/'+g.slug)];
writeFileSync('public/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${p.map(x=>`<url><loc>${C.domain}/${x}</loc></url>`).join('')}</urlset>`);
