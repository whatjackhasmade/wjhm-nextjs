import dayjs from 'dayjs'

import { requestor } from 'wjhm';

import { POSTS_SUMMARY } from 'wjhm';

function orderByDate(posts) {
  return posts.sort((a, b) => new Date(b[`date`]).valueOf() - new Date(a[`date`]).valueOf());
}

function datesGroupByComponent(dates, token) {
  return dates.reduce((val, obj) => {
    const date = obj.date;
    const group = dayjs(date).format(token);
    (val[group] = val[group] || []).push(obj);
    return val;
  }, {});
}

const getStaticData = async () => {
  const { data } = await requestor.query({ operationName: `POSTS_SUMMARY`, query: POSTS_SUMMARY });
  const postSummaries = data?.posts?.nodes;

  const postsSorted = orderByDate(postSummaries);
  const posts = datesGroupByComponent(postsSorted, `YYYY-MM`);

  return { posts };
};

export default getStaticData;
