import { sitePath } from '@/lib/site-path';
import './background-stitch.css';
export default function BackgroundStitch({ motif, className = '' }: { motif: 'bow' | 'note' | 'butterfly' | 'sweep'; className?: string }) {
  const mask = `url("${sitePath(`/images/stitch/${motif}.svg`)}")`;
  return <span aria-hidden="true" className={`background-stitch stitch-${motif} ${className}`} style={{ maskImage: mask, WebkitMaskImage: mask }} />;
}
