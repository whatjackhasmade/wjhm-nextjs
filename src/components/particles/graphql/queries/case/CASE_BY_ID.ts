import { parse } from 'graphql';

import { AllBlocksFragment } from '../../fragments';
import { CaseDetailsFragment } from '../../fragments/case/case-details';

export const CASE_BY_ID = /* GraphQL */ `
  query CASE_BY_ID($id: ID!) {
    caseStudyBy(id: $id) {
      ${AllBlocksFragment}
      ${CaseDetailsFragment}
    }
  }
`;

const CASE_BY_ID_GQL = parse(CASE_BY_ID);

export { CASE_BY_ID_GQL };
export default CASE_BY_ID;
