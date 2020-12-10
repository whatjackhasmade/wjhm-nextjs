import { GetServerSideProps } from 'next';

import { requestor } from 'wjhm';

import { NODE_BY_URI } from 'wjhm';

// This also gets called at build time
export const getServerSideProps: GetServerSideProps = async context => {
  const { params } = context;
  const { uri } = params;

  try {
    // Call an external API endpoint to get pages
    const data = await requestor.request(NODE_BY_URI, { uri });
    const nodeByUri = data.nodeByUri;

    console.log(data);

    if (!data) {
      return {
        notFound: true,
      };
    }

    const props = {
      nodeByUri,
    };

    // Pass page data to the page via props
    return { props };
  } catch (error) {
    console.error(error.message);
    return { props: null };
  }
};

export default getServerSideProps;
