// src/app/layout.tsx

import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/context/ThemeContext";
import Header from '../components/Header';
import Footer from '../components/Footer';
import "./globals.css";
import { i18n, type Locale } from "../../i18n-config";
const inter = Inter({ subsets: ['latin'] });
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: 'Amir Rudin - Portfolio',
  description: 'Welcome to my portfolio website',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({ children, params }: { children: React.ReactNode, params: { lang: Locale }; }) {
  return (
    <html lang={params.lang ?? 'id'}>
       <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GA_ID as string} />
    <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <div className="container mx-auto p-4">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
