import axios from 'axios';
import { GetStaticProps } from 'next';

import { API_URL } from '@/constants/env';

import { getGeneralData } from '../global/general';
import { getLocaleProps } from '../global/locale';
import { getstaticlistnav } from '../statictaqlika/staticlistnav';

/**
 * Selalu return props layout dari await getLayoutData(ctx)
 */
export const getNewsListData: GetStaticProps = async (ctx) => {
  const localeProps = await getLocaleProps(ctx, ['home']);

  const { params } = ctx;

  const slug = params?.slug?.toString() || '';

  const responseResources = await axios.get(`${API_URL}/post-article-category`);

  const responseService = await axios.get(`${API_URL}/service-title`, {
    params: {
      o: 1,
    },
  });
  const layoutNews = '/News';
  const slugNews = layoutNews.toString() || '';
  const responseWeblayoutNews = await axios.get(`${API_URL}/web-layout/detail${slugNews}`);
  const newspage = responseWeblayoutNews?.data?.data?.detail?.meta;
  const layNews = responseWeblayoutNews?.data?.data;
  const titleNews = layNews.detail.detail?.find((e) => e.field_name === 'title');

  const news = await axios.post(
    `${API_URL}/post-article`,
    {
      search: '',
      hashtag: '',
      category: 'News',
    },
    {
      params: {
        o: 4,
        max_rows: 9,
        page: 1,
        order_by: 'publish_date',
        order_type: 'desc',
      },
    },
  );

  return {
    props: {
      staticData: {
        ...localeProps,
        title: 'Parama Lentera Semesta',
        general: await getGeneralData(ctx),
        resourcesList: responseResources?.data.data || [],
        product: responseService?.data.data || {},
        newspage: newspage || {},
        slug: slug || {},
        news: news?.data.data || {},
        titleNews: titleNews || {},
        listnav: getstaticlistnav,
      },
    },
    revalidate: 10,
  };
};
