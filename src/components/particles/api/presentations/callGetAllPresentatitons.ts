import { requestor } from 'wjhm';

import { PRESENTATIONS_ALL } from 'wjhm';

export const callGetAllPresentatitons = async (): Promise<any> => {
  return await requestor.query({ operationName: `PRESENTATIONS_ALL`, query: PRESENTATIONS_ALL });
};
