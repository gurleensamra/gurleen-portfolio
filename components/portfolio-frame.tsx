/* Native anchors intentionally avoid the deployed vinext Link navigation failure. */
/* oxlint-disable next/no-html-link-for-pages */
'use client';
import Asterisk from '@/components/asterisk';
import SiteLink from '@/components/site-link';
import { useSyncExternalStore } from 'react';
import { Button } from '@/components/ui/button';
const resume = '/gurleen-samra-resume.pdf';
let fallback = false;
function subscribe(cb: () => void) {
  window.addEventListener('storage', cb);
  window.addEventListener('portfolio-theme', cb);
  return () => {
    window.removeEventListener('storage', cb);
    window.removeEventListener('portfolio-theme', cb);
  };
}
function snapshot() {
  try {
    return localStorage.getItem('gurleen-night') === 'true';
  } catch {
    return fallback;
  }
}
export default function PortfolioFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  const night = useSyncExternalStore(subscribe, snapshot, () => false);
  function toggle() {
    fallback = !night;
    try {
      localStorage.setItem('gurleen-night', String(!night));
    } catch {}
    window.dispatchEvent(new Event('portfolio-theme'));
  }
  return (
    <div className={`portfolio ${night ? 'night' : ''}`}>
      <SiteLink className="skip" href="#content">
        Skip to content
      </SiteLink>
      <header className="nav">
        <SiteLink className="brand" href="/" aria-label="Gurleen Samra home">
          gks<span><Asterisk /></span>
        </SiteLink>
        <nav aria-label="Main navigation">
          <SiteLink href="/#work">My work</SiteLink>
          <SiteLink href="/about">A little about me</SiteLink>
          <SiteLink href={resume} target="_blank" rel="noreferrer">
            Résumé ↗
          </SiteLink>
        </nav>
        <Button
          className="theme-toggle"
          variant="outline"
          onClick={toggle}
          aria-pressed={night}
          aria-label="Toggle night mode"
        >
          {night ? '☾ Night' : '☀ Day'}
        </Button>
      </header>
      <main id="content">
        {children}
        <footer className="detail-footer">
          <SiteLink className="text-link" href="/#work">
            ← All projects
          </SiteLink>
          <SiteLink className="text-link" href="mailto:gurleenksamra@gmail.com">
            Say hello ↗
          </SiteLink>
          <SiteLink
            className="text-link"
            href="https://www.linkedin.com/in/gurleen-kaur-samra"
          >
            LinkedIn ↗
          </SiteLink>
        </footer>
      </main>
    </div>
  );
}
