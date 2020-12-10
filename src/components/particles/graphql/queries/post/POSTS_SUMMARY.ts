export const POSTS_SUMMARY = /* GraphQL */ `
  query POSTS_SUMMARY {
    posts(first: 500) {
      nodes {
        id
        date
        modified
        status
        slug
        uri
        title
      }
    }
  }
`;

export default POSTS_SUMMARY;
