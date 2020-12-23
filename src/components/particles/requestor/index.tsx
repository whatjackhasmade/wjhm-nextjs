import { GraphQLClient } from 'graphql-request';

export const requestor = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_API);

export default requestor;
