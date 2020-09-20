import {
  coreEmbedVimeo,
  coreEmbedYouTube,
  coreHeading,
  coreParagraph,
  coreVideo,
  acfBanner,
  acfContact,
  acfHero,
  acfLogos,
  acfStories,
  acfWorks,
  acfTestimonials,
} from '../index';

export const gqlSnippet = /* GraphQL */ `
 ... on CoreColumnsBlock {
	innerBlocks {
		... on CoreColumnBlock {
			innerBlocks {
				name
				order
				originalContent
				${coreEmbedVimeo}
				${coreEmbedYouTube}
				${coreHeading}
				${coreParagraph}
				${coreVideo}
				${acfBanner}
				${acfContact}
				${acfHero}
				${acfLogos}
				${acfStories}
				${acfWorks}
				${acfTestimonials}
			}
		}
	}
}
`;

export default gqlSnippet;
