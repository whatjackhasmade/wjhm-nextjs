import React from 'react';

import StyledColumns from './columns.styles';

declare type ColumnsProps = {
  children: React.ReactNode;
};

const Columns = (props: ColumnsProps) => {
  const { children } = props;

  return (
    <StyledColumns className="width--content columns">
      <div className="columns__contents">{children}</div>
    </StyledColumns>
  );
};

Columns.defaultProps = {};

export default Columns;
