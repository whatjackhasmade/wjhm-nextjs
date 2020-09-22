import { MediaFragment } from '../../general/media';

export const gqlSnippet = /* GraphQL */ `
 ... on AcfCodeBlock {
		data: code {
			code
			language
		}
	}
`;

export default gqlSnippet;
