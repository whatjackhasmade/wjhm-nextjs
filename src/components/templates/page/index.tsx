import { ComponentParser } from 'wjhm';

import type { Page } from 'wjhmtypes';

declare type PageProps = Page;

const PageTemplate: React.FC<PageProps> = (props: PageProps) => {
  return <ComponentParser content={props.blocks} />;
};

export default PageTemplate;
