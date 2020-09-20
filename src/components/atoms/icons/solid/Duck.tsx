import * as React from 'react';

function SvgDuck(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path d="M416 224c53.02 0 96-42.98 96-96h-64c0-53.02-42.98-96-96-96s-96 42.98-96 96c0 23.15 8.37 44.15 22.1 60.59 6.25 7.48 9.9 16.78 9.9 26.53 0 22.58-18.3 40.88-40.88 40.88h-21.69c-31.51 0-80.18-13.2-101.68-36.24C113.73 209.03 96 216.17 96 230.63 96 315.33 164.67 384 249.37 384h-32c-76.01 0-138.67-55.44-150.82-128h-50.4C7.03 256-.64 263.66.03 272.75 8.61 388.64 105.35 480 223.42 480h107.2c55.51 0 110.81-44.52 116.72-99.71 4.54-42.43-14.76-80.4-46.04-102.86-10.85-7.79-17.3-20.27-17.3-33.63 0-7.12 1.97-13.83 5.33-19.79H416zm-64-80c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z" />
    </svg>
  );
}

export default SvgDuck;
