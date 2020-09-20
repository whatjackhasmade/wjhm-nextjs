import { MediaFragment } from '../../general/media';

export const gqlSnippet = /* GraphQL */ `
... on AcfBannerBlock {
	data: blockBanner{
		image {
			${MediaFragment}
		}
	}
}
`;

export default gqlSnippet;
