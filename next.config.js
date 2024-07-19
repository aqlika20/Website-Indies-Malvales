const { i18n } = require('./src/utils/next-i18next.config');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // webpack: (config, options) => {
  //   config.module.rules.push({
  //     test: /\.pdf$/i,
  //     type: 'asset/source',
  //   });

  //   return config;
  // },
  images: {
    domains: [process.env.SERVER_DOMAIN],
  },
  rewrites: async () => {
    return [
      {
        source: '/api/v1/:path*',
        destination: `${process.env.SERVER_URL}/api/:path*`,
      },
      {
        source: '/api-storage/:path*',
        destination: `${process.env.SERVER_URL}/storage/:path*`,
      },
    ];
  },
  modularizeImports: {
    'react-bootstrap': {
      transform: 'react-bootstrap/{{member}}',
    },
  },
  i18n,
};

module.exports = withBundleAnalyzer(nextConfig);
