import { requestor } from 'wjhm';

import { PRESENTATIONS_ALL } from 'wjhm';

export const callGetAllPresentatitons = async (): Promise<any> => {
  try {
    return await requestor.request(PRESENTATIONS_ALL);
  } catch (error) {
    throw new Error(error);
  }
};
