import * as React from 'react';

function SvgDrawSquare(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path d="M416 360.88V151.12c19.05-11.09 32-31.49 32-55.12 0-35.35-28.65-64-64-64-23.63 0-44.04 12.95-55.12 32H119.12C108.04 44.95 87.63 32 64 32 28.65 32 0 60.65 0 96c0 23.63 12.95 44.04 32 55.12v209.75C12.95 371.96 0 392.37 0 416c0 35.35 28.65 64 64 64 23.63 0 44.04-12.95 55.12-32h209.75c11.09 19.05 31.49 32 55.12 32 35.35 0 64-28.65 64-64 .01-23.63-12.94-44.04-31.99-55.12zm-320 0V151.12A63.825 63.825 0 00119.12 128h209.75a63.825 63.825 0 0023.12 23.12v209.75a63.825 63.825 0 00-23.12 23.12H119.12A63.798 63.798 0 0096 360.88zM400 96c0 8.82-7.18 16-16 16s-16-7.18-16-16 7.18-16 16-16 16 7.18 16 16zM64 80c8.82 0 16 7.18 16 16s-7.18 16-16 16-16-7.18-16-16 7.18-16 16-16zM48 416c0-8.82 7.18-16 16-16s16 7.18 16 16-7.18 16-16 16-16-7.18-16-16zm336 16c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16z" />
    </svg>
  );
}

export default SvgDrawSquare;
