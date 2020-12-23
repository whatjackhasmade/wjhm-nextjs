import { CaseDetailsFragment } from '../../fragments/case/case-details';
import { AllBlocksFragment } from '../../fragments/blocks';

export const CASE_BY_URI: string = /* GraphQL */ `
  query CASE_BY_URI($uri: ID!) {
    caseStudy(id: $uri, idType: URI) {
   		${CaseDetailsFragment}
			${AllBlocksFragment}
    }
  }
`;

export default CASE_BY_URI;
