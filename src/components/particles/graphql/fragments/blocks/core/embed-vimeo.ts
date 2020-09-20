export const gqlSnippet = /* GraphQL */ `
... on CoreEmbedVimeoBlock {
	attributes {
		... on CoreEmbedVimeoBlockAttributes {
			providerNameSlug
			type
			url
		}
	}
}
`;

export default gqlSnippet;
