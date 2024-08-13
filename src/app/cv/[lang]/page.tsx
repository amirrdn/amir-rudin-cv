import LeftRight from "@/components/cv/LeftRight";
import Rightcolumn from "@/components/cv/Rightcolumn";
import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../i18n-config";
import { Metadata } from "next";

export const generateMetadata = async ({
    params: { lang },
  }: {
    params: { lang: Locale };
  }): Promise<Metadata> => {
    //   const projectsData = await fetchProjects();
    const project = await getDictionary(lang);
      if (!project) {
        return {
          title: 'Project Not Found',
          description: 'The project you are looking for does not exist.',
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
      }
    
      return {
        title: `CV - Amir Rudin`,
        description: project['intro'],
        icons:{
          icon: '/favicon.jpg'
        },
        openGraph: {
          title: 'CV - Amir Rudin',
          description: project['intro'],
          url: `https://amir-rudin-portofolio.vercel.app/cv/${lang}`,
          images:['/amir-rdn.jpg']
        },
      };
    };

export default async function HomeCV({
    params: { lang },
  }: {
    params: { lang: Locale };
  }) {
    const dictionary = await getDictionary(lang);
    return(
        <>
            <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <LeftRight dictionary={dictionary} />
                </div>
                <div>
                    <Rightcolumn dictionary={{ 
                        ...dictionary, 
                        exprience: dictionary.exprience?.map(item => ({
                            title: item.title,
                            company: item.company,
                            date_work: [], // Ubah ini sesuai kebutuhan
                            jobdesc: item.jobdesc,
                            address_work: item.address_work
                        })) 
                    }} />
                </div>
            </div>
        </>
    )
}