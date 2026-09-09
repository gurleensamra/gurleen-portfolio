import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import PortfolioFrame from '@/components/portfolio-frame';
import { projects } from '@/lib/projects';
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const p = projects[slug as keyof typeof projects];
  return { title: p ? `${p.title} — Gurleen Samra` : 'Project not found' };
}
export default async function Project({ params }: Props) {
  const { slug } = await params;
  const p = projects[slug as keyof typeof projects];
  if (!p) notFound();
  const keys = Object.keys(projects);
  const next = keys[(keys.indexOf(slug) + 1) % keys.length];
  return (
    <PortfolioFrame>
      <Link className="text-link" href="/#work">
        ← Back to selected work
      </Link>
      <header className="story-heading">
        <p className="eyebrow">{p.category}</p>
        <h1>{p.title}</h1>
        <p className="story-subtitle">{p.subtitle}</p>
      </header>
      <div className="story-cover project-window">
        <div className="window-bar">
          {p.title} / project notebook <span aria-hidden="true">✧</span>
        </div>
        <Image
          unoptimized
          src={`/images/${p.image}`}
          alt={p.alt}
          width={1362}
          height={1362}
          priority
        />
      </div>
      <dl className="story-facts">
        <div>
          <dt>CONTEXT</dt>
          <dd>{p.context}</dd>
        </div>
        <div>
          <dt>CONTRIBUTION</dt>
          <dd>{p.role}</dd>
        </div>
        <div>
          <dt>TOOLS</dt>
          <dd>{p.tools}</dd>
        </div>
      </dl>
      <div className="story-layout">
        <aside className="story-index">
          <p className="eyebrow">IN THIS NOTEBOOK</p>
          {p.sections.map((s, i) => (
            <Link key={s.title} href={`#part-${i}`}>
              {String(i + 1).padStart(2, '0')} / {s.title}
            </Link>
          ))}
        </aside>
        <article className="story-body">
          {p.sections.map((s, i) => (
            <section id={`part-${i}`} key={s.title}>
              <span className="eyebrow">{String(i + 1).padStart(2, '0')}</span>
              <h2>{s.title}</h2>
              <p>{s.text}</p>
              {'points' in s && (
                <ul>
                  {s.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>
      </div>
      {slug === 'swe-graphics-posters-branding' && (
        <section className="art-gallery" aria-label="SWE design collection">
          {[
            'Bracelets and Boba · September 2025',
            'Graduate School Survival Kit · October 2025',
            'General Meeting · February 2025',
            'May 2025 Newsletter',
            'April 2025 Newsletter',
            'Executive-team polo · September 2025',
            'Executive-team polo detail',
          ].map((caption, i) => (
            <figure key={caption}>
              <Image
                unoptimized
                src={`/images/swe-${i}.png`}
                alt={caption}
                width={1545}
                height={2000}
                loading="lazy"
              />
              <figcaption>{caption}</figcaption>
            </figure>
          ))}
        </section>
      )}
      <Link className="next-project project-window" href={`/projects/${next}`}>
        <span className="eyebrow">NEXT PROJECT →</span>
        <h2>{projects[next as keyof typeof projects].title}</h2>
      </Link>
    </PortfolioFrame>
  );
}
