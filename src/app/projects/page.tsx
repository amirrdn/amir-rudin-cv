// src/app/projects/page.tsx

import { Metadata } from 'next';
import ProjectsList from './projectlist';
import projectsData from '../../../public/project.json';

export const metadata: Metadata = {
  title: 'Projects - Amir Rudin',
  description: 'Explore my projects and see what I have created.',
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


// async function fetchProjects() {
//   const res = await fetch('http://localhost:3000/project.json');
//   if (!res.ok) {
//     throw new Error('Failed to fetch projects');
//   }
//   return res.json();
// }

export default async function ProjectsPage() {
//   const projectsData = await fetchProjects();

  return (
    <>
        <ProjectsList projectData={projectsData} />
    </>
  );
}
