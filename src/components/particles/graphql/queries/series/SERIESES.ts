import { parse } from 'graphql';

import { AllBlocksFragment } from '../../fragments';

import { MediaFragment } from '../../fragments/general/media';
import { SEOFragment } from '../../fragments/general/seo';

export const SERIESES = /* GraphQL */ `
  query SERIESES {
    serieses(first: 500) {
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

const SERIESES_GQL = parse(SERIESES);

export { SERIESES_GQL };
export default SERIESES;
