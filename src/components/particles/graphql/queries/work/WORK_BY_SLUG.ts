import { parse } from 'graphql';

import { AllBlocksFragment } from '../../fragments';

import { MediaFragment } from '../../fragments/general/media';
import { SEOFragment } from '../../fragments/general/seo';

export const WORK_BY_SLUG = /* GraphQL */ `
	query WORK_BY_SLUG($slug: String!) {
  	workBy(slug: $slug) {
			id
			${AllBlocksFragment}
			date
      featuredImage {
        node {
          ${MediaFragment}
        }
      }
			${SEOFragment}
			status
			title
			uri
		}
	}
`;

const WORK_BY_SLUG_GQL = parse(WORK_BY_SLUG);

export { WORK_BY_SLUG_GQL };
export default WORK_BY_SLUG;
