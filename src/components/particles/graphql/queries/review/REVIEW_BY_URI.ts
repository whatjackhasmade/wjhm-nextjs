import { parse } from 'graphql';

import { AllBlocksFragment } from '../../fragments';
import { ReviewDetailsFragment } from '../../fragments/review/review-details';

export const REVIEW_BY_URI = /* GraphQL */ `
  query REVIEW_BY_URI($uri: String!) {
    reviewBy(uri: $uri) {
      ${AllBlocksFragment}
      ${ReviewDetailsFragment}
    }
  }
`;

const REVIEW_BY_URI_GQL = parse(REVIEW_BY_URI);

export { REVIEW_BY_URI_GQL };
export default REVIEW_BY_URI;
