import * as React from 'react';

import { Link } from 'wjhm';

import { Base } from 'wjhm';

declare type PatternsProps = {
  posts: any[];
};

const Patterns = (props: PatternsProps) => {
  const seo = null;

  const allProps = {
    ...props,
    seo,
  };

  return (
    <Base {...allProps}>
      <Link href="/patterns/1">One</Link>
    </Base>
  );
};

export * from './posts';

export { Patterns };
export default Patterns;
