import styled from 'styled-components';
import { device } from 'particles';

const ColumnsComponent = styled.section`
  .columns__contents {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    margin: 0 auto 32px;
    max-width: var(--gridMax);
    width: 100%;

    @media ${device?.lg} {
      align-items: unset;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 0 auto 64px;
    }
  }

  & + .columns {
    margin-top: 64px;

    @media ${device?.lg} {
      margin-top: 96px;
    }
  }

  .column {
    width: 100%;

    @media ${device?.lg} {
      width: calc(50% - 32px);
    }

    @media ${device?.xl} {
      width: calc(50% - 48px);
    }

    @media ${device?.xxl} {
      width: calc(50% - 64px);
    }

    *:first-child {
      margin-top: 0;
    }

    *:last-child {
      margin-bottom: 0;
    }

    blockquote {
      margin-bottom: 24px;
      margin-top: 24px;

      font-size: 1.7rem;
    }

    cite {
      bottom: initial;
      display: block;
      margin-top: 12px;
      position: relative;

      font-size: 1.5rem;

      @media ${device?.xl} {
        font-size: 1.7rem;
      }
    }

    li + li {
      margin-top: 8px;
    }

    > * + * {
      margin-top: 16px;
    }

    > h2 + * {
      margin-top: 24px;
    }

    > img + *,
    > figure + * {
      margin-top: 32px;
    }

    > * + h2 {
      margin-top: 64px;
    }

    > * + h3 {
      margin-top: 48px;
    }

    > * + img {
      margin-top: 32px;
    }

    > * + h4 {
      margin-top: 48px;
    }

    > img + img,
    > figure + figure {
      margin-top: 32px;
    }

    > h2 + h3 {
      margin-top: 32px;
    }

    > h3 + h4 {
      margin-top: 32px;
    }
  }

  .column + .column {
    margin-top: 32px;

    @media ${device?.lg} {
      margin-top: 0;
    }
  }
`;

export default ColumnsComponent;
