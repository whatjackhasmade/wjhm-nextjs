import { parse } from 'graphql';

import { AllBlocksFragment } from '../../fragments';

import { MediaFragment } from '../../fragments/general/media';
import { SEOFragment } from '../../fragments/general/seo';

export const REVIEWS = /* GraphQL */ `
  query REVIEWS {
    reviews(first: 500) {
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

const REVIEWS_GQL = parse(REVIEWS);

export { REVIEWS_GQL };
export default REVIEWS;
