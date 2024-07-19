import { GetStaticPropsContext, PreviewData } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ParsedUrlQuery } from 'querystring';

import nextI18NextConfig from '@/utils/next-i18next.config';

export const getLocaleProps = async (ctx: GetStaticPropsContext<ParsedUrlQuery, PreviewData>, route: string[]) => {
  return serverSideTranslations(ctx.locale || 'en' , [...route, 'common'], nextI18NextConfig);
};
