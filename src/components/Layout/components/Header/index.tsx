import { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import close from '@/../public/icon/close.svg';
import Toggler from '@/../public/icon/navbar-mobile.svg';
import { API_URL_IMAGE } from '@/constants/env';
import { useGlobalContext } from '@/context/global/global';

import {
  breakLaguage,
  container,
  cssActive,
  cssIndex,
  cssLaguage,
  divButtonActive,
  divButtonInActive,
  divLaguege,
  divcolaps,
  divnar,
  icnClose,
  icnShow,
  iconShow,
  imgLogoNav,
  imgLogoPhone,
  navbarNTP,
  navbarTP,
  navbarTPA,
} from './style';

const Header = () => {
  const { general, slug } = useGlobalContext();
  const { favicon, light_logo } = general || {}; 

  const [isTop, setIsTop] = useState(false);

  useEffect(() => {
    const handleOnScroll = () => {
      if (window.scrollY > 50) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };
    window.addEventListener('scroll', handleOnScroll);
    return () => {
      window.removeEventListener('scroll', handleOnScroll);
    };
  }, []);

  const [toggle, setToggle] = useState('');
  const [collapse, setCollapse] = useState('');
  const [menuMobile, setMenuMobile] = useState(false);

  const handleToggle = () => {
    setCollapse('nav-right');
    setToggle('nav-index');

    if (menuMobile) {
      setMenuMobile(false);
      return;
    } else {
      setMenuMobile(true);
      return;
    }
  };

  const { asPath, locale } = useRouter();

  const navBar = (
    <Container fluid css={container}>
      <Navbar.Brand as={Link} href="/" css={cssIndex}>
        <Image
          src={`${API_URL_IMAGE}/${light_logo}`}
          css={imgLogoNav}
          sizes="(max-width: 768px) 50vw, 33vw"
          width={200}
          height={200}
          loading="lazy"
          className="d-inline-block align-top"
          alt="Parama Lentera Semesta"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" aria-expanded="false" onClick={handleToggle} className={toggle}>
        {menuMobile ? (
          <div>
            <Image
              src={`${API_URL_IMAGE}/${light_logo}`}
              css={imgLogoPhone}
              sizes="(max-width: 768px) 50vw, 33vw"
              width={200}
              height={200}
              loading="lazy"
              className="d-inline-block align-top"
              alt="Parama Lentera Semesta"
            />
            <span className="my-1 mx-2 close">
              <Image width={20} height={20} src={close} alt="close" css={icnClose} />
            </span>
          </div>
        ) : (
          <span css={iconShow} className="navbar-toggler-icon">
            <Image {...(Toggler)} width={22} height={19} alt="navbar" css={icnShow} />
          </span>
        )}
      </Navbar.Toggle>
      <Navbar.Collapse className={`justify-content-start ${collapse}`}>
        <Nav css={divnar}>
          <Nav.Link href={'/'} css={asPath === '/' ? cssActive : cssIndex}>
            {locale === 'id' ? 'Beranda' : 'Home'}
          </Nav.Link>
          <Nav.Link
            as={Link}
            href={'/portfolio'}
            css={asPath === '/portfolio' ? cssActive : cssIndex}
          >
            {locale === 'id' ? 'Portofolio' : 'Portfolio'}
          </Nav.Link>

          <Nav.Link as={Link} href={'/news'} css={asPath === '/news' ? cssActive : cssIndex}>
            {locale === 'id' ? 'Berita' : 'News'}
          </Nav.Link>
          <div css={divLaguege}>
            <div css={divcolaps}>
              <Link href={asPath} scroll={false} locale="en" css={cssLaguage}>
                <div css={locale === 'en' ? divButtonActive : divButtonInActive}>EN</div>
              </Link>
              <Link href={asPath} scroll={false} locale="en" css={cssLaguage}>
                <div css={breakLaguage}>|</div>
              </Link>
              <Link href={asPath} scroll={false} locale="id" css={cssLaguage}>
                <div css={locale === 'id' ? divButtonActive : divButtonInActive}>ID</div>
              </Link>
            </div>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Container>
  );

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={`${API_URL_IMAGE}/${favicon}`} />
      </Head>
      {isTop && (
        <Navbar fixed="top" expand="lg" css={navbarNTP}>
          {navBar}
        </Navbar>
      )}
      {!isTop && (
        <Navbar expand="lg" sticky="top" css={asPath === `/portfolio` || asPath === `/news` ? navbarTPA : navbarTP}>
          {navBar}
        </Navbar>
      )}
    </>
  );
};

export default Header;
