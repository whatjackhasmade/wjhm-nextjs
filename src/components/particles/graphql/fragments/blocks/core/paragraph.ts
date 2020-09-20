export const gqlSnippet = /* GraphQL */ `
... on CoreParagraphBlock {
	attributes {
		... on CoreParagraphBlockAttributes {
			align
			backgroundColor
			className
			content
			direction
			dropCap
			fontSize
			placeholder
			textColor
		}
	}
	originalContent
}
`;

export default gqlSnippet;
