/* eslint-disable react/react-in-jsx-scope */
import { decodeHTML } from 'wjhm';
import { slugify } from 'wjhm';

import type { CoreHeadingBlockAttributes } from 'wjhmtypes';
declare type HeadingProps = CoreHeadingBlockAttributes & {
  children?: any;
  content?: string;
  variant?: number;
};

const Heading = (props: HeadingProps) => {
  const { children, className, content, level, variant } = props;
  const HeadingComponent = `h${level}`;

  let headingClass = `h${level}`;
  if (Boolean(className)) headingClass += ` ${className}`;
  if (Boolean(variant)) headingClass += ` h${variant}`;

  const innerContent = content ? decodeHTML(content) : children;

  const id: string = slugify(innerContent.toLowerCase());

  return (
    /* @ts-ignore */
    <HeadingComponent className={headingClass} id={id}>
      {innerContent}
    </HeadingComponent>
  );
};

Heading.defaultProps = {
  level: 2,
};

export default Heading;
