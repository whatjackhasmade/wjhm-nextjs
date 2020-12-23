export const MENU_WHERE = /* GraphQL */ `
  query MENU_WHERE($slug: String) {
    menus(where: { slug: $slug }) {
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

export default MENU_WHERE;
