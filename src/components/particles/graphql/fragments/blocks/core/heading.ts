export const gqlSnippet = /* GraphQL */ `
... on CoreHeadingBlock {
	attributes {
		... on CoreHeadingBlockAttributes {
			align
			anchor
			className
			content
			level
			placeholder
			textColor
		}
	}
	originalContent
}
`;

export default gqlSnippet;
