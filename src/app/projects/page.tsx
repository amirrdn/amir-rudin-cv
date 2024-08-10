// src/app/projects/page.tsx

import Link from 'next/link';
import { Metadata } from 'next';
import ProjectsList from './projectlist';
import projectsData from '../../../public/project.json';

export const metadata: Metadata = {
  title: 'Projects - Amir Rudin',
  description: 'Explore my projects and see what I have created.',
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
