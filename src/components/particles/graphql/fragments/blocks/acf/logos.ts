import { MediaFragment } from '../../general/media';

export const gqlSnippet = /* GraphQL */ `
... on AcfLogosBlock {
	data: blockLogos{
		logos {
			${MediaFragment}
		}
	}
}
`;

export default gqlSnippet;
