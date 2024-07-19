import axios from 'axios';
import { GetStaticProps } from 'next';

import { API_URL } from '@/constants/env';

import { getGeneralData } from '../global/general';
import { getLocaleProps } from '../global/locale';
import { getstaticlistnav } from '../statictaqlika/staticlistnav';

/**
 * Selalu return props layout dari await getLayoutData(ctx)
 */
export const getPortfolioDetailListData: GetStaticProps = async (ctx) => {
  const localeProps = await getLocaleProps(ctx, ['home']);
  const { params } = ctx;
  const slug = params?.slug?.toString() || '';
  const portfolioDetail = await axios.get(`${API_URL}/post-article/detail/${slug}`);

  const portfolioList = await axios.post(
    `${API_URL}/post-article`,
    {
      search: '',
      hashtag: '',
      category: 'Portfolio',
    },
    {
      params: {
        o: 1,
        max_rows: 3,
        page: 1,
        is_random: 1,
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
        portfolioDetail: portfolioDetail?.data?.data || {},
        portfolioList: portfolioList?.data.data || {},

        listnav: getstaticlistnav,
      },
    },
    revalidate: 10,
  };
};
