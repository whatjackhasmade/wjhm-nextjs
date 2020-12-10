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

export default SOCIAL_URLS;
