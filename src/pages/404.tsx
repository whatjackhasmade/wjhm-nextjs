import React from 'react';

import { getStaticData } from 'wjhm';

import { Base } from 'wjhm';

import { NotFound } from 'wjhm';

type Four0FourProps = {};

const Four0Four = (props: Four0FourProps) => {
  const seo = {
    title: `Page Not Found - WhatJackHasMade`,
  };

  return (
    <Base {...props} cta={false} seo={seo}>
      <NotFound {...props} />
    </Base>
  );
};

export async function getStaticProps() {
  // Call an external API endpoint to get pages
  const { footerMenu, headerMenu } = await getStaticData();

  const props = {
    ...(footerMenu && { footerMenu }),
    ...(headerMenu && { headerMenu }),
  };

  return {
    props, // will be passed to the page component as props
  };
}

export default Four0Four;
