import { requestor } from 'wjhm';

import { POSTS_LATEST_ARG } from 'wjhm';

import type { Post } from 'wjhmtypes';

declare type Parameters = {
  count: number;
};

export const callGetPosts = async (parameters: Parameters): Promise<Post[]> => {
  const { count } = parameters;
  const res = await requestor.request(POSTS_LATEST_ARG, { count });
  return res?.posts?.nodes;
};
