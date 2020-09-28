import React from 'react';
import { ThemeProvider } from 'styled-components';

if (typeof window !== `undefined`) {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require(`smooth-scroll`)(`a[href*="#"]`);
}

import { GlobalStyle } from 'wjhm';
import { SEO } from 'wjhm';
import { ThemeDefault } from 'wjhm';

import { Contact } from 'wjhm';
import { Footer } from 'wjhm';
import { Header } from 'wjhm';

import { Case } from 'wjhm';
import { Page } from 'wjhm';
import { Post } from 'wjhm';
import { Series } from 'wjhm';

import type { Menu, PostTypeSeo } from 'wjhmtypes';
declare type BaseProps = {
  cta: boolean;
  footerMenu: Menu;
  headerMenu: Menu;
  seo: PostTypeSeo;
  __typename: string;
};

const Base = (props: BaseProps) => {
  const { cta = true, footerMenu, headerMenu, seo } = props;
  const includeContact = cta !== false;

  return (
    <ThemeProvider theme={ThemeDefault}>
      <GlobalStyle />
      <SEO {...seo} />
      <div className="wrapper">
        <Header menu={headerMenu} />
        <InnerContent {...props} />
        {includeContact && <Contact />}
        <Footer menu={footerMenu} />
      </div>
    </ThemeProvider>
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
