import { requestor } from 'wjhm';

import { MENU_BY_SLUG } from 'wjhm';
import { POSTS_SUMMARY } from 'wjhm';

const getStaticData = async () => {
  const header = await requestor.request(MENU_BY_SLUG, { slug: `header-primary` });
  const footer = await requestor.request(MENU_BY_SLUG, { slug: `footer-primary` });
  const stories = await requestor.request(POSTS_SUMMARY);
  const [headerMenu] = header?.menus?.nodes;
  const [footerMenu] = footer?.menus?.nodes;
  const postSummaries = stories?.posts?.nodes;

  return { footerMenu, headerMenu, postSummaries };
};

export default getStaticData;
