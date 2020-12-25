import * as React from 'react';

import StyledSkeleton from './skeleton.styles';

export interface CSSProperties extends React.CSSProperties {
  height?: string | number;
  width?: string | number;
}

type SkeletonProps = {
  className?: string;
} & CSSProperties;

export const Skeleton = (props: SkeletonProps) => {
  const { className, height, width } = props;
  let classList = `skeleton`;
  if (className) classList += ` ${className}`;

  const percentage = (Number(height) / Number(width)) * 100;

  let style = { '--percentage': `${percentage}%` } as CSSProperties;

  return <StyledSkeleton className={classList} style={style} />;
};

Skeleton.defaultProps = {
  height: 1080,
  width: 1920,
};

export default Skeleton;
