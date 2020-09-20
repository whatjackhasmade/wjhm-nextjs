import { parse } from 'graphql';

import { AllBlocksFragment } from '../../fragments';

import { MediaFragment } from '../../fragments/general/media';
import { SEOFragment } from '../../fragments/general/seo';

import { WorkDetailsFragment } from '../../fragments/work/work-details';

export const WORK_BY_URI = /* GraphQL */ `
	query WORK_BY_URI($uri: String!) {
  	workBy(uri: $uri) {
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
			${WorkDetailsFragment}
			uri
		}
	}
`;

const WORK_BY_URI_GQL = parse(WORK_BY_URI);

export { WORK_BY_URI_GQL };
export default WORK_BY_URI;
