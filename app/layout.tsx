import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://gurleenksamra.com'),
  openGraph: {
    title: 'Gurleen Samra',
    description: 'Software, design & a little bit of whimsy.',
    url: 'https://gurleenksamra.com',
    type: 'website',
    images: [{ url: '/images/share-cover.png', width: 1200, height: 630, alt: 'Gurleen — Software, design & a little bit of whimsy.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gurleen Samra',
    description: 'Software, design & a little bit of whimsy.',
    images: ['/images/share-cover.png'],
  },
  title: 'Gurleen Samra — Software & Human-Centered Design',
  description:
    'Selected software engineering, UX research, and visual design work by Gurleen Kaur Samra. Thoughtful experiences built with code and creativity.',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
