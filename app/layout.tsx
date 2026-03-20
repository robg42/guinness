import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  variable: '--font-serif',
  subsets:  ['latin'],
  weight:   ['400', '700', '900'],
});

const inter = Inter({
  variable: '--font-sans',
  subsets:  ['latin'],
  weight:   ['400', '500', '600'],
});

export const metadata: Metadata = {
  title:       'Best Guinness in London',
  description: 'A curated guide to the finest pints of Guinness across London.',
  openGraph: {
    title:       'Best Guinness in London',
    description: 'A curated guide to the finest pints of Guinness across London.',
    type:        'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
