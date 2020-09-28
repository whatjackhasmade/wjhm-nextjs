import { parse } from 'graphql';

import { AllBlocksFragment } from '../../fragments';
import { SeriesDetailsFragment } from '../../fragments/series/series-details';

export const SERIES_BY_SLUG = /* GraphQL */ `
  query SERIES_BY_SLUG($slug: String!) {
    seriesBy(slug: $slug) {
      ${AllBlocksFragment}
      ${SeriesDetailsFragment}
    }
  }
`;

const SERIES_BY_SLUG_GQL = parse(SERIES_BY_SLUG);

export { SERIES_BY_SLUG_GQL };
export default SERIES_BY_SLUG;
