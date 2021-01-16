import styled from 'styled-components';
import { device } from 'particles';

export const SeriesIntro = styled.header`
  display: flex;
  flex-direction: column-reverse;
  margin: 64px auto;

  @media ${device?.md} {
    align-items: flex-start;
    flex-direction: row;
  }

  .button {
    color: white;
  }

  .intro__image {
    display: block;
    margin-bottom: 24px;

    @media ${device?.md} {
      margin-bottom: 0;
      margin-left: 64px;
      min-width: 45%;

      transform: rotate(2.5deg) translateY(30px);
    }

    img {
      display: block;
    }
  }
`;

export const SeriesWrapper = styled.section`
  max-width: 1128px;
  margin: 64px auto;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      .post__image {
        img {
          transform: scale(1.05);
        }
      }
    }
  }

  .post__image {
    overflow: hidden;

    img {
      transform: scale(1);
      transition: 0.3s opacity ease, 0.5s transform ease !important;
    }
  }

  .series__grid {
    display: grid;
    grid: auto-flow / 1fr;
    grid-gap: 32px;
    margin: 0 auto;
    max-width: 1000px;

    @media ${device?.sm} {
      grid: auto-flow / 1fr 1fr;
    }

    @media ${device?.md} {
      grid: auto-flow / 1fr 1fr 1fr;
    }
  }
`;
