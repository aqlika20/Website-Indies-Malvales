import type { GetStaticPaths } from 'next';

export const getGenericStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};
