import './globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SmoothWrapper from './components/SmoothWrapper'; 

// Fonts
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// ✅ Global Metadata (SEO + Social with OG Image)
export const metadata = {
  title: 'FFuturewise Software Solution',
  description: 'Empowering your future with innovative software.',
  keywords: [
    'software solutions',
    'custom software development',
    'IT services',
    'web development',
    'mobile app development',
    'enterprise solutions',
    'cloud computing',
    'AI solutions',
    'digital transformation',
    'technology consulting',
    'business automation',
    'SaaS development',
    'ecommerce development',
    'frontend development',
    'backend development',
    'UI UX design',
    'startup software solutions',
    'FFuturewise',
    'software company India',
    'tech innovation',
  ],
  icons: {
    icon: '/FF logo.png',
  },
  openGraph: {
    title: 'FFuturewise Software Solution',
    description: 'Empowering your future with innovative software.',
    url: 'https://www.ffuturewisesoftwaresolution.com',
    siteName: 'FFuturewise Software Solution',
    images: [
      {
        url: 'https://www.ffuturewisesoftwaresolution.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FFuturewise Software Solution',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FFuturewise Software Solution',
    description: 'Empowering your future with innovative software.',
    images: ['https://www.ffuturewisesoftwaresolution.com/og-image.png'],
  },
  metadataBase: new URL('https://www.ffuturewisesoftwaresolution.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-[Poppins] antialiased`}
      >
        <SmoothWrapper /> 
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
