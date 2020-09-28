import { parse } from 'graphql';

import { AllBlocksFragment } from '../../fragments';
import { SeriesDetailsFragment } from '../../fragments/series/series-details';

export const SERIES_BY_URI = /* GraphQL */ `
  query SERIES_BY_URI($uri: String!) {
    seriesBy(uri: $uri) {
      ${AllBlocksFragment}
      ${SeriesDetailsFragment}
    }
  }
`;

const SERIES_BY_URI_GQL = parse(SERIES_BY_URI);

export { SERIES_BY_URI_GQL };
export default SERIES_BY_URI;
