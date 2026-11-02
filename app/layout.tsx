import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'FlowRight Plumbing | 24/7 Emergency & Residential Plumbing Services',
  description: 'Expert 24/7 emergency plumbing, residential, and commercial plumbing services by FlowRight Plumbing. Fast response, licensed professionals, transparent pricing.',
  openGraph: {
    title: 'FlowRight Plumbing | 24/7 Emergency & Residential Plumbing Services',
    description: 'Expert 24/7 emergency plumbing, residential, and commercial plumbing services.',
    siteName: 'FlowRight Plumbing',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="font-body bg-primary text-slate-50 antialiased selection:bg-accent selection:text-primary">
        {children}
      </body>
    </html>
  );
}
