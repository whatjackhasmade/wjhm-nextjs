import styled from 'styled-components';
import { device } from 'particles';

const HeroComponent = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  min-height: var(--min-height);
  overflow: hidden;
  position: relative;
  width: 100vw;
  z-index: 9;

  background: var(--background);
  color: var(--white);
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  @media ${device?.xs} {
    min-height: 50vh;
  }

  a {
    display: inline-flex;
    margin: 16px 0 0;
    padding: 16px 24px;

    background-color: var(--white);
    border: none;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    color: var(--primary);
    cursor: pointer;
    font-weight: 700;
    line-height: 1;
    outline: none;
    text-decoration: none;
    text-shadow: none;
    transition: all 0.15s ease;
    white-space: nowrap;

    &:active,
    &:focus,
    &:hover {
      box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    }

    &:hover {
      transform: translateY(-1px);
    }

    + a {
      @media ${device?.xs} {
        margin-left: 8px;
      }
    }

    @media ${device?.MXxs} {
      justify-content: center;
      width: 100%;
    }
  }

  h2,
  h3,
  h4 {
    margin-bottom: 0;

    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .hero__contents {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    margin: var(--contents-margin);
    max-width: var(--contents-max-width);
    position: relative;
    width: 100%;
    z-index: 3;

    > * {
      order: 1;
    }

    > h2,
    > h3,
    > h4 {
      order: 0;
    }

    p {
      margin-top: 0;
    }
  }

  .hero__wrapper {
    margin: 0 auto;
    max-width: 1506px;
    padding: 20px;
    width: 100%;

    @media ${device?.xs} {
      padding: 45px;
    }
  }
`;

export default HeroComponent;
