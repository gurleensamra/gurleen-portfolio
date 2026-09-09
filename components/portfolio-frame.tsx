'use client';
import Link from 'next/link';
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
      <Link className="skip" href="#content">
        Skip to content
      </Link>
      <header className="nav">
        <Link className="brand" href="/" aria-label="Gurleen Samra home">
          gks<span>✳</span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/#work">My work</Link>
          <Link href="/about">A little about me</Link>
          <Link href={resume} target="_blank" rel="noreferrer">
            Résumé ↗
          </Link>
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
          <Link className="text-link" href="/#work">
            ← All projects
          </Link>
          <Link className="text-link" href="mailto:gurleenksamra@gmail.com">
            Say hello ↗
          </Link>
          <Link
            className="text-link"
            href="https://www.linkedin.com/in/gurleen-kaur-samra"
          >
            LinkedIn ↗
          </Link>
        </footer>
      </main>
    </div>
  );
}
