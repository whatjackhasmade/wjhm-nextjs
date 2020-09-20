import { GetStaticProps } from 'next';
import { requestor } from 'wjhm';

import { PAGE_BY_URI } from 'wjhm';
import { getStaticData } from 'wjhm';

// This also gets called at build time
export const getStaticProps: GetStaticProps = async context => {
  let pageProps = { props: null };
  const { params } = context;
  const { uri } = params;

  const preview = context?.previewData;

  try {
    // Call an external API endpoint to get pages
    const data = await requestor.request(PAGE_BY_URI, { uri });
    const { footerMenu, headerMenu, storySummaries, worksSummaries } = await getStaticData();

    const pageData = data.pageBy;

    const props = {
      ...pageData,
      ...(preview && { preview }),
      footerMenu,
      headerMenu,
      storySummaries,
      worksSummaries,
    };

    // Pass page data to the page via props
    pageProps = { props };
  } catch (error) {
    console.error(error.message);
  }

  return pageProps;
};

export default getStaticProps;
