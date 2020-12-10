import slugify from 'slugify';

import type { CoreHeadingBlockAttributes } from 'wjhmtypes';
declare type HeadingProps = {
  children?: any;
} & CoreHeadingBlockAttributes;

const Heading = ({ children, className, content, level, style }: HeadingProps) => {
  const HeadingComponent = `h${level}`;

  let headingClass = ``;
  headingClass = style && headingClass + ` ${style} h${level}`;
  headingClass = className && headingClass + ` ` + className;
  const innerContent = content ? content : children;

  return (
    /* @ts-ignore */
    <HeadingComponent className={headingClass} id={slugify(innerContent.toLowerCase())}>
      {innerContent}
    </HeadingComponent>
  );
};

export default Heading;
