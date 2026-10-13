import { useEffect } from 'react';
import config from '../config/contacto';

export function trackEvent(name, props = {}) {
  if (typeof window === 'undefined' || !config.plausibleDomain) return;
  window.plausible = window.plausible || function plausible() {
    (window.plausible.q = window.plausible.q || []).push(arguments);
  };
  window.plausible(name, { props });
}

export default function Analytics() {
  useEffect(() => {
    if (!config.plausibleDomain || document.querySelector('script[data-techops-plausible]')) return;
    const script = document.createElement('script');
    script.defer = true;
    script.dataset.domain = config.plausibleDomain;
    script.dataset.techopsPlausible = 'true';
    script.src = 'https://plausible.io/js/script.js';
    document.head.appendChild(script);
  }, []);

  return null;
}
