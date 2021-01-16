import { RootQueryToMenuConnectionWhereArgs } from 'wjhmtypes';

import { requestor } from 'wjhm';

import { MENU_WHERE } from 'wjhm';

export const callGetMenu = async (args: any | RootQueryToMenuConnectionWhereArgs): Promise<any> => {
  return await requestor.query({ operationName: `MENU_WHERE`, query: MENU_WHERE, variables: args });
};
