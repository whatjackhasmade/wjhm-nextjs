import { GetStaticProps } from 'next';
import { requestor } from 'wjhm';

import { WORK_BY_URI } from 'wjhm';
import { getStaticData } from 'wjhm';

// This also gets called at build time
export const getStaticProps: GetStaticProps = async context => {
  const { params } = context;
  const { slug } = params;
  const uri = `/work/${slug}/`;

  try {
    // Call an external API endpoint to get pages
    const data = await requestor.request(WORK_BY_URI, { uri });
    const workBy = data.workBy;
    const { footerMenu, headerMenu, storySummaries, worksSummaries } = await getStaticData();

    // Pass page data to the page via props
    return { props: { ...workBy, footerMenu, headerMenu, storySummaries, worksSummaries } };
  } catch (error) {
    console.error(error.message);
    return { props: null };
  }
};

export default getStaticProps;
