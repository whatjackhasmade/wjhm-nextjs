import { SeriesDetailsFragment } from '../../fragments/series/series-details';
import { AllBlocksFragment } from '../../fragments/blocks';

export const SERIES_BY_URI: string = /* GraphQL */ `
  query SERIES_BY_URI($uri: ID!) {
    series(id: $uri, idType: URI) {
   		${SeriesDetailsFragment}
			${AllBlocksFragment}
    }
  }
`;

export default SERIES_BY_URI;
