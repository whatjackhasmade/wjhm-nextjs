import { GetStaticProps } from 'next';
import { requestor } from 'wjhm';

import { POST_BY_SLUG } from 'wjhm';
import { getStaticData } from 'wjhm';

// This also gets called at build time
export const getStaticProps: GetStaticProps = async context => {
  const { params } = context;
  const { slug } = params;
  console.log(params);

  const preview = context?.previewData;

  try {
    // Call an external API endpoint to get pages
    const data = await requestor.request(POST_BY_SLUG, { slug });
    const postBy = data.postBy;
    const { footerMenu, headerMenu } = await getStaticData();

    const props = {
      ...(postBy && { ...postBy }),
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
