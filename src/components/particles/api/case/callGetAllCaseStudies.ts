import { requestor } from 'wjhm';

import { CASES_SUMMARY } from 'wjhm';

import type { RootQuery } from 'wjhmtypes';

declare type Response = { caseStudies: RootQuery['caseStudies'] }

export const callGetAllCaseStudies = async (): Promise<Response> => {
  const res = await requestor.query({ operationName: `CASES_SUMMARY`, query: CASES_SUMMARY });
  const { data } = res;
  return data;
};



