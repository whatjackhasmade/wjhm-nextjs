import * as React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'wjhm';
import { ThemeDefault } from 'wjhm';

import 'normalize.css/normalize.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'html5-device-mockups/dist/device-mockups.min.css';
import 'nprogress/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

declare type MyAppProps = {
  Component: any;
  pageProps: any;
};

export default function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <ThemeProvider theme={ThemeDefault}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
