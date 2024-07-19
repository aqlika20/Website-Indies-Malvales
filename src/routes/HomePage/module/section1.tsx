import { Col, Container, Row } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';

import { useRouter } from 'next/router';

import { API_URL_IMAGE } from '@/constants/env';
import { useGlobalContext } from '@/context/global/global';

import { btnBanner, colSec1, divSec1, divSec, titleBanner, divBanner } from './style';

const Section1 = () => {
  const { banner } = useGlobalContext();
  const { locale } = useRouter();
  return (
    <>
      {banner.map((banner: any) => (
        <div key={banner.id} css={divBanner}>
          <video width="100%" height="100%" autoPlay loop muted playsInline>
            <source src={`${API_URL_IMAGE}/${locale === 'id' ? banner.image_id : banner.image_en}`} type="video/mp4" />
          </video>
        </div>
      ))}
      <div css={divSec1}>
        <Container css={divSec} fluid>
          {banner.map((banner: any) => (
            <Col css={colSec1} key={banner.id} md={5}>
              <div css={titleBanner}>{ReactHtmlParser(locale === 'id' ? banner?.title_id : banner?.title_en)}</div>
              <button css={btnBanner} onClick={() => (window.location.href = '#contactUs')}>
                {locale === 'id' ? 'Ayo Bicara' : "Let's Talk"}
              </button>
            </Col>
          ))}
        </Container>
      </div>
    </>
  );
};

export default Section1;
