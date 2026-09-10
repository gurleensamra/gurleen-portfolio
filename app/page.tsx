/* Native anchors intentionally avoid the deployed vinext Link navigation failure. */
/* oxlint-disable next/no-html-link-for-pages */
'use client';
import SiteLink from '@/components/site-link';
import { sitePath } from '@/lib/site-path';
import { useState, useSyncExternalStore } from 'react';
import Image from '@/components/site-image';
import { Button } from '@/components/ui/button';
const resume =
  'https://drive.google.com/file/d/1BTmVJU_RXWrYaxeRcfbER-kkpEeJd01M/view?usp=sharing';
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
          gks<span>✳</span>
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
          <FlowerSticker className="cover-butterfly flower-hero" />
          <FlowerSticker className="cover-flower flower-work" />
          <FlowerSticker className="cover-heart sticker-heart" />
          <div className="cover-composition">
          <h1 className="bubble-name" aria-label="Gurleen">
            {['140 258 137 151', '27 738 125 148', '288 578 120 143', '166 414 101 146', '532 111 115 139', '532 111 115 139', '409 426 128 135'].map((crop, index) => (
              <svg key={index} viewBox={crop} aria-hidden="true" focusable="false">
                <image filter="url(#paper-cutout)" href={sitePath('/images/pink-bubble-alphabet.png')} width="675" height="1200" />
              </svg>
            ))}
          </h1>
          <figure className="camera-portrait cover-camera">
            <svg viewBox="738 978 383 217" aria-labelledby="camera-portrait-title">
              <title id="camera-portrait-title">Gurleen’s portrait in a pink digital camera</title>
              <image href={sitePath('/images/camera-frames.png')} width="1152" height="2048" />
              <rect x="780" y="1010" width="232" height="168" fill="#302a30" />
              <image href={sitePath('/images/gurleen-2026.jpeg')} x="780" y="1010" width="232" height="168" preserveAspectRatio="xMidYMid meet" />
            </svg>
            <figcaption className="hand">hi, that’s me! ♡</figcaption>
          </figure>
          </div>
          <p className="hand cover-caption">a little collection of things I make & love</p>
          <SiteLink className="cover-scroll hand" href="#meet-gurleen">come on in ↓</SiteLink>
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
                ✳
              </b>
            </h1>
            <p className="hero-copy">
              A curious mind, a builder’s heart,
              <br />
              and a soft spot for thoughtful design.
            </p>
            <p className="bio-line">
              I bring code and creativity together to make things
              <br className="desktop-break" /> that feel intuitive, useful, and
              a little more human.
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
            <span className="index-label">01 — 03 / PROJECTS</span>
          </div>
          <p className="scrap-caption hand" aria-hidden="true">
            collected from my little corner of the internet ✿
          </p>
          <FlowerSticker className="flower-lotus flower-work" />
          <article className="featured project-window">
            <Chrome title="01 / husky-bites.fig" />
            <div className="featured-content">
              <SiteLink
                className="project-image dining"
                href={`${base}uw-dining-app-ux-case-study`}
              >
                <Image
                  unoptimized
                  src="/images/husky-bites.png"
                  width="1362"
                  height="1362"
                  alt="Husky Bites dining app project preview from Gurleen’s original portfolio"
                />
                <span className="image-note hand">
                  good food, student budget
                </span>
              </SiteLink>
              <div className="project-copy">
                <div className="tags">
                  <span>UX RESEARCH</span>
                  <span>PRODUCT DESIGN</span>
                </div>
                <h3>Husky Bites</h3>
                <p className="project-deck">
                  Helping students find a meal
                  <br />
                  that fits their life.
                </p>
                <p>
                  Affordable, nutritious, nearby: a dining app concept that
                  helps UW students balance all three.
                </p>
                <dl>
                  <div>
                    <dt>The approach</dt>
                    <dd>
                      Student interviews → dietary & budget filters → map-based
                      discovery.
                    </dd>
                  </div>
                  <div>
                    <dt>What we learned</dt>
                    <dd>
                      Three usability tests surfaced extra steps in filtering.
                      The team simplified the flow and clarified selections.
                    </dd>
                  </div>
                </dl>
                <SiteLink
                  className="text-link"
                  href={`${base}uw-dining-app-ux-case-study`}
                >
                  Read the case study <span>↗</span>
                </SiteLink>
                <p className="project-meta">
                  Team course project · Figma · Research & prototyping
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
                  src="/images/mini-git.png"
                  alt="Mini-Git project artwork from Gurleen’s portfolio"
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
                  src="/images/swe.png"
                  alt="Society of Women Engineers at UW event and branding artwork"
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
        <footer id="contact">
          <span className="hand">Have something in mind?</span>
          <h2>
            Let’s make something
            <br />
            <em>thoughtful.</em> <span aria-hidden="true">✳</span>
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
