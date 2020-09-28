import { parse } from 'graphql';

import { AllBlocksFragment } from '../../fragments';
import { EventDetailsFragment } from '../../fragments/event/event-details';

export const EVENT_BY_ID = /* GraphQL */ `
  query EVENT_BY_ID($id: ID!) {
    eventBy(id: $id) {
      ${AllBlocksFragment}
      ${EventDetailsFragment}
    }
  }
`;

const EVENT_BY_ID_GQL = parse(EVENT_BY_ID);

export { EVENT_BY_ID_GQL };
export default EVENT_BY_ID;
