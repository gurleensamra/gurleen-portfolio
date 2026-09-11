/* Native anchors intentionally avoid the deployed vinext Link navigation failure. */
/* oxlint-disable next/no-html-link-for-pages */
'use client';
import Asterisk from '@/components/asterisk';
import SiteLink from '@/components/site-link';
import DesktopToys from '@/components/desktop-toys';
import { sitePath } from '@/lib/site-path';
import { useId, useState, useSyncExternalStore } from 'react';
import Image from '@/components/site-image';
import { Button } from '@/components/ui/button';
const resume = '/gurleen-samra-resume.pdf';
const base = '/projects/';
function Cat({ sleeping = false }: { sleeping?: boolean }) {
  return (
    <svg viewBox="0 0 180 150" fill="none" aria-hidden="true">
      <path
        d="M38 101C20 71 32 40 36 22L66 41Q91 32 114 43L144 23C151 55 158 89 140 108Q121 134 71 124Q48 120 38 101Z"
        fill="#f9e4b6"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d={sleeping ? 'M54 76q9 9 18 0M106 76q9 9 18 0' : 'M63 71v8M115 71v8'}
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M84 86l5 4 5-4M89 90q-7 12-14 3m14-3q7 12 14 3M34 87l-17-4m19 12-17 4m125-12 17-5m-18 14 17 4"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <ellipse cx="55" cy="90" rx="9" ry="5" fill="#edaea9" />
      <ellipse cx="122" cy="90" rx="9" ry="5" fill="#edaea9" />
    </svg>
  );
}
function Chrome({ title }: { title: string }) {
  return (
    <div className="window-bar">
      <span className="dots" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span>{title}</span>
      <span aria-hidden="true">✧</span>
    </div>
  );
}
function FlowerSticker({ className }: { className: string }) {
  const crop = className.includes('sticker-heart') ? '315 262 198 160'
    : className.includes('flower-hero') ? '698 0 450 456'
    : className.includes('flower-work') ? '12 20 306 360'
    : '20 416 485 330';
  return (
    <svg className={`scrapbook-sticker ${className}`} viewBox={crop} aria-hidden="true" focusable="false">
      <image filter="url(#paper-cutout)" href={sitePath('/images/scrapbook-stickers.png')} width="1152" height="2048" />
    </svg>
  );
}
function LaceOrnament({ variant }: { variant: 'corner' | 'flourish' }) {
  const id = useId();
  return (
    <svg className={`lace-ornament lace-${variant}`} viewBox="0 0 736 920" aria-hidden="true" focusable="false">
      <defs>
        <filter id={`${id}-invert`} colorInterpolationFilters="sRGB">
          <feColorMatrix type="matrix" values="-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 1 0" />
        </filter>
        <mask id={`${id}-mask`} x="0" y="0" width="736" height="920" maskUnits="userSpaceOnUse" style={{ maskType: 'luminance' }}>
          <image href={sitePath(`/images/lace-${variant}.png`)} width="736" height="920" filter={`url(#${id}-invert)`} />
        </mask>
      </defs>
      <rect width="736" height="920" fill="currentColor" mask={`url(#${id}-mask)`} />
    </svg>
  );
}
let memoryNight = false;
function subscribeTheme(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener('portfolio-theme', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('portfolio-theme', callback);
  };
}
function readTheme() {
  try {
    return localStorage.getItem('gurleen-night') === 'true';
  } catch {
    return memoryNight;
  }
}
export default function Home() {
  const night = useSyncExternalStore(subscribeTheme, readTheme, () => false);
  const [pet, setPet] = useState(false);
  const toggle = () => {
    memoryNight = !night;
    try {
      localStorage.setItem('gurleen-night', String(!night));
    } catch {}
    window.dispatchEvent(new Event('portfolio-theme'));
  };
  return (
    <div className={`portfolio ${night ? 'night' : ''}`}>
      <SiteLink className="skip" href="#work">
        Skip to projects
      </SiteLink>
      <header className="nav">
        <SiteLink className="brand" href="#home" aria-label="Gurleen Samra home">
          gks<span><Asterisk /></span>
        </SiteLink>
        <nav aria-label="Main navigation">
          <SiteLink href="#work">My work</SiteLink>
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
          <span className="switch" aria-hidden="true">
            <i />
          </span>
        </Button>
      </header>
      <main id="home">
        <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute' }}>
          <defs>
            <filter id="paper-cutout" colorInterpolationFilters="sRGB">
              <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  -10 -10 -10 0 29" />
            </filter>
          </defs>
        </svg>
        <section className="scrapbook-cover" aria-label="Gurleen — welcome to my scrapbook">
          <div className="cover-rail"><span>GKS / PERSONAL COMPUTER</span><span>VOL. 01 — MADE BY HAND & CODE</span></div>
          <div className="cyber-cover-grid">
            <div className="name-page">
              <LaceOrnament variant="corner" />
              <LaceOrnament variant="flourish" />
              <span className="file-tab">index / a work in progress</span>
              <svg className="stitched-bow" viewBox="0 0 180 110" fill="none" aria-hidden="true">
                <path d="M90 49C15-21 5 26 28 54Q58 75 90 49C165-21 175 26 152 54Q122 75 90 49ZM83 49Q62 78 40 102M97 49Q118 78 140 102" stroke="currentColor" strokeWidth="5" strokeDasharray="2 6" strokeLinecap="square" />
              </svg>
              <p className="hand cover-hello">hello, world. i’m</p>
              <h1 className="cyber-name">Gurleen<span aria-hidden="true"><Asterisk /></span></h1>
              <p className="cover-description">Software, design & a little bit of whimsy.</p>
              <p className="bio-line">Informatics at UW · SWE intern at NVIDIA</p>
              <div className="cover-links"><SiteLink href="#work" className="cta">Open my projects ↗</SiteLink></div>
              <span className="page-number">01 / WELCOME TO MY CORNER OF THE INTERNET</span>
            </div>
            <aside className="terminal-card" aria-label="A little introduction">
              <Chrome title="gurleen@desktop: ~" />
              <div className="terminal-body"><p><span className="prompt-symbol">♥</span> cat about-me.txt</p><h2>Soft heart.<br />Technical mind.</h2><p className="terminal-description">Informatics @ UW<br />Software engineering<br />Human-centered design</p><div className="terminal-rule" /><p className="terminal-last">Let’s make something thoughtful.<span className="terminal-cursor" aria-hidden="true">▌</span></p></div>
              <span className="terminal-seal" aria-hidden="true">✧</span>
            </aside>
          </div>
          <div className="cover-bottom"><span>DESIGNED TO FEEL HUMAN</span><SiteLink href="#meet-gurleen">SCROLL TO EXPLORE ↓</SiteLink><span>CODE + CURIOSITY</span></div>
        </section>
        <section id="meet-gurleen" className="hero" aria-labelledby="intro">
          <div className="intro">
            <p className="eyebrow">
              SOFTWARE ENGINEERING + HUMAN-CENTERED DESIGN
            </p>
            <h1 id="intro">
              Hi, I’m{' '}
              <span>
                Gurleen
                <svg viewBox="0 0 420 25" aria-hidden="true">
                  <path d="M6 15Q205-5 411 12M33 22Q205 7 385 18" />
                </svg>
              </span>
              <b className="hello-star" aria-hidden="true">
                <Asterisk />
              </b>
            </h1>
            <p className="hero-copy">
              i write code and play mario kart
            </p>
            <p className="bio-line">
              Informatics at UW · SWE intern at NVIDIA
            </p>
            <SiteLink href="#work" className="cta">
              Explore my work <span>↓</span>
            </SiteLink>
            <span className="hand hero-note">
              a few things I’ve made with care ↴
            </span>
          </div>
          <div className="desktop-scene">
            <div className="floating-star" aria-hidden="true">
              ✦
            </div>
            <FlowerSticker className="flower-lily flower-hero" />
            <FlowerSticker className="sticker-heart" />
            <div className="profile-window">
              <Chrome title="a little introduction.txt" />
              <div className="profile-inner">
                <div className="mini-bio">
                  <span className="tiny-label">BASED IN CURIOSITY</span>
                  <p>
                    Engineer.
                    <br />
                    Designer.
                    <br />
                    <em>Always learning.</em>
                  </p>
                  <span className="location">↳ University of Washington</span>
                </div>
              </div>
              <div className="window-status">
                <span>✿</span> building at the intersection of people &
                technology
              </div>
            </div>
            <span className="tape-corner tape-corner-top" aria-hidden="true" />
            <span className="tape-corner tape-corner-bottom" aria-hidden="true" />
            <div className="cat-sticker">
              <Button
                className="cat-button"
                variant="ghost"
                onClick={() => setPet((v) => !v)}
                aria-label="Pet the cat doodle"
                aria-pressed={pet}
              >
                <Cat sleeping={night || pet} />
              </Button>
              <span className="hand" aria-live="polite">
                {pet
                  ? 'purrr. thank you ♡'
                  : night
                    ? 'dreaming of good ideas…'
                    : 'your tiny desk buddy'}
              </span>
            </div>
          </div>
        </section>
        <section
          className="work-section"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">A FEW OPEN TABS</p>
              <h2 id="work-title">
                Selected work
                <span className="hand">made by me, for people</span>
              </h2>
            </div>
            <span className="index-label">01 — 04 / SELECTED WORK</span>
          </div>
          <p className="scrap-caption hand" aria-hidden="true">
            collected from my little corner of the internet ✿
          </p>
          <FlowerSticker className="flower-lotus flower-work" />
          <article className="featured project-window">
            <Chrome title="01 / nvidia / evaluation-framework.py" />
            <div className="featured-content">
              <div className="nvidia-summary">
                <span className="eyebrow">NVIDIA / SOFTWARE ENGINEERING</span>
                <strong>200+</strong>
                <p>expert-validated historical cases</p>
                <div className="benchmark-flow">DIAGNOSE → SCORE → COMPARE</div>
                <p>AI-assisted log analysis<br />& root-cause diagnosis</p>
                <span className="hand">making diagnostic quality measurable</span>
              </div>
              <div className="project-copy">
                <div className="tags">
                  <span>PYTHON</span>
                  <span>AI EVALUATION</span>
                </div>
                <h3>NVIDIA internship</h3>
                <p className="project-deck">
                  Evaluating AI-assisted diagnostics
                  <br />
                  with reproducible evidence.
                </p>
                <p>
                  Built a Python evaluation harness that scaled coverage from
                  dozens to 200+ expert-validated historical cases and enabled
                  blinded comparisons across agent backends.
                </p>
                <dl>
                  <div>
                    <dt>Scoring & reliability</dt>
                    <dd>
                      Developed deterministic and ensemble-based semantic scoring
                      for diagnostic quality, evidence grounding, abstention,
                      reliability, and latency. Added stage-level timing and error traces.
                    </dd>
                  </div>
                  <div>
                    <dt>Making results useful</dt>
                    <dd>
                      Created a live dashboard and CI-ready reports with per-case
                      drilldowns and release comparisons. Extended a Kubernetes-native
                      framework with secure container and API adapters.
                    </dd>
                  </div>
                </dl>
                <SiteLink
                  className="text-link"
                  href={resume}
                >
                  View résumé <span>↗</span>
                </SiteLink>
                <p className="project-meta">
                  Software Engineering Intern · Santa Clara · June 2026–Present
                </p>
              </div>
            </div>
          </article>
          <div className="project-pair">
            <article className="project-window">
              <Chrome title="02 / mini-git.java" />
              <SiteLink
                className="project-image git"
                href={`${base}technical-project-mini-git`}
              >
                <Image
                  unoptimized
                  src="/images/butterfly-stitch.svg"
                  alt="Lilac cross-stitch butterfly on plum graph paper"
                  width="1245"
                  height="1245"
                  loading="lazy"
                />
              </SiteLink>
              <div className="small-project-copy">
                <span className="eyebrow">SOFTWARE ENGINEERING · JAVA</span>
                <h3>Mini-Git</h3>
                <p>
                  Understanding version control by building it: a simplified
                  system exploring commits, branches, and repositories.
                </p>
                <SiteLink
                  className="text-link"
                  href={`${base}technical-project-mini-git`}
                >
                  Explore the implementation <span>↗</span>
                </SiteLink>
              </div>
            </article>
            <article className="project-window">
              <Chrome title="03 / swe-visuals.design" />
              <SiteLink
                className="project-image swe"
                href={`${base}swe-graphics-posters-branding`}
              >
                <Image
                  unoptimized
                  src="/images/heart-stitch.svg"
                  alt="Lilac cross-stitch heart on plum graph paper"
                  width="2016"
                  height="2690"
                  loading="lazy"
                />
              </SiteLink>
              <div className="small-project-copy">
                <span className="eyebrow">VISUAL DESIGN · COMMUNITY</span>
                <h3>Designing for connection</h3>
                <p>
                  Branding, event assets, and social graphics for the Society of
                  Women Engineers at UW. Making community feel inviting.
                </p>
                <SiteLink
                  className="text-link"
                  href={`${base}swe-graphics-posters-branding`}
                >
                  See the visual work <span>↗</span>
                </SiteLink>
              </div>
            </article>
          </div>
        </section>
        <article className="project-window notion-construction">
          <Chrome title="04 / canvas-to-notion / in-progress" />
          <div className="small-project-copy">
            <span className="construction-label">UNDER CONSTRUCTION</span>
            <h3>Canvas → Notion</h3>
            <p>A personal project exploring how to bring Canvas coursework and
              deadlines into a Notion workspace. Currently being built; a demo
              and project write-up will follow.</p>
            <span className="hand">still on the workbench ♡</span>
          </div>
        </article>
        <section id="about" className="about-section">
          <FlowerSticker className="flower-orchid flower-about" />
          <figure className="about-note">
            <Image
              unoptimized
              src="/images/gurleen-2026.jpeg"
              alt="Gurleen"
              width={4000}
              height={6000}
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
            <figcaption className="hand">Gurleen Kaur Samra</figcaption>
          </figure>
          <div className="about-copy">
            <p className="eyebrow">THE PERSON BEHIND THE PIXELS</p>
            <h2>
              Equal parts
              <br />
              logic & imagination.
            </h2>
            <p>
              I’m an Informatics student at the University of Washington,
              exploring software engineering, UX, and human–computer
              interaction.
            </p>
            <p>
              From developing in Java to prototyping in Figma, I enjoy turning
              complex problems into thoughtful, accessible experiences. Outside
              the interface, I experiment with digital art and watercolors.
            </p>
            <SiteLink href="/about" className="text-link">
              A little more about me ↗
            </SiteLink>
          </div>
        </section>
        <DesktopToys />
        <footer id="contact">
          <span className="hand">Have something in mind?</span>
          <h2>
            lets build it!
          </h2>
          <SiteLink className="cta" href="mailto:gurleenksamra@gmail.com">
            Say hello <span>↗</span>
          </SiteLink>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Gurleen Kaur Samra</span>
            <span>Made with code, care & curiosity.</span>
            <SiteLink
              href="https://www.linkedin.com/in/gurleen-kaur-samra"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </SiteLink>
            <SiteLink href={resume} target="_blank" rel="noreferrer">
              Résumé ↗
            </SiteLink>
          </div>
        </footer>
      </main>
    </div>
  );
}
