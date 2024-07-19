import { getPortfolioStaticProps } from '@/fetchers/portfolio/list';

export { default } from '@/routes/PortfolioPage';

export const getStaticProps = getPortfolioStaticProps;