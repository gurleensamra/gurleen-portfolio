/* Native anchors intentionally avoid the deployed vinext Link navigation failure. */
/* oxlint-disable next/no-html-link-for-pages */
import SiteLink from '@/components/site-link';
import Image from '@/components/site-image';
import PortfolioFrame from '@/components/portfolio-frame';
export const metadata = { title: 'About Gurleen — Software, Design & Art' };
export default function About() {
  return (
    <PortfolioFrame>
      <header className="story-heading">
        <p className="eyebrow">ABOUT ME</p>
        <h1>Gurleen Kaur Samra</h1>
        <p className="story-subtitle">
          Software engineering, user experience, and room to experiment.
        </p>
      </header>
      <section className="about-detail">
        <figure className="polaroid">
          <Image
            unoptimized
            src="/images/gurleen-2026.jpeg"
            alt="Gurleen Samra"
            width={4000}
            height={6000}
          />
          <figcaption className="hand">hi again ♡</figcaption>
        </figure>
        <div>
          <h2>Code & design.</h2>
          <p>
            I’m an Informatics student at the University of Washington exploring
            the intersection of software engineering and user experience design.
          </p>
          <p>
            I focus on software development, UX/UI design, and human–computer
            interaction. I enjoy turning complex problems into interfaces and
            tools that are intuitive, purposeful, and accessible.
          </p>
          <p>
            That means moving between developing in Java and prototyping in
            Figma, and thinking about both how a system works and how someone
            experiences it.
          </p>
          <h2>And a little art.</h2>
          <p>
            I also experiment with digital art and watercolors. Visual work is
            another way for me to explore an idea, from a blank page to
            something someone else can connect with.
          </p>
          <SiteLink className="cta" href="mailto:gurleenksamra@gmail.com">
            Let’s talk ↗
          </SiteLink>
        </div>
      </section>
    </PortfolioFrame>
  );
}
