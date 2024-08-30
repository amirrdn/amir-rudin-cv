import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../lib/firebaseConfig';
import Laravelpage from '../laravel';
import Image from "next/image";
import Shopchart from '../shopchart';

interface Project {
  id: number
  title: string;
  description: string;
  image: string;
  slug: string;
  html: string;
}

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
  const projectsCollection = collection(db, "articles");
  const q = query(projectsCollection, where("slug", "==", params.slug));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
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
        },
      },
      icons: {
        icon: '/favicon.jpg',
      },
      openGraph: {
        title: 'Amir Rudin - Portfolio',
        description: 'Welcome to my portfolio website',
        images: ['/amir-rdn.jpg'], // Path to the default image
      },
    };
  }

  const project = querySnapshot.docs[0].data() as Project;

  return {
    title: `${project.title} - Amir Rudin`,
    description: project.description,
    icons: {
      icon: '/favicon.jpg',
    },
    openGraph: {
      title: project.title,
      description: project.description,
      url: `https://amir-rudin-portofolio.vercel.app/article/${params.slug}`,
      images: [project.image],
    },
  };
};

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const projectsCollection = collection(db, "articles");
  const q = query(projectsCollection, where("slug", "==", params.slug));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return <p>TIdak Ada</p>;
    // notFound(); // Redirect to 404 page if the project is not found
  }

  const project = querySnapshot.docs[0].data() as Project;

  return (
    <>
      <div className="relative flex w-full min-w-0 flex-col">
      <div className="flex max-w-full flex-col gap-3">
        <div className="flex flex-grow flex-col">
          <div className="flex min-h-[20px] w-full flex-col items-start gap-4 overflow-x-auto">
            <div className="flex w-full flex-col gap-2">
              <div className="prose w-full break-words">
                <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
                <section className="container mx-auto p-4 dark:text-white overflow-hidden">
                  <div className='flex justify-center items-center w-full'>
                    <Image
                            src={project.image}
                            alt={project.title}
                            width={500}
                            height={300}
                            className="mb-14"
                        />
                  </div>
                  {
                    project.slug === 'laravel-11-crud' ?
                    <Laravelpage /> : ''
                  }
                  {
                    project.slug === 'creating-shopping-cart-in-reactjs' ?
                    <Shopchart /> : ''
                  }
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
}
