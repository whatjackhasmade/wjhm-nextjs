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
    margin-left: calc(-50vw + 50% + 32px);
    margin-right: calc(-50vw + 50% + 32px);
    overflow: visible;
    padding: 48px 0 24px;
    position: relative;
    top: 0;
    overflow-y: hidden;
    overflow-x: visible;
    scroll-snap-type: x mandatory;

    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;

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
    flex-shrink: 0;
    margin: 0 12px;
    margin-left: 0;
    position: relative;
    width: 240px;

    background-color: var(--white);
    box-shadow: var(--shadow);
  }

  .presentations__event + .presentations__event {
    margin-left: 12px;
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

  .keen-slider {
    cursor: grab;

    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
    overflow: visible;
    position: relative;
    width: 100vw;
  }

  .keen-slider__slide {
    overflow: visible;
  }
`;

export default PresentationsComponent;
