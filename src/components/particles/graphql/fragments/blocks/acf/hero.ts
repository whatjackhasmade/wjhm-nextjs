import { MediaFragment } from '../../general/media';

export const gqlSnippet = /* GraphQL */ `
... on AcfHeroBlock {
	data: blockHero{
		arrow
		backgroundColour
		content
		image {
			${MediaFragment}
		}
		overlayOpacity
		title
		video {
			${MediaFragment}
		}
		videoType
		vimeo
		youtube
	}
}
`;

export default gqlSnippet;
