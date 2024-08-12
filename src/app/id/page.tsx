// src/app/page.tsx

import { Metadata } from 'next';
import CardList from '../card';

// Impor data JSON
import projectsData from '../../../public/project.json';

export const metadata: Metadata = {
  title: 'Amir Rudin - Portfolio',
  description: 'Welcome to my portfolio website where you can explore my projects.',
};

export default function HomePage() {
  

  return (
    
    <>
      <CardList projectsData={projectsData}/>
    </>
  );
}