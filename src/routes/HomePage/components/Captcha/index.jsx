import dynamic from 'next/dynamic';

const Captcha = dynamic(() => import('./view'), { ssr: false });

export default Captcha;
