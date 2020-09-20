import { parse } from 'graphql';

import { AllBlocksFragment } from '../../fragments';
import { PostDetailsFragment } from '../../fragments/post/post-details';

export const POST_BY_SLUG = /* GraphQL */ `
  query POST_BY_SLUG($slug: String!) {
    postBy(slug: $slug) {
     ${PostDetailsFragment}
    }
  }
`;

const POST_BY_SLUG_GQL = parse(POST_BY_SLUG);

export { POST_BY_SLUG_GQL };
export default POST_BY_SLUG;
