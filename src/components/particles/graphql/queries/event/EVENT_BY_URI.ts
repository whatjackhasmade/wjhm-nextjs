import { parse } from 'graphql';

import { AllBlocksFragment } from '../../fragments';
import { EventDetailsFragment } from '../../fragments/event/event-details';

export const EVENT_BY_URI = /* GraphQL */ `
  query EVENT_BY_URI($uri: String!) {
    eventBy(uri: $uri) {
      ${AllBlocksFragment}
      ${EventDetailsFragment}
    }
  }
`;

const EVENT_BY_URI_GQL = parse(EVENT_BY_URI);

export { EVENT_BY_URI_GQL };
export default EVENT_BY_URI;
