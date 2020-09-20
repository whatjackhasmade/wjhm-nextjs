import { requestor } from 'wjhm';

import { MENU_BY_SLUG } from 'wjhm';
import { POSTS_SUMMARY } from 'wjhm';
import { WORKS_SUMMARY } from 'wjhm';

const getStaticData = async () => {
  const header = await requestor.request(MENU_BY_SLUG, { slug: `header-primary` });
  const footer = await requestor.request(MENU_BY_SLUG, { slug: `footer-primary` });
  const stories = await requestor.request(POSTS_SUMMARY);
  const works = await requestor.request(WORKS_SUMMARY);
  const [headerMenu] = header?.menus?.nodes;
  const [footerMenu] = footer?.menus?.nodes;
  const storySummaries = stories?.posts?.nodes;
  const worksSummaries = works?.works?.nodes;

  return { footerMenu, headerMenu, storySummaries, worksSummaries };
};

export default getStaticData;
