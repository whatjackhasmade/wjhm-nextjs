import { CaseDetailsFragment } from '../../fragments/case/case-details';
import { PageDetailsFragment } from '../../fragments/page/page-details';
import { PostDetailsFragment } from '../../fragments/post/post-details';
import { SeriesDetailsFragment } from '../../fragments/series/series-details';

export const NODE_BY_URI: string = /* GraphQL */ `
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

export default NODE_BY_URI;
