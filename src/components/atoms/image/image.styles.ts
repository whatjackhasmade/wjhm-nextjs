import styled from 'styled-components';

const StyledImage = styled.div`
  height: 0;
  padding-top: var(--percentage);
  position: relative;
  width: 100%;

  img {
    object-fit: cover;
  }

  .lazy-load-image-background {
    background-size: cover !important;
  }

  img,
  span,
  .image__wrapper {
    height: 100%;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .image__wrapper {
    overflow: hidden;
  }
`;

export default StyledImage;
