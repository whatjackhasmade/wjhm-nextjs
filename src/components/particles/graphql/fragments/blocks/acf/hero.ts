import { MediaFragment } from '../../general/media';

export const gqlSnippet = /* GraphQL */ `
 ... on AcfHeroBlock {
		heroFields {
			backgroundColour
			content
			duotone
			media {
				${MediaFragment}
			}
			overlay
		}
 }
`;

export default gqlSnippet;
