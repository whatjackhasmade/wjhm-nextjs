import { RootQueryToMenuConnectionWhereArgs } from 'wjhmtypes';

import { requestor } from 'wjhm';

import { MENU_WHERE } from 'wjhm';

export const callGetMenu = async (args: any | RootQueryToMenuConnectionWhereArgs): Promise<any> => {
  try {
    return await requestor.request(MENU_WHERE, args);
  } catch (error) {
    throw new Error(error);
  }
};
