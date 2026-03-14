import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './contexts/ThemeContext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Improves font loading
  variable: '--font-inter', // Optional: if you want to use it as a CSS variable
});

export const metadata: Metadata = {
  title: 'Shivansh Tiwari - Senior Software Developer',
  description:
    'Portfolio of Shivansh Tiwari — Senior Software Developer building scalable backend systems, AI-integrated apps, and full-stack products end-to-end.',
  keywords:
    'Shivansh Tiwari, Senior Software Developer, Full Stack Developer, Node.js, Next.js, React, Kafka, WebSockets, AI, System Architecture, Portfolio',
  openGraph: {
    title: 'Shivansh Tiwari - Senior Software Developer',
    description:
      'Building scalable, production-grade systems end-to-end — backends, AI-integrated apps, and polished frontends.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning className={inter.variable}>
      {' '}
      {/* Add inter.variable if using CSS var */}
      <body className={`${inter.className} antialiased`}>
        {' '}
        {/* Ensure Inter class is applied and antialiased */}
        <ThemeProvider>{children}</ThemeProvider>
        {/* Removed any potential Vercel/Next.js default banners here if they existed */}
      </body>
    </html>
  );
}
