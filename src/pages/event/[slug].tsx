import { requestor } from 'wjhm';

import { EVENTS } from 'wjhm';

import { Base } from 'wjhm';

import { eventGetStaticProps as getStaticProps } from 'wjhm';

import type { Post as PostType } from 'wjhmtypes';
interface EventCollection extends Array<PostType> {}

// This function gets called at build time
export async function getStaticPaths() {
  let staticObject = { paths: [{ params: { slug: `` } }], fallback: false };

  try {
    // Call an external API endpoint to get pages
    const reviewData = await requestor.request(EVENTS);
    const reviewNodes: EventCollection = reviewData.events.nodes;

    const paths = reviewNodes.map(node => {
      const { slug } = node;

      return {
        params: { slug },
      };
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

export default Base;
