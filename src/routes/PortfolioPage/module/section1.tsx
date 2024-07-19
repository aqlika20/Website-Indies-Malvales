import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { API_URL_IMAGE } from '@/constants/env';
import { useGlobalContext } from '@/context/global/global';
import formatDateEn from '@/helper/formatDateEn';
import formatDateId from '@/helper/formatDateId';
import { useHashtagStore } from '@/helper/useHashtag';
import useFetchMutation from '@/hooks/useFetch/mutation';

import Pagination from '../../../components/Pagination/pagination';
import {
  btnCap,
  btnText,
  captPortfolio,
  descPortfolio,
  divBtn,
  divSec1,
  fieldInputCU,
  image,
  noDataStyle,
  row1,
  row1col1,
  row1col3,
  row2,
  row2col1,
  row2col2,
  row3,
  titleDateProject,
  titlePortfolio,
  topicBubble,
  topictext,
  typePortfolioTitle,
  underline,
} from '../style';

const Section1 = ({}: any) => {
  const { portfolio = {}, portTitle } = useGlobalContext();
  const { locale, query } = useRouter();

  const [fetchNewData, { data, loading }] = useFetchMutation<any>('/api/v1/post-article');
  const usedPortfoliodata = data?.data || portfolio || {};
  const { rows, total } = usedPortfoliodata;

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(3);
  const [searchTerm, setSearchTerm] = useState('');
  const { hashtag: storeHashtag, setHashtag } = useHashtagStore();

  useEffect(() => {
    if (query) {
      const {
        page = currentPage,
        order_by = 'publish_date',
        max_rows = postPerPage,
        order_type = 'desc',
        hashtag = storeHashtag,
        o = 1,
        search = searchTerm,
        category = 'Portfolio',
      } = query;

      fetchNewData({
        variables: { page, order_by, max_rows, order_type, hashtag, o, search, category },
      });
    }
  }, [query, storeHashtag, currentPage, searchTerm, postPerPage, fetchNewData]);

  const handleClickHashtag = (tag) => {
    setCurrentPage(1);
    setHashtag(tag);
  };

  const handleSearch = (event) => {
    const search = event.target.value;
    setHashtag(null);
    setSearchTerm(search); // Menyimpan nilai input ke state searchTerm
    setCurrentPage(1);
  };

  const truncateText = (text: string) => {
    if (text.length > 320) {
      return text.substring(0, 320) + '...';
    }
    return text;
  };
  
  const totalPages = Math.ceil(portfolio.total / postPerPage);

  return (
    <>
      <Container css={divSec1} fluid>
        <Row css={row1}>
          <Col css={row1col1} md={8}>
            <h2 css={typePortfolioTitle}>
              {ReactHtmlParser(locale === 'id' ? portTitle?.layout_detail_id : portTitle?.layout_detail_en)}
            </h2>
          </Col>
          <Col css={row1col3} md={4}>
            <input
              css={fieldInputCU}
              type="text"
              value={searchTerm} // Controlled input - value from state
              onChange={handleSearch} // onChange event handler
              placeholder={locale !== 'en' ? 'Pencarian' : 'Search'}
            />
          </Col>
        </Row>
        {rows?.length === 0 ? (
          <div css={noDataStyle}>
            <h1>{locale === 'id' ? 'Tidak Ada Data' : 'No Data'}</h1>
          </div>
        ) : (
          rows?.map((e: any) => (
            <div css={row2} key={e.id}>
              <Row css={underline}>
                <Col css={row2col1} md={5}>
                  <Image
                    css={image}
                    priority
                    sizes="(max-width: 768px) 50vw, 23vw"
                    src={`${API_URL_IMAGE}/${locale === 'id' ? e.image_id : e.image_en}`}
                    alt={locale === 'id' ? e.alt_id : e.alt_en}
                    width={380}
                    height={380}
                  />
                </Col>
                <Col css={row2col2} md>
                  <div css={row3}>
                    <Row style={{ paddingRight: '10px', paddingLeft: '10px' }}>
                      {e.hashtag_id === null && e.hashtag_en === null ? (
                        <div></div>
                      ) : locale === 'id' ? (
                        e.hashtag_id
                          .split(',')
                          .slice(0, 3)
                          .map((hashtag: string, index: number) => (
                            <button key={index} css={topicBubble} onClick={() => handleClickHashtag(hashtag.trim())}>
                              <p css={topictext}>{hashtag.trim()}</p>
                            </button>
                          ))
                      ) : (
                        e.hashtag_en
                          .split(',')
                          .slice(0, 3)
                          .map((hashtag: string, index: number) => (
                            <button key={index} css={topicBubble} onClick={() => handleClickHashtag(hashtag.trim())}>
                              <p css={topictext}>{hashtag.trim()}</p>
                            </button>
                          ))
                      )}
                    </Row>
                    <div css={titleDateProject}>
                      {locale === 'id' ? formatDateId(e.publish_date) : formatDateEn(e.publish_date)}
                    </div>
                    <div css={titlePortfolio}>{locale === 'id' ? e.title_id : e.title_en}</div>
                    <div css={captPortfolio}>{ReactHtmlParser(locale === 'id' ? e.caption_id : e.caption_en)}</div>
                    <div css={descPortfolio}>
                      {ReactHtmlParser(
                        locale === 'id' ? truncateText(e.article_detail_id) : truncateText(e.article_detail_en),
                      )}
                    </div>
                    <div css={divBtn}>
                      <Link
                        css={btnCap}
                        href={`/portfolio/detail${locale === 'id' ? e.meta.url_slug_id : e.meta.url_slug_en}`}
                      >
                        <div css={btnText}>
                          {locale === 'id' ? 'Baca Lebih Lanjut' : 'Read More'}
                          <svg
                            fill="currentcolor"
                            xmlns="http://www.w3.org/2000/svg"
                            id="Layer_1"
                            data-name="Layer 1"
                            viewBox="0 0 24 24"
                            width="22px"
                            height="22px"
                            css={{ marginLeft: '8px' }}
                          >
                            <path d="M24,2V14h-2V3.414L1.457,23.957,.043,22.543,20.586,2H10V0h12c1.103,0,2,.897,2,2Z" />
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          ))
        )}
        {Number(postPerPage) / Number(portfolio.total) >= 1 ? (
          <div></div>
        ) : (
          <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
        )}
      </Container>
    </>
  );
};

export default Section1;
