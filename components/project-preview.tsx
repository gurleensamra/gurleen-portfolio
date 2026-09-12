'use client';
import { useRef, useState } from 'react';
import SiteLink from './site-link';
import { sitePath } from '@/lib/site-path';
export default function ProjectPreview({ kind }: { kind: 'git' | 'swe' }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [poster, setPoster] = useState(0);
  const [step, setStep] = useState(0);
  const commands = ['git init', 'git add hello.java', 'git commit -m "first commit"', 'git log'];
  const results = ['Created an empty repository.', 'hello.java staged.', 'Saved commit 01: first commit', '01 → first commit\nHEAD → 01'];
  return <>
    <button className="preview-trigger" type="button" onClick={() => dialog.current?.showModal()}>open {kind === 'git' ? 'terminal' : 'posters'} ↗</button>
    <dialog className="project-preview" ref={dialog} onClick={e => { if (e.target === e.currentTarget) dialog.current?.close(); }}>
      <div className="preview-content">
        <header><span>{kind === 'git' ? 'mini-git / interactive walkthrough' : 'swe / poster collection'}</span><button type="button" onClick={() => dialog.current?.close()} aria-label="Close preview">×</button></header>
        {kind === 'git' ? <div className="git-walkthrough"><p>A small illustration of the workflow.</p><pre aria-live="polite">{commands.slice(0, step).map((command, i) => `$ ${command}\n${results[i]}`).join('\n\n') || '$ _'}</pre><button type="button" onClick={() => setStep(s => s === 4 ? 0 : s + 1)}>{step === 4 ? 'start again ↺' : `run: ${commands[step]}`}</button></div> : <div className="poster-viewer"><img src={sitePath(`/images/swe-${poster}.png`)} alt={`SWE event poster ${poster + 1}`} /><nav aria-label="Poster controls"><button type="button" onClick={() => setPoster(p => (p + 6) % 7)}>← previous</button><span aria-live="polite">{poster + 1} / 7</span><button type="button" onClick={() => setPoster(p => (p + 1) % 7)}>next →</button></nav></div>}
        <SiteLink className="preview-story" href={`/projects/${kind === 'git' ? 'technical-project-mini-git' : 'swe-graphics-posters-branding'}`}>read the full project ↗</SiteLink>
      </div>
    </dialog>
  </>;
}
