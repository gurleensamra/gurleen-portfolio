/** Original pixel patches with stitched edges and printed ephemera. */
export default function StitchTrim({ variant = 'hearts', className = '' }: { variant?: 'hearts' | 'stars' | 'butterfly'; className?: string }) {
  const pixels = variant === 'hearts'
    ? ['01100110','11111111','11111111','01111110','00111100','00011000']
    : variant === 'butterfly'
    ? ['1100000011','1110110111','1111111111','0111111110','0011111100','0110110110','1100110011','1000110001']
    : ['0001000','0011100','1111111','0111110','0011100','0100010'];
  return <svg className={`stitch-trim ${className}`} viewBox="0 0 320 128" fill="none" aria-hidden="true">
    <g transform="translate(15 12) rotate(-5 56 50)">
      <path d="M0 8L12 0H112V94L101 103H0Z" fill="var(--patch-paper, #dfc5e5)" stroke="currentColor" />
      <path d="M8 13V94H102V9H16" stroke="currentColor" strokeDasharray="2 4" />
      <g stroke="currentColor" strokeWidth="1.5">
        {pixels.flatMap((row, y) => [...row].map((pixel, x) => pixel === '1' ? <path key={`${x}-${y}`} d={`M${23+x*6} ${23+y*6}l3 3m0-3l-3 3`} /> : null))}
      </g>
      <path d="M20 86H40M46 86H49M55 86H90" stroke="currentColor" />
    </g>
    <g transform="translate(116 45) rotate(3)">
      <path d="M0 0H181V62H0V40L5 36L0 32Z" fill="var(--patch-ink, #412b3d)" />
      <path d="M7 7H174V55H7Z" stroke="#efbad3" strokeDasharray="2 4" strokeWidth=".8" />
      <text x="16" y="24" fill="#f7d9eb" fontFamily="monospace" fontSize="10" letterSpacing="1">{variant === 'butterfly' ? 'PERSONAL FILES / 01' : variant === 'hearts' ? 'HANDMADE / GKS' : 'END OF FILE _'}</text>
      <g stroke="#dfc5e5">{[0,3,8,11,17,22,25,31,38,41,47,52,58,63,66,74,79,85,91,94,101,108,113,119,125,130,138].map((x,i) => <path key={x} d={`M${16+x} 34v13`} strokeWidth={i%3===0?2:1} />)}</g>
    </g>
    <path d="M119 16l6 6m0-6l-6 6M275 18l5 5m0-5l-5 5" stroke="currentColor" strokeWidth="1.5" />
  </svg>;
}
