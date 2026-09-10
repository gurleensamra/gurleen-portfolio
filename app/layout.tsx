import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
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
