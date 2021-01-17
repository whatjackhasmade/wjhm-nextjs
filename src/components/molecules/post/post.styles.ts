import styled from 'styled-components';

export const StyledPost = styled.div`
  display: block;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      img {
        transform: scale(1.05);
      }
    }
  }

  p {
    color: var(--grey600);
  }

  .item__media {
    overflow: hidden;

    img {
      transform: scale(1);
      transition: 0.3s opacity ease, 0.5s transform ease !important;
    }
  }

  .item__title {
    margin: 0;
    margin-top: 24px;

    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
  }
`;

export default StyledPost;
