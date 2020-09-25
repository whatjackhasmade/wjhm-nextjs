import React from 'react';

import { parseHTML } from 'wjhm';

import type { CoreParagraphBlockAttributes } from 'wjhmtypes';
type ParagraphProps = {
  children?: React.ReactNode;
} & CoreParagraphBlockAttributes &
  React.HTMLProps<HTMLParagraphElement>;

const Paragraph = (props: ParagraphProps) => {
  const { children, content } = props;
  const isEmpty = content === ``;
  if (isEmpty) return null;
  const innerContent = content ? parseHTML(content) : children;
  return <p>{innerContent}</p>;
};

export default Paragraph;
