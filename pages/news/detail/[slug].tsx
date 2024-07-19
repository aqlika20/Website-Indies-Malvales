import { getGenericStaticPaths } from '@/fetchers/global/staticPaths';
import { getNewsDetailListData } from '@/fetchers/news/detail';

export { default } from '@/routes/DetailNews';

export const getStaticProps = getNewsDetailListData;
export const getStaticPaths = getGenericStaticPaths;
