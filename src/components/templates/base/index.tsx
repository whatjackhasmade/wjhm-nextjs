import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'wjhm';
import { SEO } from 'wjhm';
import { ThemeDefault } from 'wjhm';

import { Contact } from 'wjhm';
import { Footer } from 'wjhm';
import { Header } from 'wjhm';

if (typeof window !== `undefined`) {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require(`smooth-scroll`)(`a[href*="#"]`);
}

type BaseProps = {
  children?: any;
  context?: any;
  cta: boolean;
};

const Base = ({ children, context, cta = true }: BaseProps) => (
  <ThemeProvider theme={ThemeDefault}>
    <React.Fragment>
      <GlobalStyle />
      <SEO data={context} />
      <div className="wrapper">
        <Header />
        <main>{children}</main>
        {cta !== false && <Contact />}
        <Footer />
      </div>
    </React.Fragment>
  </ThemeProvider>
);

Base.defaultProps = {
  cta: false,
};

export default Base;
