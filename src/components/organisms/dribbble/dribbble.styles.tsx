import styled, { keyframes } from 'styled-components';
import { device } from 'particles';

// Create the keyframes
const bounce = keyframes`
  from {
    transform: translateY(0px);
  }

	50% {
    transform: translateY(-50px);
	}

  to {
    transform: translateY(0px);
  }
`;

const DribbbleComponent = styled.section`
  margin: 32px 0 64px;

  @media ${device?.xs} {
    margin: 64px 0 96px;
  }

  @media ${device?.lg} {
    margin: 96px 0 128px;
  }

  a {
    color: inherit;
  }

  h3 {
    margin-top: 0;

    font-weight: bold;
    font-size: 24px;
  }

  img {
    display: block;
    width: 100%;
  }

  .dribbble__shots {
    align-items: flex-start;
    display: flex;
    flex: 1;
    height: 100%;
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

  .dribbble__shot {
    --shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

    border-radius: 0 0 3px 3px;
    flex-shrink: 0;
    margin: 0 12px;
    margin-left: 0;
    position: relative;
    width: 240px;

    background-color: var(--offWhite);
    box-shadow: var(--shadow);
    transform: translateY(0px) scale(1);
    transition: 0.4s box-shadow ease, 0.4s transform ease, 0.6s background-color ease;
    will-change: background-color, box-shadow, transform;

    &:focus-within,
    &:hover {
      --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

      background-color: var(--white);
      transform: translateY(-5px) scale(1.05);
    }
  }

  .dribbble__shot + .dribbble__shot {
    margin-left: 12px;
  }

  @media ${device?.md} {
    .dribbble__shot--animate {
      .dribbble__shot__logo {
        animation: ${bounce} 0.3s ease infinite;
        animation-iteration-count: 1;
      }
    }
  }

  .dribbble__shot__meta {
    border-radius: 0 0 3px 3px;

    a {
      display: block;
      padding: 16px;

      &:active,
      &:focus,
      &:hover {
        text-decoration: none;
      }
    }
  }

  .dribbble__shot__thumbnail {
    border-radius: 3px 3px 0 0;
    display: block;

    img {
      display: block;
    }
  }

  .dribbble__shot__logo {
    height: 32px;
    position: absolute;
    right: -16px;
    top: -16px;
    width: 32px;
    z-index: 2;

    background: #ea4c89;
    border-radius: 50%;
    fill: #c32361;
  }
`;

export default DribbbleComponent;
