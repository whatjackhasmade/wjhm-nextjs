import { PostDetailsFragment } from '../../fragments/post/post-details';

export const POSTS_LATEST_ARG = /* GraphQL */ `
  query POSTS_LATEST_ARG($count: Int!) {
    posts(first: $count) {
      nodes {
        ${PostDetailsFragment}
      }
    }
  }
`;

export default POSTS_LATEST_ARG;
