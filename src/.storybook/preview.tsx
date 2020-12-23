import { addDecorator } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { ThemeProvider } from 'styled-components';
import { RouterContext } from 'next/dist/next-server/lib/router-context';

import { GlobalStyle } from 'wjhm';
import { ThemeDefault } from 'wjhm';

const startCase = str =>
  str
    .split(' ')
    .map(str => {
      const word = str.toLowerCase();
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');

const NextRouterMock = ({ children }) => (
  <RouterContext.Provider
    value={{
      pathname: '/',
      basePath: '',
      push: (url, as) => {
        if (as) linkTo('Routes', as !== '/' ? startCase(as) : 'Index')();
        return Promise.resolve(true);
      },
      replace: (url, as) => {
        if (as) linkTo('Routes', as !== '/' ? startCase(as) : 'Index')();
        return Promise.resolve(true);
      },
      reload: () => {},
      prefetch: () => {},
    }}
  >
    {children}
  </RouterContext.Provider>
);

addDecorator(storyFn => (
  <ThemeProvider theme={ThemeDefault}>
    <NextRouterMock>
      <React.Fragment>
        <GlobalStyle />
        {storyFn()}
      </React.Fragment>
    </NextRouterMock>
  </ThemeProvider>
));
