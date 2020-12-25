import styled from 'styled-components';

export const StyledPost = styled.div`
  display: block;

  a {
    color: inherit;
    text-decoration: none;
  }

  .post__media {
    overflow: hidden;

    img {
      transform: scale(1);
      transition: 0.4s transform ease;
    }
  }

  &:hover {
    .post__media {
      img {
        transform: scale(1.05);
      }
    }
  }
`;

export default StyledPost;
