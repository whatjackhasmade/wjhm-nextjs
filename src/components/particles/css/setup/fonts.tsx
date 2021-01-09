import { css } from 'styled-components';

const exportedCSS = css`
  @font-face {
    font-family: 'SuisseIntl';
    src: url('/fonts/suisseintl-regular.eot'); /* IE9 Compat Modes */
    src: url('/fonts/suisseintl-regular.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/suisseintl-regular.woff2') format('woff2'),
      /* Super Modern Browsers */ url('/fonts/suisseintl-regular.ttf') format('woff'),
      /* Pretty Modern Browsers */ url('/fonts/suisseintl-regular.ttf') format('truetype');
    font-style: normal;
    font-weight: normal;
  }

  @font-face {
    font-family: 'SuisseIntl';
    src: url('/fonts/suisseintl-regular-italic.eot'); /* IE9 Compat Modes */
    src: url('/fonts/suisseintl-regular-italic.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/suisseintl-regular-italic.woff2') format('woff2'),
      /* Super Modern Browsers */ url('/fonts/suisseintl-regular-italic.ttf') format('woff'),
      /* Pretty Modern Browsers */ url('/fonts/suisseintl-regular-italic.ttf') format('truetype');
    font-style: italic;
    font-weight: normal;
  }

  @font-face {
    font-family: 'SuisseIntl';
    src: url('/fonts/suisseintl-medium.eot'); /* IE9 Compat Modes */
    src: url('/fonts/suisseintl-medium.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/suisseintl-medium.woff2') format('woff2'),
      /* Super Modern Browsers */ url('/fonts/suisseintl-medium.ttf') format('woff'),
      /* Pretty Modern Browsers */ url('/fonts/suisseintl-medium.ttf') format('truetype');
    font-style: italic;
    font-weight: 500;
  }

  @font-face {
    font-family: 'SuisseIntl';
    src: url('/fonts/suisseintl-bold.eot'); /* IE9 Compat Modes */
    src: url('/fonts/suisseintl-bold.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/suisseintl-bold.woff2') format('woff2'),
      /* Super Modern Browsers */ url('/fonts/suisseintl-bold.ttf') format('woff'),
      /* Pretty Modern Browsers */ url('/fonts/suisseintl-bold.ttf') format('truetype');
    font-style: italic;
    font-weight: 700;
  }

  @font-face {
    font-family: 'SuisseIntl';
    src: url('/fonts/suisseintl-black.eot'); /* IE9 Compat Modes */
    src: url('/fonts/suisseintl-black.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/suisseintl-black.woff2') format('woff2'),
      /* Super Modern Browsers */ url('/fonts/suisseintl-black.ttf') format('woff'),
      /* Pretty Modern Browsers */ url('/fonts/suisseintl-black.ttf') format('truetype');
    font-style: italic;
    font-weight: 900;
  }
`;

export default exportedCSS;
