import { MediaFragment } from '../../fragments/general/media';
import { SEOFragment } from '../../fragments/general/seo';

export const CASES_SUMMARY = /* GraphQL */ `
  query CASES_SUMMARY {
    caseStudies(first: 500) {
      nodes {
        id
        CaseStudyFields {
          intro {
            description
            subtitle
            title
          }
          siteUrl
        }
        date
        featuredImage {
          node {
            ${MediaFragment}
          }
        }
        ${SEOFragment}
        slug
        status
        title
        uri
      }
    }
  }
`;

export default CASES_SUMMARY;
