// src/app/page.tsx

import { Metadata } from 'next';
import CardList from './card';
import { GoogleTagManager } from '@next/third-parties/google'

// Impor data JSON
import projectsData from '../../public/project.json';

export const metadata: Metadata = {
  title: 'Amir Rudin - Portfolio',
  description: 'Welcome to my portfolio website where you can explore my projects.',
};

export default function HomePage() {
  

  return (
    
    <>
      <GoogleTagManager gtmId="4Q8naWiq7CRZWmIFSs1GdjBVsicbmST7arauUJYtmY0" />
      <CardList projectsData={projectsData}/>
    </>
  );
}