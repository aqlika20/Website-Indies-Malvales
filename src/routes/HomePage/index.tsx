import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import { useGlobalContext } from '@/context/global/global';
import useVisitPage from '@/hooks/useVisitPage';
import dynamic from 'next/dynamic';

// Dynamically import sections
const Section1 = dynamic(() => import('./module/section1'));
const Section2 = dynamic(() => import('./module/section2'));
const Section3 = dynamic(() => import('./module/section3'));
const Section4 = dynamic(() => import('./module/section4'));
const Section5 = dynamic(() => import('./module/section5'));
const Section6 = dynamic(() => import('./module/section6'));

const HomePage = () => {
  useVisitPage('Homepage');
  const { homepage } = useGlobalContext();
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
  } = homepage || {};

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
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </Layout>
    </>
  );
};

export default HomePage;
