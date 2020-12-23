import { PageDetailsFragment } from '../../fragments/page/page-details';
import { AllBlocksFragment } from '../../fragments/blocks';

export const PAGE_BY_URI: string = /* GraphQL */ `
  query PAGE_BY_URI($uri: ID!) {
    page(id: $uri, idType: URI) {
   		${PageDetailsFragment}
			${AllBlocksFragment}
    }
  }
`;

export default PAGE_BY_URI;
