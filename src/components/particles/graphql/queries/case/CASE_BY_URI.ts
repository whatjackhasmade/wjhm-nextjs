import { parse } from 'graphql';

import { AllBlocksFragment } from '../../fragments';
import { CaseDetailsFragment } from '../../fragments/case/case-details';

export const CASE_BY_URI = /* GraphQL */ `
  query CASE_BY_URI($uri: String!) {
    caseBy(uri: $uri) {
      ${AllBlocksFragment}
      ${CaseDetailsFragment}
    }
  }
`;

const CASE_BY_URI_GQL = parse(CASE_BY_URI);

export { CASE_BY_URI_GQL };
export default CASE_BY_URI;
