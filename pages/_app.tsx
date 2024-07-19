import 'bootstrap/dist/css/bootstrap.min.css';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import FontFace from '@/style/fonts';
import { globalStyles } from '@/style/globalStyle';
import { StaticContext } from '@/context/static';
import { SSRProvider } from 'react-bootstrap';
import GlobalProvider from '@/context/global/global';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <StaticContext.Provider value={pageProps}>
      <SSRProvider>
        <GlobalProvider staticData={pageProps?.staticData || {}}>
          {globalStyles}
          <FontFace />
          <Component {...pageProps} />
        </GlobalProvider>
      </SSRProvider>
    </StaticContext.Provider>
  );
};

export default appWithTranslation(App);
