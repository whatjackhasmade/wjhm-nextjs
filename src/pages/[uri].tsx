import { requestor } from 'wjhm';

import { PAGES } from 'wjhm';

import { Page } from 'wjhm';

import { pageGetStaticProps as getStaticProps } from 'wjhm';

interface PageCollection extends Array<ContentType> {}

// This function gets called at build time
export async function getStaticPaths() {
  let staticObject = { paths: [{ params: { uri: `` } }], fallback: false };

  try {
    // Call an external API endpoint to get pages
    const data = await requestor.request(PAGES);
    const nodes: PageCollection = data.pages.nodes;

    // Remove Homepage
    const validNodes = nodes.filter(n => {
      const { isFrontPage, uri } = n;
      const isAnIndex = uri === `/work/` || uri === `/insights/`;
      const notFrontPage = isFrontPage === false;
      const isValid = notFrontPage && !isAnIndex;
      return isValid;
    });

    const pathsSlashed = validNodes.map(node => {
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

export default Page;
