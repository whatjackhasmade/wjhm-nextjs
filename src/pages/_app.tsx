import * as React from 'react';
import 'normalize.css/normalize.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'html5-device-mockups/dist/device-mockups.min.css';

declare type MyAppProps = {
  Component: any;
  pageProps: any;
};

export default function MyApp({ Component, pageProps }: MyAppProps) {
  return <Component {...pageProps} />;
}
