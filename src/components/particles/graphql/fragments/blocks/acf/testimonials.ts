export const gqlSnippet = /* GraphQL */ `
... on AcfTestimonialsBlock {
	data: blockTestimonials {
		Testimonials {
			author
			company
			link {
				target
				title
				url
			}
			role
			quote
		}
	}
}
`;

export default gqlSnippet;
