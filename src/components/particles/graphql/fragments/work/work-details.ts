import { MediaFragment } from '../../fragments/general/media';
import { SEOFragment } from '../../fragments/general/seo';

export const WorkDetailsFragment = /* GraphQL */ `
id
featuredImage {
	node {
		${MediaFragment}
	}
}
modified
${SEOFragment}
slug
title
uri
`;

export default WorkDetailsFragment;
