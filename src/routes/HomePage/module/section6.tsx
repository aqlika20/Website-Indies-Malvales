import { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';

import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';

import contactImg from '@/../public/contact/contact.png';
import { API_URL } from '@/constants/env';
import { useGlobalContext } from '@/context/global/global';

import Rg from '../components/Captcha';
import {
  btnCU,
  checkbox,
  colDivField,
  div1Row,
  div1RowCol1,
  div1RowCol2,
  div2PP,
  divCaptcha,
  divRightColField,
  divSec,
  divSec6,
  divcheckbox,
  fieldCAPTCHACU,
  fieldInputCU,
  fieldTSCU,
  imageContactUs,
  labelCU,
  rowDivField,
  textHeader,
  title,
} from './style';

function Section6() {
  const { titleContactUs, subtitleContactUs } = useGlobalContext();
  const { locale }: any = useRouter();

  const [show, setShow] = useState(false);
  const [captchaResult, setCaptchaResult] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [check, setCheck] = useState(false);

  const handleCheck = (event) => {
    setCheck(event.target.checked);
  };

  const [variable, setVariable] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
    agreement: '',
  });

  const handleChange = (props) => (event) => {
    setVariable({ ...variable, [props]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (captchaInput !== captchaResult) {
      return;
    }
    setCheck(event.target.checked);
    if (check !== true) {
      variable.agreement = 'no';
    } else {
      variable.agreement = 'yes';
    }
    try {
      const response = await axios.post(`${API_URL}/contact-us`, variable);
      if (response.status === 200) {
        event.target.reset();
        setShow(true);
      } else {
        console.error('Failed to submit');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container css={divSec} fluid>
      <div css={divSec6} id="contactUs">
        <div css={div2PP}>
          <Row css={div1Row}>
            <Col css={div1RowCol1} md={6}>
              <Image
                src={contactImg}
                css={imageContactUs}
                loading="lazy"
                alt={locale === 'id' ? 'gambar belakang' : 'background image'}
                width={720}
                height={720}
              />
            </Col>
            <Col css={div1RowCol2} md={6}>
              <Container css={{ position: 'relative' }} fluid>
                <Col css={{ marginBottom: '1rem' }} md={12}>
                  <div css={title}>
                    {ReactHtmlParser(
                      locale === 'id' ? titleContactUs.layout_detail_id : titleContactUs.layout_detail_en,
                    )}
                  </div>
                  <div css={textHeader}>
                    {ReactHtmlParser(
                      locale === 'id' ? subtitleContactUs.layout_detail_id : subtitleContactUs.layout_detail_en,
                    )}
                  </div>
                </Col>
                <div css={divRightColField}>
                  <Form onSubmit={handleSubmit}>
                    <Row css={rowDivField}>
                      <Col css={colDivField} md>
                        <Form.Group css={labelCU} controlId="formBasicName">
                          <Form.Label css={labelCU}>{locale !== 'en' ? 'Nama Lengkap' : 'Full Name'}</Form.Label>
                          <Form.Control css={fieldInputCU} type="text" required onChange={handleChange('name')} />
                        </Form.Group>
                      </Col>
                      <Col css={colDivField} md>
                        <Form.Group css={labelCU} controlId="formBasicEmail">
                          <Form.Label css={labelCU}>{locale !== 'en' ? 'Alamat Email' : 'Email Address'}</Form.Label>
                          <Form.Control css={fieldInputCU} type="email" required onChange={handleChange('email')} />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row css={rowDivField}>
                      <Col css={colDivField} md>
                        <Form.Group css={labelCU} controlId="formBasicPhoneNumber">
                          <Form.Label css={labelCU}>{locale !== 'en' ? 'Nomor Telephone' : 'Phone Number'}</Form.Label>
                          <Form.Control css={fieldInputCU} type="text" required onChange={handleChange('phone')} />
                        </Form.Group>
                      </Col>
                      <Col css={colDivField} md>
                        <Form.Group controlId="formBasicSubject">
                          <Form.Label css={labelCU}>{locale !== 'en' ? 'Subjek' : 'Subject'}</Form.Label>
                          <Form.Control css={fieldInputCU} type="text" required onChange={handleChange('subject')} />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col css={colDivField} md={12}>
                        <Form.Group css={labelCU} controlId="formBasicMessage">
                          <Form.Label css={labelCU}>{locale !== 'en' ? 'Pesan' : 'Message'}</Form.Label>
                          <textarea css={fieldTSCU} name="message" required onChange={handleChange('message')} />
                        </Form.Group>
                      </Col>
                      <Col css={colDivField} md={12}>
                        <Form.Group css={labelCU} controlId="formBasicCheck">
                          <Row>
                            <Col css={divcheckbox} md={1}>
                              <Form.Check css={checkbox} type="checkbox" aria-label="checkbox" onChange={handleCheck} />
                            </Col>
                            <Col>
                              <span css={labelCU}>
                                {locale !== 'en'
                                  ? 'Saya setuju dengan Syarat dan Kebijakan Privasi'
                                  : 'I agree to Terms and Privacy Policy'}
                              </span>
                            </Col>
                          </Row>
                        </Form.Group>
                      </Col>
                      <Col css={colDivField}>
                        <div css={divCaptcha}>
                          <Rg result={setCaptchaResult} />
                          <input
                            css={fieldCAPTCHACU}
                            placeholder={locale !== 'en' ? 'Captcha' : 'Captcha'}
                            value={captchaInput}
                            onChange={(e) => setCaptchaInput(e.currentTarget.value)}
                          />
                        </div>
                        {locale !== 'en'
                          ? show && (
                              <Alert variant="success" onClose={() => setShow(false)} dismissible>
                                <Alert.Heading>Pesan anda terkirim</Alert.Heading>
                                <p>Terima kasih telah menghubungi kami</p>
                              </Alert>
                            )
                          : show && (
                              <Alert variant="success" onClose={() => setShow(false)} dismissible>
                                <Alert.Heading>Your message is sent</Alert.Heading>
                                <p>Thank you for contacting us</p>
                              </Alert>
                            )}
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button css={btnCU} type="submit" disabled={captchaInput !== captchaResult} variant="primary">
                          <svg
                            style={{ marginRight: '15px' }}
                            width="26"
                            height="25"
                            viewBox="0 0 26 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M25.1094 0.15346C25.4163 0.376674 25.5419 0.674293 25.4861 1.04632L21.9146 22.4749C21.8681 22.7446 21.7193 22.9539 21.4682 23.1027C21.338 23.1771 21.1938 23.2143 21.0357 23.2143C20.9334 23.2143 20.8218 23.191 20.7009 23.1445L14.3812 20.5636L11.005 24.6791C10.8376 24.893 10.6098 25 10.3215 25C10.2005 25 10.0982 24.9814 10.0145 24.9442C9.83782 24.8791 9.69599 24.7698 9.58903 24.6164C9.48207 24.4629 9.4286 24.2932 9.4286 24.1071V19.2383L21.4822 4.46429L6.56866 17.3689L1.05806 15.1088C0.713938 14.9786 0.527926 14.7228 0.500024 14.3415C0.481423 13.9695 0.630233 13.6951 0.946453 13.5184L24.1607 0.125558C24.3002 0.0418527 24.4491 0 24.6072 0C24.7932 0 24.9606 0.0511533 25.1094 0.15346Z"
                              fill="white"
                            />
                          </svg>

                          {locale !== 'en' ? 'Hubungi Kami' : 'Get in Touch'}
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Container>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default Section6;
