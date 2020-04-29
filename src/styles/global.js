import { createGlobalStyle } from 'styled-components';
import { shade } from 'polished';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #282828;
    -webkit-font-smoothing: antialiased;
    color: #e0e0e0;
  }

  body, input, button {
    font: 16px 'Noto Sans TC', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #fff;
  }

  h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 20px;
  }

  p {
    letter-spacing: -0.2px;
  }

  a {
    color: #fff;

    &:hover {
      color: ${shade(0.2, '#fff')};
    }
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }
`;
