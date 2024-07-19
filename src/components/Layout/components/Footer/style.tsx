import { css } from '@emotion/react';

import { maW } from '@/style/globalStyle';

export const footerBG = css({
  zIndex: '99',
  padding: '3.5rem 6% 1.5rem 6%',
  position: 'absolute',
  left: 0,
  right: 0,

  background: 'rgba(26, 26, 26, 1) !important',

  [maW[11]]: {
    padding: '3.5rem 7% 1.5rem 7%',
  },
  [maW[6]]: {
    position: 'unset',
    padding: '3.5rem 8% 2rem 8%',
  },
});

export const imgLogoNav = css({
  objectFit: 'contain',
});

export const parCP = css({
  fontFamily: 'Poppins Regular', 
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '12px',
  lineHeight: '16px',

  color: 'rgba(218, 218, 218, 1)',
});

export const colSocmed = css({
  display: 'flex',
  alignItems: 'end',

  color: 'rgba(0, 0, 0)',

  [maW[6]]: {
    justifyContent: 'center',
  },

  '@media (prefers-color-scheme: dark)': {
    color: 'rgba(255, 255, 255)',
  },
});

export const col1 = css({
  [maW[7]]: {
    width: '30%',
  },
  [maW[6]]: {
    width: '100%',
  },
});

export const col2 = css({
  [maW[7]]: {
    width: '30%',
  },
  [maW[6]]: {
    width: '100%',
  },
});

export const divimglogo = css({
  [maW[6]]: {
    marginTop: '30px',
    textAlign: 'center',
  },
});

export const imglogo = css({
  [maW[6]]: {
    width: '250px',
  },
});

export const icnSosmed = css({
  width: '30px',
  height: '30px',
});
export const divIcn = css({
  marginRight: '5%',
});

export const sosmedIcon = css({
  [maW[6]]: {
    width: '40px',
    height: '40px',
  },
});

export const rowFooter1 = css({
  marginBottom: '1.5rem',
  gap: '200px',

  [maW[7]]: {
    gap: '35px',
  },
  [maW[6]]: {
    flexDirection: 'column',
    gap: '25px',
  },
});

export const divSosmed = css({
  [maW[10]]: {
    width: '10%',
  },
  [maW[7]]: {
    width: '30%',
  },
  [maW[6]]: {
    display: 'none',
  },
});

export const divSosmedPhone = css({
  display: 'none',

  [maW[6]]: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '30px',
  },
});

export const rowFooter2 = css({
  borderTop: '0.5px solid rgba(224, 224, 224)',

  paddingTop: '2rem',

  [maW[7]]: {
    paddingTop: '1rem',
  },
});

export const title = css({
  color: 'rgba(255, 255, 255)', //white
  marginBottom: '1rem',

  fontFamily: 'Poppins Regular', 
  fontSize: '20px',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: '30px',
});

export const list = css({
  color: 'rgba(255, 255, 255)',

  fontFamily: 'Poppins Regular', 
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '24px',
  textDecoration: 'none',
});

export const desc = css({
  color: 'rgba(255, 255, 255)',

  fontFamily: 'Poppins Regular', 
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '24px',
});
