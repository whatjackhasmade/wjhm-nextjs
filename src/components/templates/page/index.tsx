import React from 'react';

import { ComponentParser } from 'wjhm';
import { Base } from 'wjhm';

type PageProps = {
  pageContext: any;
};

const PageTemplate = ({ pageContext }: PageProps) => (
  <Base context={pageContext}>
    <ComponentParser content={pageContext.blocks} />
  </Base>
);

export default PageTemplate;
