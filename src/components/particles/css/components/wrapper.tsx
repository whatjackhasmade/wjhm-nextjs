import { css } from 'styled-components';

const exportedCSS = css`
  body,
  #__next {
    @supports (display: flex) {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
  }

  .wrapper {
    section {
      max-width: 1506px;
      margin-right: auto;
      padding: 0 30px;
      margin-left: auto;
    }
  }
`;

export default exportedCSS;
