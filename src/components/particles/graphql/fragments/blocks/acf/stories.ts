import { PostDetailsFragment } from '../../post/post-details';

export const gqlSnippet = /* GraphQL */ `
... on AcfStoriesBlock {
	data: blockStories{
		posts {
			...on Post {
				${PostDetailsFragment}
			}
		}
	}
}
`;

export default gqlSnippet;
