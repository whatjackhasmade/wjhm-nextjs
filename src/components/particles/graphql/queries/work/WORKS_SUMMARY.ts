import { parse } from 'graphql';

import { WorkDetailsFragment } from '../../fragments/work/work-details';

export const WORKS_SUMMARY = /* GraphQL */ `
  query WORKS_SUMMARY {
    works(first: 500) {
      nodes {
        ${WorkDetailsFragment}
      }
    }
  }
`;

const WORKS_SUMMARY_GQL = parse(WORKS_SUMMARY);

export { WORKS_SUMMARY_GQL };
export default WORKS_SUMMARY;
