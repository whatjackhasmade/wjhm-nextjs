import { parse } from 'graphql';

export const SOCIAL_URLS = /* GraphQL */ `
  query SOCIAL_URLS {
    settings: globalSettings {
      data: optionsGlobal {
        socialfacebook
        socialinstagram
        sociallinkedin
        socialtwitter
        socialvimeo
      }
    }
  }
`;

const SOCIAL_URLS_GQL = parse(SOCIAL_URLS);

export { SOCIAL_URLS_GQL };
export default SOCIAL_URLS;
