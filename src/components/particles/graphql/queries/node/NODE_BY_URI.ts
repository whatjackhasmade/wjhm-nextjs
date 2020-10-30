import { parse } from 'graphql';

import { CaseDetailsFragment } from '../../fragments/case/case-details';
import { PageDetailsFragment } from '../../fragments/page/page-details';
import { PostDetailsFragment } from '../../fragments/post/post-details';
import { SeriesDetailsFragment } from '../../fragments/series/series-details';

export const NODE_BY_URI = /* GraphQL */ `
  query NODE_BY_URI($uri: String!) {
    nodeByUri(uri: $uri) {
      __typename
			id
      ... on CaseStudy {
        ${CaseDetailsFragment}
      }
      ... on Page {
        ${PageDetailsFragment}
      }
      ... on Post {
        ${PostDetailsFragment}
      }
      ... on Series {
        ${SeriesDetailsFragment}
      }
    }
  }
`;

const NODE_BY_URI_GQL = parse(NODE_BY_URI);

export { NODE_BY_URI_GQL };
export default NODE_BY_URI;
