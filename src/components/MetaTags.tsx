// components/MetaTags.tsx
import Head from 'next/head';

interface MetaTagsProps {
  title: string;
  description: string;
  keywords: string;
  image: string;
  url: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({ title, description, keywords, image, url }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Amir Rudin" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
    </Head>
  );
};

export default MetaTags;
