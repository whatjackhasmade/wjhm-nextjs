import { MediaFragment } from '../../general/media';

export const gqlSnippet = /* GraphQL */ `
 ... on AcfTestimonialsBlock {
	testimonialsFields {
		testimonials {
			author
			role
			testimonial
			logo {
				${MediaFragment}
			}
			media {
				${MediaFragment}
			}
		}
	}
 }
`;

export default gqlSnippet;
