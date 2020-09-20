import * as React from 'react';

function SvgChartScatter(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path d="M496 384H64V80a16 16 0 00-16-16H16A16 16 0 000 80v336a32 32 0 0032 32h464a16 16 0 0016-16v-32a16 16 0 00-16-16zm-336-64a32 32 0 10-32-32 32 32 0 0032 32zm256-160a32 32 0 10-32-32 32 32 0 0032 32zm-224 0a32 32 0 10-32-32 32 32 0 0032 32zm192 160a32 32 0 10-32-32 32 32 0 0032 32zm-96-64a32 32 0 10-32-32 32 32 0 0032 32z" />
    </svg>
  );
}

export default SvgChartScatter;
