import React from 'react';

import { ComponentParser } from 'wjhm';
import { Base } from 'wjhm';

type PageProps = {
  pageContext: {
    blocks: any[];
  };
};

const PageTemplate = ({ pageContext }: PageProps) => {
  const hasBlocks = pageContext?.blocks?.length > 0;

  return <Base context={pageContext}>{hasBlocks && <ComponentParser content={pageContext.blocks} />}</Base>;
};

export default PageTemplate;
