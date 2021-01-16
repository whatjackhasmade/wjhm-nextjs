import dayjs from 'dayjs'

import { requestor } from 'wjhm';

import { POSTS_SUMMARY } from 'wjhm';

function orderByDate(posts) {
  return posts.sort((a, b) => new Date(b[`date`]).valueOf() - new Date(a[`date`]).valueOf());
}

function datesGroupByComponent(dates, token) {
  return dates.reduce((val, obj) => {
    const date = obj.date;
    const group = dayjs(obj[`date`]).format(token);
    (val[group] = val[group] || []).push(obj);
    return val;
  }, {});
}

const getStaticData = async () => {
  const postsResponse = await requestor.request(POSTS_SUMMARY);
  const postSummaries = postsResponse?.posts?.nodes;

  const postsSorted = orderByDate(postSummaries);
  const posts = datesGroupByComponent(postsSorted, `YYYY-MM`);

  return { posts };
};

export default getStaticData;
