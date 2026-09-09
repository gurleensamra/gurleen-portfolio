'use client';
import { useState, useSyncExternalStore } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
const resume =
  'https://drive.google.com/file/d/1BTmVJU_RXWrYaxeRcfbER-kkpEeJd01M/view?usp=sharing';
const base = 'https://gurleenksamra.com/projects/';
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
      <a className="skip" href="#work">
        Skip to projects
      </a>
      <header className="nav">
        <a className="brand" href="#home" aria-label="Gurleen Samra home">
          gks<span>✳</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">My work</a>
          <a href="#about">A little about me</a>
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
          <span className="switch" aria-hidden="true">
            <i />
          </span>
        </Button>
      </header>
      <main id="home">
        <section className="hero" aria-labelledby="intro">
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
            <a href="#work" className="cta">
              Explore my work <span>↓</span>
            </a>
            <span className="hand hero-note">
              a few things I’ve made with care ↴
            </span>
          </div>
          <div className="desktop-scene">
            <div className="floating-star" aria-hidden="true">
              ✦
            </div>
            <div className="profile-window">
              <Chrome title="a little introduction.txt" />
              <div className="profile-inner">
                <figure className="polaroid">
                  <Image
                    unoptimized
                    src="/images/gurleen.jpg"
                    alt="Gurleen Samra"
                    width="1984"
                    height="2087"
                  />
                  <figcaption className="hand">hi, that’s me! ♡</figcaption>
                </figure>
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
            <div className="sticky hand">
              A little logic.
              <br />A little magic.<span>♡</span>
            </div>
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
          <article className="featured project-window">
            <Chrome title="01 / husky-bites.fig" />
            <div className="featured-content">
              <a
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
              </a>
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
                <a
                  className="text-link"
                  href={`${base}uw-dining-app-ux-case-study`}
                >
                  Read the case study <span>↗</span>
                </a>
                <p className="project-meta">
                  Team course project · Figma · Research & prototyping
                </p>
              </div>
            </div>
          </article>
          <div className="project-pair">
            <article className="project-window">
              <Chrome title="02 / mini-git.java" />
              <a
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
              </a>
              <div className="small-project-copy">
                <span className="eyebrow">SOFTWARE ENGINEERING · JAVA</span>
                <h3>Mini-Git</h3>
                <p>
                  Understanding version control by building it: a simplified
                  system exploring commits, branches, and repositories.
                </p>
                <a
                  className="text-link"
                  href={`${base}technical-project-mini-git`}
                >
                  Explore the implementation <span>↗</span>
                </a>
              </div>
            </article>
            <article className="project-window">
              <Chrome title="03 / swe-visuals.design" />
              <a
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
              </a>
              <div className="small-project-copy">
                <span className="eyebrow">VISUAL DESIGN · COMMUNITY</span>
                <h3>Designing for connection</h3>
                <p>
                  Branding, event assets, and social graphics for the Society of
                  Women Engineers at UW. Making community feel inviting.
                </p>
                <a
                  className="text-link"
                  href={`${base}swe-graphics-posters-branding`}
                >
                  See the visual work <span>↗</span>
                </a>
              </div>
            </article>
          </div>
        </section>
        <section id="about" className="about-section">
          <div className="about-note">
            <span className="tape" aria-hidden="true" />
            <p className="hand">Things I come back to:</p>
            <ul>
              <li>thoughtful little details</li>
              <li>making complex things feel simple</li>
              <li>a blank page & a good idea</li>
            </ul>
            <span className="hand signature">— Gurleen ♡</span>
          </div>
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
            <a href="https://gurleenksamra.com/about" className="text-link">
              A little more about me ↗
            </a>
          </div>
        </section>
        <footer id="contact">
          <span className="hand">Have something in mind?</span>
          <h2>
            Let’s make something
            <br />
            <em>thoughtful.</em> <span aria-hidden="true">✳</span>
          </h2>
          <a className="cta" href="mailto:gurleenksamra@gmail.com">
            Say hello <span>↗</span>
          </a>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Gurleen Kaur Samra</span>
            <span>Made with code, care & curiosity.</span>
            <a
              href="https://www.linkedin.com/in/gurleen-kaur-samra"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a href={resume} target="_blank" rel="noreferrer">
              Résumé ↗
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
