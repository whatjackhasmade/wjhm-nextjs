import { parse } from 'graphql';

import { AllBlocksFragment } from '../../fragments';
import { CaseDetailsFragment } from '../../fragments/case/case-details';

export const CASE_BY_SLUG = /* GraphQL */ `
  query CASE_BY_SLUG($slug: String!) {
    caseBy(slug: $slug) {
      ${AllBlocksFragment}
      ${CaseDetailsFragment}
    }
  }
`;

const CASE_BY_SLUG_GQL = parse(CASE_BY_SLUG);

export { CASE_BY_SLUG_GQL };
export default CASE_BY_SLUG;
