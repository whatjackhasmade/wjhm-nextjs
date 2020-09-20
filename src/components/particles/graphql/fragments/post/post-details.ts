import { MediaFragment } from '../../fragments/general/media';
import { SEOFragment } from '../../fragments/general/seo';

export const PostDetailsFragment = /* GraphQL */ `
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

export default PostDetailsFragment;
