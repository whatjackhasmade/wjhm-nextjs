import { requestor } from 'wjhm';

import { SERIES_POSTS_PAGINATED } from 'wjhm';

declare type Parameters = {
  after: string;
  slug: string;
};

export const callGetSeriesPostsPaginated = async (parameters: Parameters): Promise<any> => {
  const { after, slug } = parameters;
  const res = await requestor.request(SERIES_POSTS_PAGINATED, { after, slug });
  return res?.series?.posts;
};
