import { parse } from 'graphql';

import { AllBlocksFragment } from '../../fragments';

import { SEOFragment } from '../../fragments/general/seo';

export const PAGE_BY_URI = /* GraphQL */ `
  query PAGE_BY_URI($uri: String!) {
    pageBy(uri: $uri) {
      id
      date
      ${AllBlocksFragment}
      ${SEOFragment}
      uri
    }
  }
`;

const PAGE_BY_URI_GQL = parse(PAGE_BY_URI);

export { PAGE_BY_URI_GQL };
export default PAGE_BY_URI;
