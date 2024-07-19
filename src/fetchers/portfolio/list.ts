import axios from 'axios';
import { GetStaticProps } from 'next';

import { API_URL } from '@/constants/env';

import { getGeneralData } from '../global/general';
import { getLocaleProps } from '../global/locale';
import { getstaticlistnav } from '../statictaqlika/staticlistnav';

export const getPortfolioStaticProps: GetStaticProps = async (ctx) => {
  const localeProps = await getLocaleProps(ctx, ['home']);
  const responseService = await axios.get(`${API_URL}/service-title`, {
    params: {
      o: 1,
    },
  });
  const responseResources = await axios.get(`${API_URL}/post-article-category`);

  const layoutPortfolio = '/Portofolio';
  const slugPortfolio = layoutPortfolio.toString() || '';
  const responseWeblayoutPortfolio = await axios.get(`${API_URL}/web-layout/detail${slugPortfolio}`);
  const portfoliopage = responseWeblayoutPortfolio?.data?.data?.detail?.meta;
  const layPortfolio = responseWeblayoutPortfolio?.data?.data;
  const titlePortfolio = layPortfolio.detail.detail?.find((e) => e.field_name === 'title');

  const portfolio = await axios.post(
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
        is_random: 0,
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
        portfoliopage: portfoliopage || {},
        portfolio: portfolio?.data.data || {},
        portTitle: titlePortfolio || {},

        //static aqlika
        listnav: getstaticlistnav,
      },
    },
    revalidate: 10,
  };
};
