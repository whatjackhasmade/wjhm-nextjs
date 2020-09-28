import { parse } from 'graphql';

import { AllBlocksFragment } from '../../fragments';
import { EventDetailsFragment } from '../../fragments/event/event-details';

export const EVENT_BY_SLUG = /* GraphQL */ `
  query EVENT_BY_SLUG($slug: String!) {
    eventBy(slug: $slug) {
      ${AllBlocksFragment}
      ${EventDetailsFragment}
    }
  }
`;

const EVENT_BY_SLUG_GQL = parse(EVENT_BY_SLUG);

export { EVENT_BY_SLUG_GQL };
export default EVENT_BY_SLUG;
