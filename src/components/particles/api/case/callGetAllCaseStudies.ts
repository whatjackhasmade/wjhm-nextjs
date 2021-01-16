import { requestor } from 'wjhm';

import { CASES_SUMMARY } from 'wjhm';

import type { RootQuery } from 'wjhmtypes';

export const callGetAllCaseStudies = async (): Promise<{ caseStudies: RootQuery['caseStudies'] }> => {
  return await requestor.query({ operationName: `CASES_SUMMARY`, query: CASES_SUMMARY });
};



