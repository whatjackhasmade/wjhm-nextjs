import { MediaFragment } from '../general/media';
import { SEOFragment } from '../general/seo';

export const CaseDetailsFragment = /* GraphQL */ `
id
CaseStudyFields {
	blocks {
		fields {
			columnOne
			columnTwo
			title
		}
	}
	devicePreviews
	devices {
		desktop
		mobile
	}
	gallery {
		${MediaFragment}
	}
	intro {
		description
		illustration {
			${MediaFragment}
		}
		subtitle
		title
	}
	related {
		... on CaseStudy {
			id
			date
		}
	}
	siteUrl
	testimonials {
		testimonial {
			author
			logo {
				${MediaFragment}
			}
			media {
				${MediaFragment}
			}
			role
			testimonial
		}
	}
}
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

export default CaseDetailsFragment;
