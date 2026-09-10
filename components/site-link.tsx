/* oxlint-disable next/no-html-link-for-pages */
import type { ComponentProps } from 'react';
import { sitePath } from '@/lib/site-path';
// Native navigation intentionally avoids a vinext client-router error.
export default function SiteLink({href,children,...props}:ComponentProps<'a'>) {
  return <a {...props} href={href ? sitePath(href) : undefined}>{children}</a>;
}
