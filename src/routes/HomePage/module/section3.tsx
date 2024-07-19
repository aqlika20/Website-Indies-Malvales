import { Col, Container, Row } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { API_URL_IMAGE } from '@/constants/env';
import { useGlobalContext } from '@/context/global/global';

import { captionService, colSec3, divSec, imageAboutUs, rowSec3, divAboutUs } from './style';

function Section3() {
  const { aboutus } = useGlobalContext();
  const { locale } = useRouter();

  return (
    <>
      <Container css={divSec} fluid>
        <div css={divAboutUs}>
          {aboutus.map((data: any) => (
            <Row key={data.id} css={rowSec3}>
              <Col css={colSec3} md={6}>
                <Image
                  key={data.id}
                  alt={locale === 'id' ? data.alt_id : data.alt_en}
                  priority={true}
                  width={1920}
                  height={1085}
                  src={`${API_URL_IMAGE}/${locale === 'id' ? data.image_id : data.image_en}`}
                  css={imageAboutUs}
                />
              </Col>
              <Col css={colSec3} md={6}>
                <div css={captionService}>{ReactHtmlParser(locale === 'id' ? data.caption_id : data.caption_en)}</div>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Section3;
