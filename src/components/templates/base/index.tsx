import * as React from 'react';
import { ReactQueryDevtools } from 'react-query-devtools';

if (typeof window !== `undefined`) {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require(`smooth-scroll`)(`a[href*="#"]`);
}

import { SEO } from 'wjhm';

import { Contact } from 'wjhm';
import { Footer } from 'wjhm';
import { Header } from 'wjhm';

import { Case } from 'wjhm';
import { Page } from 'wjhm';
import { Post } from 'wjhm';
import { Series } from 'wjhm';

import type { PostTypeSeo } from 'wjhmtypes';

declare type BaseProps = {
  children?: any;
  cta?: boolean;
  seo?: PostTypeSeo;
  __typename?: string;
};

const isDevelopment: boolean = process.env.NODE_ENV !== 'production';

const Base = (props: BaseProps) => {
  const { children, cta = true, seo } = props;
  const includeContact = cta !== false;
  const hasChildren = children?.length > 0;

  return (
    <React.Fragment>
      {seo && <SEO {...seo} />}
      <div className="wrapper">
        <Header />
        {hasChildren && children}
        <InnerContent {...props} />
        {includeContact && <Contact />}
        <Footer />
      </div>
      {isDevelopment && <ReactQueryDevtools initialIsOpen={true} />}
    </React.Fragment>
  );
};

const InnerContent = props => {
  const { __typename } = props;
  let innerContents;

  switch (__typename) {
    case `case`:
      innerContents = <Case {...props} />;
      break;
    case `page`:
      innerContents = <Page {...props} />;
      break;
    case `post`:
      innerContents = <Post {...props} />;
      break;
    case `series`:
      innerContents = <Series {...props} />;
      break;
  }

  return <main>{innerContents}</main>;
};

export default Base;
