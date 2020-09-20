import * as React from 'react';

function SvgUniversity(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path d="M496 128v16a8 8 0 01-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 01-8-8v-16a8 8 0 014.941-7.392l232-88a7.996 7.996 0 016.118 0l232 88A8 8 0 01496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 008 8h464a8 8 0 008-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z" />
    </svg>
  );
}

export default SvgUniversity;
