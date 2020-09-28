import { parse } from 'graphql';

import { MediaFragment } from '../../fragments/general/media';

export const SERIESES_SUMMARY = /* GraphQL */ `
  query SERIESES_SUMMARY {
    serieses(first: 500) {
      nodes {
        id
        date
        modified
        status
        slug
        uri
        title
      }
    }
  }
`;

const SERIESES_SUMMARY_GQL = parse(SERIESES_SUMMARY);

export { SERIESES_SUMMARY_GQL };
export default SERIESES_SUMMARY;
