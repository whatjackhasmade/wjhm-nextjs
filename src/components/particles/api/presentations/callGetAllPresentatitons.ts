import { requestor } from 'wjhm';

import { PRESENTATIONS_ALL } from 'wjhm';

export const callGetAllPresentatitons = async (): Promise<any> => {
  const res = await requestor.query({ operationName: `PRESENTATIONS_ALL`, query: PRESENTATIONS_ALL });
  const { data } = res;
  return data;
};
