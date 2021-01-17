import FetchQL from 'fetchql';

export const requestor = new FetchQL({
  url: process.env.NEXT_PUBLIC_GRAPHQL_API || `https://wjhm.noface.app/graphql`, // GraphQL server address
  omitEmptyVariables: false, // remove null props(null or '') from the variables
});

export default requestor;
