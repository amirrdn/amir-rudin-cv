"use client"
import Image from "next/image";
import Link from "next/link";

interface CardListProps {
    articlesData: {
      id: string;
      title: string;
      description: string;
      image: string;
      leading: string;
      slug: string
    }[];
}
const CardArticle:React.FC<CardListProps> = ({ articlesData}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {articlesData.map((article) => (
                <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                    <Image
                        src={article.image}
                        alt={article.title}
                        width={500}
                        height={300}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                        <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                        <div
                            className="text-gray-700"
                            dangerouslySetInnerHTML={{ __html: article.leading }}
                        />
                    </div>
                    <div className="p-4">
                        <Link
                        href={`/article/${article.slug}`}
                        className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                        rel="noopener noreferrer"
                        >
                        Lihat Detail
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CardArticle;