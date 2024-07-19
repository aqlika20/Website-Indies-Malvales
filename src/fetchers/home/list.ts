import axios from 'axios';

import { API_URL } from '@/constants/env';

import { getGeneralData } from '../global/general';
import { getLocaleProps } from '../global/locale';
import { getstaticlistnav } from '../statictaqlika/staticlistnav';

export const getHomepageData = async (ctx) => {
  const localeProps = await getLocaleProps(ctx, ['home']);

  const responsePostCard = await axios.get(`${API_URL}/post-card/all`);
  const responseBanner = responsePostCard.data.data.rows.filter(
    (row) => row.post_card_category_relation.id_post_card_category === 1,
  );
  const responseVacancy = responsePostCard.data.data.rows.filter(
    (row) => row.post_card_category_relation.id_post_card_category === 2,
  );
  const responseAboutUs = responsePostCard.data.data.rows.filter(
    (row) => row.post_card_category_relation.id_post_card_category === 4,
  );
  const responseHome = responsePostCard.data.data.rows.filter(
    (row) => row.post_card_category_relation.id_post_card_category === 5,
  );

  const responsePortfolio = await axios.get(`${API_URL}/post-article/all`, {
    params: {
      o: 1,
    },
  });

  const layoutContactUs = '/kontak-kami';
  const slugContactUs = layoutContactUs.toString() || '';
  const responseWeblayoutContactUs = await axios.get(`${API_URL}/web-layout/detail${slugContactUs}`);
  const layContactUs = responseWeblayoutContactUs?.data?.data;
  const titleContactUs = layContactUs.detail.detail?.find((e) => e.field_name === 'title');
  const subtitleContactUs = layContactUs.detail.detail?.find((e) => e.field_name === 'subtitle');

  const layoutPortfolio = '/Portofolio';
  const slugPortfolio = layoutPortfolio.toString() || '';
  const responseWeblayoutPortfolio = await axios.get(`${API_URL}/web-layout/detail${slugPortfolio}`);
  const layPortfolio = responseWeblayoutPortfolio?.data?.data;
  const titlePortfolio = layPortfolio.detail.detail?.find((e) => e.field_name === 'title');
  const subtitlePortfolio = layPortfolio.detail.detail?.find((e) => e.field_name === 'subtitle');
  const captionPortfolio = layPortfolio.detail.detail?.find((e) => e.field_name === 'caption');

  const layoutHome = '/parama-lentera-semesta';
  const slugHome = layoutHome.toString() || '';
  const responseWeblayoutHome = await axios.get(`${API_URL}/web-layout/detail${slugHome}`);
  const homepage = responseWeblayoutHome?.data?.data?.detail?.meta;

  return {
    props: {
      staticData: {
        ...localeProps,
        general: await getGeneralData(ctx),

        banner: responseBanner || [],
        vacancy: responseVacancy || [],
        home: responseHome || [],
        aboutus: responseAboutUs || [],
        
        portfolio: responsePortfolio.data.data.rows || [],
        
        homepage: homepage || {},
        titleContactUs: titleContactUs || {},
        subtitleContactUs: subtitleContactUs || {},
        titlePortfolio: titlePortfolio || {},
        subtitlePortfolio: subtitlePortfolio || {},
        captionPortfolio: captionPortfolio || {},

        listnav: getstaticlistnav || {},
      },
    },
    revalidate: 10,
  };
};
