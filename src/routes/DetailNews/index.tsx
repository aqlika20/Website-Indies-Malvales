import Head from 'next/head';
import { useRouter } from 'next/router';

import Layout from '@/components/Layout';
import { useGlobalContext } from '@/context/global/global';
import useVisitPage from '@/hooks/useVisitPage';

import Section1 from './module/section1';

const DetailNews = ({}: any) => {
  useVisitPage('DetailNews');
  const { newsDetail } = useGlobalContext();
  const {
    title_tag_id,
    title_tag_en,
    meta_desc_id,
    meta_desc_en,
    meta_key_id,
    meta_key_en,
    canonical_id,
    canonical_en,
  } = newsDetail?.detail?.meta || {};
  const { locale } = useRouter();
  return (
    <>
      <Head>
        <title>{locale === 'id' ? title_tag_id : title_tag_en}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={locale === 'id' ? meta_desc_id : meta_desc_en} />
        <meta name="keywords" content={locale === 'id' ? meta_key_id : meta_key_en} />
        <link rel="canonical" href={locale === 'id' ? canonical_id : canonical_en} />
      </Head>
      <Layout>
        <Section1 />
      </Layout>
    </>
  );
};

export default DetailNews;
