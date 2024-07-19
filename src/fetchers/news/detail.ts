import axios from 'axios';
import { GetStaticProps } from 'next';

import { API_URL } from '@/constants/env';

import { getGeneralData } from '../global/general';
import { getLocaleProps } from '../global/locale';
import { getstaticlistnav } from '../statictaqlika/staticlistnav';

/**
 * Selalu return props layout dari await getLayoutData(ctx)
 */
export const getNewsDetailListData: GetStaticProps = async (ctx) => {
  const localeProps = await getLocaleProps(ctx, ['home']);
  const { params } = ctx;
  const slug = params?.slug?.toString() || '';
  const newsDetail = await axios.get(`${API_URL}/post-article/detail/${slug}`);
  const responseService = await axios.get(`${API_URL}/service-title`, {
    params: {
      o: 1,
    },
  });

  const newsList = await axios.post(
    `${API_URL}/post-article`,
    {
      search: '',
      hashtag: '',
      category: 'News',
    },
    {
      params: {
        o: 4,
        max_rows: 3,
        page: 1,
        is_random: 1,
        order_by: 'publish_date',
        order_type: 'desc',
      },
    },
  );
  const responseResources = await axios.get(`${API_URL}/post-article-category`);

  return {
    props: {
      staticData: {
        ...localeProps,
        title: 'Parama Lentera Semesta',
        general: await getGeneralData(ctx),
        resourcesList: responseResources?.data.data || [],
        newsDetail: newsDetail?.data?.data || {},
        product: responseService?.data.data || {},
        newsList: newsList?.data.data || {},
        listnav: getstaticlistnav,
      },
    },
    revalidate: 10,
  };
};
