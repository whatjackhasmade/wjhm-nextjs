import { requestor } from 'wjhm';

import { POSTS } from 'wjhm';

import { Post } from 'wjhm';

import { pageGetStaticProps as getStaticProps } from 'wjhm';

import type { ContentType } from 'wjhmtypes';
interface PostCollection extends Array<ContentType> {}

// This function gets called at build time
export async function getStaticPaths() {
  let staticObject = { paths: [{ params: { uri: `` } }], fallback: false };

  try {
    // Call an external API endpoint to get pages
    const data = await requestor.request(POSTS);
    const nodes: PostCollection = data.posts.nodes;

    const pathsSlashed = nodes.map(node => {
      const { uri } = node;

      return {
        params: { uri },
      };
    });

    const paths = pathsSlashed.filter(Boolean).map(({ params }) => {
      const removeSlashes = params.uri
        .split(`/`)
        .filter(x => x)
        .join(`/`);

      return { params: { uri: removeSlashes } };
    });

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    staticObject = { paths, fallback: false };
  } catch (error) {
    console.error(error.message);
  }

  return staticObject;
}

export { getStaticProps };

export default Post;
