// components/Section1.tsx
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { API_URL_IMAGE } from '@/constants/env';
import { useGlobalContext } from '@/context/global/global';
import { useHashtagStore } from '@/helper/useHashtag';
import useFetchMutation from '@/hooks/useFetch/mutation';

import Pagination from '../../../components/Pagination/pagination';
import {
  divSec1,
  divgriditem,
  fieldInputCU,
  grid,
  gridItem,
  image,
  noDataStyle,
  row1,
  row1col1,
  row1col3,
  row2,
  titlePortfolio,
  topicBubble,
  topictext,
  typePortfolioTitle,
} from '../style';

const Section1 = () => {
  const { news = {}, titleNews, slug } = useGlobalContext();
  const { locale, query } = useRouter();

  const [fetchNewData, { data, loading }] = useFetchMutation<any>('/api/v1/post-article');
  const usedNewsdata = data?.data || news || {};
  const { rows } = usedNewsdata;

  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 9;
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryState, setCategory] = useState(slug);
  const { hashtag: storeHashtag, setHashtag } = useHashtagStore();
  const [maxRows, setMaxRows] = useState(9);

  const handleClickHashtag = async (tag) => {
    setCurrentPage(1);
    setHashtag(tag);
  };

  const handleSearch = (event) => {
    const search = event.target.value;
    setHashtag(null);
    setSearchTerm(search);
    setCurrentPage(1);
  };

  const handleResize = () => {
    setMaxRows(window.innerWidth < 1180 ? 8 : 9);
  };

  useEffect(() => {
    if (query) {
      const {
        page = currentPage,
        order_by = 'publish_date',
        max_rows = maxRows,
        order_type = 'desc',
        hashtag = storeHashtag,
        o = 4,
        search = searchTerm,
        category = 'News',
      } = query;

      fetchNewData({
        variables: { page, order_by, max_rows, order_type, hashtag, o, search, category },
      });
    }
  }, [query, currentPage, searchTerm, storeHashtag, maxRows, categoryState, fetchNewData]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setCategory(slug);
  }, [slug]);

  const totalPages = Math.ceil(news.total / postPerPage);

  return (
    <>
      <Container css={divSec1} fluid>
        <Row css={row1}>
          <Col css={row1col1} md={8}>
            <div css={typePortfolioTitle}>
              {ReactHtmlParser(locale === 'id' ? titleNews?.layout_detail_id : titleNews?.layout_detail_en)}
            </div>
          </Col>
          <Col css={row1col3} md={4}>
            <input
              css={fieldInputCU}
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder={locale !== 'en' ? 'Pencarian' : 'Search'}
            />
          </Col>
        </Row>
        {rows?.length === 0 ? (
          <div css={noDataStyle}>
            <div>{locale === 'id' ? 'Tidak Ada Data' : 'No Data'}</div>
          </div>
        ) : (
          <div css={row2}>
            <div css={grid}>
              {rows?.map((e) => (
                <div css={divgriditem} key={e.id}>
                  <Row>
                    {e.hashtag_id === null && e.hashtag_en === null ? (
                      <div css={{ width: 'fit-content' }}>
                        <div></div>
                      </div>
                    ) : locale === 'id' ? (
                      e.hashtag_id.split(',').map((hashtag, index) => (
                        <div key={index} css={topicBubble}>
                          <div css={topictext} onClick={() => handleClickHashtag(hashtag.trim())}>
                            {hashtag.trim()}
                          </div>
                        </div>
                      ))
                    ) : (
                      e.hashtag_en.split(',').map((hashtag, index) => (
                        <div key={index} css={topicBubble}>
                          <div css={topictext} onClick={() => handleClickHashtag(hashtag.trim())}>
                            {hashtag.trim()}
                          </div>
                        </div>
                      ))
                    )}
                  </Row>
                  <Link
                    key={e.id}
                    href={`/news/detail${locale === 'id' ? e.meta.url_slug_id : e.meta.url_slug_en}`}
                    css={gridItem}
                  >
                    <div style={{ height: '100%' }}>
                      <div css={titlePortfolio}>{locale === 'id' ? e.title_id : e.title_en}</div>
                    </div>
                    <div style={{ width: '100%' }}>
                      <Image
                        css={image}
                        priority={true}
                        sizes="(max-width: 768px) 50vw, 33vw"
                        src={`${API_URL_IMAGE}/${locale === 'id' ? e.image_id : e.image_en}`}
                        alt={locale === 'id' ? e.alt_id : e.alt_en}
                        width={500}
                        height={300}
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
        {Number(postPerPage) / Number(news.total) >= 1 ? (
          <div></div>
        ) : (
          <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
        )}
      </Container>
    </>
  );
};

export default Section1;
