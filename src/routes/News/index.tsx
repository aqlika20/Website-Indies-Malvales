import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import { useGlobalContext } from '@/context/global/global';
import useVisitPage from '@/hooks/useVisitPage';
import dynamic from 'next/dynamic';

// Dynamically import sections
const Section1 = dynamic(() => import('./module/section1'));

const News = () => {
  useVisitPage('News');
  const { newspage } = useGlobalContext();
  const { locale } = useRouter();

  const {
    title_tag_id,
    title_tag_en,
    meta_desc_id,
    meta_desc_en,
    meta_key_id,
    meta_key_en,
    canonical_id,
    canonical_en,
  } = newspage || {};

  const titleTag = locale === 'id' ? title_tag_id : title_tag_en;
  const metaDesc = locale === 'id' ? meta_desc_id : meta_desc_en;
  const metaKey = locale === 'id' ? meta_key_id : meta_key_en;
  const canonicalUrl = locale === 'id' ? canonical_id : canonical_en;
  return (
    <>
      <Head>
        <title>{titleTag}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metaDesc} />
        <meta name="keywords" content={metaKey} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Layout>
        <Section1 />
      </Layout>
    </>
  );
};

export default News;
