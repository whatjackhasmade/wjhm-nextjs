import { parse } from 'graphql';

import { SEOFragment } from '../../fragments/general/seo';

export const SERIESES = /* GraphQL */ `
  query SERIESES {
    serieses(first: 500) {
      nodes {
        id
        ${SEOFragment}
        slug
        uri
      }
    }
  }
`;

const SERIESES_GQL = parse(SERIESES);

export { SERIESES_GQL };
export default SERIESES;
