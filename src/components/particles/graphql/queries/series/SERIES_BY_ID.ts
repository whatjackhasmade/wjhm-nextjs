import { parse } from 'graphql';

import { AllBlocksFragment } from '../../fragments';
import { SeriesDetailsFragment } from '../../fragments/series/series-details';

export const SERIES_BY_ID = /* GraphQL */ `
  query SERIES_BY_ID($id: ID!) {
    seriesBy(id: $id) {
      ${AllBlocksFragment}
      ${SeriesDetailsFragment}
    }
  }
`;

const SERIES_BY_ID_GQL = parse(SERIES_BY_ID);

export { SERIES_BY_ID_GQL };
export default SERIES_BY_ID;
