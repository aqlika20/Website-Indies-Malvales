import { getHomepageData } from '@/fetchers/home/list'; 

export { default } from '@/routes/HomePage';

export const getStaticProps = getHomepageData;
