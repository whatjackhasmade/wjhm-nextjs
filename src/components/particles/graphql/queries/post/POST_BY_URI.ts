import { PostDetailsFragment } from '../../fragments/post/post-details';
import { AllBlocksFragment } from '../../fragments/blocks';

export const POST_BY_URI: string = /* GraphQL */ `
  query POST_BY_URI($uri: ID!) {
    post(id: $uri, idType: URI) {
   		${PostDetailsFragment}
			${AllBlocksFragment}
    }
  }
`;

export default POST_BY_URI;
