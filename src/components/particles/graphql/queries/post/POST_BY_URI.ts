import { parse } from 'graphql';

import { AllBlocksFragment } from '../../fragments';
import { PostDetailsFragment } from '../../fragments/post/post-details';

export const POST_BY_URI = /* GraphQL */ `
  query POST_BY_URI($uri: String!) {
    postBy(uri: $uri) {
     ${PostDetailsFragment}
    }
  }
`;

const POST_BY_URI_GQL = parse(POST_BY_URI);

export { POST_BY_URI_GQL };
export default POST_BY_URI;
