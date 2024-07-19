export { default } from '@/routes/News';
import { getNewsListData } from '@/fetchers/news/list';
export const getStaticProps = getNewsListData;