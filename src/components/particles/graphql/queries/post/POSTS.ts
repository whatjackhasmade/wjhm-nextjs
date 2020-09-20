import { parse } from 'graphql';

import { AllBlocksFragment } from '../../fragments';

import { MediaFragment } from '../../fragments/general/media';
import { SEOFragment } from '../../fragments/general/seo';

export const POSTS = /* GraphQL */ `
  query POSTS {
    posts(first: 500) {
      nodes {
        id
        categories {
          nodes {
            name
            slug
            termTaxonomyId
          }
        }
        content
        date
        featuredImage {
          node {
            ${MediaFragment}
          }
        }
        ${SEOFragment}
        status
        slug
        uri
        title
      }
    }
  }
`;

const POSTS_GQL = parse(POSTS);

export { POSTS_GQL };
export default POSTS;
