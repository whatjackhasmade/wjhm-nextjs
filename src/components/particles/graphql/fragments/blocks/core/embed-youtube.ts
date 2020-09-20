export const gqlSnippet = /* GraphQL */ `
... on CoreEmbedYoutubeBlock {
	attributes {
		... on CoreEmbedYoutubeBlockAttributes {
			providerNameSlug
			type
			url
		}
	}
}
`;

export default gqlSnippet;
