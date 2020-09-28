import { parse } from 'graphql';

import { MediaFragment } from '../../fragments/general/media';

export const REVIEWS_SUMMARY = /* GraphQL */ `
  query REVIEWS_SUMMARY {
    reviews(first: 500) {
      nodes {
        id
        date
        modified
        status
        slug
        uri
        title
      }
    }
  }
`;

const REVIEWS_SUMMARY_GQL = parse(REVIEWS_SUMMARY);

export { REVIEWS_SUMMARY_GQL };
export default REVIEWS_SUMMARY;
