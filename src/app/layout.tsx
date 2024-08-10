// src/app/layout.tsx

import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/context/ThemeContext";
import Header from '../components/Header';
import Footer from '../components/Footer';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Amir Rudin - Portfolio',
  description: 'Welcome to my portfolio website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // <html lang="en">
    //   <body className={inter.className}>{children}</body>
    // </html>
    <html lang="id">
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
