import * as React from 'react';

function SvgContainerStorage(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path d="M640 80V48c0-8.8-7.2-16-16-16H16C7.2 32 0 39.2 0 48v32c0 8.8 7.2 16 16 16v320c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h608c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16V96c8.8 0 16-7.2 16-16zM448 416h-32V96h32v320zM192 96h32v320h-32V96zm144 320h-32V96h32v320zM80 96h32v320H80V96zm480 320h-32V96h32v320z" />
    </svg>
  );
}

export default SvgContainerStorage;
