export default function StitchTrim({ variant = 'hearts', className = '' }: { variant?: 'hearts' | 'stars' | 'bow'; className?: string }) {
  const heart = ['0110110','1111111','1111111','0111110','0011100','0001000'];
  const star = ['0001000','0001000','0011100','1111111','0011100','0001000','0001000'];
  const bow = ['1100011','1110111','0111110','0001000','0010100','0100010','1000001'];
  const pattern = variant === 'hearts' ? heart : variant === 'bow' ? bow : star;
  return <svg className={`stitch-trim ${className}`} viewBox="0 0 300 64" fill="none" aria-hidden="true">
    <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="square">
      {[0, 1, 2, 3, 4].map(repeat => pattern.flatMap((row, y) => [...row].map((cell, x) => cell === '1' ? <path key={`${repeat}-${y}-${x}`} d={`M${12 + repeat * 59 + x * 5} ${12 + y * 5}l3 3m0-3l-3 3`} /> : null)))}
      <path d="M12 55H288" strokeDasharray="2 5" opacity=".5" />
    </g>
  </svg>;
}
