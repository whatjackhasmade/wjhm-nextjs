import { parse } from 'graphql';

import { AllBlocksFragment } from '../../fragments';
import { ReviewDetailsFragment } from '../../fragments/review/review-details';

export const REVIEW_BY_SLUG = /* GraphQL */ `
  query REVIEW_BY_SLUG($slug: String!) {
    reviewBy(slug: $slug) {
      ${AllBlocksFragment}
      ${ReviewDetailsFragment}
    }
  }
`;

const REVIEW_BY_SLUG_GQL = parse(REVIEW_BY_SLUG);

export { REVIEW_BY_SLUG_GQL };
export default REVIEW_BY_SLUG;
