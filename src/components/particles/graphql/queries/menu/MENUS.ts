import { parse } from 'graphql';

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

const MENUS_GQL = parse(MENUS);

export { MENUS_GQL };
export default MENUS;
