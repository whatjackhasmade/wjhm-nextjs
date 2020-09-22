import moment from 'moment';

import { requestor } from 'wjhm';

import { MENU_BY_SLUG } from 'wjhm';
import { POSTS_SUMMARY } from 'wjhm';

function orderByDate(posts) {
  return posts.sort((a, b) => new Date(b['date']) - new Date(a['date']));
}

function datesGroupByComponent(dates, token) {
  return dates.reduce((val, obj) => {
    let comp = moment(obj['date']).format(token);
    (val[comp] = val[comp] || []).push(obj);
    return val;
  }, {});
}

const getStaticData = async () => {
  const header = await requestor.request(MENU_BY_SLUG, { slug: `header-menu` });
  const footer = await requestor.request(MENU_BY_SLUG, { slug: `footer-menu` });
  const postsResponse = await requestor.request(POSTS_SUMMARY);
  const [headerMenu] = header?.menus?.nodes;
  const [footerMenu] = footer?.menus?.nodes;
  const postSummaries = postsResponse?.posts?.nodes;

  const postsSorted = orderByDate(postSummaries);
  const posts = datesGroupByComponent(postsSorted, 'YYYY-MM');

  return { footerMenu, headerMenu, posts };
};

export default getStaticData;
