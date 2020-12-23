import { GetServerSideProps } from 'next';

import { requestor } from 'wjhm';

import { PAGE_BY_URI } from 'wjhm';

// This also gets called at build time
export const getServerSideProps: GetServerSideProps = async () => {
  const postType = `page`;
  const uri = `/homepage/`;

  // Try fetching as a page
  try {
    // Call an external API endpoint to get pages
    const res = await requestor.request(PAGE_BY_URI, { uri });
    const data = res?.page;

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
  } catch (error) {
    console.error(error.message);
    return { props: null };
  }
};

export default getServerSideProps;
