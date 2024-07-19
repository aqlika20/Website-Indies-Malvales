import { css } from '@emotion/react';

import { maW } from '@/style/globalStyle';

export const container = css({
  paddingLeft: '6%',
  paddingRight: '6%',

  [maW[6]]: {
    paddingLeft: '8%',
    paddingRight: '8%',
  },
});

export const divnar = css({
  width: '100%',
  textAlign: 'center',
  justifyContent: 'center',
  gap: '20px',
});

export const iconShow = css({
  backgroundImage: 'none !important',

  '&:focus': {
    outline: 'unset !important',
  },
});

export const cssIndex = css({
  marginRight: 0,

  color: 'rgba(255, 255, 255)',
  fontWeight: 500,

  '&:hover': {
    color: 'rgba(241, 176, 78, 1)',
  },
  [maW[7]]: {
    '&:hover': {
      color: 'rgba(0, 0, 0, 1)',
    },
  },
});

export const cssDropdown = css({
  color: 'rgba(0, 0, 0)',

  fontWeight: 500,

  '&:hover': {
    color: 'rgba(241, 176, 78, 1)',
  },

  [maW[7]]: {
    width: '100%',
  },

  //custom css for tag div
  div: {
    background: 'rgba(255, 255, 255, 1) !important',

    borderColor: 'transparent',

    top: '4rem !important',
    padding: 0,
    textAlign: 'center',

    [maW[7]]: {
      background: 'transparent !important',
    },

    //custom css for tag a
    a: {
      color: 'rgba(0, 0, 0)',

      fontWeight: 500,
      fontSize: '16px',

      padding: '1.1rem',

      borderTop: '1px solid rgba(0, 0, 0)',

      '&:hover': {
        background: 'rgba(255, 255, 255, 0.3)',
        color: 'rgba(9, 146, 243, 1)',
      },

      [maW[7]]: {
        textAlign: 'center',
        marginTop: '0px !important',

        color: 'rgba(0, 0, 0) !important',
        background: 'transparent !important',

        borderTop: '0px',
      },
    },
  },

  //custom css for tag a
  a: {
    color: 'rgba(0, 0, 0)',
    '&:after': {
      marginLeft: '10px',
      color: 'rgba(0, 0, 0)',
    },
  },

  '@media (prefers-color-scheme: dark)': {
    color: 'rgba(255, 255, 255)',

    //custom css for tag div
    div: {
      background: 'rgba(0, 0, 0, 0.9) !important',

      [maW[7]]: {
        background: 'rgba(0, 0, 0, 0) !important',
      },

      //custom css for tag a
      a: {
        color: 'rgba(255, 255, 255)',

        borderTop: '1px solid rgba(255, 255, 255)',

        [maW[7]]: {
          color: 'rgba(255, 255, 255) !important',
          borderTop: 'none',
        },
      },
    },

    //custom css for tag a
    a: {
      color: 'rgba(255, 255, 255)',
      '&:after': {
        color: 'rgba(255, 255, 255)',
      },
    },
  },
});

export const cssDropdownScroll = css({
  color: 'rgba(0, 0, 0)',

  fontWeight: 500,

  '&:hover': {
    color: 'rgba(9, 146, 243, 1)',
  },

  //resposnive
  [maW[7]]: {
    width: '100%',
  },

  //custom css for tag div
  div: {
    top: '4rem !important',
    padding: 0,
    textAlign: 'center',

    background: 'rgba(255, 255, 255, 1) !important',

    borderColor: 'transparent',

    [maW[7]]: {
      background: 'transparent !important',
    },

    //custom css for tag a
    a: {
      color: 'rgba(0, 0, 0)',

      fontWeight: 500,
      fontSize: '16px',

      padding: '1.1rem',

      borderTop: '1px solid rgba(0, 0, 0)',

      '&:hover': {
        background: 'rgba(255, 255, 255, 0.3)',
        color: 'rgba(9, 146, 243, 1)',
      },

      [maW[7]]: {
        textAlign: 'center',
        marginTop: '0px !important',

        color: 'rgba(0, 0, 0) !important',
        background: 'transparent !important',

        borderTop: '0px',
      },
    },
  },

  //custom css for tag a
  a: {
    color: 'rgba(0, 0, 0)',

    //custom css effect
    '&:after': {
      marginLeft: '10px',

      color: 'rgba(0, 0, 0)',
    },
  },

  '@media (prefers-color-scheme: dark)': {
    color: 'rgba(255, 255, 255)',

    //custom css for tag div
    div: {
      background: 'rgba(0, 0, 0, 0.9) !important',

      [maW[7]]: {
        background: 'transparent !important',
      },

      //custom css for tag a
      a: {
        color: 'rgba(255, 255, 255)',
        borderTop: '1px solid rgba(255, 255, 255)',

        [maW[7]]: {
          color: 'rgba(255, 255, 255) !important',
          borderTop: 'none',
        },
      },
    },

    //custom css for tag a
    a: {
      color: 'rgba(255, 255, 255)',

      //custom css effect
      '&:after': {
        color: 'rgba(255, 255, 255)',
      },
    },
  },
});

export const cssDD = css({
  color: 'rgba(0, 0, 0)',

  fontWeight: 500,

  '&:hover': {
    color: 'rgba(9, 146, 243, 1)',
  },

  [maW[7]]: {
    marginRight: '0rem',
  },

  '@media (prefers-color-scheme: dark)': {
    color: 'rgba(255, 255, 255)',

    '&:hover': {
      color: 'rgba(9, 146, 243, 1)',
    },
  },
});

export const cssActive = css({
  color: 'rgba(255, 255, 255, 1) !important',

  fontWeight: 700,

  borderBottom: '1px solid rgba(255, 255, 255)',

  '&:hover': {
    color: 'rgba(241, 176, 78, 1)',
  },

  [maW[7]]: {
    color: 'rgba(0, 0, 0, 1)',

    borderBottom: '0',

    '&:hover': {
      color: 'rgba(241, 176, 78, 1)',
    },
  },

  // '@media (prefers-color-scheme: dark)': {
  //   color: 'rgba(255, 255, 255)',
  //   borderBottom: '1px solid rgba(255, 255, 255)',
  // },
});

export const cssLaguage = css({
  display: 'flex',
  borderRadius: '12px',
  justifyContent: 'space-between',
  alignItems: 'center',

  textDecoration: 'none',
  fontWeight: 700,

  color: 'rgba(255, 255, 255)',

  '&:hover': {
    color: 'rgba(241, 176, 78, 1)',
  },

  [maW[7]]: {
    marginTop: '0 !important',
  },
});

export const cssLocale = css({
  color: 'rgba(0, 0, 0)',

  fontWeight: 500,

  '&:hover': {
    color: 'rgba(1, 83, 152)',
  },

  [maW[7]]: {
    margin: '1rem 0.5rem',

    color: 'unset',
  },

  '@media (prefers-color-scheme: dark)': {
    color: 'rgba(255, 255, 255)',
  },
});

export const imgLogoNav = css({
  width: 'auto',
  height: '50px',
  objectFit: 'fill',

  //resposnsive
  [maW[7]]: {
    width: 'auto',
    height: '40px',
  },
});

export const imgLogoPhone = css({
  [maW[7]]: {
    position: 'fixed',
    left: '6%',
    width: 'auto',
    height: '40px',
    objectFit: 'contain',
  },
  [maW[6]]: {
    left: '8%',
  },
});

export const icnClose = css({
  [maW[7]]: {
    position: 'fixed',
    right: '8%',
    height: '40px',
  },
});

export const icnShow = css({
  [maW[7]]: {
    position: 'fixed',
    right: '6%',
    top: '3%',
  },
  [maW[6]]: {
    top: '3%',
    right: '8%',
  },
});

export const navbarTP = css({
  zIndex: '999',
  height: '96px',
  width: '100%',
  position: 'fixed',

  background: 'rgba(0, 0, 0, 0.3) !important',

  [maW[7]]: {
    position: 'relative',
    background: 'rgba(0, 0, 0, 1) !important',
  },
  [maW[6]]: {
    height: '10%',
  },
});

export const navbarTPA = css({
  zIndex: '999',
  height: '96px',
  width: '100%',
  position: 'fixed',

  background: 'rgba(0, 0, 0, 0.9) !important',

  [maW[6]]: {
    height: '10%',
  },
});

export const navbarNTP = css({
  zIndex: '999',
  height: '96px',
  width: '100%',
  position: 'fixed',

  background: 'rgba(0, 0, 0, 0.3)!important',

  [maW[6]]: {
    height: '65px',
  },
});

export const navbarDivItem = css({
  display: 'flex',

  [maW[8]]: {
    display: 'block',
  },
});

export const navbarItem = css({
  fontFamily: 'Poppins Regular',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '24px',

  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  letterSpacing: '-0.011em',

  color: 'rgba(255, 255, 255)',

  '&:hover': {
    color: 'rgba(255, 255, 255)',
  },
});

export const navbarItemML = css({
  fontFamily: 'Poppins Regular',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '24px',

  display: 'flex',
  marginRight: '18px',
  alignItems: 'center',
  textAlign: 'center',
  letterSpacing: '-0.011em',

  color: 'rgba(255, 255, 255)',

  '&:hover': {
    color: 'rgba(255, 255, 255)',
  },
});

export const imgIcon = css({
  width: '24px !important',
  height: '24px',
  objectFit: 'cover',
});

export const divLaguege = css({
  display: 'flex',
  position: 'absolute',
  right: '5%',
  gap: '5px',

  [maW[7]]: {
    position: 'relative',
    justifyContent: 'center',
    right: '0',
  },

  [maW[6]]: {
    marginLeft: '0',
  },
});

export const divcolaps = css({
  display: 'flex',
  position: 'relative',

  [maW[7]]: {
    gap: '5px',
    justifyContent: 'center',
    right: '0',

    border: '1px solid rgba(255, 255, 255, 1)',
    borderRadius: '12px',
  },
});

export const breakLaguage = css({
  fontFamily: 'Poppins SemiBold',
  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '24px',
  fontStyle: 'normal',
  color: 'rgba(255, 255, 255)',
});

export const divButtonActive = css({
  display: 'flex',
  padding: '10px 16px',
  borderRadius: '12px',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'rgba(241, 176, 78, 1)',
  fontFamily: 'Poppins SemiBold',
  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '24px',
  fontStyle: 'normal',

  [maW[7]]: {
    color: 'rgba(0, 0, 0, 1)',
    background: 'rgba(255, 255, 255, 1)',
  },

  // '@media (prefers-color-scheme: dark)': {
  //   [maW[7]]: {
  //     background: 'rgba(255, 255, 255)',
  //     color: 'rgba(1, 83, 152)',
  //   },
  // },
});

export const divButtonInActive = css({
  display: 'flex',
  padding: '10px 16px',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Poppins SemiBold',
  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '24px',
  fontStyle: 'normal',

  borderRadius: '12px',

  [maW[7]]: {
    color: 'rgba(255, 255, 255, 1)',
  },
});
