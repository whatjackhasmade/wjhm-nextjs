import * as React from 'react';

function SvgRocket(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path d="M505.05 19.1a15.89 15.89 0 00-12.2-12.2C460.65 0 435.46 0 410.36 0c-103.2 0-165.1 55.2-211.29 128H94.87A48 48 0 0052 154.49l-49.42 98.8A24 24 0 0024.07 288h103.77l-22.47 22.47a32 32 0 000 45.25l50.9 50.91a32 32 0 0045.26 0L224 384.16V488a24 24 0 0034.7 21.49l98.7-49.39a47.91 47.91 0 0026.5-42.9V312.79c72.59-46.3 128-108.4 128-211.09.1-25.2.1-50.4-6.85-82.6zM384 168a40 40 0 1140-40 40 40 0 01-40 40z" />
    </svg>
  );
}

export default SvgRocket;
