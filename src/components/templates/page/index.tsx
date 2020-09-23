import React from 'react';

import { ComponentParser } from 'wjhm';
import { Base } from 'wjhm';

type PageProps = {
  pageData: any;
};

const PageTemplate = (props: PageProps) => {
  const hasBlocks = props?.pageData?.blocks?.length > 0;

  return <Base {...props}>{hasBlocks && <ComponentParser content={props?.pageData?.blocks} />}</Base>;
};

export default PageTemplate;
