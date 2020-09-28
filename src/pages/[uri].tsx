import { requestor } from 'wjhm';

import { CASES } from 'wjhm';
import { PAGES } from 'wjhm';
import { POSTS } from 'wjhm';
import { SERIESES } from 'wjhm';

import { Base } from 'wjhm';

import { nodeGetStaticProps as getStaticProps } from 'wjhm';

import type { Post as PostType } from 'wjhmtypes';
interface PostCollection extends Array<PostType> {}

// This function gets called at build time
export async function getStaticPaths() {
  let staticObject = { paths: [{ params: { uri: `` } }], fallback: false };

  try {
    // Call an external API endpoint to get pages
    const caseData = await requestor.request(CASES);
    const pageData = await requestor.request(PAGES);
    const postData = await requestor.request(POSTS);
    const seriesData = await requestor.request(SERIESES);

    const caseNodes: PostCollection = caseData.caseStudies.nodes;
    const pageNodes: PostCollection = pageData.pages.nodes;
    const postNodes: PostCollection = postData.posts.nodes;
    const seriesNodes: PostCollection = seriesData.serieses.nodes;

    const nodes = [...caseNodes, ...pageNodes, ...postNodes, ...seriesNodes];

    const paths = nodes.map(node => {
      const { uri } = node;

      return {
        params: { uri },
      };
    });

    console.log(paths);

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    staticObject = { paths, fallback: false };
  } catch (error) {
    console.error(error.message);
  }

  return staticObject;
}

export { getStaticProps };

export default Base;
