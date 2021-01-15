import { GetServerSideProps } from 'next';

import { requestor } from 'wjhm';

import { NODE_BY_URI } from 'wjhm';

// This also gets called at build time
export const getServerSideProps: GetServerSideProps = async context => {
  const { params } = context;
  const { uri } = params;

  let data = null;
  let postType = ``;

  // Try fetching as a node
  try {
    // Call an external API endpoint to get nodes
    const res = await requestor.request(NODE_BY_URI, { uri });
    data = res?.nodeByUri;
    postType = data?.__typename;
  } catch (error) {
    console.error(error.message);
    return { props: null };
  }

  if (!data) {
    return {
      notFound: true,
    };
  }

  const props = {
    ...data,
    postType,
  };

  // Pass page data to the page via props
  return { props };
};

export default getServerSideProps;
