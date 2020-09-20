import { parse } from 'graphql';

export const PAGES = /* GraphQL */ `
  query PAGES {
    pages(first: 500) {
      nodes {
        isFrontPage
        isPostsPage
        modified
        uri
      }
    }
  }
`;

const PAGES_GQL = parse(PAGES);

export { PAGES_GQL };
export default PAGES;
