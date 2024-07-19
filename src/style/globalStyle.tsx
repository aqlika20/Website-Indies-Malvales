import { Global, css } from '@emotion/react';

export const breakpoints = [
  360, //0
  375, //1
  390, //2
  420, //3
  480, //4
  576, //5
  768, //6 ini
  991, //7 ini
  1180, //8
  1280, //9
  1366, //10
  1440, //11
  1680, //12
  1792, //13
  1920, //14
  2560, //15
  // adjust
  1080, //14
];

export const miW = breakpoints.map((bpMi) => `@media (min-width: ${bpMi}px)`);
export const maW = breakpoints.map((bpMa) => `@media (max-width: ${bpMa}px)`);

const customCss = css`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const globalStyles = (
  <Global
    styles={css(
      {
        '*': {
          '.gm-style.place-card-large': {
            display: 'none',
          },
        },
        ':root': {
          colorScheme: 'dark',
          margin: '0px',
          padding: '0px',
          background: '#FFFFFF',
        },
        html: {
          maxWidth: '100vw',
          overflowX: 'hidden',
          scrollBehavior: 'smooth',
          background: '#FFFFFF',
          '.gm-style.place-card-large': {
            display: 'none',
          },
        },
        body: {
          overflow: 'hidden',
          margin: '0',
          padding: '0',
          background: '#FFFFFF',
          minHeight: '100%',
        },
        '.main': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          padding: '5rem 0',
        },
        '.nav-right': {
          right: '0px !important',
          /* left: 30% !important; */
          left: '5% !important',
          transition: 'all 1s ease-out',
        },
        '.nav-index': {
          zIndex: 9999,
        },
        ' .navbar-toggler.collapsed > .close, .navbar-toggler:not(.collapsed) > .navbar-toggler-icon': {
          [maW[6]]: {
            display: 'none',
          },
        },
        '.navbar-nav .nav-link.active, .navbar-nav .show>.nav-link': {
          color: 'rgba(255, 255, 255, 1) !important',
        },
        '.nav-pills .nav-link.active, .nav-pills .show>.nav-link': {
          backgroundColor: '#11232B !important',
          fontFamily: `{var(--font-inter)}`,
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '28px',
          lineHeight: '36px',
          /* identical to box height, or 183% */

          display: 'flex',
          alignItems: 'center',
          letterSpacing: '-0.021em',

          /* Primary/Main */

          color: 'rgba(255, 255, 255, 1)',
          [maW[6]]: {
            fontSize: '18px',
          },
        },
        '.nav-pills .nav-link.active, .nav-pills .show>p': {
          fontFamily: `{var(--font-inter)}`,
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '24px',
          /* identical to box height, or 183% */

          display: 'flex',
          alignItems: 'center',
          letterSpacing: '-0.011em',

          /* Primary/Main */

          color: 'rgba(255, 255, 255, 1)',
          '.css-1v2koel': {
            borderBottom: '1px solid #E0E0E0',
            paddingBottom: '0.5rem',
            marginBottom: '0.5rem',
            fontFamily: `{var(--font-inter)}`,
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '28px',
            lineHeight: '36px',
            /* identical to box height, or 183% */

            display: 'flex',
            alignItems: 'center',
            letterSpacing: '-0.021em',

            /* Primary/Main */

            color: 'rgba(255, 255, 255, 1)',
            [maW[6]]: {
              fontSize: '18px',
            },
          },
          '.css-12zpfyi': {
            fontFamily: `{var(--font-inter)}`,
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '24px',
            /* identical to box height, or 183% */

            display: 'flex',
            alignItems: 'center',
            letterSpacing: '-0.011em',

            /* Primary/Main */

            color: 'rgba(255, 255, 255, 1)',
          },
        },
        '.navbar-nav': {
          [maW[7]]: {
            backgroundColor: 'rgba(241, 176, 78, 1)',
            position: 'fixed',
            top: 0,
            transition: 'all 0.1s ease-in',
            height: 'unset',
            width: '100%',
            left: '7px',
            paddingTop: '5rem',
            paddingRight: '30px',
            paddingBottom: '30px',
            /* padding-bottom: 80px; */
            paddingLeft: '30px',
            textAlign: 'center',
            borderRadius: '6px 0px 0px 6px',
            boxShadow: '0px 0px 4px #aaa',

            [maW[7]]: {
              left: 0,
              right: 0,
            },

            '@media (prefers-color-scheme: dark)': {
              backgroundColor: 'rgba(241, 176, 78, 1)',
              position: 'fixed',
              top: 0,
              transition: 'all 0.1s ease-in',
              height: 'unset',
              width: '100%',
              left: '7px',
              paddingTop: '5rem',
              paddingRight: '30px',
              paddingBottom: '30px',
              /* padding-bottom: 80px; */
              paddingLeft: '30px',
              textAlign: 'center',
              borderRadius: '6px 0px 0px 6px',
              boxShadow: '0px 0px 4px #aaa',

              [maW[7]]: {
                left: 0,
                right: 0,
              },
            },
          },
        },
        '.navbar-collapse': {
          [maW[7]]: {
            backgroundColor: '#ffffff',
            position: 'fixed',
            top: 0,
            transition: 'all 0.1s ease-in',
            height: 'unset',
            width: '100%',
            left: '500px',
            paddingTop: '5rem',
            paddingRight: '30px',
            /* padding-bottom: 80px; */
            paddingLeft: '30px',
            textAlign: 'center',
            borderRadius: '6px 0px 0px 6px',
            boxShadow: '0px 0px 4px #aaa',
          },
        },
        '.navbar-toggler': {
          border: 'unset !important',
          '&:focus': {
            boxShadow: 'unset !important',
          },
        },
        '.navbar-collapse a': {
          [maW[7]]: {
            marginTop: '20px',
            boxShadow: '0px 1px 0px rgba(0, 0, 0, 0.08)',
            // display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center'
          },
        },
        'div.CookieConsent': {
          background: '#F5F5F5 !important',
          boxShadow: '0px 1.22523px 2.45045px rgba(0, 0, 0, 0.12)',
          borderRadius: '9.8018px',
          // bottom: '650px !important',
          bottom: '0px !important',
          // left: '100px !important',
          maxWidth: '100%',
          width: '1240px !important',
          fontFamily: `{var(--font-inter)}`,
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '22px',
          lineHeight: '34px',
          /* identical to box height, or 140% */
          padding: '1rem',
          display: 'flex',
          alignItems: 'flex-end',
          letterSpacing: '-0.017em',
          color: '#000000 !important',
          // '@media(width:1440px) and (height:800px)': {
          //   // bottom: '545px !important',
          // },
          [miW[15]]: {
            // top: '8rem',
            
            width: '100% !important',
            left: '0px !important',
            right: '0px !important',
            bottom: '0px !important',
          },
          [maW[14]]: {
            // top: '8rem',
            left: '18% !important',
            right: '18% !important',
            bottom: '0px !important',
          },
          [maW[12]]: {
            // top: '8rem',
            left: '12% !important',
            right: '12% !important',
            bottom: '0px !important',
          },
          [maW[11]]: {
            // top: '8rem',
            left: '6% !important',
            right: '6% !important',
            bottom: '0px !important',
          },
          [maW[10]]: {
            // top: '8rem',
            left: '4% !important',
            right: '4% !important',
          },
          [maW[9]]: {
            // top: '8rem',
            left: '12% !important',
            right: '12% !important',            
            bottom: '270px !important',
            width: 'fit-content !important',
          },
          [maW[8]]: {
            left: '10% !important',
            right: '10% !important',
            bottom: '295px !important',
          },
          [maW[7]]: {
            width: 'fit-content !important',
            fontSize: '18px',
            lineHeight: '24px',
            textAlign: 'center',
            left: '0px !important',
            right: '0px !important',
            bottom: '0px !important',
          },
          [maW[6]]: {
            width: 'fit-content !important',
            justifyContent: 'space-evenly !important',
            zIndex: '9999999999999',
            fontSize: '11px',
            lineHeight: '18px',
            padding: '0rem',
          },
          '.slick-slide .slick-active': {
            opacity: '1 !important',
          },
          'slick-slide': {
            opacity: '0.7 !important',
          },
          div: {
            [maW[4]]: {
              margin: '0',
            },
          },
          '.paginationPublication': {
            '.active': {
              span: {
                fontFamily: `{var(--font-inter)}`,
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '14px',
                lineHeight: '20px',
                color: '#000000 !important',
                background: 'transparent !important ',
              },
            },
          },
        },
      },
      customCss,
    )}
  />
);
