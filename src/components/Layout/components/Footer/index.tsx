import { Col, Row } from 'react-bootstrap';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useGlobalContext } from '@/context/global/global';
import ReactHtmlParser from 'react-html-parser';

import {
  col1,
  col2,
  divSosmed,
  divSosmedPhone,
  divimglogo,
  footerBG,
  imgLogoNav,
  list,
  parCP,
  rowFooter1,
  rowFooter2,
  desc,
  title,
} from './style';

const Footer = () => {
  const { general, listnav } = useGlobalContext();
  const { copyright, dark_logo_url, company_name, address, email_id, email_en, telp_id, telp_en } = general || {};
  const { locale } = useRouter();

  return (
    <>
      <div css={footerBG}>
        <Row css={rowFooter1}>
          <Col css={divSosmed} md={2}>
            <Image
              src={dark_logo_url}
              css={imgLogoNav}
              width={120}
              height={120}
              loading="lazy"
              sizes="(max-width: 768px) 50vw, 33vw"
              className="d-inline-block align-top"
              alt="Parama Lentera Semesta"
            />
          </Col>
          <Col css={col1} md={4}>
            <div css={title}>Office</div>
            <div css={desc}>
              <p>{company_name}</p>
              <p>{address}</p>
              <div>{ReactHtmlParser(locale === 'id' ? email_id : email_en)}</div>
              <div>{ReactHtmlParser(locale === 'id' ? telp_id : telp_en)}</div>
            </div>
          </Col>
          <Col css={col2} md={2}>
            <div css={title}>Sitemaps</div>
            {listnav?.length === 0 ? (
              <div></div>
            ) : (
              listnav?.map((datas: any) => (
                <div key={datas.id.toString()}>
                  <Link rel="noopener noreferrer" href={datas.path} css={list}>
                    <p>{locale === 'id' ? datas.name_id : datas.name_en}</p>
                  </Link>
                </div>
              ))
            )}
          </Col>
          <Col css={divSosmedPhone}>
            <div css={divimglogo}>
              <Image
                src={dark_logo_url}
                css={imgLogoNav}
                width={120}
                height={120}
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 33vw"
                className="d-inline-block align-top"
                alt="Parama Lentera Semesta"
              />
            </div>
          </Col>
        </Row>
        <Row css={rowFooter2}>
          <Col md={12} style={{ paddingLeft: '0px !important', paddingRight: '0px !important' }}>
            <p css={parCP}>{copyright}</p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Footer;
