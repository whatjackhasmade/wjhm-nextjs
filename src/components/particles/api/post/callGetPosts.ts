import { requestor } from 'wjhm';

import { POSTS_LATEST_ARG } from 'wjhm';

import type { Post } from 'wjhmtypes';

declare type Parameters = {
  count: number;
};

export const callGetPosts = async (parameters: Parameters): Promise<Post[]> => {
  const res = await requestor.query({ operationName: `POSTS_LATEST_ARG`, query: POSTS_LATEST_ARG, variables: parameters });
  const { data } = res;
  return data?.posts?.nodes;
};
