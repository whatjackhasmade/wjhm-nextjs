import { getStaticData } from 'wjhm';

import { Posts } from 'wjhm';

export async function getStaticProps() {
  const { footerMenu, headerMenu, posts } = await getStaticData();

  const props = {
    ...(footerMenu && { footerMenu }),
    ...(headerMenu && { headerMenu }),
    ...(posts && { posts }),
  };

  return {
    props, // will be passed to the page component as props
  };
}

export default Posts;
