// components/FontFace.tsx
import React from 'react';

const FontFace: React.FC = () => (
  <style jsx global>{`
    @font-face {
      font-family: 'Poppins Regular'; /* Choose a name for your font */
      src: url('/fonts/Poppins-Regular.woff2') format('woff2'), url('/fonts/Poppins-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: 'Poppins SemiBold'; /* Choose a name for your font */
      src: url('/fonts/Poppins-SemiBold.woff2') format('woff2'), url('/fonts/Poppins-SemiBold.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: 'Poppins Medium'; /* Choose a name for your font */
      src: url('/fonts/Poppins-Medium.woff2') format('woff2'), url('/fonts/Poppins-Medium.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }
  `}</style>
);

export default FontFace;
