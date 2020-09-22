/* // @ts-ignore */
declare module '*.jpg';
declare module '*.png';
declare module '*.svg';
declare module '*.eot';
declare module '*.woff2';
declare module '*.woff';
declare module '*.ttf';
declare module '*.mp4';

interface ObjectLiteral {
  [key: string]: any;
}

declare type HeadingLevels = 1 | 2 | 3 | 4 | 5 | 6;

// TODO Set generated type defs to global app

declare type BaseProps = {
  footerMenu: Menu;
  headerMenu: Menu;
  seo: SeoConfig;
};
