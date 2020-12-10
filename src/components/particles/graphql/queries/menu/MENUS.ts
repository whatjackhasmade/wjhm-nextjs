export const MENUS = /* GraphQL */ `
  query MENUS {
    menus {
      nodes {
        id
        menuId
        locations
        name
        slug
        menuItems {
          nodes {
            cssClasses
            id
            label
            path
            target
            title
            url
          }
        }
      }
    }
  }
`;

export default MENUS;
