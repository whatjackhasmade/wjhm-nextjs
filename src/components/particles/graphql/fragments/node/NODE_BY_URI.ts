import { CaseDetailsFragment } from '../../fragments/case/case-details';
import { PageDetailsFragment } from '../../fragments/page/page-details';
import { PostDetailsFragment } from '../../fragments/post/post-details';

import { AllBlocksFragment } from '../../fragments/blocks';

export const NODE_BY_URI: string = /* GraphQL */ `
  query NODE_BY_URI($uri: String!) {
    nodeByUri(uri: $uri) {
      __typename
			id
      ... on CaseStudy {
        ${CaseDetailsFragment}
      }
      ... on Page {
        ${PageDetailsFragment}
			  ${AllBlocksFragment}
      }
      ... on Post {
        ${PostDetailsFragment}
			  ${AllBlocksFragment}
      }
    }
  }
`;

export default NODE_BY_URI;
