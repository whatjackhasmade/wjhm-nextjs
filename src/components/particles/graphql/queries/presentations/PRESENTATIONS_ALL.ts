import { MediaFragment } from '../../fragments/general/media';

export const PRESENTATIONS_ALL: string = /* GraphQL */ `
  query PRESENTATIONS_ALL {
    events {
      nodes {
        id
        acf: PostTypeEventFields {
          date
          url
          venue
        }
        featuredImage {
          node {
            ${MediaFragment}
          }
        }
        title
      }
    }
  }
`;

export default PRESENTATIONS_ALL;
