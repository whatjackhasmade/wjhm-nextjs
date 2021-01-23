/* ACF Blocks */
import acfCode from './acf/code';
import acfDribbble from './acf/dribbble';
import acfGithub from './acf/github';
import acfHero from './acf/hero';
import acfIntro from './acf/intro';
import acfLink from './acf/link';
import acfPresentations from './acf/presentations';
import acfRow from './acf/row';
import acfTestimonials from './acf/testimonials';
import acfYoutube from './acf/youtube';
import acfYoutubeChannel from './acf/youtubeChannel';

/* Core Blocks */
import coreEmbedVimeo from './core/embed-vimeo';
import coreEmbedYouTube from './core/embed-youtube';
import coreHeading from './core/heading';
import coreHTML from './core/html';
import coreParagraph from './core/paragraph';
import coreVideo from './core/video';

import coreColumns from './unique/columns';

export const AllBlocksFragment = /* GraphQL */ `
  blocks {
    name
    order
    originalContent
    ${coreColumns}
    ${coreEmbedVimeo}
    ${coreEmbedYouTube}
    ${coreHeading}
    ${coreHTML}
    ${coreParagraph}
    ${coreVideo}
    ${acfCode}
    ${acfDribbble}
    ${acfGithub}
    ${acfHero}
    ${acfIntro}
    ${acfLink}
    ${acfPresentations}
    ${acfRow}
    ${acfTestimonials}
    ${acfYoutube}
    ${acfYoutubeChannel}
  }
`;

export {
  /* Core Blocks */
  coreColumns,
  coreEmbedVimeo,
  coreEmbedYouTube,
  coreHeading,
  coreParagraph,
  coreVideo,
  /* ACF Blocks */
  acfCode,
  acfDribbble,
  acfGithub,
  acfHero,
  acfIntro,
  acfLink,
  acfPresentations,
  acfRow,
  acfTestimonials,
  acfYoutube,
  acfYoutubeChannel,
};

export default AllBlocksFragment;
