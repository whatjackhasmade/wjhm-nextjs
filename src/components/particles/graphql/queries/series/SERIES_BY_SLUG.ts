import { SeriesDetailsFragment } from '../../fragments/series/series-details';

export const SERIES_BY_SLUG: string = /* GraphQL */ `
  query SERIES_BY_SLUG($slug: ID!) {
    series(id: $slug, idType: SLUG) {
   		${SeriesDetailsFragment}
    }
  }
`;

export default SERIES_BY_SLUG;
