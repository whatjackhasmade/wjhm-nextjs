import * as React from 'react';

function SvgCircle(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
    </svg>
  );
}

export default SvgCircle;
