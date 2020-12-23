import { SeriesDetailsFragment } from '../../fragments/series/series-details';

export const SERIES_BY_URI: string = /* GraphQL */ `
  query SERIES_BY_URI($uri: ID!) {
    series(id: $uri, idType: URI) {
   		${SeriesDetailsFragment}
    }
  }
`;

export default SERIES_BY_URI;
