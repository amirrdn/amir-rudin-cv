// src/app/projects/[id]/page.tsx

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProjectDetail from './detailproject';
import projectsData from '../../../../public/project.json';

async function fetchProjects() {
  const res = await fetch('http://localhost:3000/project.json');
  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }
  return res.json();
}

export const generateMetadata = async ({ params }: { params: { id: string } }): Promise<Metadata> => {
//   const projectsData = await fetchProjects();
  const project = projectsData.find((p: { id: string }) => p.id === params.id);
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
    title: `${project.title} - Amir Rudin`,
    description: project.description,
    icons:{
      icon: '/favicon.jpg'
    },
    openGraph: {
      title: project.title,
      description: project.description,
      url: `https://amir-rudin-portofolio.vercel.app/rojects/${params.id}`,
      images:[project.images[0]]
    },
  };
};

export default async function ProjectDetailPage({ params }: { params: { id: string } }) {
//   const projectsData = await fetchProjects();
  const project = projectsData.find((p: { id: string }) => p.id === params.id);
  // Jika proyek tidak ditemukan, arahkan ke halaman 404
  if (!project) {
    notFound();
  }

  return (
    <>
        <ProjectDetail projectData={project}/>
    </>
  );
}