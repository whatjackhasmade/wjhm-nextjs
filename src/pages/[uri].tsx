import { requestor } from 'wjhm';

import { NODES_ALL } from 'wjhm';

import { Base } from 'wjhm';

import { getStaticPropsNode as getStaticProps } from 'wjhm';

import type { CaseStudy } from 'wjhmtypes';
import type { Post } from 'wjhmtypes';
import type { Page } from 'wjhmtypes';

import type { RootQueryToCaseStudyConnection } from 'wjhmtypes';
import type { RootQueryToPostConnection } from 'wjhmtypes';
import type { RootQueryToPageConnection } from 'wjhmtypes';

declare type Node = RootQueryToCaseStudyConnection | RootQueryToPostConnection | RootQueryToPageConnection;

// This function gets called at build time
export async function getStaticPaths() {
  let staticObject = { paths: [{ params: { uri: `` } }], fallback: false };

  try {
    // Call an external API endpoint to get pages
    const { data }: { data: Node[] } = await requestor.query({ operationName: `NODES_ALL`, query: NODES_ALL });
    const nestedNodes = Object.entries(data).map(([k, v]) => v.nodes);
    // @ts-ignore
    const nodes: NodeSingle[] = nestedNodes.flat();

    // Remove Homepage
    const validNodes = nodes.filter(n => {
      // @ts-ignore
      const isFrontPage = n?.isFrontPage;
      const uri = n?.uri;

      const isAnIndex: boolean = uri === `/posts/`;
      const notFrontPage: boolean = isFrontPage !== true;
      const isValid: boolean = notFrontPage && !isAnIndex;

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

export default Base;
