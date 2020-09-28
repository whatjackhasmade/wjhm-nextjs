import { parse } from 'graphql';

import { SEOFragment } from '../../fragments/general/seo';

export const SERIESES_SUMMARY = /* GraphQL */ `
  query SERIESES_SUMMARY {
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

const SERIESES_SUMMARY_GQL = parse(SERIESES_SUMMARY);

export { SERIESES_SUMMARY_GQL };
export default SERIESES_SUMMARY;
