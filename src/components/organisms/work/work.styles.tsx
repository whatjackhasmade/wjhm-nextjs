import styled from 'styled-components';
import { device } from 'particles';

const StyledWorks = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 0 48px;

  @media ${device?.sm} {
    margin: 0 0 64px;
  }

  @media ${device?.md} {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin: 0 0 128px;
  }

  @media ${device?.xl} {
    grid-gap: 64px;
    grid-row-gap: 48px;
    margin: 0 0 160px;
  }

  .work__item {
  }

  .work__image,
  .work__title {
    color: inherit;
    text-decoration: none;
  }
`;

export default StyledWorks;
