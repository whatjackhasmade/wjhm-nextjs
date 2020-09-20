export const gqlSnippet = /* GraphQL */ `
... on AcfContactBlock {
	data: blockContact {
		address
		email
		googleMapsUrl
		map {
			latitude
			longitude
			zoom
		}
		number
		title
	}
}
`;

export default gqlSnippet;
