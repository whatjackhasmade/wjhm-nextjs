import { coreEmbedVimeo, coreEmbedYouTube, coreHeading, coreParagraph, coreVideo } from '../index';

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
			}
		}
	}
}
`;

export default gqlSnippet;
