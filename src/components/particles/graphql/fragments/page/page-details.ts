import { MediaFragment } from '../general/media';
import { SEOFragment } from '../general/seo';

export const PageDetailsFragment = /* GraphQL */ `
id
content
date
featuredImage {
	node {
		${MediaFragment}
	}
}
${SEOFragment}
slug
status
title
uri
`;

export default PageDetailsFragment;
