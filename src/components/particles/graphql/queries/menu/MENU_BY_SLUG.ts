import { parse } from 'graphql';

export const MENU_BY_SLUG = /* GraphQL */ `
  query MENU_BY_SLUG($slug: String!) {
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

const MENU_BY_SLUG_GQL = parse(MENU_BY_SLUG);

export { MENU_BY_SLUG_GQL };
export default MENU_BY_SLUG;
