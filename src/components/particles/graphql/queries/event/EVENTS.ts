import { parse } from 'graphql';

import { AllBlocksFragment } from '../../fragments';

import { MediaFragment } from '../../fragments/general/media';
import { SEOFragment } from '../../fragments/general/seo';

export const EVENTS = /* GraphQL */ `
  query EVENTS {
    events(first: 500) {
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

const EVENTS_GQL = parse(EVENTS);

export { EVENTS_GQL };
export default EVENTS;
