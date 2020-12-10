import { Base } from 'wjhm';

import { NotFound } from 'wjhm';

declare type Four0FourProps = {};

const Four0Four: React.FC<Four0FourProps> = (props: Four0FourProps) => {
  const seo = {
    title: `Page Not Found - WhatJackHasMade`,
  };

  const allProps = {
    ...props,
    seo,
  };

  return (
    <Base {...allProps} cta={false}>
      <NotFound />
    </Base>
  );
};

export async function getStaticProps() {
  // Call an external API endpoint to get pages

  const props = {};

  return {
    props, // will be passed to the page component as props
  };
}

export default Four0Four;
