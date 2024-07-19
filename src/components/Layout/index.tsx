import { PropsWithChildren, useEffect } from 'react';
import CookieConsent from 'react-cookie-consent';

import { TrackingHeadScript } from '@phntms/next-gtm';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/router';
import 'slick-carousel/slick/slick-theme.css';
// Import Slick styles
import 'slick-carousel/slick/slick.css';

import { useGlobalContext } from '@/context/global/global';

import Footer from './components/Footer';
import Header from './components/Header';

/**
 * Please return object header in getstaticprops for data integrity
 */
const Layout = ({ children }: PropsWithChildren<unknown>) => {
  const { general } = useGlobalContext();
  const { id_analytic } = general || {};
  const { locale } = useRouter();

  //aos
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Header />
      <TrackingHeadScript id={id_analytic} />
      {locale === 'id' ? (
        <CookieConsent
          onAccept={(acceptedByScrolling) => {
            if (acceptedByScrolling) {
              alert('Accept was triggered by user scrolling');
            } else {
              alert('Accept was triggered by clicking the Accept button');
            }
          }}
          buttonStyle={{
            background: 'transparent',
            border: '1px solid rgba(128, 128, 128)',
            borderRadius: '8px',
            color: 'rgba(1, 83, 152)',
            width: '98px',
            height: 'auto',
            padding: '0px',
            margin: '0px 15px 0px 15px',
            fontSize: '15px',
          }}
          declineButtonStyle={{
            background: 'transparent',
            height: 'auto',
            padding: '0px',
            margin: '0px 15px 0px 15px',
            fontSize: '15px',
          }}
          buttonText="Izinkan"
          declineButtonText={
            <svg width="10px" height="10px" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.2665 2.13301L36.9998 27.8663L62.5998 2.26634C63.1653 1.66446 63.8465 1.18297 64.6025 0.850756C65.3586 0.51854 66.174 0.342437 66.9998 0.333008C68.7679 0.333008 70.4636 1.03539 71.7138 2.28563C72.9641 3.53587 73.6665 5.23156 73.6665 6.99967C73.682 7.81702 73.5304 8.62892 73.2208 9.38555C72.9113 10.1422 72.4504 10.8276 71.8665 11.3997L45.9331 36.9997L71.8665 62.933C72.9652 64.008 73.6095 65.4636 73.6665 66.9997C73.6665 68.7678 72.9641 70.4635 71.7138 71.7137C70.4636 72.964 68.7679 73.6663 66.9998 73.6663C66.1502 73.7016 65.3025 73.5598 64.5106 73.2499C63.7187 72.94 62.9999 72.4689 62.3998 71.8663L36.9998 46.133L11.3331 71.7997C10.7698 72.3815 10.0969 72.846 9.35313 73.1664C8.60938 73.4868 7.80955 73.6567 6.99978 73.6663C5.23167 73.6663 3.53598 72.964 2.28574 71.7137C1.03549 70.4635 0.333116 68.7678 0.333116 66.9997C0.317573 66.1823 0.469219 65.3704 0.778749 64.6138C1.08828 63.8572 1.54916 63.1718 2.13312 62.5997L28.0664 36.9997L2.13312 11.0663C1.03435 9.9914 0.390047 8.53576 0.333116 6.99967C0.333116 5.23156 1.03549 3.53587 2.28574 2.28563C3.53598 1.03539 5.23167 0.333008 6.99978 0.333008C8.59978 0.353008 10.1331 0.999674 11.2665 2.13301Z" fill="rgba(203, 58, 49)"/>
            </svg>            
          }
          enableDeclineButton
          onDecline={() => {
            alert('Decline');
          }}
        >
          Situs web kami menggunakan cookie untuk meningkatkan pengalaman Anda.
        </CookieConsent>
      ) : (
        <CookieConsent
          onAccept={(acceptedByScrolling) => {
            if (acceptedByScrolling) {
              alert('Accept was triggered by user scrolling');
            } else {
              alert('Accept was triggered by clicking the Accept button');
            }
          }}
          buttonStyle={{
            background: 'transparent',
            border: '1px solid rgba(128, 128, 128)',
            borderRadius: '8px',
            color: 'rgba(1, 83, 152)',
            width: '98px',
            height: 'auto',
            padding: '0px',
            margin: '0px 15px 0px 15px',
            fontSize: '15px',
          }}
          declineButtonStyle={{
            background: 'transparent',
            height: 'auto',
            padding: '0px',
            margin: '0px 15px 0px 15px',
            fontSize: '15px',
          }}
          buttonText="Allow"
          declineButtonText={
            <svg width="10px" height="10px" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.2665 2.13301L36.9998 27.8663L62.5998 2.26634C63.1653 1.66446 63.8465 1.18297 64.6025 0.850756C65.3586 0.51854 66.174 0.342437 66.9998 0.333008C68.7679 0.333008 70.4636 1.03539 71.7138 2.28563C72.9641 3.53587 73.6665 5.23156 73.6665 6.99967C73.682 7.81702 73.5304 8.62892 73.2208 9.38555C72.9113 10.1422 72.4504 10.8276 71.8665 11.3997L45.9331 36.9997L71.8665 62.933C72.9652 64.008 73.6095 65.4636 73.6665 66.9997C73.6665 68.7678 72.9641 70.4635 71.7138 71.7137C70.4636 72.964 68.7679 73.6663 66.9998 73.6663C66.1502 73.7016 65.3025 73.5598 64.5106 73.2499C63.7187 72.94 62.9999 72.4689 62.3998 71.8663L36.9998 46.133L11.3331 71.7997C10.7698 72.3815 10.0969 72.846 9.35313 73.1664C8.60938 73.4868 7.80955 73.6567 6.99978 73.6663C5.23167 73.6663 3.53598 72.964 2.28574 71.7137C1.03549 70.4635 0.333116 68.7678 0.333116 66.9997C0.317573 66.1823 0.469219 65.3704 0.778749 64.6138C1.08828 63.8572 1.54916 63.1718 2.13312 62.5997L28.0664 36.9997L2.13312 11.0663C1.03435 9.9914 0.390047 8.53576 0.333116 6.99967C0.333116 5.23156 1.03549 3.53587 2.28574 2.28563C3.53598 1.03539 5.23167 0.333008 6.99978 0.333008C8.59978 0.353008 10.1331 0.999674 11.2665 2.13301Z" fill="rgba(203, 58, 49)"/>
            </svg>            
          }
          enableDeclineButton
          onDecline={() => {
            alert('Decline');
          }}
        >
          We use third-party cookies in order to personalize your site experience.
        </CookieConsent>
      )}

      {children}
      <Footer />
    </>
  );
};

export default Layout;
