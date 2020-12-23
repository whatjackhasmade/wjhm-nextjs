import { MediaFragment } from '../../general/media';

export const gqlSnippet = /* GraphQL */ `
 ... on AcfRowBlock {
		rowFields {
			content
			link
			media {
				${MediaFragment}
			}
		}
 }
`;

export default gqlSnippet;
