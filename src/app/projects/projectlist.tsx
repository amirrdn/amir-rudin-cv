"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext"

interface CardListProps {
  projectData: {
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

interface textLocales{
  id: string;
  text: string;
  title: string;
}
const ProjectsList: React.FC<CardListProps> = ({ projectData }) => {
    const { locale } = useTheme();
    return (
      <>
      <section className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8">{locale === 'id' ? 'Proyek Saya' : 'My Project'}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData && projectData.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {project.images.length > 0 && <Image src={project.images[0]} alt={project.title} className="w-full h-48 object-cover" width={500} height={300} />}
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2 text-black">{project.locales.find((l) => l.id === locale)?.title}</h2>
                <p className="text-gray-700 mb-4">{project.locales.find((l) => l.id === locale)?.text}</p>
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                  rel="noopener noreferrer"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      </>
    );
  };
  
  export default ProjectsList;