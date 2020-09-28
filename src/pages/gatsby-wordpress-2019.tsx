import React from 'react';

import { requestor } from 'wjhm';

import { getStaticData } from 'wjhm';
import { PAGE_BY_URI } from 'wjhm';

import { Page } from 'wjhm';

const Homepage = props => <Page {...props} />;

export async function getStaticProps() {
  // Call an external API endpoint to get pages
  const data = await requestor.request(PAGE_BY_URI, { uri: `/gatsby-wordpress-2019/` });
  const pageData = data.pageBy;
  const { footerMenu, headerMenu } = await getStaticData();

  const props = {
    ...(footerMenu && { footerMenu }),
    ...(headerMenu && { headerMenu }),
    ...(pageData && { pageData }),
  };

  return {
    props, // will be passed to the page component as props
  };
}

export default Homepage;
