import { parse } from 'graphql';

import { AllBlocksFragment } from '../../fragments';

import { SEOFragment } from '../../fragments/general/seo';

export const PAGE_BY_ID = /* GraphQL */ `
  query PAGE_BY_ID($id: ID!) {
    pageBy(id: $id) {
      id
      date
      ${SEOFragment}
      uri
    }
  }
`;

const PAGE_BY_ID_GQL = parse(PAGE_BY_ID);

export { PAGE_BY_ID_GQL };
export default PAGE_BY_ID;
