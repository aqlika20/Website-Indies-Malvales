import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import refreshSrc from '../Captcha/assets/refresh.svg';
import {
  captcha,
} from '../../module/style';

const ViewCaptcha = (props) => {
  const [state, _] = useState({
    height: 43,
    width: 107,
    textColor: false,
    fontFamily: 'Verdana',
    fontSize: 30,
    paddingLeft: 20,
    paddingTop: 35,
    lenght: 5,
    
    ...props,
  });
  const [text, setText] = useState([]);
  const onResult = useMemo(() => props.result, [props]);

  const setData = useCallback(() => {
    const textRender = [];
    const originText = [];
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let idx = 0; idx < state.lenght; idx++) {
      let char = possible.charAt(Math.floor(Math.random() * possible.length));
      textRender.push(
        `<text 
            font-family="${state.fontFamily}" 
            font-size="${state.fontSize}" 
            x="${state.paddingLeft * idx}" 
            y="${state.paddingTop}"
            transform="rotate(${Math.random() * (5 - 0) + 0})"
            >${char}</text>`,
      );
      originText.push(char);
    }
    onResult(originText.join(''));
    setText(textRender);
  }, [onResult, state]);

  useEffect(() => {
    setData();
    const time = setInterval(() => {
      setData();
    }, 30000);
    return () => {
      clearInterval(time);
    };
  }, [setData]);

  return (
    <div style={{ display: 'flex' }}>
      <Image
        css={captcha}
        style={{ border: '1px solid #CACACA', background: 'linear-gradient(108deg, rgba(252,201,1,1) 0%, rgba(255,234,30,1) 14.9%, rgba(252,201,1,1) 37.05%, rgba(255,234,30,1) 58.7%, rgba(252,201,1,1) 72.12%, rgba(255,234,30,1) 83.48%, rgba(252,201,1,1) 100%)', 
        borderRadius: '5px 0px 0px 5px',}}
        width={state.width}
        height={state.height}
        src={
          'data:image/svg+xml;base64,' +
          window.btoa(
            `<svg width="${state.width}" height="${state.height}" xmlns="http://www.w3.org/2000/svg">
              <rect width="${state.width}" height="${state.height}" fill="url(#paint0_linear_1_4)" />
              ${text.join()}
              <defs>
              <linearGradient id="paint0_linear_1_4" x1="-6" y1="65" x2="314" y2="65" gradientUnits="userSpaceOnUse">
                <stop stop-color="rgba(255,234,30,1)" />
                <stop offset="0.25" stop-color="rgba(252,201,1,1)" stop-opacity="0" />
                <stop offset="0.5" stop-color="rgba(255,234,30,1)" />
                <stop offset="0.75" stop-color="rgba(252,201,1,1)" stop-opacity="0" />
                <stop offset="1" stop-color="rgba(255,234,30,1)" />
              </linearGradient>
            </defs>
            </svg>`,
          )
        }
        alt=""
      />
      <button
        onClick={() => setData()}
        type="button"
        style={{
          borderRadius: '0px 5px 5px 0px',
          backgroundColor: 'unset',
          height: 43,
          width: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid #CACACA'
        }}
      >
        <Image style={{ 
          backgroundColor: "#FFFFFF",
          borderRadius: '0px 5px 5px 0px',
          border: '1px solid #CACACA'
          
          }} src={refreshSrc} width={40} height={41} alt="refresh" />
      </button>
    </div>
  );
};

export default ViewCaptcha;
