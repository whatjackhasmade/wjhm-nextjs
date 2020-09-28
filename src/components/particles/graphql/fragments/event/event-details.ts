import { MediaFragment } from '../general/media';
import { SEOFragment } from '../general/seo';

export const EventDetailsFragment = /* GraphQL */ `
id
categories {
	nodes {
		name
		slug
		termTaxonomyId
	}
}
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

export default EventDetailsFragment;
