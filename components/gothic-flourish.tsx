'use client';
import { useId } from 'react';
import { sitePath } from '@/lib/site-path';
export default function GothicFlourish({ variant, className = '' }: { variant: 'sweep' | 'diamond' | 'wave'; className?: string }) {
  const id = useId().replace(/:/g, '');
  const crop = { sweep: '40 10 1460 285', diamond: '40 340 1460 165', wave: '40 785 1460 215' }[variant];
  return <svg className={`gothic-flourish ${className}`} viewBox={crop} aria-hidden="true" focusable="false">
    <defs>
      <filter id={`${id}-ink`} colorInterpolationFilters="sRGB">
        <feColorMatrix type="saturate" values="0" />
        <feComponentTransfer><feFuncR type="linear" slope="-2" intercept="1.5" /><feFuncG type="linear" slope="-2" intercept="1.5" /><feFuncB type="linear" slope="-2" intercept="1.5" /></feComponentTransfer>
      </filter>
      <mask id={`${id}-mask`} maskUnits="userSpaceOnUse" x="0" y="0" width="1536" height="1024" style={{ maskType: 'luminance' }}>
        <image href={sitePath('/images/gothic-flourishes.png')} width="1536" height="1024" filter={`url(#${id}-ink)`} />
      </mask>
    </defs>
    <rect width="1536" height="1024" fill="currentColor" mask={`url(#${id}-mask)`} />
  </svg>;
}
