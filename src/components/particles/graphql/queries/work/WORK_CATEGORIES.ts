import { parse } from 'graphql';

export const WORK_CATEGORIES = /* GraphQL */ `
  query WORK_CATEGORIES {
    workCategories(first: 500, where: { hideEmpty: true }) {
      nodes {
        id
        name
      }
    }
  }
`;

const WORK_CATEGORIES_GQL = parse(WORK_CATEGORIES);

export { WORK_CATEGORIES_GQL };
export default WORK_CATEGORIES;
