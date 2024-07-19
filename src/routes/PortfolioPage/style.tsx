import { css } from '@emotion/react';

import { maW, miW } from '@/style/globalStyle';

//  => .............................................SECTION1

export const noDataStyle = css({
  fontFamily: 'Poppins Medium',
  width: '100%',
  height: '35vh',
  display: 'flex',
  justifyContent: 'center',
  color: 'rgba(0, 0, 0, 1)',
});

export const filterModalElement = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const checkBoxFilter = css({
  width: '25px',
  height: '25px',
});

export const divSec1 = css({
  position: 'relative',
  maxWidth: '1920px',
  padding: '0',

  backgroundColor: 'rgba(255, 255, 255, 1)',

  [maW[13]]: {
    width: '100%',
  },
});

export const row1 = css({
  padding: '9% 7% 1% 7%',

  [maW[8]]: {
    padding: '15% 7% 3rem 7%',
  },

  [maW[6]]: {
    flexDirection: 'column',
    padding: '20% 8% 1rem 8%',
  },
  [maW[4]]: {
    padding: '30% 9% 1rem 9%',
  },
});

export const row1col1 = css({
  padding: 0,

  [maW[7]]: {
    width: '100%',
    marginBottom: '1%',
  },
});

export const row1col2 = css({
  padding: 0,

  [maW[7]]: {
    width: '30%',
  },

  [maW[6]]: {
    width: '30%',
    marginBottom: '5%',
  },
});

export const row1col3 = css({
  padding: 0,

  [maW[7]]: {
    width: '70%',
  },

  [maW[6]]: {
    width: '100%',
    marginBottom: '5%',
  },
});

export const row2 = css({
  padding: '0rem 7% 0rem 7%',

  [maW[7]]: {
    padding: '0rem 7% 0rem 7%',
    marginBottom: '2%',
    flexDirection: 'column',
  },

  [maW[6]]: {
    padding: '0rem 9% 0rem 9%',
  },
});
export const row2col1 = css({
  width: 'auto',
  paddingLeft: '0',

  [maW[7]]: {
    padding: '0',
    textAlign: 'center',
  },
});
export const row2col2 = css({
  paddingRight: '0',
  [maW[7]]: {
    paddingLeft: '0',
  },
});

export const underline = css({
  padding: 0,

  borderTop: '0.3px solid rgba(0, 0, 0, 1)',

  [maW[7]]: {
    flexDirection: 'column',

    borderTop: '0.3px solid rgba(0, 0, 0, 1)',
    paddingTop: '2%',
  },
  [maW[6]]: {
    paddingTop: '4%',
  },
});

export const image = css({
  width: '360px',
  height: '360px',
  objectFit: 'cover',
  maxWidth: '100%',
  maxHeight: '100%',

  [maW[10]]: {
    width: '430px',
    height: '430px',
  },
  [maW[9]]: {
    width: '360px',
    height: '360px',
  },
  [maW[8]]: {
    width: '350px',
    height: '350px',
  },
  [maW[7]]: {
    width: '100%',
    height: '350px',
  },
});

export const row3 = css({
  padding: '20px 0px 20px 0px',
  gap: '50px',
});

export const row3row = css({
  [maW[6]]: {
    flexDirection: 'column',
    gap: '15px',
  },
});

export const popup = css({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '20px',
  zIndex: 999,

  backgroundColor: 'rgba(0, 0, 0, 1)',

  border: '1px solid rgba(204, 204, 204, 1)',
});

export const btnfilter = css({
  display: 'flex',
  width: '110px',
  height: '48px',
  padding: '16px',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: 'rgba(255, 255, 255, 0.32)',

  borderRadius: '15px',
  border: '1px solid rgba(255, 255, 255)',
});

export const btntext = css({
  fontFamily: 'Poppins SemiBold',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '28px',

  color: 'rgba(255, 255, 255)',
});

export const divBtn = css({
  width: '210px',
  borderRadius: '15px',
  backgroundColor: 'rgba(241, 176, 78, 1)',

  [maW[9]]: {
    width: '30%',
  },
  [maW[8]]: {
    width: '35%',
  },
  [maW[5]]: {
    width: '45%',
  },
  [maW[4]]: {
    width: '50%',
  },
  [maW[3]]: {
    width: '60%',
  },
  [maW[1]]: {
    width: '70%',
  },

  '&:hover': {
    backgroundColor: 'transparent',
  },
});

export const btnCap = css({
  //text
  textDecoration: 'none',

  color: 'rgba(255, 255, 255, 1)',

  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 1)',
    color: 'rgba(241, 176, 78, 1)',
  },
});

export const btnText = css({
  fontSize: '16px',
  fontFamily: 'Poppins Medium',
  fontWeight: '500',
  lineHeight: '28px',
  wordWrap: 'break-word',

  backgroundColor: 'transparent',

  // layout
  textAlign: 'center',
  marginTop: '37px',
  padding: '16px',

  borderRadius: '15px',
  border: '2px solid transparent',

  '&:hover': {
    border: '2px solid rgba(241, 176, 78, 1)',
  },
});

export const topicBubble = css({
  display: 'flex',
  width: 'max-content',
  padding: '7px 10.5px',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '10px',
  marginTop: '10px',

  backgroundColor: 'rgba(1, 83, 152, 1)',
  color: 'rgba(0, 0, 0, 1)',

  borderRadius: '10.5px',
  border: '0px',

  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255)',
    color: 'rgba(1, 83, 152)',
  },
});

export const topictext = css({
  margin: '0px',

  textAlign: 'center',
  fontFamily: 'Poppins SemiBold',
  fontSize: '12.25px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '21px',
});

export const titlePortfolio = css({
  marginTop: '6px',

  fontFamily: 'Poppins Medium',
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '36px',

  color: 'rgba(0, 0, 0, 1)',
});

export const titleDateProject = css({
  marginTop: '29px',

  fontFamily: 'Poppins Regular',
  fontSize: '14px',
  fontStyle: 'normal',

  color: 'rgba(0, 0, 0, 1)',

  [maW[8]]: {
    marginTop: '0px',
  },
});

export const titleClientName = css({
  marginTop: '0px',

  fontFamily: 'Poppins SemiBold',
  fontSize: '20px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '32px',

  color: 'rgba(9, 146, 243)',
});

export const captPortfolio = css({
  marginTop: '6px',

  fontFamily: 'Poppins SemiBold',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '21px',

  color: 'rgba(41, 45, 63, 0.72)',
});
export const descPortfolio = css({
  marginTop: '6px',

  fontFamily: 'Poppins Regular',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '21px',

  color: 'rgba(41, 45, 63, 0.72)',
});

export const fieldInputCU = css({
  width: '100%',
  height: '48px',
  padding: '16px',

  //shadow
  boxShadow: 'inset 1px 2px 2px rgba(0, 0, 0, 0.08)',

  border: '1px solid rgba(0, 0, 0, 1)',
  borderRadius: '15px',

  fontFamily: 'Poppins Medium',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '-0.006em',

  color: 'rgba(0, 0, 0, 1)',
  backgroundColor: 'transparent',

  '&:focus': {
    color: 'rgba(0, 0, 0, 1) !important',
    background: 'transparent',
    webkitAppearance: 'none !important',
  },
  '&:active': {
    color: 'rgba(0, 0, 0, 1) !important',
    background: 'transparent',
    webkitAppearance: 'none !important',
  },
});

export const typePortfolioTitle = css({
  margin: '0',

  color: 'rgba(0, 0, 0, 1)',

  fontFamily: 'Poppins SemiBold',
  fontSize: '34px',
  fontStyle: 'normal',
});
