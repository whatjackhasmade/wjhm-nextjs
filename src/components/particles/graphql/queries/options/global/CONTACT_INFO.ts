import { parse } from 'graphql';

export const CONTACT_INFO = /* GraphQL */ `
  query CONTACT_INFO {
    settings: globalSettings {
      data: optionsGlobal {
        address
        companyInfo
        email
        googleMapsUrl
        map {
          latitude
          longitude
          zoom
        }
        number
        socialfacebook
        socialinstagram
        sociallinkedin
        socialtwitter
        socialvimeo
      }
    }
  }
`;

const CONTACT_INFO_GQL = parse(CONTACT_INFO);

export { CONTACT_INFO_GQL };
export default CONTACT_INFO;
