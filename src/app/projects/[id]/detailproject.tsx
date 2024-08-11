"use client"; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

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
  };
}

interface textLocales {
  id: string;
  title: string;
  text: string;
}

const ProjectDetail: React.FC<CardListProps> = ({ projectData }) => {
    const [project] = useState(projectData);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const { locale } = useTheme();
    
    if (!project) {
        return <div>Loading...</div>;
    }

    const handleImageClick = (image: string) => {
        setSelectedImage(image);
    };
    
    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <section className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">{project.locales.find((l) => l.id === locale)?.title}</h1>

            <Swiper
                pagination={{ clickable: true }}
                navigation
                modules={[Pagination, Navigation]}
                slidesPerView={4}
                spaceBetween={10}
                className="mySwiper mb-4"
            >
                {project.images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-64 overflow-hidden rounded-lg cursor-pointer" onClick={() => handleImageClick(image)}>
                            <Image
                                src={image}
                                alt={`Gambar ${index + 1}`}
                                objectFit="cover"
                                className="rounded-lg"
                                width={800}
                                height={600}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <p className="mb-4">{project.locales.find((l) => l.id === locale)?.text}</p>
            
            <h2 className="text-2xl font-semibold mb-2">{locale === 'en' ? 'Technology Used' : 'Teknologi Yang Digunakan'}</h2>
            <ul className="list-disc list-inside mb-4">
                {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>

            {selectedImage && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" onClick={handleCloseModal}>
                    <div className="relative w-full max-w-2xl mx-auto">
                        <Image
                            src={selectedImage}
                            alt="Gambar Besar"
                            layout="responsive"
                            width={800}
                            height={600}
                            className="rounded-lg"
                        />
                        <button
                            className="absolute top-2 right-2 text-white bg-red-600 rounded-full p-1 hover:bg-red-700"
                            onClick={handleCloseModal}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default ProjectDetail;