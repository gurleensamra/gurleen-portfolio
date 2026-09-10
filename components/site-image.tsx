/* oxlint-disable next/no-img-element */
import type { ComponentProps } from 'react';
import { sitePath } from '@/lib/site-path';
type Props = ComponentProps<'img'> & { unoptimized?: boolean; priority?: boolean };
export default function SiteImage({src,alt,unoptimized: _unoptimized,priority,...props}:Props) {
  return <img {...props} alt={alt} src={typeof src === 'string' ? sitePath(src) : src} fetchPriority={priority ? 'high' : undefined} />;
}
