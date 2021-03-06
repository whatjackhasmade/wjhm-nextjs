import { GetServerSideProps } from 'next';

import { requestor } from 'wjhm';

import { SERIES_BY_SLUG } from 'wjhm';

// This also gets called at build time
export const getServerSideProps: GetServerSideProps = async context => {
  const { params } = context;
  const { slug } = params;

  let data = null;
  const postType = `series`;

  // Try fetching as a node
  try {
    // Call an external API endpoint to get nodes
    const res = await requestor.query({ operationName: `SERIES_BY_SLUG`, query: SERIES_BY_SLUG, variables: { slug } });
    data = res?.data?.series;
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
