import { WorkDetailsFragment } from '../../work/work-details';

export const gqlSnippet = /* GraphQL */ `
... on AcfWorksBlock {
	data: blockWorks{
		posts {
			...on Work {
				${WorkDetailsFragment}
			}
		}
	}
}
`;

export default gqlSnippet;
