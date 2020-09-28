import { GetStaticProps } from 'next';
import { requestor } from 'wjhm';

import { NODE_BY_URI } from 'wjhm';
import { getStaticData } from 'wjhm';

// This also gets called at build time
export const getStaticProps: GetStaticProps = async context => {
  const { params } = context;
  const { uri } = params;

  const preview = context?.previewData;

  try {
    // Call an external API endpoint to get pages
    const data = await requestor.request(NODE_BY_URI, { uri });
    const nodeByUri = data.nodeByUri;
    const { footerMenu, headerMenu } = await getStaticData();

    const props = {
      ...(nodeByUri && { ...nodeByUri }),
      ...(footerMenu && { footerMenu }),
      ...(headerMenu && { headerMenu }),
      ...(preview && { preview }),
    };

    // Pass page data to the page via props
    return { props };
  } catch (error) {
    console.error(error.message);
    return { props: null };
  }
};

export default getStaticProps;
