import { parse } from 'graphql';

import { AllBlocksFragment } from '../../fragments';
import { WorkDetailsFragment } from '../../fragments/work/work-details';

export const WORKS = /* GraphQL */ `
  query WORKS {
    works(first: 500) {
      nodes {
        ${AllBlocksFragment}
        ${WorkDetailsFragment}
      }
    }
  }
`;

const WORKS_GQL = parse(WORKS);

export { WORKS_GQL };
export default WORKS;
