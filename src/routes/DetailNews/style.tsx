import { css } from '@emotion/react';

import { maW, miW } from '@/style/globalStyle';

export const divSec1 = css({
  position: 'relative',
  paddingLeft: '0px',
  paddingRight: '0px',
  maxWidth: '1920px',

  backgroundColor: 'rgba(255, 255, 255, 1)',

  [maW[13]]: {
    width: '100%',
  },
});

export const imgBg = css({
  width: '100% !important',
  height: '532px',
  flexShrink: 0,
  objectFit: 'cover',
  position: 'relative',
});

export const filter = css({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
});

export const containerimg = css({
  width: 'auto !important' /* Or any desired width */,
  height: '532px' /* Or any desired height */,
  overflow: 'hidden' /* Hides overflowing parts of the image */,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

export const row1 = css({
  zIndex: '9',
  minHeight: '20vh',
  position: 'relative',

  [miW[7]]: {
    minHeight: '13vh',
  },
  [maW[6]]: {
    minHeight: '10vh',
  },
});

export const divPart2CU = css({
  padding: '0 6rem',
  position: 'relative',
  top: '-260px',
  right: '0',
  left: '0',

  [maW[7]]: {
    padding: '0 3rem',
    top: '-300px',
  },
  [maW[6]]: {
    padding: '0 1rem',
    top: '-340px',
  },
});

export const div2PP = css({
  position: 'relative',
  padding: '48px',
  borderRadius: '16px',

  background: 'rgba(255, 255, 255, 1)',

  [maW[7]]: {
    padding: '1rem',
  },
  [maW[6]]: {
    padding: '0rem',
  },
});

export const topicBubble = css({
  display: 'flex',
  width: 'max-content',
  padding: '7px 10.5px',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '10px',
  marginBottom: '8px',

  background: 'rgba(241, 176, 78, 1)',
  color: 'rgba(255, 255, 255, 1)',

  borderRadius: '10.5px',
  border: '1px solid rgba(241, 176, 78, 1)',

  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    color: 'rgba(241, 176, 78, 1)',
  },
});

export const topictext = css({
  margin: '0px',

  textAlign: 'center',
  fontFamily: 'Poppins Medium',
  fontSize: '12.25px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '21px',
});

export const divcat = css({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '16px',
  alignSelf: 'stretch',
  marginTop: '15px',

  [maW[7]]: {
    padding: '20px 4% 0px 4%',
    marginTop: '0px',
  },
  [maW[6]]: {
    flexDirection: 'column',
  },
});

export const divTopic = css({
  padding: '0px 10px 0px 10px',

  [maW[4]]: {
    padding: '0px 10% 0px 10%',
  },
});

export const divpublish = css({
  display: 'flex',
  alignItems: 'flex-start',
  alignSelf: 'stretch',

  [maW[7]]: {
    padding: '0px',
  },
  [maW[6]]: {
    flexDirection: 'column',
  },
});

export const divcat2 = css({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '16px',
  margin: '0px',

  [maW[6]]: {
    flexDirection: 'column',
  },
});

export const title = css({
  color: 'rgba(0, 0, 0)',

  fontFamily: 'Poppins Semibold',
  fontSize: '48px',
  fontStyle: 'normal',

  [maW[7]]: {
    padding: '20px 4% 0px 4%',
    fontSize: '28px',
  },
  [maW[2]]: {
    padding: '20px 5% 0px 5%',
  },
});

export const imgauthor = css({
  marginTop: '24px',
  width: '40px',
  height: '40px',

  color: 'rgba(0, 0, 0)',

  [maW[7]]: {},
});

export const author = css({
  marginTop: '24px',

  color: 'rgba(0, 0, 0)',

  fontFamily: 'Poppins Medium',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 500,

  [maW[7]]: {
    padding: '0px',
  },
});

export const createDate = css({
  color: 'rgba(0, 0, 0)',

  fontFamily: 'Poppins Regular',
  fontSize: '16px',
  fontStyle: 'normal',
});

export const divcontent = css({
  marginTop: '32px',

  [maW[7]]: {
    marginTop: '24px',
    marginLeft: '0%',
    marginRight: '0%',
    flexDirection: 'column',
    padding: '0px 4% 25px 4%',
    gap: '40px',
  },
  [maW[2]]: {
    padding: '0%',
  },
});

export const rowauthor = css({
  width: '100%',

  [maW[7]]: {
    width: '100%',
    padding: '0px 4% 0px 4%',
    flexDirection: 'row',
  },
  [maW[2]]: {
    padding: '0px 5% 0px 5%',
  },
});

export const colauthor2 = css({
  [maW[8]]: {
    width: '100%',
  },
});
export const col1content = css({
  paddingRight: '70px',
  [maW[7]]: {
    padding: '0%',
    width: '100%',
  },
  [maW[2]]: {
    padding: '0px 5% 0px 5%',
  },
});

export const col2content = css({
  [maW[7]]: {
    width: '100%',
  },
  [maW[2]]: {
    padding: '0px 5% 0px 5%',
  },
});

export const imgcontent = css({
  width: '100% !important',
  height: '400px',
  flexShrink: 0,
  objectFit: 'cover',
  position: 'relative',

  [maW[7]]: {
    width: '100%',
    height: '100%',
  },
});

export const btnDownloadPdf = css({
  textAlign: 'center',
  fontSize: '16px',
  fontFamily: 'Poppins Medium',
  fontWeight: '500',
  lineHeight: '28px',
  wordWrap: 'break-word',

  padding: '16px 24px',
  marginTop: '20px',

  borderRadius: '15px',
  border: '1.5px solid rgba(255, 255, 255)',

  backgroundColor: 'rgba(241, 176, 78, 1)',
  color: 'rgba(255, 255, 255)',

  '&:hover': {
    color: 'rgba(241, 176, 78, 1)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    border: '1.5px solid rgba(241, 176, 78, 1)',
  },

  [maW[6]]: {
    width: '100%',
  },
});

export const topicdesc = css({
  marginTop: '24px',

  color: 'rgba(0, 0, 0)',

  fontFamily: 'Poppins Regular',
  fontStyle: 'normal',
  lineHeight: '28px',

  td: {
    borderWidth: 'unset !important',
  },

  [maW[7]]: {
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

export const titlePortfolio = css({
  marginTop: '8px',

  color: 'rgba(0, 0, 0)',

  fontFamily: 'Poppins Medium',
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '36px',
});

export const descPortfolio = css({
  margin: '0px',
  textDecoration: 'none',

  color: 'rgba(41, 45, 63, 0.72)',

  fontFamily: 'Poppins Regular',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '24px',
});

export const textreadmore = css({
  marginTop: '4px',
  textDecoration: 'none',

  border: '0, 0, 0, 0',
  color: 'rgba(237, 123, 51, 1)',

  fontFamily: 'Poppins Medium',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '24px',
});

export const underline = css({
  margin: '32px 0',

  border: '1px solid rgba(0, 0, 0)',
});
