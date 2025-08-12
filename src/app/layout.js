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

// Global Metadata
export const metadata = {
  title: 'FFuturewise Software Solution',
  description: 'Empowering your future with innovative software.',
  icons: {
    icon: '/FF logo.png',
  },
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
      <body className={`${geistSans.variable} ${geistMono.variable} font-[Poppins] antialiased`}>
        <SmoothWrapper /> 
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
