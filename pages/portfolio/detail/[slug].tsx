import { getPortfolioDetailListData } from '@/fetchers/portfolio/detail';
import { getGenericStaticPaths } from '@/fetchers/global/staticPaths';
export { default } from '@/routes/DetailPortfolioPage';

export const getStaticProps = getPortfolioDetailListData;
export const getStaticPaths = getGenericStaticPaths;