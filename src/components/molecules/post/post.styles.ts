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

  .item__media {
    overflow: hidden;

    img {
      transform: scale(1);
      transition: 0.3s opacity ease, 0.5s transform ease !important;
    }
  }

  .item__subtitle {
    margin: 0;
    margin-top: 8px;

    color: var(--grey600);
    font-size: 20px;
    font-weight: 300;
    line-height: 1.5;
  }

  .item__title {
    margin: 0;
    margin-top: 16px;
  }
`;

export default StyledPost;
