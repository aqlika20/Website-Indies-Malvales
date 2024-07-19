import { css } from '@emotion/react';

import { maW } from '@/style/globalStyle';

export const arrowLeftProgram = css({
  left: -710,
  top: '90%',
  width: '30px',
  height: '30px',
  [maW[13]]: {
    left: -670,
  },
  [maW[12]]: {
    left: -620,
  },
  [maW[11]]: {
    left: -540,
  },
  [maW[10]]: {
    left: -510,
  },
  [maW[9]]: {
    left: -480,
  },
  [maW[8]]: {
    left: -445,
  },
});

export const arrowRightProgram = css({
  left: -635,
  top: '90%',
  width: '30px',
  height: '30px',
  [maW[13]]: {
    left: -580,
  },
  [maW[12]]: {
    left: -530,
  },
  [maW[11]]: {
    left: -435,
  },
  [maW[10]]: {
    left: -435,
  },
  [maW[9]]: {
    left: -415,
  },
  [maW[8]]: {
    left: -380,
  },
});

export const title = css({
  fontFamily: 'Poppins Medium',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '20px',
  lineHeight: '30px',
  marginBottom: '12px',
  textAlign: 'left',

  color: 'rgba(125, 125, 125, 1)',

  [maW[7]]: {
    fontSize: '28px',
    lineHeight: '40px',
  },
  [maW[6]]: {
    fontSize: '24px',
    lineHeight: '24px',
  },
});

export const titleService = css({
  fontFamily: 'Poppins SemiBold',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '20px',
  lineHeight: '30px',
  marginBottom: '20px',
  textAlign: 'left',

  color: 'rgb(0, 0, 0)',

  [maW[7]]: {
    fontSize: '28px',
    lineHeight: '40px',
  },
  [maW[6]]: {
    fontSize: '24px',
    lineHeight: '24px',
  },
});

export const captionService = css({
  fontFamily: 'Poppins Regular',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left',

  color: 'rgba(84, 84, 84, 1)',

  [maW[10]]: {
    img: {
      width: '100%',
      height: '100%',
    },
    iframe: {
      width: '100%',
    },
    video: {
      width: '100%',
    },
  },
});

export const divSec = css({
  position: 'relative',
  maxWidth: '1920px',
  padding: '0',

  [maW[13]]: {
    width: '100%',
  },
});

// ............................................SECTION 1
export const divBanner = css({
  position: 'relative',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  filter: 'brightness(0.6)',
});

export const divSec1 = css({
  position: 'absolute',
  top: '0',
  left: '5%',
  right: '0',
  margin: '0',
  padding: '0',
  height: '100%',
  alignContent: 'end',

  [maW[13]]: {
    alignContent: 'start',
  },
  [maW[7]]: {
    left: '0',
    paddingLeft: '5%',
  },
  [maW[6]]: {
    width: '100%',
  },
});

export const colSec1 = css({
  height: '225px',
  marginBottom: '5%',

  [maW[13]]: {
    width: '40%',
    marginBottom: '0px',
    marginTop: '25%',
  },
  [maW[11]]: {
    width: '45%',
  },
  [maW[8]]: {
    width: '40%',
  },
  [maW[7]]: {
    marginTop: '32%',
  },
  [maW[6]]: {
    marginTop: '0',
    paddingTop: '45%',
    width: '50%',
  },
});

export const titleBanner = css({
  fontFamily: 'Poppins SemiBold',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '48px',
  whiteSpace: 'break-spaces',

  color: 'rgba(255, 255, 255)',

  [maW[8]]: {
    fontSize: '35px',
  },
  [maW[7]]: {
    fontSize: '25px',
    lineHeight: '40px',
  },
  [maW[6]]: {
    // fontSize: '16px',
    fontSize: '14px',
    lineHeight: '24px',
  },
});

export const btnBanner = css({
  marginTop: '15px',
  width: '200px',
  height: '56px',
  fontSize: '24px',
  fontWeight: '600',
  fontFamily: 'Poppins SemiBold',

  backgroundColor: 'rgba(241, 176, 78, 1)',
  borderColor: 'rgba(241, 176, 78, 1)',
  color: 'rgba(255, 255, 255)',
  borderRadius: '10px',

  '&:hover': {
    background: 'transparent',
    borderColor: 'rgba(241, 176, 78, 1)',
    color: 'rgba(241, 176, 78, 1)',
  },

  [maW[8]]: {
    fontSize: '22px',
  },

  [maW[6]]: {
    // fontSize: '16px',
    fontSize: '14px',
    width: '130px',
    height: '35px',
  },
});

// ...............................................SECTION 2

export const divOurService = css({
  width: '100%',
  height: 'auto',
  padding: '5%',

  [maW[11]]: {
    padding: '6%',
  },
  [maW[6]]: {
    padding: '8%',
  },
});

export const imageSec2 = css({
  width: '525px',
  height: '700px',

  [maW[8]]: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
});

// ...............................................SECTION 3

export const divAboutUs = css({
  width: '100%',
  height: 'auto',
  padding: '0px 5% 5% 5%',

  [maW[11]]: {
    padding: '0px 6% 6% 6%',
  },
  [maW[6]]: {
    padding: '0px 8% 8% 8%',
  },
});

export const imageAboutUs = css({
  width: '550px',
  height: '550px',

  [maW[8]]: {
    width: '460px',
  },
  [maW[7]]: {
    width: '100%',
    objectFit: 'contain',
  },
  [maW[6]]: {
    height: 'auto',
  },
});

export const rowSec3 = css({
  marginRight: '0px !important',
  marginLeft: '0px !important',

  [maW[7]]: {
    flexDirection: 'column',
    gap: '50px',
  },
});

export const colSec3 = css({
  textAlign: 'center',

  [maW[11]]: {
    textAlign: 'left',
  },
  [maW[7]]: {
    paddingLeft: '0px !important',
    paddingRight: '0px !important',
    width: '100%',
  },
});

// ...............................................SECTION 4

export const divJobstreetCard = css({
  width: '100%',
  height: 'auto',
  padding: '0px 6% 3% 6%',

  [maW[9]]: {
    flexDirection: 'row',
  },
  [maW[7]]: {
    flexDirection: 'column',
    margin: '0px !important',
    padding: '0px 4% 6% 4%',
  },
});

export const colJobstreetCard = css({
  [maW[9]]: {
    width: '50%',
  },
  [maW[7]]: {
    width: '100%',
  },
  [maW[6]]: {
    width: 'auto',
  },
});

export const titleCardJobstreet = css({
  margin: '0px',
  width: '100%',
  height: '60px',

  textDecoration: 'none',
  fontFamily: 'Poppins SemiBold',
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '36px',

  borderBottom: '1px solid rgba(0, 0, 0)',

  color: 'rgba(0, 0, 0)',

  [maW[6]]: {
    fontSize: '18px',
    lineHeight: '26px',
    height: 'max-content',
  },
});

export const iconJob = css({
  right: '5%',
  top: '15%',
  position: 'absolute',

  [maW[6]]: {
    top: '7%',
  },
});

export const descCardJobstreet = css({
  margin: '0px',
  width: '100%',

  textDecoration: 'none',
  fontFamily: 'Poppins Regular',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '21px',

  color: 'rgba(84, 84, 84, 1) !important',

  [maW[6]]: {
    fontSize: '16px',
    width: 'auto',
  },
});

export const cardJobstreet = css({
  border: 'none',

  [maW[7]]: {
    width: '100%',
  },
  [maW[6]]: {
    width: 'auto',
  },
});

// ...............................................SECTION 5

export const colSec5 = css({
  [maW[8]]: {
    width: '100%',
  },
});

export const colSec52 = css({
  [maW[8]]: {
    width: '100%',
    marginTop: '5%',
  },
  [maW[6]]: {
    width: '99%',
    marginTop: '5%',
  },
});

export const desc1Sec5 = css({
  fontFamily: 'Poppins Regular',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '24px',

  marginTop: '18px',

  color: 'rgba(255, 255, 255)',
});

export const divSec5 = css({
  backgroundColor: 'rgba(26, 26, 26, 1)',
});

export const rowSec5 = css({
  padding: '5% ',

  [maW[8]]: {
    flexDirection: 'column',
  },

  [maW[6]]: {
    paddingTop: '5%',
    paddingBottom: '5%',
  },
});

export const title1 = css({
  fontFamily: 'Poppins Medium',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '20px',
  lineHeight: '30px',
  marginBottom: '2px',

  color: 'rgba(255, 255, 255)',
});
export const linkPortfolio = css({
  textDecoration: 'none',
  [maW[5]]: {
    paddingLeft: '20px',
    paddingRight: '20px',
  },
});
export const title1OSec3 = css({
  fontFamily: 'Poppins SemiBold',
  fontStyle: 'normal',
  fontSize: '24px',

  color: 'rgba(255, 255, 255)',

  marginTop: '10px',
});
export const imageslide = css({
  width: '450px',
  objectFit: 'cover',

  [maW[12]]: {
    width: '400px',
  },
  [maW[11]]: {
    width: '320px',
  },
  [maW[10]]: {
    width: '320px',
  },
  [maW[9]]: {
    width: '300px',
  },
  [maW[8]]: {
    width: '480px',
  },
  [maW[7]]: {
    width: '400px',
  },
  [maW[6]]: {
    width: '300px',
  },
  [maW[5]]: {
    width: '100%',
  },
  // [maW[4]]: {
  //   width: '370px',
  // },
});

// ...............................................SECTION 6

export const imageContactUs = css({
  width: '100%',
  height: '100%',

  [maW[8]]: {
    height: '720px',
    objectFit: 'cover',
  },
});

export const div1Row = css({
  width: '100%',
  [maW[8]]: {
    flexDirection: 'column',
    margin: '0px !important',
  },
});

export const div1RowCol1 = css({
  [maW[8]]: {
    width: '100%',
    padding: '0px !important',
  },
});

export const div1RowCol2 = css({
  padding: '0px 50px 0px 50px',
  alignSelf: 'center',
  [maW[9]]: {
    padding: '50px 50px 50px 50px',
  },
  [maW[8]]: {
    width: '100%',
    padding: '0px 6% 0px 6%',
    marginTop: '5%',
    marginBottom: '5%',
  },
  [maW[7]]: {
    padding: '0px 5% 0px 5%',
  },
});

export const divSec6 = css({
  width: '100% !important',
});

export const div2PP = css({
  width: '100%',
});

export const divRightColField = css({
  width: 'auto',
  height: 'auto',
  gap: '32px',
  marginTop: '32px',

  borderRadius: '8px',

  background: 'rgba(255, 255, 255)',
});

export const labelCU = css({
  fontFamily: 'Poppins Regular',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '24px',
  letterSpacing: '-0.006em',
  margin: '0px !important',

  color: 'rgba(41, 45, 63, 0.72)',
});

export const fieldInputCU = css({
  height: '48px',

  borderBottom: '1px solid rgba(194, 194, 194)',
  borderLeft: '0px ',
  borderTop: '0px ',
  borderRight: '0px ',
  borderRadius: '0px',

  fontFamily: 'Poppins Regular',
  fontStyle: 'normal',
  letterSpacing: '-0.006em',

  '&:focus': {
    color: 'rgba(10, 10, 10) !important',
    background: 'rgba(255, 255, 255)',
    webkitAppearance: 'none !important',
  },
  '&:active': {
    color: 'rgba(10, 10, 10) !important',
    background: 'rgba(255, 255, 255)',
    webkitAppearance: 'none !important',
  },
});

export const fieldTSCU = css({
  background: 'transparent',
  color: 'rgba(0, 0, 0)',

  padding: '0.5rem 0.8rem',
  height: '96px',
  width: '100%',

  fontFamily: 'Poppins regular',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '-0.006em',

  borderBottom: '1px solid rgba(194, 194, 194)',
  borderLeft: '0px ',
  borderTop: '0px ',
  borderRight: '0px ',
  borderRadius: '0px 0px 0px 0px',

  '&:focus': {
    overflow: 'auto',
    outline: 'none',

    webkitBoxShadow: 'none',
    mozboxShadow: 'none',
  },
});

export const fieldCAPTCHACU = css({
  padding: '0 0.8rem',
  width: 'auto',
  height: 'auto',

  background: 'rgba(255, 255, 255)',
  color: 'rgba(0, 0, 0)',

  border: '1px solid rgba(194, 194, 194)',
  borderRadius: '6px',

  boxShadow: 'inset 1px 2px 2px rgba(0, 0, 0, 0.08)',

  [maW[6]]: {
    width: '63%',
    height: '50px',
  },
});

export const btnCU = css({
  background: 'rgba(241, 176, 78, 1) !important',
  color: 'rgba(255, 255, 255)',

  width: '35%',
  height: '60px',
  textAlign: 'center',

  fontFamily: 'Poppins SemiBold',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '28px',

  borderRadius: '12px',
  borderColor: 'unset !important',

  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.12)',
  '&:hover': {
    background: 'rgba(243, 133, 32)',
  },
  '&:active': {
    background: 'rgba(243, 133, 32)',
  },

  [maW[8]]: {
    width: '20%',
  },
  [maW[7]]: {
    width: '30%',
  },
  [maW[6]]: {
    width: '100%',
  },
});

export const rowDivField = css({
  gap: '50px',

  [maW[6]]: {
    gap: '0px',
  },
});
export const colDivField = css({
  marginBottom: '1rem',
});

export const textHeader = css({
  fontFamily: 'Poppins SemiBold',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '24px',
  lineHeight: '36px',
  color: 'rgba(42, 42, 42, 1)',
});

export const divcheckbox = css({
  width: '1%',
});

export const checkbox = css({
  width: '24px',
  height: '24px',

  borderRadius: '8px',
});

export const divCaptcha = css({
  display: 'flex',
  gap: 12,
  marginBottom: 24,

  [maW[6]]: {
    flexDirection: 'column',
    width: '50%',
  },
  [maW[5]]: {
    width: '100%',
  },
});

export const captcha = css({
  //responsive
  [maW[6]]: {
    width: '50%',
  },
});
