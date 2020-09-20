import { parse } from 'graphql';

import { MediaFragment } from '../../../fragments/general/media';
import { SEOFragment } from '../../../fragments/general/seo';

export const FALLBACK_WORKS = /* GraphQL */ `
  query FALLBACK_WORKS {
    settings: globalSettings {
      data: optionsGlobal {
        fallback: fallbackWork {
          ... on Work {
            id
            featuredImage {
              node {
                ${MediaFragment}
              }
            }
            ${SEOFragment}
            slug
            title
            typeWork {
              subtitle
              thumbnailVideo {
                ${MediaFragment}
              }
            }
            uri
          }
        }
      }
    }
  }
`;

const FALLBACK_WORKS_GQL = parse(FALLBACK_WORKS);

export { FALLBACK_WORKS_GQL };
export default FALLBACK_WORKS;
