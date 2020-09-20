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
};

export default AllBlocksFragment;
