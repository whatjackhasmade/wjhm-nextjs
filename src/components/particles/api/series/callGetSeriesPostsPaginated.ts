import { requestor } from 'wjhm';

import { SERIES_POSTS_PAGINATED } from 'wjhm';

declare type Parameters = {
  after: string;
  slug: string;
};

export const callGetSeriesPostsPaginated = async (parameters: Parameters): Promise<any> => {
  const res = await requestor.query({ operationName: `SERIES_POSTS_PAGINATED`, query: SERIES_POSTS_PAGINATED, variables: parameters });
  return res?.series?.posts;
};
