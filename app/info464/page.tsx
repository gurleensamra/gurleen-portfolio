/* Native anchors match the portfolio static-export navigation. */
/* oxlint-disable next/no-html-link-for-pages */
import Image from '@/components/site-image';
import type { Metadata } from 'next';
import { Fragment } from 'react';
import source from './content.json';
import './info464.css';
export const metadata: Metadata = {
  title: 'Designed Around People — Gurleen Samra · INFO 464',
  description: 'Two individual projects viewed through Value Sensitive Design: Spotify AI DJ and a personal portfolio.',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false, noimageindex: true } },
  openGraph: { title: 'Designed Around People', description: 'Gurleen Samra · INFO 464 Value Sensitive Design portfolio', url: 'https://gurleenksamra.com/info464', images: ['/images/share-cover.png'] },
};
function inline(text: string) {
  return text.split(/(\*\*.*?\*\*|\*[^*]+\*)/g).map((part, i) => part.startsWith('**') ? <strong key={i}>{part.slice(2,-2)}</strong> : part.startsWith('*') ? <em key={i}>{part.slice(1,-1)}</em> : part);
}
function prose(text: string) {
  return text.split(/\n\s*\n/).filter(block => !block.startsWith('**Visual:') && block.trim() !== '---').map((block, i) => {
    if (/^#{1,4} /.test(block) && block.includes('\n')) return <Fragment key={i}>{block.split('\n').map((line,j) => { const match=line.match(/^(#{1,4}) (.*)$/); if (!match) return <p key={j}>{inline(line)}</p>; return match[1].length===4 ? <h4 key={j}>{match[2]}</h4> : match[1].length===3 ? <h3 key={j}>{match[2]}</h3> : <h2 key={j}>{match[2]}</h2>; })}</Fragment>;
    if (block.startsWith('#### ')) return <h4 key={i}>{block.slice(5)}</h4>;
    if (block.startsWith('### ')) return <h3 key={i}>{block.slice(4)}</h3>;
    if (block.startsWith('## ')) return <h2 key={i}>{block.slice(3)}</h2>;
    if (block.startsWith('# ')) return <h2 key={i}>{block.slice(2)}</h2>;
    if (block.startsWith('- ')) return <ul key={i}>{block.split('\n').map((line,j) => <li key={j}>{inline(line.replace(/^- /,''))}</li>)}</ul>;
    return <p key={i}>{block.split('\n').map((line,j) => <Fragment key={j}>{j>0 && <br/>}{inline(line)}</Fragment>)}</p>;
  });
}
const people = {
  dj: [['Listeners','Autonomy · discovery · connection','Direct'],['Artists','Creativity · recognition · visibility','Indirect'],['Music communities','Shared stories · relationships','Indirect'],['Spotify','Convenience · personalization · engagement','Platform']],
  web: [['Gurleen','Identity · autonomy · privacy','Creator'],['Recruiters','Clarity · efficiency · trust','Direct'],['Classmates & instructors','Usability · access to work','Direct'],['Assistive technology users','Accessibility · equitable access','Direct']],
};
function Stakeholders({kind}:{kind:'dj'|'web'}) {
  return <figure className="vsd-diagram"><figcaption>01 / Stakeholder & value map</figcaption><div className="vsd-map"><div className="vsd-map-center">{kind==='dj'?'Music discovery':'A personal portfolio'}<small>Who is affected?</small></div><div className="vsd-nodes">{people[kind].map(([name,values,type])=><div key={name}><small>{type}</small><strong>{name}</strong><span>{values}</span></div>)}</div></div><p className="vsd-caption">{kind==='dj'?'Tension: convenient prediction ↔ social meaning and artistic visibility.':'Tension: expressive identity ↔ fast, equitable access to information.'}</p></figure>;
}
function Tripartite({kind}:{kind:'dj'|'web'}) {
  return <figure className="vsd-diagram"><figcaption>Three investigations, in conversation</figcaption><div className="vsd-three">{[
    ['01 / Conceptual','What should matter?',kind==='dj'?'Personalization ≠ connection':'Self-expression ↔ usability','Completed reflection'],
    ['02 / Empirical','How do people experience it?',kind==='dj'?'Interview listeners about discovery':'Observe recruiter and keyboard journeys','Proposed future research'],
    ['03 / Technical','What does the system enable?',kind==='dj'?'Playback control ≠ recommendation explanation':'Responsive layouts, skip links, focus and motion preferences','Interface / implementation reflection'],
  ].map(([label,title,detail,status])=><div key={label}><small>{label}</small><h4>{title}</h4><p>{detail}</p><span className="vsd-status">{status}</span></div>)}</div><p className="vsd-caption">Conceptual ↔ empirical ↔ technical: complementary inquiries, not a claim that formal research was conducted.</p></figure>;
}
function Scenarios({kind}:{kind:'dj'|'web'}) {
  return <figure className="vsd-diagram"><figcaption>02 / Value scenarios · hypothetical, not observed sessions</figcaption><div className="vsd-scenarios">{(kind==='dj' ? [['A / Algorithm','Open AI DJ → familiar songs → easy listening','Convenience and preference matching','Missing context: the stories and people behind a recommendation.'],['B / A friend','A shared memory → an unfamiliar song → curiosity','Connection and exploration','The relationship makes an unexpected recommendation meaningful.']] : [['A / Recruiter','Arrive → find selected work → understand contributions','Clarity and efficiency','Expressive visuals need a recognizable route to experience.'],['B / Keyboard visitor','Tab → skip navigation → reach project links','Accessibility and autonomy','Information must remain available without mouse-only interactions.']]).map(([label,flow,value,note])=><div key={label}><small>{label}</small><h4>{flow}</h4><strong>{value}</strong><p>{note}</p></div>)}</div></figure>;
}
function Envisioning(){return <figure className="vsd-diagram"><figcaption>03 / Envisioning Cards · portfolio extension</figcaption><div className="vsd-three">{[['Stakeholders','Beyond the listener','Artists and communities also experience the effects of recommendation systems.'],['Time','If automation becomes the default…','What happens to spontaneous song sharing and discovery conversations?'],['Pervasiveness','From commute to study session','Everyday recommendations may shape taste as well as individual listening choices.']].map(([label,title,text])=><div key={label}><small>{label}</small><h4>{title}</h4><p>{text}</p></div>)}</div><p className="vsd-caption">Reflective prompts inspired by the method; no card workshop or participant study is claimed.</p></figure>}
function Screenshot({file,caption}:{file:string;caption:string}){return <figure className="vsd-shot"><Image unoptimized src={`/info464-assets/${file}.png`} alt={caption} width="1440" height="960" loading="lazy"/><figcaption>{caption}</figcaption></figure>}
function CaseStudy({text,kind}:{text:string;kind:'dj'|'web'}){
 const sections=text.split(/(?=^### )/m);
 return <article id={kind==='dj'?'ai-dj':'digital-identity'} className={`vsd-case vsd-${kind}`}>
 <div className="vsd-windowbar"><span aria-hidden="true">● ● ●</span>{kind==='dj'?'01 / beyond-the-algorithm.zine':'02 / digital-identity.site'}</div>
 <div className="vsd-case-body">{sections.map((section,i)=><section className="vsd-section" key={i}>{prose(section)}
 {i===0 && (kind==='dj'?<figure className="vsd-zine"><a href="/info464-assets/ai-dj-zine.png"><Image unoptimized src="/info464-assets/ai-dj-zine.png" width="1080" height="1350" alt="Original Spotify AI DJ zine: artist and album collage surrounding the AI DJ symbol, with music player controls."/></a><figcaption>Original AI DJ zine · select to view full size</figcaption></figure>:<Screenshot file="portfolio-home" caption="Actual portfolio homepage: personal typography and desktop windows express identity; recognizable navigation supports clarity."/>)}
 {section.startsWith('### Stakeholders') && <Stakeholders kind={kind}/>}
 {section.startsWith('### Tripartite') && <Tripartite kind={kind}/>}
 {section.startsWith('### Value Sensitive') && <><Scenarios kind={kind}/>{kind==='dj'?<Envisioning/>:<><div className="vsd-diagram"><h4>03 / Value-oriented design analysis</h4><div className="vsd-values">{[['Scrapbook visual language','Self-expression'],['Project navigation','Efficiency'],['Skip link & focus indicators','Accessibility'],['Day / night preference','User control'],['Unlisted course page','Autonomy & selective visibility']].map(([feature,value])=><div key={feature}><span>{feature}</span><b>→</b><strong>{value}</strong></div>)}</div></div><Screenshot file="portfolio-work" caption="Recruiter scenario annotation: Selected Work and explicit project links provide a route to technical experience."/><Screenshot file="portfolio-keyboard" caption="Keyboard scenario annotation: the visible Skip to projects link is reached with Tab. This screenshot demonstrates one interaction, not a full accessibility audit."/></>}</>}
 </section>)}</div></article>
}
export default function Info464(){
 const [intro,rest]=source.split('# 01. Beyond the Algorithm');
 const [dj,remaining]=rest.split('# 02. Designing My Digital Identity');
 const [web,reflection]=remaining.split('# Final Reflection');
 return <main className="vsd-page"><a className="vsd-skip" href="#ai-dj">Skip to case studies</a><div className="vsd-shell"><header className="vsd-hero"><div className="vsd-meta"><span>GURLEEN KAUR SAMRA</span><span>INFO 464 / VALUE SENSITIVE DESIGN</span></div><span className="vsd-sticker">two projects.<br/>many values.</span><p className="vsd-eyebrow">A FIELD GUIDE TO MY DESIGN DECISIONS</p><h1>Designed<br/>Around <em>People</em></h1><p className="vsd-deck">Exploring human connection, identity, and agency through Value Sensitive Design.</p><nav aria-label="Case studies"><a href="#ai-dj">01 · Spotify AI DJ ↘</a><a href="#digital-identity">02 · My digital identity ↘</a><a href="#reflection">Final reflection ↘</a></nav></header>
 <section className="vsd-intro"><span className="vsd-eyebrow">START HERE / THE THROUGHLINE</span>{prose(intro.slice(intro.indexOf('Technology is often')))}<aside className="vsd-note"><strong>A note on evidence</strong><p>These are individual design reflections. The value scenarios are hypothetical. Interviews and formal usability or accessibility research are future work, not completed studies.</p></aside></section>
 <CaseStudy text={'# 01. Beyond the Algorithm'+dj} kind="dj"/>
 <div className="vsd-interlude"><span>CONNECTION</span><span aria-hidden="true">↔</span><span>CONTROL</span><p>Different artifacts. A shared question: whose values does a design make room for?</p></div>
 <CaseStudy text={'# 02. Designing My Digital Identity'+web} kind="web"/>
 <section id="reflection" className="vsd-reflection">{prose('# Final Reflection'+reflection)}</section>
 <footer className="vsd-footer"><span>GKS / INFO 464 / DESIGNED AROUND PEOPLE</span><p>Unlisted, not private: anyone with the URL can view this page. It is excluded from public navigation and marked noindex.</p><p className="vsd-print-hint">To save a PDF: Print → Save as PDF. The print layout includes both case studies, diagrams, and original artwork.</p></footer></div></main>;
}
