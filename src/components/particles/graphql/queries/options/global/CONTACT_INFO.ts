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

export default CONTACT_INFO;
