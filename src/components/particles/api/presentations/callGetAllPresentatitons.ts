import { requestor } from 'wjhm';

import { PRESENTATIONS_ALL } from 'wjhm';

import type { Event } from 'wjhmtypes';

declare type Response = Event[];

export const callGetAllPresentations = async (): Promise<Response> => {
  const res = await requestor.query({ operationName: `PRESENTATIONS_ALL`, query: PRESENTATIONS_ALL });
  const { data } = res;
  return data?.events?.nodes;
};
