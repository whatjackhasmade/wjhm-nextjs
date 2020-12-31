import styled from 'styled-components';
import { device } from 'particles';

const PresentationsComponent = styled.section`
  margin: 32px 0;

  @media ${device?.xs} {
    margin: 64px 0;
  }

  @media ${device?.lg} {
    margin: 96px 0;
  }

  a {
    color: inherit;
  }

  h3 {
    margin-top: 0;

    font-weight: bold;
    font-size: 24px;
  }

  .presentations__events {
    align-items: flex-start;
    display: flex;
    flex: 1;
    height: 100%;
    position: relative;
    left: 0;
    top: 0;

    a {
      display: block;
      text-decoration: none;
    }

    p {
      margin: 0;
    }
  }

  .presentations__event__meta {
    padding: 16px;
  }

  .presentations__event__thumbnail {
    border-radius: 3px 3px 0 0;
    position: relative;
  }

  .presentations__event__logo {
    height: 32px;
    position: absolute;
    right: -16px;
    top: -16px;
    width: 32px;

    background: #ea4c89;
    border-radius: 50%;
    fill: #c32361;
  }

  .presentations__event {
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

    border-radius: 0 0 3px 3px;

    background-color: var(--white);
    box-shadow: var(--shadow);
  }

  .presentations__event__thumbnail > div {
    padding-bottom: 56.25% !important; /* your aspect ratio */
  }

  .subheading {
    margin: 0 0 8px;

    color: var(--primary);
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.1em;
    line-height: 1.2;
    text-transform: uppercase;
  }

  .slick-slider {
    padding: 0 0 8px;
    width: 100%;

    cursor: grab;
  }

  .slick-list {
    margin: 0 -16px;
    overflow: visible;
  }

  .slick-slide {
    padding: 0 16px;

    @media ${device?.md} {
      padding: 16px;
    }
  }

  .slick-track {
    display: flex;

    .slick-slide {
      height: auto;

      > div {
        display: flex;
        flex-direction: column;
        height: 100%;

        > * {
          flex: 1;
        }
      }
    }
  }
`;

export default PresentationsComponent;
