import styled from 'styled-components';
import { device } from 'particles';

export const RelatedWrapper = styled.section`
  margin: 96px auto;

  h2 {
    text-align: center;
  }

  .related__items {
    margin-top: 32px;

    @media ${device?.md} {
      display: flex;
      margin-top: 48px;
    }
  }

  .item {
    & + * {
      margin-top: 48px;
    }

    @media ${device?.md} {
      width: calc(33.33% - 32px);

      & + * {
        margin-left: 48px;
        margin-top: 0;
      }
    }
  }
`;
