import { parse } from 'graphql';

import { AllBlocksFragment } from '../../fragments';
import { ReviewDetailsFragment } from '../../fragments/review/review-details';

export const REVIEW_BY_ID = /* GraphQL */ `
  query REVIEW_BY_ID($id: ID!) {
    reviewBy(id: $id) {
      ${AllBlocksFragment}
      ${ReviewDetailsFragment}
    }
  }
`;

const REVIEW_BY_ID_GQL = parse(REVIEW_BY_ID);

export { REVIEW_BY_ID_GQL };
export default REVIEW_BY_ID;
