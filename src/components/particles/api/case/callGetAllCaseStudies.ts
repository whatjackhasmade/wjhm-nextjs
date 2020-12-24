import { requestor } from 'wjhm';

import { CASES_SUMMARY } from 'wjhm';

export const callGetAllCaseStudies = async (): Promise<any> => {
  try {
    return await requestor.request(CASES_SUMMARY);
  } catch (error) {
    throw new Error(error);
  }
};
