import { parse } from 'graphql';

import { AllBlocksFragment } from '../../fragments';
import { PostDetailsFragment } from '../../fragments/post/post-details';

export const POST_BY_ID = /* GraphQL */ `
  query POST_BY_ID($id: ID!) {
    postBy(id: $id) {
      ${AllBlocksFragment}
      ${PostDetailsFragment}
    }
  }
`;

const POST_BY_ID_GQL = parse(POST_BY_ID);

export { POST_BY_ID_GQL };
export default POST_BY_ID;
