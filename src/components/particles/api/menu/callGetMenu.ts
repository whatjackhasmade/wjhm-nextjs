import { RootQueryToMenuConnectionWhereArgs } from 'wjhmtypes';

import { requestor } from 'wjhm';

import { MENU_WHERE } from 'wjhm';

export const callGetMenu = async (args: any | RootQueryToMenuConnectionWhereArgs): Promise<any> => {
  const res = await requestor.query({ operationName: `MENU_WHERE`, query: MENU_WHERE, variables: args });
  const { data } = res;
  return data;
};
