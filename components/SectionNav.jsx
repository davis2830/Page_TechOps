import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function SectionNav({ links, onNavigate }) {
  const [active, setActive] = useState('');
  useEffect(() => {
    const sections = links.filter(([href]) => href.startsWith('#')).map(([href]) => document.getElementById(href.slice(1))).filter(Boolean);
    let frame;
    function update() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const current = sections.filter(section => section.getBoundingClientRect().top <= 140).sort((a, b) => b.getBoundingClientRect().top - a.getBoundingClientRect().top)[0];
        setActive(current ? `#${current.id}` : '');
      });
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', update); };
  }, [links]);
  return links.map(([href, label]) => {
    const props = { className: `site-nav-link ${href === '/sentinel' ? 'site-nav-product' : ''}`, onClick: onNavigate, 'aria-current': active === href ? 'location' : undefined };
    return href.startsWith('/') ? <Link key={href} to={href} {...props}>{href === '/sentinel' && <img src="/sentinel/icon.png" alt="" width="18" height="22" />}{label}</Link> : <a key={href} href={href} {...props}>{label}</a>;
  });
}
