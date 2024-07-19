import { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';

import { useRouter } from 'next/router';

import { useGlobalContext } from '@/context/global/global';

import { cardJobstreet, colJobstreetCard, descCardJobstreet, divJobstreetCard, divSec, iconJob, titleCardJobstreet } from './style';

function Section4() {
  const { vacancy } = useGlobalContext();
  const { locale } = useRouter();

  return (
    <>
      <Container css={divSec} fluid>
        <Row css={divJobstreetCard}>
          {vacancy.map((card) => (
            <Col
              css={colJobstreetCard}
              key={card.id}
              md={4}
              style={{ paddingLeft: '0px !important', paddingRight: '0px !important' }}
            >
              <Card css={cardJobstreet}>
                <a
                  href={locale === 'id' ? card.url_id : card.url_en}
                  target="_blank"
                  css={{ textDecoration: 'none' }}
                  rel="noopener noreferrer"
                >
                  <Card.Body css={{ height: '100%' }}>
                    <div css={titleCardJobstreet}>
                      {locale === 'id' ? card.title_id : card.title_en}
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        css={iconJob}
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.634624 18.3654C0.38145 18.1122 0.239218 17.7689 0.239218 17.4108C0.239218 17.0528 0.381451 16.7094 0.634624 16.4562L14.1746 2.91627L3.84206 3.16828C3.49101 3.16444 3.15526 3.02399 2.90604 2.77673C2.65681 2.52947 2.51371 2.19484 2.50709 1.84383C2.50046 1.49282 2.63084 1.15304 2.87056 0.89655C3.11028 0.640063 3.44049 0.487049 3.79115 0.469965L17.4737 0.151767C17.6551 0.148427 17.8353 0.181701 18.0036 0.249599C18.1719 0.317498 18.3248 0.418628 18.4531 0.546945C18.5814 0.675261 18.6825 0.82813 18.7504 0.996415C18.8183 1.1647 18.8516 1.34495 18.8483 1.52638L18.5301 15.2089C18.5321 15.3896 18.4978 15.5688 18.4292 15.7359C18.3606 15.9031 18.2592 16.0548 18.131 16.182C18.0027 16.3093 17.8502 16.4095 17.6825 16.4767C17.5148 16.544 17.3353 16.5769 17.1547 16.5734C16.9741 16.57 16.7959 16.5304 16.6309 16.4569C16.4659 16.3834 16.3172 16.2775 16.1939 16.1455C16.0705 16.0135 15.9749 15.8581 15.9127 15.6885C15.8505 15.5188 15.823 15.3384 15.8318 15.158L16.0838 4.82546L2.54381 18.3654C2.29064 18.6186 1.94726 18.7608 1.58922 18.7608C1.23117 18.7608 0.887798 18.6186 0.634624 18.3654Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <div css={descCardJobstreet} style={{ marginTop: '10px' }}>
                      {ReactHtmlParser(locale === 'id' ? card.caption_id : card.caption_en)}
                    </div>
                  </Card.Body>
                </a>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Section4;
