import React from 'react';

import { ComponentParser } from 'wjhm';
import { Base } from 'wjhm';

import type { Page } from 'wjhmtypes';
declare type PageProps = { pageData: Page };

const PageTemplate = (props: PageProps) => {
  const hasBlocks = props?.pageData?.blocks?.length > 0;

  const footerMenu = null;
  const headerMenu = null;
  const seo = null;

  const allProps = {
    ...props,
    footerMenu,
    headerMenu,
    seo,
  };

  return <Base {...allProps}>{hasBlocks && <ComponentParser content={props?.pageData?.blocks} />}</Base>;
};

export default PageTemplate;
