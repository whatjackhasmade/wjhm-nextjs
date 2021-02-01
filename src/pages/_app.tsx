import * as React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { persistWithLocalStorage } from 'react-query/persist-localstorage-experimental';

import { GlobalStyle } from 'wjhm';
import { ThemeDefault } from 'wjhm';

import 'nprogress/nprogress.css';

Router.events.on(`routeChangeStart`, () => NProgress.start());
Router.events.on(`routeChangeComplete`, () => NProgress.done());
Router.events.on(`routeChangeError`, () => NProgress.done());

declare type MyAppProps = {
  Component: any;
  pageProps: any;
};

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const isDevelopment = process.env.NODE_ENV === `development`;
const maxAge = isDevelopment ? 5 * MINUTE : 1 * DAY;

const client = new QueryClient();

persistWithLocalStorage(client, {
  localStorageKey: `REACT_QUERY_OFFLINE_CACHE`,
  throttleTime: 1 * SECOND,
  maxAge,
  buster: ``,
});

export default function MyApp(props: MyAppProps) {
  const { Component, pageProps } = props;

  return (
    // @ts-ignore
    <QueryClientProvider client={client}>
      <ThemeProvider theme={ThemeDefault}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
