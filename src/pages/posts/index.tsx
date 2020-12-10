import { getStaticPropsPosts } from 'wjhm';

import { Posts } from 'wjhm';

export async function getStaticProps() {
  const { posts } = await getStaticPropsPosts();

  const props = {
    ...(posts && { posts }),
  };

  return {
    props, // will be passed to the page component as props
  };
}

export default Posts;
