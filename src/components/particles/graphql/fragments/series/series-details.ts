import { MediaFragment } from '../general/media';
import { SEOFragment } from '../general/seo';

export const SeriesDetailsFragment = /* GraphQL */ `
id
date
featuredImage {
	node {
		${MediaFragment}
	}
}
${SEOFragment}
slug
uri
`;

export default SeriesDetailsFragment;