'use client';
import { useState } from 'react';

export default function DesktopToys() {
  const [lights, setLights] = useState([false, false, true, false, false, false, true, false, false]);
  const [moves, setMoves] = useState(0);
  const solved = lights.every(Boolean);
  function toggleLight(index: number) {
    if (solved) return;
    setLights(previous => previous.map((lit, cell) =>
      Math.abs(Math.floor(cell / 3) - Math.floor(index / 3)) + Math.abs(cell % 3 - index % 3) <= 1 ? !lit : lit));
    setMoves(previous => previous + 1);
  }
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState('type help to look around');
  const [party, setParty] = useState(false);
  return <section className="desktop-toys" aria-label="Desktop toys">
    <div className="toy-heading"><span>EXTRA TABS / JUST FOR FUN</span><button type="button" onClick={() => { setParty(true); window.setTimeout(() => setParty(false), 1800); }}>confetti? ✧</button></div>
    <div className="toy-grid">
      <div className="star-puzzle">
        <span className="hand">a little star puzzle</span>
        <p>Light up every star. Tap one to flip it and its neighbors.</p>
        <div className="star-puzzle-board" role="group" aria-label="Star puzzle">
          {lights.map((lit, index) => <button key={index} type="button" aria-label={`Star ${index + 1}`} aria-pressed={lit} aria-disabled={solved} onClick={() => toggleLight(index)}>{lit ? '★' : '☆'}</button>)}
        </div>
        <span className="puzzle-status" aria-live="polite">{solved ? `all lit up ♡ ${moves} moves` : `${moves} moves`}</span>
        <button type="button" className="toy-reset" onClick={() => { setLights([false, false, true, false, false, false, true, false, false]); setMoves(0); }}>start over</button>
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
