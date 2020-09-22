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

import { Menu } from 'wjhmtypes';
import { PostTypeSeo } from 'wjhmtypes';

declare type BaseProps = {
  children: any;
  cta: boolean;
  footerMenu: Menu;
  headerMenu: Menu;
  seo: PostTypeSeo;
};

const Base = (props: BaseProps) => {
  const { children, cta = true, footerMenu, headerMenu, seo } = props;
  const includeContact = cta !== false;

  return (
    <ThemeProvider theme={ThemeDefault}>
      <GlobalStyle />
      <SEO {...seo} />
      <div className="wrapper">
        <Header menu={headerMenu} />
        <main>{children}</main>
        {includeContact && <Contact />}
        <Footer menu={footerMenu} />
      </div>
    </ThemeProvider>
  );
};

Base.defaultProps = {
  cta: false,
};

export default Base;
