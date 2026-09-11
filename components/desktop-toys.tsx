'use client';
import { useState } from 'react';

export default function DesktopToys() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState('type help to look around');
  const [party, setParty] = useState(false);
  return <section className="desktop-toys" aria-label="Desktop toys">
    <div className="toy-heading"><span>EXTRA TABS / JUST FOR FUN</span><button type="button" onClick={() => { setParty(true); window.setTimeout(() => setParty(false), 1800); }}>confetti? ✧</button></div>
    <div className="toy-grid">
      <div className="sticker-playground">
        <button type="button" className="moveable-star" aria-label="Move star sticker with drag or arrow keys" style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
          onPointerDown={event => { event.currentTarget.setPointerCapture(event.pointerId); }}
          onPointerMove={event => { if (event.currentTarget.hasPointerCapture(event.pointerId)) setPosition(p => ({ x: Math.max(-65, Math.min(65, p.x + event.movementX)), y: Math.max(-30, Math.min(30, p.y + event.movementY)) })); }}
          onKeyDown={event => { const moves: Record<string, number[]> = { ArrowLeft: [-8, 0], ArrowRight: [8, 0], ArrowUp: [0, -8], ArrowDown: [0, 8] }; const move = moves[event.key]; if (move) { event.preventDefault(); setPosition(p => ({ x: Math.max(-65, Math.min(65, p.x + move[0])), y: Math.max(-30, Math.min(30, p.y + move[1])) })); } }}>✳</button>
        <span className="hand">drag me around ♡</span>
        <button type="button" className="toy-reset" onClick={() => setPosition({ x: 0, y: 0 })}>reset sticker</button>
      </div>
      <form className="toy-terminal" onSubmit={event => { event.preventDefault(); const cmd = command.trim().toLowerCase(); setOutput(({ help: 'try: hello, cat, date, clear', hello: 'hi! glad you stopped by ♡', cat: ' /\_/\\\n( o.o )\n > ^ <', date: new Date().toLocaleDateString(), clear: '' } as Record<string, string>)[cmd] ?? `unknown command: ${cmd || '(empty)'}. try help`); setCommand(''); }}>
        <label htmlFor="toy-command">tiny terminal / no actual shell here</label>
        <pre aria-live="polite">{output}</pre>
        <div><span aria-hidden="true">$ </span><input id="toy-command" value={command} onChange={e => setCommand(e.target.value)} placeholder="help" autoComplete="off" maxLength={80} /><button type="submit">↵ <span className="sr-only">Run command</span></button></div>
      </form>
    </div>
    {party && <div className="toy-confetti" aria-hidden="true">{Array.from({ length: 24 }, (_, i) => <span key={i} style={{ left: `${i * 4.2}%`, animationDelay: `${i % 4 * .08}s` }}>{['✧', '♡', '✳'][i % 3]}</span>)}</div>}
  </section>;
}
