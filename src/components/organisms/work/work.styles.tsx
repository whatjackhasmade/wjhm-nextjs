import styled from 'styled-components';
import { device } from 'particles';

const StyledWorks = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 0 48px;

  @media ${device?.xs} {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin: 0 0 64px;
  }

  @media ${device?.md} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin: 0 0 128px;
  }

  @media ${device?.xl} {
    grid-gap: 64px;
    grid-row-gap: 48px;
    margin: 0 0 160px;
  }

  .item {
  }

  .item + .item {
    margin-top: 40px;

    @media ${device?.xs} {
      margin-top: 0;
    }
  }

  .item__image,
  .item__title {
    color: inherit;
    text-decoration: none;
  }
`;

export default StyledWorks;
