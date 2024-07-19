import { Col, Container, Row } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { API_URL_IMAGE } from '@/constants/env';
import { useGlobalContext } from '@/context/global/global';

import { captionService, divOurService, divSec, imageSec2 } from './style';

function Section2() {
  const { home } = useGlobalContext();
  const { locale } = useRouter();

  return (
    <>
      <Container css={divSec} fluid>
        <div css={divOurService}>
          {home.map((data: any) => (
            <Row key={data.id}>
              <Col md={6}>
                <div css={captionService}>{ReactHtmlParser(locale === 'id' ? data.caption_id : data.caption_en)}</div>
              </Col>
              <Col style={{ textAlign: 'center' }} md={6}>
                <Image
                  key={data.id}
                  alt={locale === 'id' ? data.alt_id : data.alt_en}
                  priority={true}
                  width={1920}
                  height={1085}
                  src={`${API_URL_IMAGE}/${locale === 'id' ? data.image_id : data.image_en}`}
                  css={imageSec2}
                />
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Section2;
