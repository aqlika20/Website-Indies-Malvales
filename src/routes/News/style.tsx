import { css } from '@emotion/react';

import { maW } from '@/style/globalStyle';

export const noDataStyle = css({
  fontFamily: 'Poppins Medium',
  width: '100%',
  height: '60vh',
  display: 'flex',
  justifyContent: 'center',
  color: 'rgba(0, 0, 0)',

  [maW[7]]: {
    height: '30vh',
  },
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

export const imgBg = css({
  width: '100% !important',
  height: 'auto',
  left: '-270px',
  opacity: '0.199999999999',
  top: '-535px',
  zIndex: 0,
  position: 'absolute',
  objectFit: 'scale-down',
});

export const btnfilter = css({
  display: 'flex',
  width: '110px',
  height: '48px',
  padding: '16px',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: 'transparent',

  borderRadius: '15px',
  border: '1px solid rgba(0, 0, 0)',
});

export const btntext = css({
  fontFamily: 'Poppins SemiBold',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '28px',

  color: 'rgba(0, 0, 0)',
});

export const row1 = css({
  padding: '9% 6% 1% 6%',
  marginLeft: '0',
  marginRight: '0',

  [maW[8]]: {
    padding: '15% 7% 3rem 7%',
  },
  [maW[6]]: {
    flexDirection: 'column',
    padding: '20% 8% 1rem 8%',
  },
  [maW[4]]: {
    padding: '30% 8% 1rem 8%',
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
  [maW[7]]: {
    width: '20%',
  },
  [maW[6]]: {
    width: '40%',
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
  padding: '0rem 6% 0rem 6%',

  [maW[7]]: {
    padding: '0rem 7% 0rem 7%',
  },
  [maW[6]]: {
    padding: '0rem 8% 0rem 8%',
  },
});

export const divgriditem = css({
  width: '100%',
});

export const grid = css({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridGap: '30px',

  [maW[11]]: {
    gridTemplateColumns: '400px 400px 400px',
  },
  [maW[10]]: {
    gridTemplateColumns: '380px 380px 380px',
  },
  [maW[9]]: {
    gridTemplateColumns: '355px 355px 355px',
  },
  [maW[8]]: {
    gridTemplateColumns: '1fr 1fr',
  },
  [maW[7]]: {
    gridTemplateColumns: '1fr 1fr',
  },
  [maW[7]]: {
    gridTemplateColumns: '1fr 1fr',
  },
  [maW[6]]: {
    gridTemplateColumns: '1fr',
  },
});

export const gridItem = css({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  textDecoration: 'none',
  justifyContent: 'space-between',
  height: '100% !important',
  maxHeight: '400px !important',
  gap: 15,

  [maW[7]]: {
    width: '100%',
  },
  [maW[6]]: {
    gap: 10,
    marginBottom: '0px',
  },
});

export const image = css({
  flexShrink: 0,
  width: '100%',
  objectFit: 'cover',
  position: 'relative',
  borderRadius: '8px',

  [maW[14]]: {
    width: '100%',
    height: '300px',
  },
  [maW[11]]: {
    width: '400px',
    height: '250px',
  },
  [maW[10]]: {
    width: '100%',
    height: '229px',
  },
  [maW[6]]: {
    width: '100%',
    height: '212px',
  },
});

export const topicBubble = css({
  width: 'fit-content',
  cursor: 'pointer',

  color: 'rgba(241, 176, 78, 1)',

  '&:hover': {
    color: 'rgba(0, 0, 0)',
  },
});

export const topictext = css({
  margin: '0px',

  fontFamily: 'Poppins Medium',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '28px',

  [maW[7]]: {
    fontSize: '13px',
    lineHeight: '18px',
  },
  [maW[6]]: {
    fontSize: '10px',
    lineHeight: '14px',
  },
});

export const titlePortfolio = css({
  marginTop: '6px',

  color: 'rgba(0, 0, 0)',

  fontFamily: 'Poppins SemiBold',
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '40px',

  [maW[7]]: {
    fontSize: '20px',
    lineHeight: '30px',
  },
  [maW[6]]: {
    marginBottom: '10px',
  },
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
