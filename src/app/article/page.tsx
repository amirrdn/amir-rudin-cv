// src/app/articles/page.tsx (or another appropriate path)
import { Metadata } from "next";
import { collection, getDocs, DocumentData } from "firebase/firestore";
import { db } from "../../lib/firebaseConfig";
import CardArticle from "./card";

export const metadata: Metadata = {
  title: 'Programing Articles - Amir Rudin',
  description: 'What about programming.',
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
  icons: {
    icon: '/favicon.jpg'
  },
  openGraph: {
    title: 'Amir Rudin - Portfolio',
    description: 'Welcome to my portfolio website',
    images: ['/amir-rdn.jpg'], // Path to the default image
  },
};

interface Article {
    id: string;
    title: string;
    description: string;
    image: string;
    leading: string;
    slug: string
}

export default async function Articles() {
  const articlesCollection = collection(db, "articles");
  const articlesSnapshot = await getDocs(articlesCollection);
  const articles = articlesSnapshot.docs.map((doc: DocumentData) => ({
    id: doc.id,
    ...doc.data(),
  })) as Article[];

  return (
    <section className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Articles</h1>
      <CardArticle articlesData={articles} />
    </section>
  );
}
