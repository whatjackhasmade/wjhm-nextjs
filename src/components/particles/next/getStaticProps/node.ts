import { GetStaticProps } from 'next';
import { requestor } from 'wjhm';

import { NODE_BY_URI } from 'wjhm';

// This also gets called at build time
export const getStaticProps: GetStaticProps = async context => {
  let nodeProps = { props: null };
  const { params } = context;
  const { uri } = params;

  let data = null;
  let postType = ``;

  try {
    // Call an external API endpoint to get node
    const res = await requestor.query({ operationName: `NODE_BY_URI`, query: NODE_BY_URI, variables: { uri } });
    data = res?.data?.nodeByUri;
    postType = data?.__typename;
  } catch (error) {
    console.error(error.message);
  }

  if (!data) {
    const props = { notFound: true };
    nodeProps = { props };
    return nodeProps;
  }

  const props = {
    ...data,
    postType,
  };

  // Pass node data to the node via props
  nodeProps = { props };
  return nodeProps;
};

export default getStaticProps;
