import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';

import Image from 'next/image';
import Link from 'next/link';
import router, { useRouter } from 'next/router';

import { API_URL_IMAGE } from '@/constants/env';
import { useGlobalContext } from '@/context/global/global';
import formatDateEn from '@/helper/formatDateEn';
import formatDateId from '@/helper/formatDateId';
import { useHashtagStore } from '@/helper/useHashtag';

import {
  btnDownloadPdf,
  col1content,
  col2content,
  containerimg,
  descPortfolio,
  div2PP,
  divPart2CU,
  divSec1,
  divcat,
  divcat2,
  divcontent,
  filter,
  imgBg,
  imgcontent,
  row1,
  textreadmore,
  title,
  titleDateProject,
  titlePortfolio,
  topicBubble,
  topicdesc,
  topictext,
  underline,
} from '../style';

const Section1 = ({}: any) => {
  const { portfolioDetail, portfolioList } = useGlobalContext();
  const { locale }: any = useRouter();
  const data = portfolioDetail?.detail || '' || [];
  
  const { hashtag, setHashtag } = useHashtagStore();

  const handleClickHashtag = (tag) => {
    setHashtag(tag);
    router.push({
      pathname: '/portfolio',
    });
  };

  return (
    <>
      <div css={containerimg}>
        <Image
          alt={locale === 'id' ? data.alt_id : data.alt_en}
          priority={true}
          sizes="(max-width: 768px) 50vw, 23vw"
          width={1440}
          height={523}
          src={`${API_URL_IMAGE}/${locale === 'id' ? data.image_id : data.image_en}`}
          css={imgBg}
        />
        <div css={filter} />
      </div>
      <Container css={divSec1} fluid>
        <div css={row1}>
          <div css={divPart2CU}>
            <div css={div2PP}>
              <div css={divcat}>
                <Row style={{ paddingRight: '10px', paddingLeft: '10px' }}>
                  {data?.length === 0 ? (
                    <div />
                  ) : data.hashtag_id === null && data.hashtag_en === null ? (
                    <div />
                  ) : locale === 'id' ? (
                    data.hashtag_id.split(',').map((hashtag: string, index: number) => (
                      <button key={index} css={topicBubble} onClick={() => handleClickHashtag(hashtag)}>
                        <p css={topictext}>{hashtag.trim()}</p>
                      </button>
                    ))
                  ) : (
                    data.hashtag_en.split(',').map((hashtag: string, index: number) => (
                      <button key={index} css={topicBubble} onClick={() => handleClickHashtag(hashtag)}>
                        <p css={topictext}>{hashtag.trim()}</p>
                      </button>
                    ))
                  )}
                </Row>
              </div>
              <div css={title}>{locale === 'id' ? data.title_id : data.title_en}</div>
              <div css={titleDateProject}>
                {locale === 'id' ? formatDateId(data.publish_date) : formatDateEn(data.publish_date)}
              </div>
              <Row css={divcontent}>
                <Col css={col1content} md={8}>
                  <Image
                    alt={locale === 'id' ? data.alt_id : data.alt_en}
                    priority={true}
                    sizes="(max-width: 768px) 50vw, 33vw"
                    width={1440}
                    height={523}
                    src={`${API_URL_IMAGE}/${locale === 'id' ? data.image_id : data.image_en}`}
                    css={imgcontent}
                  />
                  <div css={topicdesc}>
                    {ReactHtmlParser(locale === 'id' ? data.article_detail_id : data.article_detail_en)}
                    {data.url_source_id === null && data.url_source_en === null ? (
                      <div />
                    ) : (
                      <div>
                        Source:{' '}
                        <a href={locale === 'id' ? data.url_source_id : data.url_source_en} target="_blank">
                          {locale === 'id' ? data.url_source_id : data.url_source_en}
                        </a>
                      </div>
                    )}
                    {data.file_id_url === null && data.file_en_url === null ? (
                      <div />
                    ) : (
                      <a
                        css={{ textDecoration: 'none', width: 'auto' }}
                        target="_blank"
                        href={locale === 'id' ? data.file_id_url : data.file_en_url}
                      >
                        <button css={btnDownloadPdf}>
                          <p css={{ margin: '0px' }}>
                            {locale === 'id' ? 'Unduh Brosur' : 'Download Brochure'}
                            <svg
                              css={{ marginLeft: '10px' }}
                              width="25"
                              height="24"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M12 5v13M5 12l7 7 7-7" />
                            </svg>
                          </p>
                        </button>
                      </a>
                    )}
                  </div>
                </Col>
                <Col css={col2content} md={4}>
                  <Row css={divcat2}>
                    {portfolioList?.rows.length === 0 ? (
                      <div css={{ display: 'none' }} />
                    ) : (
                      portfolioList?.rows.map((e: any) => (
                        <div key={e.id}>
                          <Row style={{ paddingRight: '10px', paddingLeft: '10px' }}>
                            {e.hashtag_id === null && e.hashtag_en === null ? (
                              <div />
                            ) : locale === 'id' ? (
                              e.hashtag_id
                                .split(',')
                                .slice(0, 3)
                                .map((hashtag: string, index: number) => (
                                  <button key={index} css={topicBubble} onClick={() => handleClickHashtag(hashtag)}>
                                    <p css={topictext}>{hashtag.trim()}</p>
                                  </button>
                                ))
                            ) : (
                              e.hashtag_en
                                .split(',')
                                .slice(0, 3)
                                .map((hashtag: string, index: number) => (
                                  <button key={index} css={topicBubble} onClick={() => handleClickHashtag(hashtag)}>
                                    <p css={topictext}>{hashtag.trim()}</p>
                                  </button>
                                ))
                            )}
                          </Row>
                          <p css={titlePortfolio}>{locale === 'id' ? e.title_id : e.title_en}</p>
                          <p css={descPortfolio}>{locale === 'id' ? e.caption_id : e.caption_en}</p>
                          <Link
                            href={`/portfolio/detail${locale === 'id' ? e.meta.url_slug_id : e.meta.url_slug_en}`}
                            css={textreadmore}
                          >
                            {locale === 'id' ? 'Baca Lebih Lanjut' : 'Read More'}
                          </Link>
                          <hr css={underline} />
                        </div>
                      ))
                    )}
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Section1;
