"use client"; // Menandakan bahwa ini adalah Client Component

import { FC, useContext, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image'; // Mengimpor Image dari next/image
import { useTheme } from '../context/ThemeContext';
import { useRouter } from 'next/navigation';

const Header: FC = () => {
  const { isLightTheme, setIsLightTheme, locale, setLocales } = useTheme();
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false); // State untuk sticky header
  const [dropdownOpen, setDropdownOpen] = useState(false); // State untuk dropdown
  const dropdownRef = useRef<HTMLDivElement | null>(null); // Tipe HTMLDivElement

  const router = useRouter();
  const [lang, setLang] = useState<'en' | 'id'>('en');
  
  const isroute = pathname.split('/')[1];
  useEffect(()  => {
    if(isroute === 'cv'){
      setLang(pathname.split('/')[2] as 'en' | 'id');
      setLocales(pathname.split('/')[2] as 'en' | 'id')
      // router.push(`/${pathname.split('/')[1]}/${lang}`);
    }
   }, [isroute, pathname, setLocales])
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0); // Perbarui state berdasarkan posisi scroll
    };

    window.addEventListener('scroll', handleScroll); // Tambahkan event listener scroll
    return () => {
      window.removeEventListener('scroll', handleScroll); // Hapus event listener saat unmount
    };
  }, []);

  const toggleTheme = () => {
    setIsLightTheme((prev: boolean) => !prev); // Memperbarui context dengan tipe boolean
  };

  const handleLanguageChange = (lang: string) => {
    setLocales(lang); 
  };
  const changeRoute = (lang: 'en' | 'id') => {
    setLang(lang);
    // Redirect to the current page with the new language
    const isroute = pathname.split('/')[1];
    if(isroute === 'cv'){
      router.push(`/${pathname.split('/')[1]}/${lang}`);
    }
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={`shadow-md ${isLightTheme ? 'bg-gray-300 text-gray-900' : 'bg-gray-900 text-white'} ${isSticky ? 'fixed top-0 left-0 w-full z-10' : ''}`}>
      <div className="container mx-auto flex justify-between items-center p-4">
      <Link href="/"><h1 className="text-3xl font-bold">AMIR RUDIN</h1></Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/articles" className={`hover:text-teal-500 ${pathname === '/articles' ? 'text-teal-500' : ''}`}>Articles</Link>
          <Link href="/projects" className={`hover:text-teal-500 ${pathname === '/projects' ? 'text-teal-500' : ''}`}>Projects</Link>
          <Link href="/cv/id" className={`hover:text-teal-500 ${pathname === '/cv/id' || pathname === '/cv/en' ? 'text-teal-500' : ''}`}>CV</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button
            type="button"
            aria-label="Switch to light theme"
            className="group rounded-full bg-gray-800/90 p-2 transition hover:bg-gray-700/90 focus:outline-none"
            onClick={toggleTheme}
          >
            <svg
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 stroke-zinc-500 transition group-hover:stroke-teal-400"
              aria-hidden="true"
            >
              <path d="M12 3v1.5M12 19.5v1.5M3 12H1.5M22.5 12H21M5.29 5.29l1.06 1.06M18.36 18.36l1.06 1.06M5.29 18.36l1.06-1.06M18.36 5.29l1.06-1.06M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" />
            </svg>
          </button>
          <div className="relative" ref={dropdownRef}>
            <button className="flex items-center space-x-2" onClick={() => setDropdownOpen(prev => !prev)} >
              <Image src={locale === 'en' || lang === 'en' ? '/img/english.svg' : '/img/indonesia.svg'} alt="Flag" width={20} height={20} />
              <span>{locale === 'en' ? 'English' : 'Bahasa'}</span>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                <button onClick={() => {handleLanguageChange('en'), changeRoute('en')}} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">English</button>
                <button onClick={() => {handleLanguageChange('id'), changeRoute('id')}} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">Bahasa</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;