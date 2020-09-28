import { parse } from 'graphql';

import { AllBlocksFragment } from '../../fragments';

import { MediaFragment } from '../../fragments/general/media';
import { SEOFragment } from '../../fragments/general/seo';

export const CASES = /* GraphQL */ `
  query CASES {
    cases(first: 500) {
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

const CASES_GQL = parse(CASES);

export { CASES_GQL };
export default CASES;
