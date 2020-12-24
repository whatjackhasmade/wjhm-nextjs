export const CASES_SUMMARY = /* GraphQL */ `
  query CASES_SUMMARY {
    caseStudies(first: 500) {
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

export default CASES_SUMMARY;
