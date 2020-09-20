import MediaFragment from './media';

export const SEOFragment = /* GraphQL */ `
	seo {
		title
		focuskw
		metaDesc
		metaKeywords
		opengraphDescription
		opengraphImage {
			${MediaFragment}
		}
		opengraphTitle
		twitterDescription
		twitterImage {
			${MediaFragment}
		}
		twitterTitle
	}
`;

export default SEOFragment;
