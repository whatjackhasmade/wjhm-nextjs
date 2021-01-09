import { requestor } from 'wjhm';

import { CASES_SUMMARY } from 'wjhm';

import type { RootQuery } from 'wjhmtypes';

export const callGetAllCaseStudies = async (): Promise<{ caseStudies: RootQuery['caseStudies'] }> => {
  return await requestor.request(CASES_SUMMARY);
};
