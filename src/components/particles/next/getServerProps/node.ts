import { GetServerSideProps } from 'next';

import { requestor } from 'wjhm';

import { CASE_BY_URI } from 'wjhm';
import { PAGE_BY_URI } from 'wjhm';
import { POST_BY_URI } from 'wjhm';
import { SERIES_BY_SLUG } from 'wjhm';

// This also gets called at build time
export const getServerSideProps: GetServerSideProps = async context => {
  const { params } = context;
  const { uri: slug } = params;

  let data = null;
  let postType = `page`;

  const uri = `/${slug}/`;

  // Try fetching as a page
  try {
    // Call an external API endpoint to get pages
    const res = await requestor.request(PAGE_BY_URI, { uri });
    data = res?.page;
  } catch (error) {
    console.error(error.message);
    return { props: null };
  }

  // Try fetching as a post
  if (!data) {
    postType = `post`;

    try {
      // Call an external API endpoint to get pages
      const res = await requestor.request(POST_BY_URI, { uri });
      data = res?.post;
    } catch (error) {
      console.error(error.message);
      return { props: null };
    }
  }

  // Try fetching as a case study
  if (!data) {
    postType = `case`;

    try {
      // Call an external API endpoint to get pages
      const res = await requestor.request(CASE_BY_URI, { uri });
      data = res?.caseStudy;
    } catch (error) {
      console.error(error.message);
      return { props: null };
    }
  }

  // Try fetching as a series
  if (!data) {
    postType = `series`;

    try {
      // Call an external API endpoint to get pages
      const res = await requestor.request(SERIES_BY_SLUG, { slug: uri });
      data = res?.series;
    } catch (error) {
      console.error(error.message);
      return { props: null };
    }
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
