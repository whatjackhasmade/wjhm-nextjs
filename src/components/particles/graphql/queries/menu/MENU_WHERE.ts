export const MENU_WHERE = /* GraphQL */ `
  query MENU_WHERE($id: String, $slug: String) {
    menus(where: { id: $id, slug: $slug }) {
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
