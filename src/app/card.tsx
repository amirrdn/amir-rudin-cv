"use client"
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import SkillsProgress from "@/components/SkillsProgress";
import Calendars from "@/components/Calendar";

interface CardListProps {
  projectsData: {
    id: string;
    title: string;
    description: string;
    link: string;
    images: string[];
    technologies: string[];
    repo: string;
    locales: textLocales[]
  }[];
}

interface textLocales {
  id: string;
  text: string;
}

const CardList: React.FC<CardListProps> = ({ projectsData }) => {
    const [isSticky, setIsSticky] = useState(false);
    const { locale, isLightTheme } = useTheme();
    const [text, setText] = useState<{
        header: { description: string };
        welcome?: { title: string; description: string; viewProjects?: string };
        skills?: { title: string };
        lang: string;
      } | null>(null); 
      
    const checkLocale = useMemo(() => async() => {
        fetch('/locales.json')
          .then((response) => response.json())
          .then((data) => {
            const localeData = filterLocaleByLang(locale, data.locales);
            setText(localeData);
          });
    }, [locale]);

    useEffect(() => {
        checkLocale();
    }, [checkLocale]);

    useEffect(() => {
        const handleScroll = () => {
          setIsSticky(window.scrollY > 0);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const filterLocaleByLang = (lang: string, data: Array<any>) => {
        return data.find((locale: any) => locale.lang === lang);
    };

    return (
        <div>
        <header className={`bg-gray-900 text-white py-20`}>
          <div className={`sm:px-8 top-0 order-last -mb-3 pt-3 transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 w-20 z-10' : ''}`}>
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className={`relative transition-all duration-300 ${isSticky ? 'mt-0 max-sm:left-[155px] lg:left-[165px]' : '-top-10'}`}>
                    <a aria-label="Home" className="block h-16 w-16 origin-left pointer-events-auto" href="/">
                      <Image
                        alt=""
                        fetchPriority="high"
                        width={isSticky ? 50 : 512}
                        height={isSticky ? 50 : 512}
                        decoding="async"
                        data-nimg="1"
                        className={`rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 ${isSticky ? 'lg:h-12 lg:w-12 max-sm:w-10 max-sm:relative max-sm:left-[18px]' : 'h-16 w-16'}`}
                        src="https://media.cakeresume.com/image/upload/s--DkSf_6Rf--/c_fill,g_face,h_120,w_120/v1711289970/fj6u5wav3fmxlvej7drq.jpg"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                  Software Developer.
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  {text?.header.description}
                </p>
                <div className="mt-6 flex gap-6">
                  <a className="group -m-1 p-1" aria-label="Follow on Instagram" href="https://www.instagram.com/amir_rdn_/" target="_blank">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
                      <path d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3.556 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z"></path>
                      <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z"></path>
                    </svg>
                  </a>
                  <a className="group -m-1 p-1" aria-label="Follow on GitHub" href="https://github.com/amirrdn" target="_blank">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path>
                    </svg>
                  </a>
                  <a className="group -m-1 p-1" aria-label="Follow on LinkedIn" href="https://www.linkedin.com/in/amirrdn/" target="_blank">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
                      <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <header className="py-20 lg:flex">
          <div className="lg:w-1/2 flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold mb-4">{text?.welcome?.title ?? 'Default Title'}</h1>
            <p className="text-lg mb-8">{text?.welcome?.description ?? 'Default description'}</p>
            <Link href="/projects" className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition">
              {text?.welcome?.viewProjects ?? 'Lihat Proyek'}
            </Link>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center">
            <Calendars />
          </div>
      </header>
        <section className="py-10">
          <h2 className="text-3xl font-bold text-center mb-6">{text?.skills?.title}</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <SkillsProgress isLightTheme={isLightTheme}/>
          </div>
        </section>
        <div className="container mx-auto py-10">
          <h2 className="text-3xl font-bold text-center mb-10">{locale === 'en' ? 'New Project' : 'Proyek Terbaru'}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData && projectsData.map((b, index) => (
              <div className="bg-white shadow-md rounded-lg overflow-hidden" key={index}>
                <Image src={b.images[0]} alt="Project 1" className="w-full h-48 object-cover" width={300} height={200} />
                <div className="p-4">
                  <h3 className="font-bold text-lg text-black">{b.title}</h3>
                  <p className="text-gray-600">{b.description.length > 100 ? `${b.locales.find(locale => locale.id === text?.lang)?.text.substring(0, 100)}...` : b.description}</p>
                  <Link href="/projects/1" className="text-teal-500 hover:underline">Lihat Detail</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}

export default CardList;