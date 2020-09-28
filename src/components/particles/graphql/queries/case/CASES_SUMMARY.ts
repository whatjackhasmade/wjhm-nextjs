import { parse } from 'graphql';

import { MediaFragment } from '../../fragments/general/media';

export const CASES_SUMMARY = /* GraphQL */ `
  query CASES_SUMMARY {
    cases(first: 500) {
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

const CASES_SUMMARY_GQL = parse(CASES_SUMMARY);

export { CASES_SUMMARY_GQL };
export default CASES_SUMMARY;
