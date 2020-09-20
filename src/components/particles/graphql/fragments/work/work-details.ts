import { MediaFragment } from '../../fragments/general/media';
import { SEOFragment } from '../../fragments/general/seo';

const WorkRelatedFragment = /* GraphQL */ `
id
featuredImage {
	node {
		${MediaFragment}
	}
}
${SEOFragment}
slug
title
typeWork {
	subtitle
	subtitleLong
	thumbnailVideo {
		${MediaFragment}
	}
}
uri
`;

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
typeWork {
	credits {
		link {
			target
			title
			url
		}
		title
	}
	file {
		${MediaFragment}
	}
	services {
		link {
			...on Page {
				uri
			}
			... on Post {
				uri
			}
			... on Work {
				uri
			}
		}
		service
	}
	subtitle
	subtitleLong
	thumbnailVideo {
		${MediaFragment}
	}
	video
	vimeo
	workNext {
		... on Work {
			${WorkRelatedFragment}
		}
	}
	workPrevious {
		... on Work {
			${WorkRelatedFragment}
		}
	}
	youtube
}
workCategories {
	nodes {
		id
		name
	}
}
uri
`;

export default WorkDetailsFragment;
