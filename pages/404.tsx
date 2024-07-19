import useRedirectAfterSomeSeconds from '@/hooks/reDirect';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Col, Container, Row } from 'react-bootstrap';

const Custom404: NextPage = () => {
    const { locale } = useRouter();
    const { secondsRemaining } = useRedirectAfterSomeSeconds('/', 5);
    return (
        <>
            <Head>
                <title>404</title>
            </Head>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto" css={{ textAlign: 'center' }}>
                        <h1>
                            {locale === 'id' ? ' Halaman Tidak Ditemukan.'
                                : ' Page not found.'
                            }
                        </h1>
                        <p>

                            {locale === 'id' ? `Maaf, halaman yang anda tuju tidak ditemukan. Anda akan diarahkan ke Beranda dalam ${secondsRemaining} ${secondsRemaining > 1 ? 'Detik' : 'second'}`
                                : `Sorry, the page you are looking for was not found. You will be redirected to the Home page ${secondsRemaining} ${secondsRemaining > 1 ? 'Detik' : 'second'}`
                            }
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Custom404;
