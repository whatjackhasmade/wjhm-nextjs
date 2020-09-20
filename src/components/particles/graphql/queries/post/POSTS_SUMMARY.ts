import { parse } from 'graphql';

import { MediaFragment } from '../../fragments/general/media';

export const POSTS_SUMMARY = /* GraphQL */ `
  query POSTS_SUMMARY {
    posts(first: 500) {
      nodes {
        id
        date
        featuredImage {
          node {
            ${MediaFragment}
          }
        }
        modified
        status
        slug
        uri
        title
      }
    }
  }
`;

const POSTS_SUMMARY_GQL = parse(POSTS_SUMMARY);

export { POSTS_SUMMARY_GQL };
export default POSTS_SUMMARY;
