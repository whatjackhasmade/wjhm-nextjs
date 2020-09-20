import acfBanner from './acf/banner';
import acfContact from './acf/contact';
import acfHero from './acf/hero';
import acfLogos from './acf/logos';
import acfStories from './acf/stories';
import acfTestimonials from './acf/Testimonials';
import acfWorks from './acf/works';

import coreEmbedVimeo from './core/embed-vimeo';
import coreEmbedYouTube from './core/embed-youtube';
import coreHeading from './core/heading';
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
    ${coreParagraph}
    ${coreVideo}
    ${acfBanner}
    ${acfContact}
    ${acfHero}
    ${acfLogos}
    ${acfStories}
    ${acfWorks}
    ${acfTestimonials}
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
  acfBanner,
  acfContact,
  acfHero,
  acfLogos,
  acfStories,
  acfWorks,
  acfTestimonials,
};

export default AllBlocksFragment;
