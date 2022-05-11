/* eslint-disable react/function-component-definition */
import React from 'react';

import Svg, { Path, SvgProps } from 'react-native-svg';

// import { Container } from './styles';
const Home: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 13.25V28C5 28.2652 5.10536 28.5196 5.29289 28.7071C5.48043 28.8946 5.73478 29 6 29H12V20.5C12 20.1022 12.158 19.7206 12.4393 19.4393C12.7206 19.158 13.1022 19 13.5 19H18.5C18.8978 19 19.2794 19.158 19.5607 19.4393C19.842 19.7206 20 20.1022 20 20.5V29H26C26.2652 29 26.5196 28.8946 26.7071 28.7071C26.8946 28.5196 27 28.2652 27 28V13.25"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M25 11.1874V3.99988H22V8.31238M30 15.9999L16.6806 3.24988C16.3681 2.91988 15.6375 2.91613 15.3194 3.24988L2 15.9999H30Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Home;
