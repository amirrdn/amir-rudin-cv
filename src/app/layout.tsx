// src/app/layout.tsx

import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/context/ThemeContext";
import Header from '../components/Header';
import Footer from '../components/Footer';
import "./globals.css";
import 'react-calendar/dist/Calendar.css';
import { i18n, type Locale } from "../../i18n-config";
const inter = Inter({ subsets: ['latin'] });
import { GoogleTagManager } from '@next/third-parties/google';
import Menu from '@/components/Menu';

export const metadata: Metadata = {
  title: 'Amir Rudin - Portfolio',
  description: 'Welcome to my portfolio website',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  icons:{
    icon: '/favicon.jpg'
  },
  openGraph: {
    title: 'Amir Rudin - Portfolio',
    description: 'Welcome to my portfolio website',
    images: ['/amir-rdn.jpg'], // Path to the default image
  },
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({ children, params }: { children: React.ReactNode, params: { lang: Locale }; }) {
  return (
    <html lang={params.lang ?? 'id'}>
       <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GA_ID as string} />
    <body className={inter.className}>
    <link rel="icon" href="/favicon.jpg" sizes="any" />
        <ThemeProvider>
          <Header />
          <Menu />
          <div className="container mx-auto p-4">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
