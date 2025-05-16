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
  title: 'Shivansh Tiwari - Full Stack Architect & Developer',
  description:
    'Portfolio of Shivansh Tiwari, a passionate Full Stack Architect specializing in Node.js, Next.js, React, Python, and AI. Building robust applications and turning ideas into reality.',
  keywords:
    'Shivansh Tiwari, Full Stack Developer, Web Developer, Next.js, React, Node.js, Python, AI, Portfolio, Software Engineer',
  openGraph: {
    title: 'Shivansh Tiwari - Full Stack Architect & Developer',
    description:
      'Portfolio of Shivansh Tiwari, a passionate Full Stack Architect.',
    type: 'website',
    // url: 'https://yourdomain.com', // Replace with your actual domain
    // images: [ // Add a good OG image
    //   {
    //     url: 'https://yourdomain.com/og-image.png',
    //     width: 1200,
    //     height: 630,
    //     alt: 'Shivansh Tiwari Portfolio',
    //   },
    // ],
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
