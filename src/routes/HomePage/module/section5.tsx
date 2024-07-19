import { Col, Container, Row } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';
import Slider from 'react-slick';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import arrowRight from '@/../public/icon/panahKanan.svg';
import arrowLeft from '@/../public/icon/panahKiri.svg';
import { API_URL_IMAGE } from '@/constants/env';
import { useGlobalContext } from '@/context/global/global';

import {
  arrowLeftProgram,
  arrowRightProgram,
  colSec5,
  colSec52,
  desc1Sec5,
  divSec,
  divSec5,
  imageslide,
  linkPortfolio,
  rowSec5,
  title1,
  title1OSec3,
} from './style';

function Section5() {
  const { portfolio, titlePortfolio, subtitlePortfolio, captionPortfolio } = useGlobalContext();
  const { locale } = useRouter();

  const settingsSlider = {
    className: 'center',
    infinite: true,
    speed: 2000,
    autoplay: false,
    slidesToShow: 2,
    responsive: [
      { breakpoint: 700, settings: { slidesToShow: 2 } },
      { breakpoint: 577, settings: { slidesToShow: 1 } },
    ],
    nextArrow: <Image css={arrowRightProgram} alt="icon-program-slider" src={arrowRight} />,
    prevArrow: <Image css={arrowLeftProgram} alt="icon-program-slider" src={arrowLeft} />,
  };
  return (
    <>
      <Container css={divSec} fluid>
        <div css={divSec5} id="portfolio">
          {portfolio?.length !== 0 && (
            <Container css={{ position: 'relative' }} fluid>
              <Row css={rowSec5}>
                <Col css={colSec5} md={5}>
                  <Row>
                    <div css={title1}>
                      {ReactHtmlParser(
                        locale === 'id' ? titlePortfolio.layout_detail_id : titlePortfolio.layout_detail_en,
                      )}
                    </div>
                  </Row>
                  <Row>
                    <div css={title1OSec3}>
                      {ReactHtmlParser(
                        locale === 'id' ? subtitlePortfolio.layout_detail_id : subtitlePortfolio.layout_detail_en,
                      )}
                    </div>
                  </Row>
                  <Row>
                    <div css={desc1Sec5}>
                      {ReactHtmlParser(
                        locale === 'id' ? captionPortfolio.layout_detail_id : captionPortfolio.layout_detail_en,
                      )}
                    </div>
                  </Row>
                </Col>
                <Col css={colSec52} md={7}>
                  <Slider {...settingsSlider}>
                    {portfolio?.map((e) => (
                      <Link
                        css={linkPortfolio}
                        key={e.id}
                        href={`/portfolio/detail${locale === 'id' ? e.meta.url_slug_id : e.meta.url_slug_en}`}
                      >
                        <Image
                          key={e.id}
                          css={imageslide}
                          loading="lazy"
                          src={`${API_URL_IMAGE}/${locale === 'id' ? e.image_id : e.image_en}`}
                          alt={locale === 'id' ? e.alt_id : e.alt_en}
                          width={400}
                          height={450}
                        />
                        <div css={title1OSec3}>{locale === 'id' ? e.title_id : e.title_en}</div>
                      </Link>
                    ))}
                  </Slider>
                </Col>
              </Row>
            </Container>
          )}
        </div>
      </Container>
    </>
  );
}

export default Section5;
