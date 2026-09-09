/* Native anchors intentionally avoid the deployed vinext Link navigation failure. */
/* oxlint-disable next/no-html-link-for-pages */
'use client';
import { useSyncExternalStore } from 'react';
import { Button } from '@/components/ui/button';
const resume =
  'https://drive.google.com/file/d/1BTmVJU_RXWrYaxeRcfbER-kkpEeJd01M/view?usp=sharing';
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
      <a className="skip" href="#content">
        Skip to content
      </a>
      <header className="nav">
        <a className="brand" href="/" aria-label="Gurleen Samra home">
          gks<span>✳</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="/#work">My work</a>
          <a href="/about">A little about me</a>
          <a href={resume} target="_blank" rel="noreferrer">
            Résumé ↗
          </a>
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
          <a className="text-link" href="/#work">
            ← All projects
          </a>
          <a className="text-link" href="mailto:gurleenksamra@gmail.com">
            Say hello ↗
          </a>
          <a
            className="text-link"
            href="https://www.linkedin.com/in/gurleen-kaur-samra"
          >
            LinkedIn ↗
          </a>
        </footer>
      </main>
    </div>
  );
}
