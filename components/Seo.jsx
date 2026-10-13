import { useEffect } from 'react';
import config from '../config/contacto';

const upsertMeta = (selector, attribute, value) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    const match = selector.match(/meta\[(name|property)="([^"]+)"\]/);
    if (match) element.setAttribute(match[1], match[2]);
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
};

export default function Seo({ title, description, path = '/', type = 'website' }) {
  useEffect(() => {
    const base = config.siteUrl.replace(/\/$/, '');
    const url = `${base}${path}`;
    document.title = title;
    upsertMeta('meta[name="description"]', 'content', description);
    upsertMeta('meta[property="og:title"]', 'content', title);
    upsertMeta('meta[property="og:description"]', 'content', description);
    upsertMeta('meta[property="og:url"]', 'content', url);
    upsertMeta('meta[property="og:type"]', 'content', type);
    upsertMeta('meta[name="twitter:title"]', 'content', title);
    upsertMeta('meta[name="twitter:description"]', 'content', description);
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [description, path, title, type]);

  return null;
}
