import { MediaFragment } from '../../fragments/general/media';
import { SEOFragment } from '../../fragments/general/seo';

export const SERIES_POSTS_PAGINATED = /* GraphQL */ `
  query SERIES_POSTS_PAGINATED($slug: ID!, $after: String!) {
		series(id: $slug, idType: SLUG) {
			posts(first: 9, after: $after) {
				edges {
					cursor
					node {
						featuredImage {
							node {
								${MediaFragment}
							}
						}
						${SEOFragment}
						slug
						title(format: RENDERED)
					}
				}
				pageInfo {
					offsetPagination {
						hasMore
						total
					}
				}
			}
		}
  }
`;
