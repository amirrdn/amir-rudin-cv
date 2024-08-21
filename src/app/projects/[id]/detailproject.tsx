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
                breakpoints={{
                    // When window width is >= 320px
                    320: {
                      slidesPerView: 1, // Show 1 slide per view on small screens
                    },
                    // When window width is >= 640px
                    640: {
                      slidesPerView: 2, // Show 2 slides per view on medium screens
                    },
                    // When window width is >= 768px
                    768: {
                      slidesPerView: 3, // Show 3 slides per view on larger screens
                    },
                    // When window width is >= 1024px
                    1024: {
                      slidesPerView: 4, // Show 4 slides per view on extra-large screens
                    },
                  }}
            >
                {project.images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-64 overflow-hidden rounded-lg cursor-pointer flex justify-center" onClick={() => handleImageClick(image)}>
                            <Image
                                src={image}
                                alt={`Gambar ${index + 1}`}
                                objectFit="cover"
                                className={`rounded-lg transition duration-300 hover:scale-105 ${project.id === '4' ? ' max-sm:w-[90%] lg:w-auto h-auto' : 'w-[100%] h-[100%]'} w-[100%] h-[100%]`}
                                width={project.id === '4' ? 200 : 800}
                                height={project.id === '4' ? 200 : 800}
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
                    <div className={`relative ${project.id === '4' ? ' max-sm:w-full p-4 lg:w-[25%] h-auto' : 'max-sm:w-full max-sm:h-auto max-sm:p-4 lg:w-[60%] lg:h-[60%] bottom-32'}`}>
                        <Image
                            src={selectedImage}
                            alt="Gambar Besar"
                            layout="responsive"
                            width={project.id === '4' ? 200 : 800}
                            height={project.id === '4' ? 200 : 800}
                            className={`rounded-lg transition duration-300 hover:scale-105 ${project.id === '4' ? 'w-auto h-auto' : 'w-[100%] h-[100%]'}`}
                        />
                        <button
                            className="absolute top-1 right-1 text-white bg-red-600 rounded-full hover:bg-red-700"
                            onClick={handleCloseModal}
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M16 8L8 16M8 8L16 16" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round"></path>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default ProjectDetail;