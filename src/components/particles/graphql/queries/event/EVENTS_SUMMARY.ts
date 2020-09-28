import { parse } from 'graphql';

import { MediaFragment } from '../../fragments/general/media';

export const EVENTS_SUMMARY = /* GraphQL */ `
  query EVENTS_SUMMARY {
    events(first: 500) {
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

const EVENTS_SUMMARY_GQL = parse(EVENTS_SUMMARY);

export { EVENTS_SUMMARY_GQL };
export default EVENTS_SUMMARY;
