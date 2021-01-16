export const NODES_ALL = /* GraphQL */ `
  query NODES_ALL {
    caseStudies(first: 500) {
      nodes {
        modified
        uri
      }
    }
    pages(first: 1000) {
      nodes {
        isFrontPage
        isPostsPage
        modified
        uri
      }
    }
    posts(first: 1000) {
      nodes {
        modified
        uri
      }
    }
  }
`;

export default NODES_ALL;
