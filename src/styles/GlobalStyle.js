import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import './FontStyle.css';

const GlobalStyle = createGlobalStyle`
${normalize}

html, body {
    margin: 0;
    padding: 0;
}

* {
    font-family: 'Pretendard-Regular', Arial;
    font-display: fallback;
}

`;

export default GlobalStyle;
