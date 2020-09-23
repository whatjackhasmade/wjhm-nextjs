import styled from 'styled-components';
import { device } from 'particles';

export const CollectionMenu = styled.nav`
  display: none;
  flex-direction: column;
  position: fixed;
  left: 0;
  padding: 8px;
  top: 50%;
  z-index: 2;

  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  transform: translateY(-50%);

  @media ${device?.xxl} {
    display: flex;
  }

  a {
    color: var(--grey100);
    text-decoration: none;
    transition: 0.2s color ease;

    &:active,
    &:focus,
    &:hover {
      color: var(--black);
    }

    + a {
      margin-top: 4px;
    }

    &[data-current='true'] {
      color: var(--black);
    }
  }
`;

export const CollectionWrapper = styled.section`
  margin-bottom: 96px;
  position: relative;
  z-index: 1;

  a {
    color: inherit;
    text-decoration: none;
  }

  h2 {
    padding-top: 64px;
    margin-top: 64px;

    border-top: 1px solid var(--grey600);
    color: var(--black);
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;
